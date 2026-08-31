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

(async () => {
  const browser = await chromium.launch();
  const consoleErrors = [];
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
  page.on("pageerror", (err) => consoleErrors.push("PAGEERROR: " + err.message));

  await page.goto(fileUrl);
  await page.waitForTimeout(300);

  async function openLessonByCard(title) {
    await page.click('button.nav-action[data-view="lessons"]');
    await page.waitForTimeout(150);
    await page.click(`button[data-lesson-open="${title}"]`);
    await page.waitForTimeout(180);
  }

  // ---- KANA: Katakana Dasar ----
  await openLessonByCard("Katakana Dasar");
  await page.waitForTimeout(200);
  const kataTitle = await page.textContent("[data-lesson-title]");
  ok("Klik kartu Katakana -> judul detail = Katakana Dasar", kataTitle === "Katakana Dasar", kataTitle);

  await page.click("[data-lesson-quiz]");
  await page.waitForTimeout(200);
  const kataQ = await page.textContent("[data-question-text]");
  ok("Kuis Katakana menampilkan soal kana", /「/.test(kataQ), kataQ);

  // find a question about ア and verify correct answer is 'a'
  let kataRomajiOk = false;
  for (let i = 0; i < 6; i += 1) {
    const q = await page.textContent("[data-question-text]");
    if (q.includes("「ア」")) {
      const choices = await page.$$("[data-quiz-choices] button");
      for (const c of choices) {
        const t = (await c.textContent()).trim();
        if (t === "a") {
          await c.click();
          const cls = await c.getAttribute("class");
          kataRomajiOk = cls.includes("is-correct");
          break;
        }
      }
      break;
    }
    await page.click("[data-next-question]");
    await page.waitForTimeout(120);
  }
  ok("Kana ア -> jawaban benar 'a' (bukan amerika/uranium)", kataRomajiOk);
  await page.screenshot({ path: path.join(shotDir, "quiz-katakana.png") });

  // ---- GRAMMAR: Partikel WO ----
  await openLessonByCard("Partikel WO untuk Objek");
  const woTitle = await page.textContent("[data-lesson-title]");
  ok("Klik kartu Partikel WO -> judul detail benar", woTitle === "Partikel WO untuk Objek", woTitle);

  await page.click("[data-lesson-quiz]");
  await page.waitForTimeout(200);
  const woQ = await page.textContent("[data-question-text]");
  ok("Kuis Partikel WO berisi kalimat rumpang", woQ.includes("___") && woQ.includes("ご飯"), woQ);
  const woChoices = await page.$$("[data-quiz-choices] button");
  let woCorrect = false;
  for (const c of woChoices) {
    const t = (await c.textContent()).trim();
    if (t === "を") {
      await c.click();
      const cls = await c.getAttribute("class");
      woCorrect = cls.includes("is-correct");
      break;
    }
  }
  ok("Partikel WO -> jawaban benar 'を' (fill-in kalimat)", woCorrect);
  const woExpl = await page.textContent("[data-quiz-explanation]");
  ok("Penjelasan grammar muncul", woExpl && woExpl.length > 5, woExpl);
  await page.screenshot({ path: path.join(shotDir, "quiz-grammar.png") });

  // ---- VOCAB: Kamus Kosakata quick check ----
  await openLessonByCard("Kamus Kosakata");
  await page.click("[data-lesson-quiz]");
  await page.waitForTimeout(150);
  const vkQ = await page.textContent("[data-question-text]");
  ok("Kuis Kosakata menampilkan soal kata->arti", /Apa arti dari/.test(vkQ), vkQ);

  // ---- DASHBOARD slug mapping (no character guessing) ----
  await page.click('button[data-open-auth="register"]');
  await page.waitForTimeout(150);
  await page.fill('form[data-auth-form="register"] input[name="name"]', "Tester");
  await page.fill('form[data-auth-form="register"] input[name="email"]', "tester@example.com");
  await page.fill('form[data-auth-form="register"] input[name="password"]', "secret123");
  await page.click('form[data-auth-form="register"] button[type="submit"]');
  await page.waitForTimeout(300);
  await page.click('button.user-pill[data-view="dashboard"]');
  await page.waitForTimeout(200);
  const dashBtns = await page.$$("[data-daily-path] button");
  ok("Dashboard punya 4 tombol jalur belajar", dashBtns.length === 4, "count=" + dashBtns.length);

  const attrs = await page.$$eval("[data-daily-path] button", (els) =>
    els.map((e) => e.getAttribute("data-lesson-slug") || e.getAttribute("data-flashcard-slug") || e.getAttribute("data-view")));
  ok("Tombol dashboard mengirim slug/id (bukan teks tampilan)", attrs.filter(Boolean).length === 4, JSON.stringify(attrs));

  const lessonSlugBtns = await page.$$("[data-daily-path] button[data-lesson-slug]");
  await lessonSlugBtns[0].click();
  await page.waitForTimeout(200);
  const dashLessonTitle = await page.textContent("[data-lesson-title]");
  ok("Dashboard slug membuka materi yang benar", dashLessonTitle && dashLessonTitle.length > 0, dashLessonTitle);

  // ---- REFRESH PERSISTENCE via hash ----
  await openLessonByCard("Hiragana Dasar");
  const hash1 = await page.evaluate(() => location.hash);
  ok("Hash tersimpan saat buka materi", hash1.includes("lesson="), hash1);
  await page.reload();
  await page.waitForTimeout(400);
  const afterReloadTitle = await page.textContent("[data-lesson-title]");
  ok("Refresh mempertahankan materi (hash)", afterReloadTitle === "Hiragana Dasar", afterReloadTitle);
  await page.screenshot({ path: path.join(shotDir, "lesson-detail.png") });

  // ---- MOBILE screenshot ----
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
  await mobile.screenshot({ path: path.join(shotDir, "mobile-quiz-katakana.png") });

  ok("Tidak ada console error", consoleErrors.length === 0, consoleErrors.join(" | "));

  await browser.close();
  const failed = results.filter((r) => !r.pass);
  console.log(`\nBrowser test: ${results.length - failed.length}/${results.length} lolos.`);
  if (failed.length) { console.log("FAILURES:", failed.map((f) => f.name).join(", ")); process.exit(1); }
})().catch((e) => { console.error("Browser test crashed:", e); process.exit(1); });
