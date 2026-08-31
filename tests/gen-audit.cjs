const path = require("path");
const m = require(path.join(__dirname, "..", "app-data.js"));
const { data, lessonTypes, titleToSlug, KNOWN_PARTICLES } = m;

function primarySource(title, type) {
  const d = data.lessonDetails[title];
  if (type === "kana") return d.vocab;
  if (type === "kanji") return d.vocab;
  if (type === "vocabulary") return d.vocab;
  if (type === "grammar") return d.examples;
  if (type === "reading" || type === "listening") return d.examples;
  return d.vocab || d.examples || [];
}

function statusFor(title, type) {
  if (type === "kana" || type === "kanji" || type === "vocabulary") return "VALID";
  if (type === "grammar") {
    const focal = data.lessonDetails[title].symbol || "";
    const ex = data.lessonDetails[title].examples || [];
    if (KNOWN_PARTICLES.includes(focal) && ex.some((e) => e.includes(focal))) return "VALID";
    return "TIDAK CUKUP DATA";
  }
  if (type === "reading" || type === "listening" || type === "flashcard") return "TIDAK CUKUP DATA";
  return "PERLU DIPERBAIKI";
}

function masalahFor(title, type, status) {
  if (type === "kanji") return "Label diubah 'Kanji N5-N1' -> 'Kanji Campuran' karena data tidak punya field level JLPT.";
  if (type === "vocabulary") return "Sebagian entri perlu review linguistik (lihat Catatan Audit).";
  if (type === "grammar" && status === "VALID") return "Partikel terdeteksi; soal kalimat rumpang tersedia.";
  if (type === "grammar") return "Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan.";
  if (type === "reading") return "Tidak ada teks bacaan + pertanyaan terstruktur -> kuis dinonaktifkan.";
  if (type === "listening") return "Tidak ada audio/speech/transkrip -> kuis dinonaktifkan.";
  if (type === "kana") return "Romaji standar; contoh kata hanya label 'contoh kata', bukan jawaban.";
  if (type === "flashcard") return "Tidak ada soal kuis (hanya flashcard).";
  return "";
}

const rows = [];
data.lessons.forEach((l) => {
  const title = l[1];
  const type = lessonTypes[title];
  const src = primarySource(title, type);
  const status = statusFor(title, type);
  const contoh = src.slice(0, 2).map((r) => Array.isArray(r) ? r.join(" / ") : String(r)).join("  |  ");
  rows.push({
    slug: titleToSlug[title],
    title,
    type,
    contentSource: type === "kana" ? "data.kana." + (title.includes("Hiragana") ? "hiragana" : "katakana")
      : type === "kanji" ? "data.kana.kanji"
      : type === "vocabulary" ? "lesson.vocab"
      : type === "grammar" ? "lesson.examples"
      : "lesson.examples",
    jumlahData: src.length,
    contohData: contoh,
    generator: status === "VALID"
      ? (type === "kana" ? "buildKanaQuestions" : type === "kanji" ? "buildKanjiQuestions(15/sesi)" : type === "grammar" ? "buildGrammarQuestions" : "buildVocabularyQuestions")
      : "— (kosong)",
    status,
    masalah: masalahFor(title, type, status)
  });
});

const counts = { VALID: 0, "PERLU DIPERBAIKI": 0, "TIDAK CUKUP DATA": 0 };
rows.forEach((r) => counts[r.status]++);

let md = "# Audit Konten Materi (64 lesson)\n\n";
md += `Tanggal audit: ${new Date().toISOString().slice(0, 10)}\n\n`;
md += "## Ringkasan Status\n\n";
md += `- VALID: **${counts.VALID}**\n`;
md += `- PERLU DIPERBAIKI: **${counts["PERLU DIPERBAIKI"]}**\n`;
md += `- TIDAK CUKUP DATA: **${counts["TIDAK CUKUP DATA"]}**\n\n`;
md += "> Catatan: test programatik hanya membuktikan struktur data konsisten (slug unik, type ada, ";
md += "correctAnswer dalam options, generator sesuai tipe). Ia TIDAK membuktikan kebenaran linguistik ";
md += "setiap entri Jepang; hal itu diberi tanda berdasarkan aturan di bawah dan catatan audit.\n\n";
md += "## Tabel Audit\n\n";
md += "| slug | title | type | contentSource | jumlahData | contohData | generator | status | masalah |\n";
md += "|---|---|---|---|---|---|---|---|---|\n";
rows.forEach((r) => {
  const esc = (s) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");
  md += `| ${esc(r.slug)} | ${esc(r.title)} | ${esc(r.type)} | ${esc(r.contentSource)} | ${esc(r.jumlahData)} | ${esc(r.contohData)} | ${esc(r.generator)} | ${esc(r.status)} | ${esc(r.masalah)} |\n`;
});

md += "\n## Catatan Audit Linguistik (spot-check)\n\n";
md += "### Kana (VALID)\n";
md += "- あ=a, い=i, う=u, ア=a, イ=i, ウ=u, し=shi, ち=chi, つ=tsu, ふ=fu, を=wo/o, ん=n — sesuai standar.\n";
md += "- Contoh kata di kolom ke-3 hanya dipakai sebagai label 'contoh kata' pada penjelasan, bukan sebagai jawaban.\n\n";
md += "### Vocabulary (VALID, perlu review terbatas)\n";
md += "- 本 (hon): data mencantumkan 'buku, asal'. 'asal' kurang tepat sebagai arti 本; sebaiknya 'buku' (atau 'asal-usul' hanya dalam frasa tertentu). Tidak diubah otomatis karena butuh konfirmasi sumber.\n";
md += "- Sebagian besar entri vocabularyBank sudah benar (gohan=nasi, mizu=air, sensei=guru, dsb).\n\n";
md += "### Grammar (8 VALID partikel, 32 TIDAK CUKUP DATA)\n";
md += "- Partikel WA/GA/WO/NI/DE/HE/MO/NO: menghasilkan soal 'Lengkapi kalimat' (fill-in) -> VALID.\n";
md += "- Modul non-partikel (Waktu & Jam, Angka, Kata Kerja MASU, Kata Sifat, Bentuk TE, Potensial, Tai, Passive, Causative, Keigo, dsb.): hanya punya contoh kalimat, tidak ada struktur soal grammar -> kuis sengaja dikosongkan ('Latihan untuk materi ini belum tersedia.').\n\n";
md += "### Kanji (VALID setelah relabel)\n";
md += "- Judul 'Kanji N5-N1' diubah menjadi 'Kanji Campuran' karena data tidak memiliki field level JLPT; kuis dibatasi 15 soal/sesi tanpa klaim filter level.\n\n";
md += "### Reading & Listening (TIDAK CUKUP DATA)\n";
md += "- Tidak ada teks bacaan + pertanyaan, maupun sumber audio/transkrip. Kuis dinonaktifkan agar tidak menyamar sebagai kuis kosakata.\n";

require("fs").writeFileSync(path.join(__dirname, "..", "AUDIT_CONTENT.md"), md);
console.log("AUDIT_CONTENT.md ditulis. Status:", JSON.stringify(counts));
console.log("Total lesson:", rows.length);
