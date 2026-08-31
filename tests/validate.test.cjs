const assert = require("assert");
const path = require("path");

const mod = require(path.join(__dirname, "..", "app-data.js"));
const { data, buildLessonQuestions, buildGeneralQuestions, validateContent, lessonTypes, titleToSlug, slugToTitle } = mod;

let passed = 0;
function check(name, fn) {
  try { fn(); passed += 1; console.log("  PASS -", name); }
  catch (err) { console.error("  FAIL -", name); console.error("        ", err.message); process.exitCode = 1; }
}

const kanaLookup = {};
["hiragana", "katakana"].forEach((k) => {
  data.kana[k].forEach((row) => { kanaLookup[row[0]] = row[1]; });
});

function findRomaji(char) { return kanaLookup[char]; }

console.log("== Validasi data materi & soal ==");

check("modul berhasil dimuat", () => {
  assert.ok(data && Array.isArray(data.lessons));
  assert.ok(data.lessonDetails && typeof data.lessonDetails === "object");
});

check("setiap lesson punya type eksplisit", () => {
  data.lessons.forEach((l) => {
    const t = l[1];
    assert.ok(lessonTypes[t], `lessonTypes tidak ada untuk "${t}"`);
  });
});

check("tidak ada duplikat judul materi", () => {
  const titles = data.lessons.map((l) => l[1]);
  const seen = new Set();
  titles.forEach((t) => { assert.ok(!seen.has(t), `Duplikat: ${t}`); seen.add(t); });
});

check("slug <-> title konsisten & stabil", () => {
  data.lessons.forEach((l) => {
    const t = l[1];
    assert.strictEqual(slugToTitle[titleToSlug[t]], t, "slug tidak bulat-balik untuk " + t);
  });
});

check("validateContent tidak mengembalikan error", () => {
  const errors = validateContent();
  assert.strictEqual(errors.length, 0, "Error validasi:\n" + errors.join("\n"));
});

check("KATAKANA: ア -> romaji 'a' (bukan amerika)", () => {
  const qs = mod.buildKanaQuestions("Katakana Dasar");
  const q = qs.find((x) => x.question.includes("「ア」"));
  assert.ok(q, "tidak ada soal untuk ア");
  assert.strictEqual(q.options[q.correctAnswer], "a", "「ア」 harus berbunyi 'a'");
  assert.notStrictEqual(q.options[q.correctAnswer], "amerika");
});

check("KATAKANA: ウ -> romaji 'u' (bukan uranium)", () => {
  const qs = mod.buildKanaQuestions("Katakana Dasar");
  const q = qs.find((x) => x.question.includes("「ウ」"));
  assert.ok(q, "tidak ada soal untuk ウ");
  assert.strictEqual(q.options[q.correctAnswer], "u", "「ウ」 harus berbunyi 'u'");
  assert.notStrictEqual(q.options[q.correctAnswer], "uranium");
});

check("HIRAGANA: あ -> romaji 'a' (bukan asa)", () => {
  const qs = mod.buildKanaQuestions("Hiragana Dasar");
  const q = qs.find((x) => x.question.includes("「あ」"));
  assert.ok(q);
  assert.strictEqual(q.options[q.correctAnswer], "a");
  assert.notStrictEqual(q.options[q.correctAnswer], "asa - pagi");
});

check("distractor kana berasal dari romaji kana lain (bukan arti kata)", () => {
  const qs = mod.buildKanaQuestions("Katakana Dasar");
  qs.slice(0, 5).forEach((q) => {
    q.options.forEach((opt) => {
      assert.match(opt, /^[a-z]+$/, `opsi kana harus romaji, dapat: ${opt}`);
    });
  });
});

check("soal tiap materi terelasi, jawaban benar dalam opsi, sesuai tipe", () => {
  let kanaCount = 0, vocabCount = 0, kanjiCount = 0, grammarCount = 0;
  data.lessons.forEach((l) => {
    const title = l[1];
    const type = lessonTypes[title];
    const qs = buildLessonQuestions(title);
    if (!qs.length) return;
    qs.forEach((q) => {
      assert.strictEqual(q.lessonId, title);
      assert.ok(q.options.length >= 2);
      assert.ok(Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer < q.options.length);
      const chosen = q.options[q.correctAnswer];
      if (type === "kana") {
        kanaCount++;
        const lessonVocab = (data.lessonDetails[title].vocab || []).filter((r) => r[0] && r[1]);
        const charToRomaji = {}; const romajiToChar = {};
        lessonVocab.forEach((r) => { charToRomaji[r[0]] = r[1]; romajiToChar[r[1]] = r[0]; });
        if (q.question.startsWith("Apa bunyi")) {
          const m = q.question.match(/「(.+?)」/);
          assert.ok(m, "soal kana harus menyebutkan huruf");
          assert.strictEqual(chosen, charToRomaji[m[1]], `「${m[1]}」 harus -> ${charToRomaji[m[1]]}, dapat ${chosen}`);
        } else if (q.question.startsWith("Huruf apa yang dibaca")) {
          const m = q.question.match(/dibaca "(.+?)"/);
          assert.ok(m, "soal kana reverse harus menyebutkan romaji");
          assert.strictEqual(chosen, romajiToChar[m[1]], `romaji ${m[1]} harus -> ${romajiToChar[m[1]]}, dapat ${chosen}`);
        }
      } else if (type === "vocabulary" || type === "kanji" || type === "reading" || type === "listening") {
        if (type === "vocabulary") vocabCount++; if (type === "kanji") kanjiCount++;
        const mm = q.explanation.match(/artinya (.+)\.$/);
        assert.ok(mm, "explanation harus berisi arti");
        assert.strictEqual(chosen, mm[1], "opsi benar harus sama dengan arti di explanation");
      } else if (type === "grammar") {
        grammarCount++;
        assert.ok(q.explanation.length > 0);
      }
    });
  });
  assert.ok(kanaCount > 20, "soal kana kurang: " + kanaCount);
  assert.ok(vocabCount > 20, "soal vocab kurang: " + vocabCount);
  assert.ok(kanjiCount > 0, "soal kanji kurang");
  assert.ok(grammarCount > 0, "soal grammar kurang");
});

check("KUIS PARTIKEL WO berisi kalimat rumpang, bukan sekadar kosakata", () => {
  const qs = mod.buildGrammarQuestions("Partikel WO untuk Objek");
  assert.ok(qs.length > 0, "tidak ada soal grammar WO");
  const fill = qs.find((q) => q.question.includes("___"));
  assert.ok(fill, "tidak ada soal fill-in-the-blank");
  assert.strictEqual(fill.options[fill.correctAnswer], "を", "jawaban harus partikel を");
  assert.ok(!fill.question.includes("nasi"), "soal tidak boleh berupa terjemahan kata saja");
});

check("KANJI dibatasi per sesi (maks 15, tidak 600 sekaligus)", () => {
  const qs = mod.buildKanjiQuestions("Kanji Campuran", 0);
  assert.ok(qs.length > 0 && qs.length <= 15, "jumlah soal kanji per sesi harus 1-15, dapat " + qs.length);
  const ids = new Set(qs.map((q) => q.id));
  assert.strictEqual(ids.size, qs.length, "tidak boleh ada duplikat dalam satu sesi");
});

check("materi tanpa soal mengembalikan array kosong", () => {
  assert.strictEqual(mod.buildLessonQuestions("__tidak_ada__").length, 0);
});

check("validateStructure lolos tanpa error", () => {
  const errs = mod.validateStructure();
  assert.strictEqual(errs.length, 0, "Error struktur:\n" + errs.join("\n"));
});

check("READING/LISTENING tidak menghasilkan soal (bukan kuis kosakata)", () => {
  const reading = data.lessons.filter((l) => lessonTypes[l[1]] === "reading").map((l) => l[1]);
  const listening = data.lessons.filter((l) => lessonTypes[l[1]] === "listening").map((l) => l[1]);
  [...reading, ...listening].forEach((t) => {
    assert.strictEqual(buildLessonQuestions(t).length, 0, `${t} seharusnya kosong`);
  });
});

check("GRAMMAR non-partikel mengembalikan kosong (tanpa fallback kosakata)", () => {
  const nonParticle = [
    "Waktu & Jam", "Angka & Counter Dasar", "Kata Kerja Bentuk MASU",
    "Kata Sifat I dan NA", "Bentuk TE Dasar", "Bentuk TE IMASU", "Tai Form Keinginan"
  ];
  nonParticle.forEach((t) => {
    assert.strictEqual(buildLessonQuestions(t).length, 0, `${t} seharusnya kosong (data tidak terstruktur)`);
  });
});

check("GRAMMAR partikel menghasilkan soal kalimat rumpang (bukan kosakata)", () => {
  ["Partikel WA vs GA", "Partikel WO untuk Objek", "Partikel NI Waktu & Tujuan", "Partikel DE Tempat Aksi"]
    .forEach((t) => {
      const qs = buildLessonQuestions(t);
      assert.ok(qs.length > 0, `${t} harus punya soal`);
      assert.ok(qs.every((q) => q.question.includes("___")), `${t} harus berupa kalimat rumpang`);
    });
});

console.log(`\nSelesai: ${passed} cek lolos.`);
if (process.exitCode === 1) console.log("Beberapa cek GAGAL.");
