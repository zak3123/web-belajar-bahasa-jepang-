# Audit Konten Materi (64 lesson)

Tanggal audit: 2026-08-31

## Ringkasan Status

- VALID: **29**
- PERLU DIPERBAIKI: **0**
- TIDAK CUKUP DATA: **35**

> Catatan: test programatik hanya membuktikan struktur data konsisten (slug unik, type ada, correctAnswer dalam options, generator sesuai tipe). Ia TIDAK membuktikan kebenaran linguistik setiap entri Jepang; hal itu diberi tanda berdasarkan aturan di bawah dan catatan audit.

## Tabel Audit

| slug | title | type | contentSource | jumlahData | contohData | generator | status | masalah |
|---|---|---|---|---|---|---|---|---|
| hiragana-dasar | Hiragana Dasar | kana | data.kana.hiragana | 46 | あ / a / asa - pagi  \|  い / i / inu - anjing | buildKanaQuestions | VALID | Romaji standar; contoh kata hanya label 'contoh kata', bukan jawaban. |
| katakana-dasar | Katakana Dasar | kana | data.kana.katakana | 46 | ア / a / amerika  \|  イ / i / indo | buildKanaQuestions | VALID | Romaji standar; contoh kata hanya label 'contoh kata', bukan jawaban. |
| kanji-campuran | Kanji Campuran | kanji | data.kana.kanji | 520 | 日 / hi/nichi / hari, matahari  \|  月 / tsuki/getsu / bulan | buildKanjiQuestions(15/sesi) | VALID | Label diubah 'Kanji N5-N1' -> 'Kanji Campuran' karena data tidak punya field level JLPT. |
| kamus-kosakata | Kamus Kosakata | vocabulary | lesson.vocab | 115 | 挨拶 / aisatsu / salam  \|  おはよう / ohayou / selamat pagi | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| partikel-and-grammar | Partikel & Grammar | grammar | lesson.examples | 4 | 私は学生です = Saya pelajar  \|  水を飲みます = Minum air | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| reading-dokkai | Reading Dokkai | reading | lesson.examples | 3 | あした 9じに 学校へ 行きます。  \|  スーパーは 8じから 10じまでです。 | — (kosong) | TIDAK CUKUP DATA | Tidak ada teks bacaan + pertanyaan terstruktur -> kuis dinonaktifkan. |
| listening-choukai | Listening Choukai | listening | lesson.examples | 3 | A: 何時ですか。B: 9時です。  \|  A: 駅はどこですか。B: 右です。 | — (kosong) | TIDAK CUKUP DATA | Tidak ada audio/speech/transkrip -> kuis dinonaktifkan. |
| flashcard-srs | Flashcard SRS | flashcard | lesson.examples | 4 | Lagi / 0 / ulang cepat  \|  Sulit / 3 / ulang agak cepat | — (kosong) | TIDAK CUKUP DATA | Tidak ada soal kuis (hanya flashcard). |
| partikel-wa-vs-ga | Partikel WA vs GA | grammar | lesson.examples | 3 | 私は学生です  \|  雨が降っています | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-wo-untuk-objek | Partikel WO untuk Objek | grammar | lesson.examples | 3 | ご飯を食べます  \|  水を飲みます | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-ni-waktu-and-tujuan | Partikel NI Waktu & Tujuan | grammar | lesson.examples | 3 | 7時に起きます  \|  学校に行きます | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-de-tempat-aksi | Partikel DE Tempat Aksi | grammar | lesson.examples | 3 | 図書館で勉強します  \|  バスで行きます | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-e-arah | Partikel E Arah | grammar | lesson.examples | 3 | 日本へ行きます  \|  家へ帰ります | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-mo | Partikel MO | grammar | lesson.examples | 3 | 私も学生です  \|  これも本です | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| partikel-no-kepemilikan | Partikel NO Kepemilikan | grammar | lesson.examples | 3 | 私の本  \|  日本語の先生 | buildGrammarQuestions | VALID | Partikel terdeteksi; soal kalimat rumpang tersedia. |
| waktu-and-jam | Waktu & Jam | grammar | lesson.examples | 3 | 今は8時です  \|  月曜日に会います | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| angka-and-counter-dasar | Angka & Counter Dasar | grammar | lesson.examples | 3 | りんごを三つください  \|  500円です | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| kata-kerja-bentuk-masu | Kata Kerja Bentuk MASU | grammar | lesson.examples | 3 | 食べます  \|  飲みません | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| kata-sifat-i-dan-na | Kata Sifat I dan NA | grammar | lesson.examples | 3 | 大きい家  \|  静かな町 | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| bentuk-te-dasar | Bentuk TE Dasar | grammar | lesson.examples | 3 | 待ってください  \|  本を読んでいます | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| bentuk-te-imasu | Bentuk TE IMASU | grammar | lesson.examples | 3 | 今、勉強しています  \|  結婚しています | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| bentuk-potensial | Bentuk Potensial | grammar | lesson.examples | 3 | 日本語が読めます  \|  寿司が食べられます | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| tai-form-keinginan | Tai Form Keinginan | grammar | lesson.examples | 3 | 日本へ行きたいです  \|  水を飲みたいです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| pengalaman-ta-koto-ga-aru | Pengalaman TA KOTO GA ARU | grammar | lesson.examples | 3 | 日本へ行ったことがあります  \|  寿司を食べたことがあります | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| te-mo-ii | TE MO II | grammar | lesson.examples | 3 | ここに座ってもいいですか  \|  写真を撮ってもいいです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| te-wa-ikenai | TE WA IKENAI | grammar | lesson.examples | 3 | ここでタバコを吸ってはいけません  \|  遅れてはいけません | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| nakereba-naranai | NAKEREBA NARANAI | grammar | lesson.examples | 3 | 勉強しなければなりません  \|  薬を飲まなければなりません | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| tsumori | TSUMORI | grammar | lesson.examples | 3 | 来年日本へ行くつもりです  \|  今日は勉強しないつもりです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| perbandingan-yori | Perbandingan YORI | grammar | lesson.examples | 3 | 東京は大阪より大きいです  \|  電車はバスより速いです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| superlatif-ichiban | Superlatif ICHIBAN | grammar | lesson.examples | 3 | 富士山は日本で一番高い山です  \|  寿司が一番好きです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| sou-desu-kabar | SOU DESU Kabar | grammar | lesson.examples | 3 | 明日は雨だそうです  \|  田中さんは来ないそうです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| sou-desu-terlihat | SOU DESU Terlihat | grammar | lesson.examples | 3 | このケーキはおいしそうです  \|  彼は忙しそうです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| tara-conditional | TARA Conditional | grammar | lesson.examples | 3 | 時間があったら行きます  \|  日本へ行ったら寿司を食べたいです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| ba-conditional | BA Conditional | grammar | lesson.examples | 3 | 安ければ買います  \|  練習すれば上手になります | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| nara-conditional | NARA Conditional | grammar | lesson.examples | 3 | 日本へ行くなら春がいいです  \|  漢字ならこの本が便利です | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| passive-ukemi | Passive Ukemi | grammar | lesson.examples | 3 | 先生にほめられました  \|  財布を盗まれました | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| causative-shieki | Causative Shieki | grammar | lesson.examples | 3 | 母は子供に野菜を食べさせます  \|  先生は学生を立たせました | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| keigo-dasar | Keigo Dasar | grammar | lesson.examples | 3 | 先生がお話しになります  \|  私がご案内いたします | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| wake-da | Wake Da | grammar | lesson.examples | 2 | 彼は10年日本に住んでいます。日本語が上手なわけです  \|  電車が止まりました。遅れるわけです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| hazu-da | Hazu Da | grammar | lesson.examples | 3 | 田中さんは来るはずです  \|  今日は休みのはずです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| hodo | Hodo | grammar | lesson.examples | 3 | 泣きたいほど嬉しいです  \|  今日は昨日ほど寒くないです | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| kagiri | Kagiri | grammar | lesson.examples | 3 | 私が知っている限り、彼は来ません  \|  命がある限り頑張ります | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| sai-ni | Sai Ni | grammar | lesson.examples | 3 | お帰りの際に受付へお越しください  \|  申し込む際に身分証明書が必要です | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| yue-ni | Yue Ni | grammar | lesson.examples | 3 | 彼は努力した。ゆえに成功した  \|  経験が少ないゆえに失敗も多い | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| uru-eru | Uru/Eru | grammar | lesson.examples | 3 | それは起こり得る問題です  \|  この結果はあり得ません | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| totan-ni | TOTAN NI | grammar | lesson.examples | 3 | 家を出たとたん、雨が降り出した  \|  立ち上がったとたん、めまいがした | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| nuki-ni-shite | Nuki Ni Shite | grammar | lesson.examples | 3 | 冗談抜きにして、本当に危険です  \|  年齢抜きにして能力で判断します | — (kosong) | TIDAK CUKUP DATA | Modul non-partikel: ada contoh tapi tidak ada struktur soal grammar -> kuis dinonaktifkan. |
| kosakata-rumah | Kosakata Rumah | vocabulary | lesson.vocab | 4 | 部屋 / heya / kamar  \|  台所 / daidokoro / dapur | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| kosakata-dapur | Kosakata Dapur | vocabulary | lesson.vocab | 4 | 野菜 / yasai / sayur  \|  肉 / niku / daging | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| kosakata-transportasi | Kosakata Transportasi | vocabulary | lesson.vocab | 4 | 駅 / eki / stasiun  \|  電車 / densha / kereta | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| kosakata-belanja | Kosakata Belanja | vocabulary | lesson.vocab | 4 | いくら / ikura / berapa harga  \|  払う / harau / membayar | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| kosakata-kesehatan | Kosakata Kesehatan | vocabulary | lesson.vocab | 4 | 頭 / atama / kepala  \|  痛い / itai / sakit | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| kosakata-kantor | Kosakata Kantor | vocabulary | lesson.vocab | 4 | 会議 / kaigi / rapat  \|  送る / okuru / mengirim | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| vokasi-kaigo | Vokasi Kaigo | vocabulary | lesson.vocab | 4 | 手伝う / tetsudau / membantu  \|  歩く / aruku / berjalan | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| vokasi-restoran | Vokasi Restoran | vocabulary | lesson.vocab | 4 | 注文 / chuumon / pesanan  \|  席 / seki / kursi | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| vokasi-pabrik | Vokasi Pabrik | vocabulary | lesson.vocab | 4 | 安全 / anzen / aman  \|  機械 / kikai / mesin | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| wawancara-kerja | Wawancara Kerja | vocabulary | lesson.vocab | 4 | 自己紹介 / jikoshoukai / perkenalan diri  \|  経験 / keiken / pengalaman | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| reading-pengumuman | Reading Pengumuman | vocabulary | lesson.vocab | 4 | 休館日 / kyuukanbi / hari tutup  \|  入口 / iriguchi / pintu masuk | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| reading-email-pendek | Reading Email Pendek | vocabulary | lesson.vocab | 4 | 会議 / kaigi / rapat  \|  変わる / kawaru / berubah | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| listening-angka-and-harga | Listening Angka & Harga | vocabulary | lesson.vocab | 4 | 番号 / bangou / nomor  \|  半 / han / setengah | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| listening-dialog-harian | Listening Dialog Harian | vocabulary | lesson.vocab | 4 | 映画 / eiga / film  \|  前 / mae / depan | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| simulasi-jlpt-n5 | Simulasi JLPT N5 | vocabulary | lesson.vocab | 4 | 問題 / mondai / soal  \|  正しい / tadashii / benar | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| simulasi-jlpt-n4 | Simulasi JLPT N4 | vocabulary | lesson.vocab | 4 | 読める / yomeru / bisa membaca  \|  経験 / keiken / pengalaman | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |
| simulasi-jlpt-n3 | Simulasi JLPT N3 | vocabulary | lesson.vocab | 4 | 条件 / jouken / kondisi  \|  受身 / ukemi / pasif | buildVocabularyQuestions | VALID | Sebagian entri perlu review linguistik (lihat Catatan Audit). |

## Catatan Audit Linguistik (spot-check)

### Kana (VALID)
- あ=a, い=i, う=u, ア=a, イ=i, ウ=u, し=shi, ち=chi, つ=tsu, ふ=fu, を=wo/o, ん=n — sesuai standar.
- Contoh kata di kolom ke-3 hanya dipakai sebagai label 'contoh kata' pada penjelasan, bukan sebagai jawaban.

### Vocabulary (VALID, perlu review terbatas)
- 本 (hon): data mencantumkan 'buku, asal'. 'asal' kurang tepat sebagai arti 本; sebaiknya 'buku' (atau 'asal-usul' hanya dalam frasa tertentu). Tidak diubah otomatis karena butuh konfirmasi sumber.
- Sebagian besar entri vocabularyBank sudah benar (gohan=nasi, mizu=air, sensei=guru, dsb).

### Grammar (8 VALID partikel, 32 TIDAK CUKUP DATA)
- Partikel WA/GA/WO/NI/DE/HE/MO/NO: menghasilkan soal 'Lengkapi kalimat' (fill-in) -> VALID.
- Modul non-partikel (Waktu & Jam, Angka, Kata Kerja MASU, Kata Sifat, Bentuk TE, Potensial, Tai, Passive, Causative, Keigo, dsb.): hanya punya contoh kalimat, tidak ada struktur soal grammar -> kuis sengaja dikosongkan ('Latihan untuk materi ini belum tersedia.').

### Kanji (VALID setelah relabel)
- Judul 'Kanji N5-N1' diubah menjadi 'Kanji Campuran' karena data tidak memiliki field level JLPT; kuis dibatasi 15 soal/sesi tanpa klaim filter level.

### Reading & Listening (TIDAK CUKUP DATA)
- Tidak ada teks bacaan + pertanyaan, maupun sumber audio/transkrip. Kuis dinonaktifkan agar tidak menyamar sebagai kuis kosakata.

## Koreksi Konten yang Dilakukan

| Lokasi file | Nilai lama | Nilai baru | Alasan |
|---|---|---|---|
| `app-data.js` (data.kana.kanji / kanjiBank, entri 本) | `["本", "hon", "buku, asal"]` | `["本", "hon", "buku"]` | 本 (hon) berarti "buku"; "asal" bukan makna 本 (asal = 元/始). Dihapus agar tidak menyesatkan pada kuis kanji. Entri `vocabularyBank` untuk 本 sudah benar ("buku"). |

## Materi yang Kuisnya Dinonaktifkan (TIDAK CUKUP DATA)
- **32 modul grammar non-partikel** (Waktu & Jam, Angka, Kata Kerja MASU, Kata Sifat, Bentuk TE, Potensial, Tai, Pengalaman, TE MO II, TE WA IKENAI, NAKEREBA, TSUMORI, YORI, ICHIBAN, SOU Kabar/Terlihat, TARA, BA, NARA, Passive, Causative, Keigo, Wake, Hazu, Hodo, Kagiri, Sai, Yue, Uru/Eru, TOTAN, Nuki, dst.) → `buildGrammarQuestions` mengembalikan `[]` karena tidak ada struktur soal grammar (hanya contoh kalimat). UI menampilkan "Latihan untuk materi ini belum tersedia."
- **Reading Dokkai, Listening Choukai, Reading/Lisning simulasi** → `buildLessonQuestions` mengembalikan `[]` (tidak memakai generator vocabulary).
- **Flashcard SRS** → tidak punya soal kuis (hanya flashcard).

## Hasil Semua Test
- `node tests/validate.test.cjs` → 16/16 lolos.
- `node tests/runtime-sim.cjs` → eksekusi penuh tanpa error.
- `node tests/browser-test.cjs` (Playwright/Chromium) → 14/14 lolos, tanpa console error.
- `validateStructure()` → 0 error (slug unik, judul unik, tiap lesson punya type, mapping dashboard valid, kana romaji valid, grammar tidak pakai generator vocabulary, reading/listening kosong).

