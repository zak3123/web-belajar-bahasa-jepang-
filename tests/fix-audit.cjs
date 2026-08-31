const fs = require("fs");
let t = fs.readFileSync("AUDIT_CONTENT.md", "utf8");

const summary = [
  "## Ringkasan Status",
  "",
  "- VALID: **0**",
  "- BELUM DIVERIFIKASI: **22**",
  "- PERLU DIPERBAIKI: **0**",
  "- TIDAK CUKUP DATA: **42**",
  "",
  "> **Definisi status**",
  "> - **VALID**: struktur dan seluruh konten utama sudah diperiksa.",
  "> - **PERLU DIPERBAIKI**: ditemukan data salah atau meragukan.",
  "> - **TIDAK CUKUP DATA**: materi/latihan belum mempunyai data yang diperlukan.",
  "> - **BELUM DIVERIFIKASI**: struktur valid, tetapi seluruh konten linguistik belum diperiksa.",
  "",
  "> Catatan: test programatik hanya membuktikan struktur data konsisten (slug unik, type ada, correctAnswer dalam options, generator sesuai tipe). Ia TIDAK membuktikan kebenaran linguistik setiap entri Jepang. Verifikasi linguistik baru dilakukan spot-check; materi berisi konten (kana, kosakata, kanji, grammar partikel) berstatus BELUM DIVERIFIKASI sampai audit linguistik penuh dilakukan.",
  "",
].join("\n");

t = t.replace(/## Ringkasan Status[\s\S]*?TIDAK CUKUP DATA: \*\*42\*\*/, summary);

// table: VALID -> BELUM DIVERIFIKASI
t = t.split("| VALID |").join("| BELUM DIVERIFIKASI |");

// catatan headers
t = t.split("### Kana (VALID)").join("### Kana (BELUM DIVERIFIKASI)");
t = t.split("### Vocabulary (VALID, perlu review terbatas)").join("### Vocabulary (BELUM DIVERIFIKASI)");
t = t.split("### Grammar (8 VALID partikel, 32 TIDAK CUKUP DATA)").join("### Grammar (8 BELUM DIVERIFIKASI partikel, 32 TIDAK CUKUP DATA)");
t = t.split("### Kanji (VALID setelah relabel)").join("### Kanji (BELUM DIVERIFIKASI)");
t = t.split("-> VALID.").join("-> BELUM DIVERIFIKASI (soal terbentuk, namun contoh kalimat belum diaudit penuh).");

const appendix = [
  "",
  "## Koreksi Konten yang Dilakukan",
  "",
  "| Lokasi file | Nilai lama | Nilai baru | Alasan |",
  "|---|---|---|---|",
  "| `app-data.js` (data.kana.kanji / kanjiBank, entri 本) | `[\"本\", \"hon\", \"buku, asal\"]` | `[\"本\", \"hon\", \"buku\"]` | 本 (hon) berarti \"buku\"; \"asal\" bukan makna 本 (asal = 元/始). Entri `vocabularyBank` untuk 本 sudah benar (\"buku\"). |",
  "| Label materi kanji | `Kanji N5-N1` + level `JLPT N5-N1` | `Kanji Campuran` + level `Campuran` | Data tidak punya field level JLPT; klaim level dihapus, kuis dibatasi 15 soal/sesi tanpa filter level. |",
  "",
  "## Materi yang Kuisnya Dinonaktifkan (TIDAK CUKUP DATA)",
  "- **32 modul grammar non-partikel** (Waktu & Jam, Angka, Kata Kerja MASU, Kata Sifat, Bentuk TE, Potensial, Tai, Pengalaman, TE MO II, TE WA IKENAI, NAKEREBA, TSUMORI, YORI, ICHIBAN, SOU Kabar/Terlihat, TARA, BA, NARA, Passive, Causative, Keigo, Wake, Hazu, Hodo, Kagiri, Sai, Yue, Uru/Eru, TOTAN, Nuki, dst.) -> `buildGrammarQuestions` mengembalikan `[]` karena tidak ada struktur soal grammar (hanya contoh kalimat). UI menampilkan \"Latihan untuk materi ini belum tersedia.\"",
  "- **9 reading/listening** (Reading Dokkai, Listening Choukai, Reading Pengumuman, Reading Email, Listening Angka, Listening Dialog, Simulasi JLPT N5/N4/N3) -> `buildLessonQuestions` mengembalikan `[]` (tidak memakai generator vocabulary).",
  "- **Flashcard SRS** -> tidak punya soal kuis (hanya flashcard).",
  "",
  "## Hasil Semua Test",
  "- `node tests/validate.test.cjs` -> 16/16 lolos.",
  "- `node tests/runtime-sim.cjs` -> eksekusi penuh tanpa error.",
  "- `node tests/browser-test.cjs` (Playwright/Chromium) -> 14/14 lolos, tanpa console error.",
  "- `validateStructure()` -> 0 error (slug unik, judul unik, tiap lesson punya type, mapping dashboard valid, kana romaji valid, grammar tidak pakai generator vocabulary, reading/listening kosong).",
  "",
].join("\n");

t = t + appendix;
fs.writeFileSync("AUDIT_CONTENT.md", t);
console.log("Sisa '| VALID |' di tabel:", (t.match(/\| VALID \|/g) || []).length);
console.log("Status ringkasan sekarang:");
console.log(t.split("\n").slice(0, 10).join("\n"));
