const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const fileUrl = "file://" + path.join(__dirname, "..", "index.html");
const shotDir = path.join(__dirname, "screenshots");
fs.mkdirSync(shotDir, { recursive: true });

const results = [];
function ok(name, cond, extra) {
  results.push({ name, pass: !!cond, extra: extra || "" });
  console.log((cond ? "PASS" : "FAIL") + " - " + name + (extra ? "  [" + extra + "]" : ""));
}

async function openLessonByCard(page, title) {
  await page.click('button.nav-action[data-view="lessons"]');
  await page.waitForTimeout(120);
  await page.click(`button[data-lesson-open="${title}"]`);
  await page.waitForTimeout(150);
}

(async () => {
  const browser = await chromium.launch();
  const consoleErrors = [];
  const page = await browser.newPage({ viewport: { width: 1366, height: 850 } });
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));

  await page.goto(fileUrl);
  await page.waitForTimeout(300);

  // ---------- SIMPLIFICATION CHECKS ----------
  ok("Menu 'Peringkat' tidak ada", (await page.locator('button.nav-action[data-view="leaderboard"]').count()) === 0);
  ok("Tombol 'Masuk' tidak ada", (await page.locator('button:has-text("Masuk")').count()) === 0);
  ok("Tombol 'Daftar' tidak ada", (await page.locator('button:has-text("Daftar")').count()) === 0);
  ok("Harga Rupiah tidak ada", (await page.locator('text=/Rp\\s?\\d/').count()) === 0);
  ok("Tidak ada elemen paywall/login (data-open-auth)", (await page.locator('[data-open-auth]').count()) === 0);
  ok("Modal auth tidak ada", (await page.locator('[data-auth-modal]').count()) === 0);
  ok("Leaderboard section tidak ada", (await page.locator('[data-page="leaderboard"]').count()) === 0);

  // Fitur Lengkap opens
  await page.click('button.nav-action[data-view="premium"]');
  await page.waitForTimeout(150);
  const featH1 = await page.textContent('[data-page="premium"] h1');
  ok("Menu 'Fitur Lengkap' membuka halaman 'Semua Fitur Belajar'", /Semua Fitur Belajar/.test(featH1), featH1);

  // Vokasi opens without account
  await page.click('[data-page="premium"] button[data-lesson-slug="vokasi-kaigo"]');
  await page.waitForTimeout(200);
  const vokasiTitle = await page.textContent("[data-lesson-title]");
  ok("Materi vokasi terbuka tanpa akun", vokasiTitle === "Vokasi Kaigo", vokasiTitle);

  // Any material opens without premium
  await openLessonByCard(page, "Kamus Kosakata");
  await page.waitForTimeout(120);
  const kosTitle = await page.textContent("[data-lesson-title]");
  ok("Materi tersedia terbuka tanpa premium", kosTitle === "Kamus Kosakata", kosTitle);

  // Progres opens dashboard
  await page.click('button.ghost-link[data-view="dashboard"]');
  await page.waitForTimeout(150);
  const dashH1 = await page.textContent('[data-page="dashboard"] h1');
  ok("Tombol 'Progres' membuka ringkasan lokal", /Ringkasan Belajar Lokal/.test(dashH1), dashH1);

  // ---------- QUIZ STATE (Partikel WO, deterministic correct=を) ----------
  await openLessonByCard(page, "Partikel WO untuk Objek");
  await page.click("[data-lesson-quiz]");
  await page.waitForTimeout(200);

  // A. before answering
  const explHidden0 = await page.locator("[data-quiz-explanation]").evaluate((el) => el.classList.contains("is-hidden"));
  const hasNoMark0 = (await page.locator(".quiz-choice-grid .is-correct").count()) === 0 && (await page.locator(".quiz-choice-grid .is-wrong").count()) === 0;
  const nextDisabled0 = await page.locator("[data-next-question]").isDisabled();
  const xp0 = await page.textContent("[data-quiz-score]");
  ok("Sebelum menjawab: penjelasan tersembunyi", explHidden0);
  ok("Sebelum menjawab: tidak ada hijau/merah", hasNoMark0);
  ok("Sebelum menjawab: tombol berikutnya disabled", nextDisabled0);
  ok("Sebelum menjawab: XP = 0", xp0.trim() === "0 XP", xp0);
  await page.screenshot({ path: path.join(shotDir, "quiz-before.png") });

  // pick wrong option (any whose text !== を)
  const choiceButtons = page.locator(".quiz-choice-grid button");
  const n = await choiceButtons.count();
  let wrongIdx = -1;
  for (let i = 0; i < n; i++) {
    const t = (await choiceButtons.nth(i).textContent()).trim();
    if (t !== "を") { wrongIdx = i; break; }
  }
  await choiceButtons.nth(wrongIdx).click();
  await page.waitForTimeout(150);
  const fbWrong = await page.textContent("[data-quiz-feedback]");
  const xpWrong = await page.textContent("[data-quiz-score]");
  const wrongHasCorrect = (await page.locator(".quiz-choice-grid .is-correct").count()) >= 1;
  const wrongHasWrong = (await page.locator(".quiz-choice-grid .is-wrong").count()) >= 1;
  ok("Salah: feedback 'Belum tepat'", /Belum tepat/.test(fbWrong), fbWrong);
  ok("Salah: pilihan pengguna merah & jawaban benar hijau", wrongHasWrong && wrongHasCorrect);
  ok("Salah: XP tetap 0 (tidak bertambah)", xpWrong.trim() === "0 XP", xpWrong);
  await page.screenshot({ path: path.join(shotDir, "quiz-after-wrong.png") });

  // restart fresh for correct path
  await openLessonByCard(page, "Partikel WO untuk Objek");
  await page.click("[data-lesson-quiz]");
  await page.waitForTimeout(200);
  // click correct (を)
  let correctIdx = -1;
  const cb2 = page.locator(".quiz-choice-grid button");
  const n2 = await cb2.count();
  for (let i = 0; i < n2; i++) {
    if ((await cb2.nth(i).textContent()).trim() === "を") { correctIdx = i; break; }
  }
  const xpBeforeClick = Number(await page.evaluate(() => {
    try { return JSON.parse(localStorage.getItem("hirakatakan-demo-state") || "{}").profile?.xp || 0; } catch { return 0; }
  }));
  await cb2.nth(correctIdx).click();
  await page.waitForTimeout(150);
  const fbCorrect = await page.textContent("[data-quiz-feedback]");
  const xpCorrect = await page.textContent("[data-quiz-score]");
  const correctMarked = (await page.locator(".quiz-choice-grid .is-correct").count()) >= 1;
  const nextEnabled = !(await page.locator("[data-next-question]").isDisabled());
  const localXp = Number(await page.evaluate(() => {
    try { return JSON.parse(localStorage.getItem("hirakatakan-demo-state") || "{}").profile?.xp || 0; } catch { return 0; }
  }));
  ok("Benar: feedback 'Benar!'", /Benar!/.test(fbCorrect), fbCorrect);
  ok("Benar: pilihan hijau", correctMarked);
  ok("Benar: tombol berikutnya aktif", nextEnabled);
  ok("Benar: XP bertambah +10 (session)", xpCorrect.trim() === "10 XP", xpCorrect);
  ok("Benar: progres tersimpan di localStorage", localXp >= xpBeforeClick + 10, "localXP=" + localXp);
  await page.screenshot({ path: path.join(shotDir, "quiz-after-correct.png") });

  // repeat click must not add XP
  await cb2.nth(correctIdx).click();
  await page.waitForTimeout(100);
  const xpRepeat = await page.textContent("[data-quiz-score]");
  ok("Klik ulang tidak menambah XP", xpRepeat.trim() === "10 XP", xpRepeat);

  // C. next question resets state
  await page.click("[data-next-question]");
  await page.waitForTimeout(150);
  const explHidden1 = await page.locator("[data-quiz-explanation]").evaluate((el) => el.classList.contains("is-hidden"));
  const markReset = (await page.locator(".quiz-choice-grid .is-correct").count()) === 0 && (await page.locator(".quiz-choice-grid .is-wrong").count()) === 0;
  const nextDisabled1 = await page.locator("[data-next-question]").isDisabled();
  ok("Pindah soal: penjelasan tersembunyi kembali", explHidden1);
  ok("Pindah soal: warna jawaban ter-reset", markReset);
  ok("Pindah soal: tombol berikutnya disabled kembali", nextDisabled1);

  // D. finish quiz -> summary
  for (let i = 0; i < 6; i++) {
    const cb = page.locator(".quiz-choice-grid button");
    const cnt = await cb.count();
    if (!cnt) break;
    let idx = -1;
    for (let j = 0; j < cnt; j++) { if ((await cb.nth(j).textContent()).trim() === "を") { idx = j; break; } }
    if (idx < 0) idx = 0;
    await cb.nth(idx).click();
    await page.waitForTimeout(120);
    const disabled = await page.locator("[data-next-question]").isDisabled();
    if (disabled) break; // summary shown
    await page.click("[data-next-question]");
    await page.waitForTimeout(120);
  }
  const summaryVisible = (await page.locator("[data-quiz-summary]").isVisible().catch(() => false));
  ok("Setelah soal terakhir: ringkasan tampil", summaryVisible);
  if (summaryVisible) {
    const sxp = await page.textContent("[data-summary-xp]");
    ok("Ringkasan menampilkan skor XP", /\d+/.test(sxp), "XP=" + sxp);
  }
  await page.screenshot({ path: path.join(shotDir, "quiz-summary.png") });

  // ---------- REFRESH PERSISTENCE ----------
  await openLessonByCard(page, "Hiragana Dasar");
  await page.waitForTimeout(120);
  const hash1 = await page.evaluate(() => location.hash);
  ok("Hash tersimpan saat buka materi", hash1.includes("lesson="), hash1);
  await page.reload();
  await page.waitForTimeout(400);
  const afterReloadTitle = await page.textContent("[data-lesson-title]");
  ok("Refresh mempertahankan materi (hash)", afterReloadTitle === "Hiragana Dasar", afterReloadTitle);

  // ---------- RESPONSIVE OVERFLOW ----------
  for (const w of [375, 768, 1024, 1366]) {
    await page.setViewportSize({ width: w, height: 800 });
    await page.goto(fileUrl);
    await page.waitForTimeout(250);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    ok(`Tidak ada horizontal overflow @${w}px`, overflow <= 1, "overflow=" + overflow);
  }
  // Premium not wrapped on desktop
  await page.setViewportSize({ width: 1366, height: 850 });
  await page.goto(fileUrl);
  await page.waitForTimeout(200);
  const navWrap = await page.evaluate(() => {
    const nav = document.querySelector(".nav");
    return nav.getBoundingClientRect().height;
  });
  ok("Navigasi desktop satu baris (tidak wrap)", navWrap < 60, "navHeight=" + Math.round(navWrap));

  await page.setViewportSize({ width: 1366, height: 850 });
  await page.goto(fileUrl);
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(shotDir, "desktop-1366.png") });

  const mobile = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await mobile.goto(fileUrl);
  await mobile.waitForTimeout(200);
  await mobile.click("button.mobile-menu");
  await mobile.waitForTimeout(150);
  await mobile.click('button.nav-action[data-view="lessons"]');
  await mobile.waitForTimeout(150);
  await mobile.click('button[data-lesson-open="Katakana Dasar"]');
  await mobile.waitForTimeout(200);
  await mobile.click("[data-lesson-quiz]");
  await mobile.waitForTimeout(200);
  await mobile.screenshot({ path: path.join(shotDir, "mobile-quiz-375.png") });

  ok("Tidak ada console error", consoleErrors.length === 0, consoleErrors.join(" | "));

  await browser.close();
  const failed = results.filter((r) => !r.pass);
  console.log(`\nBrowser test: ${results.length - failed.length}/${results.length} lolos.`);
  if (failed.length) { console.log("FAILURES:", failed.map((f) => f.name).join(", ")); process.exit(1); }
})().catch((e) => { console.error("Browser test crashed:", e); process.exit(1); });
