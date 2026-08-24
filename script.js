const storeKey = "hirakatakan-demo-state";

const state = loadState();
let activeKana = "hiragana";
let activeCard = 0;
let cardFlipped = false;
let activeQuestion = 0;
let quizAnswered = false;
let activeLesson = "Hiragana Dasar";

const data = {
  categories: [
    ["administrasi n3", "5 kosakata"],
    ["akademik n1", "20 kosakata"],
    ["benda dapur", "16 kosakata"],
    ["benda rumah", "10 kosakata"],
    ["bisnis n2", "20 kosakata"],
    ["bisnis n3", "20 kosakata"],
    ["dapur perabot n4", "11 kosakata"],
    ["dapur perabot n5", "22 kosakata"],
    ["arah jalan", "18 kosakata"],
    ["salam harian", "24 kosakata"],
    ["kantor & pekerjaan", "21 kosakata"],
    ["cuaca & musim", "15 kosakata"]
  ],
  kana: {
    hiragana: [
      ["あ", "a", "asa - pagi"], ["い", "i", "inu - anjing"], ["う", "u", "umi - laut"],
      ["え", "e", "eki - stasiun"], ["お", "o", "ocha - teh"], ["か", "ka", "kasa - payung"],
      ["き", "ki", "kiku - mendengar"], ["く", "ku", "kuni - negara"], ["け", "ke", "kesa - pagi ini"],
      ["こ", "ko", "kome - beras"], ["さ", "sa", "sakura - bunga sakura"], ["し", "shi", "shio - garam"],
      ["す", "su", "sushi"], ["せ", "se", "sensei - guru"], ["そ", "so", "sora - langit"],
      ["た", "ta", "taberu - makan"], ["ち", "chi", "chizu - peta"], ["つ", "tsu", "tsuki - bulan"],
      ["て", "te", "tegami - surat"], ["と", "to", "tokei - jam"]
    ],
    katakana: [
      ["ア", "a", "amerika"], ["イ", "i", "indo"], ["ウ", "u", "uranium"], ["エ", "e", "eakon - AC"],
      ["オ", "o", "orenji"], ["カ", "ka", "kamera"], ["キ", "ki", "kiwi"], ["ク", "ku", "kurabu"],
      ["ケ", "ke", "keeki"], ["コ", "ko", "koohii"], ["サ", "sa", "sando"], ["シ", "shi", "shatsu"],
      ["ス", "su", "supo-tsu"], ["セ", "se", "sentaa"], ["ソ", "so", "sofuto"], ["タ", "ta", "takushii"]
    ],
    kanji: [
      ["日", "hi/nichi", "hari, matahari"], ["月", "tsuki/getsu", "bulan"], ["火", "hi/ka", "api"],
      ["水", "mizu/sui", "air"], ["木", "ki/moku", "pohon"], ["金", "kane/kin", "emas, uang"],
      ["土", "tsuchi/do", "tanah"], ["人", "hito/jin", "orang"], ["山", "yama/san", "gunung"],
      ["川", "kawa/sen", "sungai"], ["大", "oo/dai", "besar"], ["小", "chii/shou", "kecil"],
      ["本", "hon", "buku, asal"], ["語", "go", "bahasa"], ["食", "ta/shoku", "makan"], ["飲", "no/in", "minum"]
    ]
  },
  lessons: [
    ["あ", "Hiragana Dasar", "N5", "46 huruf dasar, dakuten, handakuten, youon, dan latihan baca kata pendek."],
    ["ア", "Katakana Dasar", "N5", "Pola baca kata serapan, nama asing, benda modern, dan latihan membedakan bentuk mirip."],
    ["漢", "Kanji N5-N1", "N5-N1", "Kanji prioritas JLPT dengan onyomi, kunyomi, makna, stroke count, dan contoh kalimat."],
    ["語", "Kamus Kosakata", "Tematik", "Kosakata harian dari rumah, dapur, sekolah, kantor, bisnis, arah, cuaca, dan vokasi."],
    ["は", "Partikel & Grammar", "N5-N3", "Partikel WA, GA, WO, NI, DE, HE, TO, kara, made, dan pola kalimat dasar."],
    ["読", "Reading Dokkai", "N5-N2", "Latihan membaca pengumuman, email pendek, dialog, dan teks informatif."],
    ["聴", "Listening Choukai", "N5-N2", "Simulasi percakapan sehari-hari, instruksi, jadwal, dan respons cepat."],
    ["単", "Flashcard SRS", "Semua Level", "Dek pintar yang menyesuaikan pengulangan berdasarkan jawaban belajar Anda."]
  ],
  lessonDetails: {
    "Hiragana Dasar": {
      level: "N5 - Aksara Dasar",
      summary: "Pelajari 46 huruf Hiragana, urutan bunyi, dakuten, handakuten, dan cara membaca kata sederhana.",
      goals: ["Mengenali baris vokal a-i-u-e-o", "Membaca kombinasi ka, sa, ta, na, ha, ma, ya, ra, wa", "Memahami dakuten seperti ka menjadi ga dan sa menjadi za"],
      body: [
        "Hiragana dipakai untuk kata asli Jepang, partikel, akhiran tata bahasa, dan furigana di atas kanji. Mulai dari lima vokal dasar: あ a, い i, う u, え e, お o.",
        "Setelah vokal, lanjutkan per baris konsonan. Contoh baris K adalah か ka, き ki, く ku, け ke, こ ko. Pola ini membuat hafalan lebih rapi daripada menghafal acak.",
        "Dakuten adalah tanda dua garis kecil yang mengubah bunyi. か menjadi が, さ menjadi ざ, た menjadi だ, dan は menjadi ば. Handakuten berupa lingkaran kecil yang mengubah は menjadi ぱ."
      ],
      examples: ["あさ = asa = pagi", "いぬ = inu = anjing", "かさ = kasa = payung", "せんせい = sensei = guru"],
      vocab: [["あ", "a", "vokal dasar"], ["か", "ka", "baris K"], ["が", "ga", "dakuten K"], ["ぱ", "pa", "handakuten H"]],
      practice: "Baca perlahan: あさ、かさ、すし、せんせい. Setelah lancar, buka Aksara Jepang dan cocokkan bentuk hurufnya."
    },
    "Katakana Dasar": {
      level: "N5 - Aksara Serapan",
      summary: "Katakana dipakai untuk kata serapan, nama asing, istilah modern, dan penekanan bunyi.",
      goals: ["Membedakan bentuk mirip seperti シ/ツ dan ソ/ン", "Membaca kata serapan dasar", "Memahami tanda panjang vokal ー"],
      body: [
        "Katakana memiliki bunyi yang sama dengan Hiragana, tetapi bentuknya lebih tegas dan sering dipakai untuk kata dari bahasa asing.",
        "Tanda ー memperpanjang vokal. コーヒー dibaca koohii, artinya kopi. タクシー dibaca takushii, artinya taksi.",
        "Beberapa huruf terlihat mirip. シ shi dan ツ tsu dibedakan dari arah goresan dan posisi titik. Latihan visual berulang sangat penting."
      ],
      examples: ["カメラ = kamera", "コーヒー = kopi", "タクシー = taksi", "インドネシア = Indonesia"],
      vocab: [["ア", "a", "vokal"], ["カ", "ka", "kamera"], ["シ", "shi", "shatsu"], ["ー", "chouon", "pemanjang vokal"]],
      practice: "Coba baca: カメラ、コーヒー、タクシー、テレビ. Fokus pada vokal panjang."
    },
    "Kanji N5-N1": {
      level: "JLPT N5-N1",
      summary: "Kenali makna, onyomi, kunyomi, dan contoh pemakaian kanji prioritas JLPT.",
      goals: ["Membaca kanji harian N5", "Memahami bedanya onyomi dan kunyomi", "Menghubungkan kanji dengan kosakata nyata"],
      body: [
        "Kanji membawa makna. Satu kanji bisa punya beberapa bacaan. 日 bisa dibaca hi, nichi, atau ka tergantung kata.",
        "Onyomi biasanya berasal dari bacaan Sino-Jepang dan sering muncul pada gabungan kanji. Kunyomi biasanya bacaan asli Jepang.",
        "Belajar kanji paling efektif lewat kata, bukan simbol saja. Contoh: 日 saja berarti hari/matahari, tetapi 日本 berarti Jepang dan 日曜日 berarti Minggu."
      ],
      examples: ["日 = hari/matahari", "月 = bulan", "水 = air", "学校 = sekolah"],
      vocab: [["日", "hi/nichi", "hari"], ["月", "tsuki/getsu", "bulan"], ["水", "mizu/sui", "air"], ["学校", "gakkou", "sekolah"]],
      practice: "Cocokkan arti: 日, 月, 水, 火, 木. Lalu cari contoh katanya di flashcard."
    },
    "Kamus Kosakata": {
      level: "Tematik",
      summary: "Kumpulan kosakata harian berdasarkan kategori agar mudah dipakai dalam percakapan.",
      goals: ["Menghafal kosakata dapur dan rumah", "Membuat kalimat pendek", "Memakai kosakata dalam konteks"],
      body: [
        "Kosakata tematik membantu otak menyimpan kata berdasarkan situasi. Mulai dari benda yang sering dilihat: rumah, dapur, sekolah, kantor, dan transportasi.",
        "Setiap kata sebaiknya dipasangkan dengan contoh kalimat. Contoh ご飯 tidak hanya berarti nasi, tetapi juga makanan secara umum dalam percakapan.",
        "Untuk latihan cepat, pilih 8 kata per hari dan ulang dengan SRS sampai jawabannya terasa otomatis."
      ],
      examples: ["ご飯 = nasi/makanan", "水 = air", "机 = meja", "駅 = stasiun"],
      vocab: [["ご飯", "gohan", "nasi/makanan"], ["水", "mizu", "air"], ["机", "tsukue", "meja"], ["駅", "eki", "stasiun"]],
      practice: "Buat kalimat: 水を飲みます。ご飯を食べます。駅へ行きます。"
    },
    "Partikel & Grammar": {
      level: "N5-N3",
      summary: "Pahami partikel inti dan pola kalimat dasar untuk membangun kalimat Jepang yang benar.",
      goals: ["Membedakan は, が, を, に, で", "Membuat kalimat A は B です", "Memakai kata kerja bentuk ます"],
      body: [
        "Partikel adalah penanda fungsi kata. は menandai topik, が sering menandai subjek atau informasi baru, を menandai objek langsung.",
        "に sering dipakai untuk waktu atau tujuan, sedangkan で menandai tempat terjadinya aksi atau alat yang digunakan.",
        "Pola dasar yang aman untuk pemula adalah: Topik は Keterangan です dan Subjek は Objek を Kata kerja ます."
      ],
      examples: ["私は学生です = Saya pelajar", "水を飲みます = Minum air", "学校へ行きます = Pergi ke sekolah", "駅で待ちます = Menunggu di stasiun"],
      vocab: [["は", "wa", "topik"], ["を", "o", "objek"], ["に", "ni", "waktu/tujuan"], ["で", "de", "tempat aksi/alat"]],
      practice: "Isi partikel: 私___ご飯___食べます. Jawaban dasar: 私はご飯を食べます。"
    },
    "Reading Dokkai": {
      level: "N5-N2",
      summary: "Latihan membaca teks pendek, pengumuman, jadwal, email, dan dialog JLPT.",
      goals: ["Menangkap informasi waktu/tempat", "Mengenali kata kunci pertanyaan", "Membaca tanpa menerjemahkan kata demi kata"],
      body: [
        "Reading JLPT menguji kemampuan menemukan informasi penting. Untuk N5, teks biasanya pendek: pengumuman, catatan, atau dialog sederhana.",
        "Cari kata kunci seperti waktu, tempat, orang, harga, dan kata tanya. Jangan berhenti terlalu lama pada satu kanji yang belum tahu.",
        "Strategi praktis: baca pertanyaan dulu, garis bawahi kata kunci, lalu cari bagian teks yang relevan."
      ],
      examples: ["あした 9じに 学校へ 行きます。", "スーパーは 8じから 10じまでです。", "田中さんは 駅で 待っています。"],
      vocab: [["あした", "ashita", "besok"], ["9じ", "ku-ji", "jam 9"], ["から", "kara", "dari"], ["まで", "made", "sampai"]],
      practice: "Baca: スーパーは8じから10じまでです。Pertanyaan: buka sampai jam berapa?"
    },
    "Listening Choukai": {
      level: "N5-N2",
      summary: "Latihan memahami percakapan, instruksi, jadwal, lokasi, dan respons singkat.",
      goals: ["Menangkap kata kunci audio", "Mengenali angka, waktu, dan tempat", "Memilih respons yang paling alami"],
      body: [
        "Listening tidak harus menangkap semua kata. Fokus pada kata kunci yang menjawab pertanyaan: siapa, di mana, kapan, berapa, dan melakukan apa.",
        "Biasakan mendengar angka dan waktu: いち, に, さん, よじ, くじ, serta kata lokasi seperti えき, がっこう, うち.",
        "Untuk respons, perhatikan nada kalimat. Pertanyaan 何時ですか biasanya membutuhkan jawaban waktu."
      ],
      examples: ["A: 何時ですか。B: 9時です。", "A: 駅はどこですか。B: 右です。", "A: コーヒーを飲みますか。B: はい、飲みます。"],
      vocab: [["何時", "nanji", "jam berapa"], ["右", "migi", "kanan"], ["左", "hidari", "kiri"], ["はい", "hai", "ya"]],
      practice: "Simulasikan audio: えきはみぎです. Jawab: stasiun ada di kanan."
    },
    "Flashcard SRS": {
      level: "Semua Level",
      summary: "Gunakan kartu pintar untuk mengulang materi sesuai tingkat kesulitan daya ingat.",
      goals: ["Membalik kartu dan membaca jawaban", "Memberi nilai daya ingat", "Membangun kebiasaan review harian"],
      body: [
        "SRS mengatur kapan kartu muncul kembali. Jika Anda memilih Lagi atau Sulit, kartu akan lebih cepat diulang.",
        "Jika memilih Bagus atau Mudah, interval kartu akan lebih panjang. Tujuannya mengulang sebelum lupa, bukan mengulang terus tanpa arah.",
        "Review singkat setiap hari lebih efektif daripada belajar banyak sekaligus tetapi jarang."
      ],
      examples: ["食べる -> taberu -> makan", "飲む -> nomu -> minum", "学校 -> gakkou -> sekolah"],
      vocab: [["Lagi", "0", "ulang cepat"], ["Sulit", "3", "ulang agak cepat"], ["Bagus", "4", "normal"], ["Mudah", "5", "interval panjang"]],
      practice: "Buka Flashcard, balik kartu, lalu pilih penilaian sesuai daya ingat Anda."
    }
  },
  cards: [
    ["Kosakata N5", "食べる", "taberu - makan. Contoh: ご飯を食べます。"],
    ["Kosakata N5", "飲む", "nomu - minum. Contoh: 水を飲みます。"],
    ["Kanji N5", "学校", "gakkou - sekolah. Kanji: 学 belajar, 校 sekolah."],
    ["Grammar", "私は学生です", "Watashi wa gakusei desu - Saya adalah pelajar."],
    ["Kosakata Harian", "駅", "eki - stasiun. Contoh: 駅はどこですか。"]
  ],
  questions: [
    { text: "Apa arti dari 「ご飯」 (gohan)?", choices: ["Air putih", "Nasi / makanan", "Sekolah", "Kereta"], answer: 1 },
    { text: "Huruf Hiragana untuk bunyi 'ka' adalah...", choices: ["あ", "か", "さ", "た"], answer: 1 },
    { text: "Partikel yang sering menandai topik kalimat adalah...", choices: ["を", "で", "は", "に"], answer: 2 },
    { text: "Kanji 「水」 berarti...", choices: ["Api", "Air", "Kayu", "Tanah"], answer: 1 },
    { text: "Kalimat sopan untuk 'makan' memakai bentuk...", choices: ["tabeta", "tabemasen", "tabemasu", "tabete"], answer: 2 }
  ],
  path: [
    ["あ", "Review 10 kartu Hiragana", "5 menit"],
    ["語", "Tambah 8 kosakata dapur", "10 menit"],
    ["は", "Baca ulang partikel WA dan GA", "12 menit"],
    ["問", "Kerjakan kuis cepat JLPT N5", "8 menit"]
  ]
};

const extraLessonModules = [
  ["は", "Partikel WA vs GA", "N5", "Bedakan topik lama dan subjek/informasi baru dalam kalimat dasar.", "Gunakan は untuk topik pembicaraan dan が untuk penekanan subjek atau informasi yang baru diperkenalkan.", ["私は学生です", "雨が降っています", "これが私の本です"], [["は", "wa", "topik"], ["が", "ga", "subjek"], ["私", "watashi", "saya"], ["本", "hon", "buku"]], "Isi partikel: これ___私のかばんです。"],
  ["を", "Partikel WO untuk Objek", "N5", "Pahami objek langsung dalam kalimat kerja transitif.", "Partikel を menandai benda yang menerima aksi langsung dari kata kerja seperti makan, minum, membaca, dan membeli.", ["ご飯を食べます", "水を飲みます", "本を読みます"], [["ご飯", "gohan", "nasi"], ["水", "mizu", "air"], ["読む", "yomu", "membaca"], ["買う", "kau", "membeli"]], "Buat 3 kalimat dengan pola: benda + を + kata kerja."],
  ["に", "Partikel NI Waktu & Tujuan", "N5", "Gunakan に untuk waktu spesifik, arah tujuan, dan keberadaan.", "に dipakai pada jam, hari tertentu, lokasi tujuan, dan posisi keberadaan dengan あります/います.", ["7時に起きます", "学校に行きます", "机の上に本があります"], [["7時", "shichi-ji", "jam 7"], ["学校", "gakkou", "sekolah"], ["上", "ue", "atas"], ["あります", "arimasu", "ada benda"]], "Terjemahkan: Saya pergi ke sekolah jam 8."],
  ["で", "Partikel DE Tempat Aksi", "N5", "Gunakan で untuk tempat terjadinya aktivitas dan alat yang dipakai.", "Jika suatu aksi terjadi di lokasi tertentu, gunakan で. Partikel ini juga menandai alat, kendaraan, atau bahasa yang digunakan.", ["図書館で勉強します", "バスで行きます", "日本語で話します"], [["図書館", "toshokan", "perpustakaan"], ["勉強", "benkyou", "belajar"], ["バス", "basu", "bus"], ["話す", "hanasu", "berbicara"]], "Pilih partikel: レストラン___ご飯を食べます。"],
  ["へ", "Partikel E Arah", "N5", "Pahami perbedaan arah umum へ dan tujuan spesifik に.", "へ menandai arah gerak. Dalam banyak kalimat dasar, へ dan に sama-sama bisa muncul, tetapi へ menekankan arah menuju tempat.", ["日本へ行きます", "家へ帰ります", "駅へ歩きます"], [["日本", "nihon", "Jepang"], ["家", "ie", "rumah"], ["帰る", "kaeru", "pulang"], ["歩く", "aruku", "berjalan"]], "Buat kalimat: pergi ke Jepang."],
  ["も", "Partikel MO", "N5", "Gunakan も untuk arti juga atau pun.", "も menggantikan は/が/を ketika ingin menyatakan kesamaan: saya juga, ini juga, air pun diminum.", ["私も学生です", "これも本です", "水も飲みます"], [["私", "watashi", "saya"], ["学生", "gakusei", "pelajar"], ["これ", "kore", "ini"], ["も", "mo", "juga"]], "Ubah: 私は学生です menjadi Saya juga pelajar."],
  ["の", "Partikel NO Kepemilikan", "N5", "Buat hubungan kepemilikan, asal, dan keterangan benda.", "の menghubungkan dua nomina. Pola A の B berarti B milik A atau B yang berkaitan dengan A.", ["私の本", "日本語の先生", "学校の前"], [["先生", "sensei", "guru"], ["前", "mae", "depan"], ["日本語", "nihongo", "bahasa Jepang"], ["本", "hon", "buku"]], "Buat frasa: buku saya, guru bahasa Jepang."],
  ["時", "Waktu & Jam", "N5", "Baca jam, menit, hari, dan jadwal dasar.", "Materi waktu penting untuk reading dan listening karena sering menjadi jawaban utama soal.", ["今は8時です", "月曜日に会います", "毎朝6時に起きます"], [["今", "ima", "sekarang"], ["毎朝", "maiasa", "setiap pagi"], ["月曜日", "getsuyoubi", "Senin"], ["会う", "au", "bertemu"]], "Tulis jam bangun Anda dalam bahasa Jepang."],
  ["数", "Angka & Counter Dasar", "N5", "Pelajari angka, umur, harga, dan penghitung benda umum.", "Angka Jepang berubah bunyi pada beberapa counter. Mulai dari ひとつ, ふたつ dan pola -円 untuk harga.", ["りんごを三つください", "500円です", "私は20歳です"], [["三つ", "mittsu", "tiga benda"], ["円", "en", "yen"], ["歳", "sai", "umur"], ["ください", "kudasai", "tolong beri"]], "Baca: 100円, 300円, 800円."],
  ["動", "Kata Kerja Bentuk MASU", "N5", "Konjugasi sopan positif, negatif, lampau, dan lampau negatif.", "Bentuk ます adalah bentuk sopan yang aman dipakai pemula. Ubah akar kata kerja menjadi pola ます, ません, ました, ませんでした.", ["食べます", "飲みません", "行きました"], [["食べる", "taberu", "makan"], ["飲む", "nomu", "minum"], ["行く", "iku", "pergi"], ["見る", "miru", "melihat"]], "Konjugasikan: 飲む ke bentuk negatif sopan."],
  ["形", "Kata Sifat I dan NA", "N5", "Bedakan akhiran い dan kata sifat な dalam kalimat.", "Kata sifat い bisa langsung menerangkan benda, sedangkan kata sifat な membutuhkan な sebelum nomina.", ["大きい家", "静かな町", "この本は面白いです"], [["大きい", "ookii", "besar"], ["静か", "shizuka", "tenang"], ["町", "machi", "kota"], ["面白い", "omoshiroi", "menarik"]], "Buat 2 frasa: rumah besar, kota tenang."],
  ["て", "Bentuk TE Dasar", "N5-N4", "Gunakan bentuk て untuk menyambung aksi dan membuat permintaan.", "Bentuk て adalah fondasi grammar. Dipakai untuk ください, います, sambungan kalimat, dan banyak pola lanjutan.", ["待ってください", "本を読んでいます", "ご飯を食べて、学校へ行きます"], [["待つ", "matsu", "menunggu"], ["読む", "yomu", "membaca"], ["行く", "iku", "pergi"], ["ください", "kudasai", "tolong"]], "Ubah 読む menjadi bentuk て."],
  ["中", "Bentuk TE IMASU", "N5-N4", "Nyatakan aktivitas yang sedang berlangsung atau kebiasaan/status.", "ている dapat berarti sedang melakukan, sudah dalam keadaan, atau kebiasaan tergantung kata kerja dan konteks.", ["今、勉強しています", "結婚しています", "毎日走っています"], [["今", "ima", "sekarang"], ["勉強", "benkyou", "belajar"], ["結婚", "kekkon", "menikah"], ["走る", "hashiru", "berlari"]], "Tulis kalimat: Saya sedang membaca buku."],
  ["可", "Bentuk Potensial", "N4", "Nyatakan kemampuan: bisa membaca, bisa pergi, bisa makan.", "Bentuk potensial menjawab apa yang bisa dilakukan seseorang. Untuk ichidan, る berubah menjadi られる.", ["日本語が読めます", "寿司が食べられます", "明日行けます"], [["読める", "yomeru", "bisa membaca"], ["食べられる", "taberareru", "bisa makan"], ["行ける", "ikeru", "bisa pergi"], ["明日", "ashita", "besok"]], "Ubah 見る menjadi bentuk potensial."],
  ["願", "Tai Form Keinginan", "N5-N4", "Ungkapkan keinginan melakukan sesuatu.", "Tambahkan たい pada akar ます untuk menyatakan ingin melakukan aksi. Objek bisa memakai を atau が.", ["日本へ行きたいです", "水を飲みたいです", "映画を見たいです"], [["行きたい", "ikitai", "ingin pergi"], ["飲みたい", "nomitai", "ingin minum"], ["映画", "eiga", "film"], ["見る", "miru", "melihat"]], "Tulis: Saya ingin makan ramen."],
  ["経", "Pengalaman TA KOTO GA ARU", "N4", "Nyatakan pernah melakukan sesuatu.", "Pola たことがある dipakai untuk pengalaman hidup. Gunakan bentuk lampau biasa sebelum ことがある.", ["日本へ行ったことがあります", "寿司を食べたことがあります", "富士山を見たことがあります"], [["行った", "itta", "pergi lampau"], ["食べた", "tabeta", "makan lampau"], ["富士山", "fujisan", "Gunung Fuji"], ["経験", "keiken", "pengalaman"]], "Buat kalimat: Saya pernah membaca manga Jepang."],
  ["許", "TE MO II", "N4", "Meminta dan memberi izin.", "Pola てもいいです berarti boleh melakukan. Untuk bertanya, gunakan てもいいですか.", ["ここに座ってもいいですか", "写真を撮ってもいいです", "入ってもいいですか"], [["座る", "suwaru", "duduk"], ["写真", "shashin", "foto"], ["撮る", "toru", "mengambil"], ["入る", "hairu", "masuk"]], "Tanyakan: Boleh minum air?"],
  ["禁", "TE WA IKENAI", "N4", "Menyatakan larangan dengan sopan.", "Pola てはいけません berarti tidak boleh melakukan. Bentuk kasualnya ちゃいけない.", ["ここでタバコを吸ってはいけません", "遅れてはいけません", "忘れてはいけません"], [["吸う", "suu", "mengisap"], ["遅れる", "okureru", "terlambat"], ["忘れる", "wasureru", "lupa"], ["ここ", "koko", "di sini"]], "Buat larangan: Tidak boleh masuk."],
  ["義", "NAKEREBA NARANAI", "N4", "Menyatakan kewajiban atau harus.", "Pola なければなりません berarti harus melakukan. Bentuk percakapan sering menjadi なきゃ.", ["勉強しなければなりません", "薬を飲まなければなりません", "早く起きなければなりません"], [["勉強", "benkyou", "belajar"], ["薬", "kusuri", "obat"], ["早く", "hayaku", "cepat/pagi"], ["起きる", "okiru", "bangun"]], "Tulis: Saya harus pergi ke sekolah."],
  ["予", "TSUMORI", "N4", "Menyatakan rencana atau niat.", "つもりです dipakai ketika rencana sudah cukup kuat. Gunakan bentuk kamus atau negatif sebelum つもり.", ["来年日本へ行くつもりです", "今日は勉強しないつもりです", "新しい本を買うつもりです"], [["来年", "rainen", "tahun depan"], ["新しい", "atarashii", "baru"], ["買う", "kau", "membeli"], ["つもり", "tsumori", "niat"]], "Buat kalimat: Saya berniat belajar N4."],
  ["比", "Perbandingan YORI", "N4", "Bandingkan dua benda atau keadaan.", "より menandai pembanding. Pola A は B より ... berarti A lebih ... daripada B.", ["東京は大阪より大きいです", "電車はバスより速いです", "日本語は英語より難しいです"], [["東京", "toukyou", "Tokyo"], ["大阪", "oosaka", "Osaka"], ["速い", "hayai", "cepat"], ["難しい", "muzukashii", "sulit"]], "Bandingkan kereta dan bus."],
  ["最", "Superlatif ICHIBAN", "N4", "Nyatakan yang paling dalam kelompok.", "いちばん dipakai untuk menyatakan paling. Biasanya muncul bersama kategori seperti クラスで atau 日本で.", ["富士山は日本で一番高い山です", "寿司が一番好きです", "この本が一番面白いです"], [["一番", "ichiban", "paling"], ["高い", "takai", "tinggi/mahal"], ["好き", "suki", "suka"], ["面白い", "omoshiroi", "menarik"]], "Tulis: Ramen paling saya suka."],
  ["伝", "SOU DESU Kabar", "N4", "Menyampaikan informasi yang didengar.", "そうです setelah bentuk biasa berarti katanya/menurut kabar. Ini berbeda dari そうです yang berarti terlihat.", ["明日は雨だそうです", "田中さんは来ないそうです", "この店は有名だそうです"], [["雨", "ame", "hujan"], ["来ない", "konai", "tidak datang"], ["店", "mise", "toko"], ["有名", "yuumei", "terkenal"]], "Ubah: katanya besok libur."],
  ["見", "SOU DESU Terlihat", "N4", "Menyatakan kelihatannya berdasarkan kesan visual.", "そうです setelah akar kata sifat berarti terlihat/sepertinya. おいしい menjadi おいしそう.", ["このケーキはおいしそうです", "彼は忙しそうです", "雨が降りそうです"], [["おいしい", "oishii", "enak"], ["忙しい", "isogashii", "sibuk"], ["降る", "furu", "turun hujan"], ["彼", "kare", "dia laki-laki"]], "Buat kalimat: Buku ini terlihat sulit."],
  ["条", "TARA Conditional", "N4-N3", "Gunakan たら untuk jika/ketika suatu kondisi terjadi.", "たら fleksibel untuk kondisi nyata, rencana, dan urutan kejadian setelah sesuatu selesai.", ["時間があったら行きます", "日本へ行ったら寿司を食べたいです", "家に帰ったら電話します"], [["時間", "jikan", "waktu"], ["帰る", "kaeru", "pulang"], ["電話", "denwa", "telepon"], ["条件", "jouken", "kondisi"]], "Buat kalimat: Jika ada uang, saya ingin pergi ke Jepang."],
  ["仮", "BA Conditional", "N3", "Menyatakan syarat umum dengan bentuk ば.", "ば sering dipakai untuk hubungan logis: jika syarat terpenuhi, hasilnya terjadi.", ["安ければ買います", "練習すれば上手になります", "雨が降れば行きません"], [["安い", "yasui", "murah"], ["練習", "renshuu", "latihan"], ["上手", "jouzu", "mahir"], ["雨", "ame", "hujan"]], "Ubah 高い menjadi bentuk ば."],
  ["限", "NARA Conditional", "N3", "Memberi saran atau kondisi berdasarkan topik.", "なら dipakai ketika merespons topik yang disebut lawan bicara: kalau soal X, maka Y.", ["日本へ行くなら春がいいです", "漢字ならこの本が便利です", "安いホテルなら駅の近くにあります"], [["春", "haru", "musim semi"], ["便利", "benri", "praktis"], ["ホテル", "hoteru", "hotel"], ["近く", "chikaku", "dekat"]], "Beri saran: kalau belajar kanji, pakai flashcard."],
  ["受", "Passive Ukemi", "N3", "Menyatakan dikenai aksi oleh orang lain.", "Bentuk pasif dipakai untuk aksi yang diterima subjek, termasuk pengalaman tidak menyenangkan.", ["先生にほめられました", "財布を盗まれました", "友達に誘われました"], [["ほめる", "homeru", "memuji"], ["財布", "saifu", "dompet"], ["盗む", "nusumu", "mencuri"], ["誘う", "sasou", "mengajak"]], "Ubah: 先生が私をほめました ke pasif."],
  ["使", "Causative Shieki", "N3", "Menyuruh atau membiarkan seseorang melakukan sesuatu.", "Bentuk causative menyatakan membuat/membiarkan orang melakukan aksi. Dalam konteks sopan, sering perlu hati-hati.", ["母は子供に野菜を食べさせます", "先生は学生を立たせました", "少し休ませてください"], [["子供", "kodomo", "anak"], ["野菜", "yasai", "sayur"], ["立つ", "tatsu", "berdiri"], ["休む", "yasumu", "istirahat"]], "Terjemahkan: Tolong izinkan saya istirahat sebentar."],
  ["尊", "Keigo Dasar", "N3-N2", "Kenali sonkeigo dan kenjougo untuk situasi formal.", "Keigo membedakan tindakan orang yang dihormati dan tindakan diri sendiri. Mulai dari pola お/ご + stem + になる dan いたします.", ["先生がお話しになります", "私がご案内いたします", "少々お待ちください"], [["話す", "hanasu", "berbicara"], ["案内", "annai", "memandu"], ["少々", "shoushou", "sebentar"], ["待つ", "matsu", "menunggu"]], "Ubah 待ってください menjadi bentuk lebih sopan."],
  ["訳", "Wake Da", "N3", "Menjelaskan alasan alami atau kesimpulan.", "わけだ menyatakan jadi pantas saja/berarti. Pola ini sering muncul di reading dan percakapan penjelasan.", ["彼は10年日本に住んでいます。日本語が上手なわけです", "電車が止まりました。遅れるわけです"], [["住む", "sumu", "tinggal"], ["上手", "jouzu", "mahir"], ["止まる", "tomaru", "berhenti"], ["遅れる", "okureru", "terlambat"]], "Buat kalimat kesimpulan dengan わけです."],
  ["筈", "Hazu Da", "N3", "Menyatakan semestinya atau ekspektasi kuat.", "はずだ menunjukkan keyakinan berdasarkan informasi. Bentuk negatifnya はずがない untuk mustahil.", ["田中さんは来るはずです", "今日は休みのはずです", "彼が知らないはずがありません"], [["来る", "kuru", "datang"], ["休み", "yasumi", "libur"], ["知る", "shiru", "tahu"], ["はず", "hazu", "semestinya"]], "Tulis: Seharusnya toko ini buka."],
  ["程", "Hodo", "N3", "Menyatakan tingkat, sampai-sampai, atau perbandingan negatif.", "ほど dipakai untuk menyatakan tingkat ekstrem atau pola A ほど B ない: tidak se-B A.", ["泣きたいほど嬉しいです", "今日は昨日ほど寒くないです", "日本語は思ったほど難しくありません"], [["泣く", "naku", "menangis"], ["嬉しい", "ureshii", "senang"], ["寒い", "samui", "dingin"], ["思う", "omou", "berpikir"]], "Buat kalimat: tidak sesulit yang saya kira."],
  ["限", "Kagiri", "N2", "Menyatakan selama, sejauh, atau batas kondisi.", "限り muncul dalam pola selama kondisi masih berlaku atau sejauh informasi yang diketahui.", ["私が知っている限り、彼は来ません", "命がある限り頑張ります", "時間の許す限り練習します"], [["知る", "shiru", "tahu"], ["命", "inochi", "nyawa"], ["許す", "yurusu", "mengizinkan"], ["練習", "renshuu", "latihan"]], "Buat kalimat dengan: sejauh yang saya tahu."],
  ["際", "Sai Ni", "N2", "Ungkapan formal untuk ketika/saat.", "際に dipakai dalam instruksi, pengumuman, dan dokumen formal, mirip とき tetapi lebih resmi.", ["お帰りの際に受付へお越しください", "申し込む際に身分証明書が必要です", "利用する際は注意してください"], [["受付", "uketsuke", "resepsionis"], ["申し込む", "moushikomu", "mendaftar"], ["身分証明書", "mibun shoumeisho", "identitas"], ["利用", "riyou", "penggunaan"]], "Buat instruksi formal dengan 際に."],
  ["故", "Yue Ni", "N2-N1", "Menyatakan karena/sebab secara formal.", "ゆえに bernuansa tertulis dan formal. Sering dipakai pada esai, berita, atau argumen akademik.", ["彼は努力した。ゆえに成功した", "経験が少ないゆえに失敗も多い", "慎重であるがゆえに時間がかかる"], [["努力", "doryoku", "usaha"], ["成功", "seikou", "sukses"], ["経験", "keiken", "pengalaman"], ["慎重", "shinchou", "hati-hati"]], "Tulis kalimat sebab-akibat formal."],
  ["得", "Uru/Eru", "N2-N1", "Menyatakan kemungkinan secara formal.", "得る berarti dapat terjadi/mungkin, sedangkan 得ない berarti tidak mungkin. Sering muncul dalam teks tertulis.", ["それは起こり得る問題です", "この結果はあり得ません", "誰にでも失敗は起こり得ます"], [["起こる", "okoru", "terjadi"], ["問題", "mondai", "masalah"], ["結果", "kekka", "hasil"], ["失敗", "shippai", "kegagalan"]], "Buat kalimat: kesalahan bisa terjadi pada siapa saja."],
  ["即", "To Tansuru", "N1", "Segera setelah suatu kejadian, langsung terjadi aksi lain.", "とたん menekankan kejadian yang langsung terjadi setelah momen tertentu, sering di luar kendali subjek.", ["家を出たとたん、雨が降り出した", "立ち上がったとたん、めまいがした", "電話を切ったとたん、また鳴った"], [["出る", "deru", "keluar"], ["降り出す", "furidasu", "mulai turun"], ["めまい", "memai", "pusing"], ["鳴る", "naru", "berbunyi"]], "Buat kalimat: begitu membuka pintu, angin masuk."],
  ["抜", "Nuki Ni Shite", "N1", "Tanpa sesuatu yang biasanya dianggap penting.", "抜きにして berarti mengesampingkan atau tanpa mempertimbangkan sesuatu.", ["冗談抜きにして、本当に危険です", "年齢抜きにして能力で判断します", "彼抜きではこの計画は進みません"], [["冗談", "joudan", "bercanda"], ["危険", "kiken", "bahaya"], ["年齢", "nenrei", "usia"], ["判断", "handan", "menilai"]], "Buat kalimat: tanpa bercanda, ini penting."],
  ["家", "Kosakata Rumah", "Tematik", "Nama ruangan, benda rumah, dan kalimat aktivitas di rumah.", "Kosakata rumah sering muncul di percakapan harian dan listening level dasar.", ["部屋を掃除します", "台所で料理します", "椅子に座ります"], [["部屋", "heya", "kamar"], ["台所", "daidokoro", "dapur"], ["椅子", "isu", "kursi"], ["掃除", "souji", "bersih-bersih"]], "Sebutkan 5 benda di kamar Anda dalam bahasa Jepang."],
  ["料", "Kosakata Dapur", "Tematik", "Bahan makanan, alat dapur, dan kata kerja memasak.", "Belajar kosakata dapur membantu membuat kalimat praktis seperti memasak, memotong, mencuci, dan makan.", ["野菜を切ります", "肉を焼きます", "皿を洗います"], [["野菜", "yasai", "sayur"], ["肉", "niku", "daging"], ["皿", "sara", "piring"], ["切る", "kiru", "memotong"]], "Buat kalimat memakai 野菜, 肉, dan 皿."],
  ["駅", "Kosakata Transportasi", "Tematik", "Kata penting untuk kereta, bus, stasiun, arah, dan jadwal.", "Transportasi sangat sering muncul dalam soal JLPT dan percakapan wisata.", ["駅で電車に乗ります", "次のバスは何時ですか", "切符を買います"], [["駅", "eki", "stasiun"], ["電車", "densha", "kereta"], ["切符", "kippu", "tiket"], ["乗る", "noru", "naik"]], "Tanyakan: bus berikutnya jam berapa?"],
  ["買", "Kosakata Belanja", "Tematik", "Harga, ukuran, pembayaran, diskon, dan frasa toko.", "Gunakan pola これをください dan いくらですか untuk transaksi sederhana.", ["これはいくらですか", "カードで払います", "もう少し安いですか"], [["いくら", "ikura", "berapa harga"], ["払う", "harau", "membayar"], ["安い", "yasui", "murah"], ["高い", "takai", "mahal"]], "Buat dialog 2 baris di toko."],
  ["病", "Kosakata Kesehatan", "Tematik", "Gejala, obat, rumah sakit, dan konsultasi sederhana.", "Materi ini berguna untuk situasi darurat dan pekerjaan yang berhubungan dengan layanan.", ["頭が痛いです", "熱があります", "薬を飲みます"], [["頭", "atama", "kepala"], ["痛い", "itai", "sakit"], ["熱", "netsu", "demam"], ["薬", "kusuri", "obat"]], "Jelaskan gejala: sakit kepala dan demam."],
  ["仕", "Kosakata Kantor", "Tematik", "Kata kerja dan benda yang sering dipakai di lingkungan kerja.", "Untuk kerja, hafalkan kata rapat, laporan, jadwal, email, dan atasan.", ["会議があります", "メールを送ります", "報告書を書きます"], [["会議", "kaigi", "rapat"], ["送る", "okuru", "mengirim"], ["報告書", "houkokusho", "laporan"], ["上司", "joushi", "atasan"]], "Tulis: Saya mengirim email ke atasan."],
  ["介", "Vokasi Kaigo", "Vokasi", "Kosakata dasar caregiver/perawatan lansia.", "Materi kaigo menekankan instruksi sopan, kondisi tubuh, bantuan makan, mandi, dan mobilitas.", ["お手伝いします", "ゆっくり歩きましょう", "薬の時間です"], [["手伝う", "tetsudau", "membantu"], ["歩く", "aruku", "berjalan"], ["薬", "kusuri", "obat"], ["時間", "jikan", "waktu"]], "Buat kalimat sopan untuk membantu pasien berjalan."],
  ["店", "Vokasi Restoran", "Vokasi", "Frasa pelayanan restoran, pesanan, pembayaran, dan komplain ringan.", "Gunakan ekspresi sopan untuk menyambut pelanggan, mencatat pesanan, dan menjelaskan menu.", ["いらっしゃいませ", "ご注文はお決まりですか", "少々お待ちください"], [["注文", "chuumon", "pesanan"], ["席", "seki", "kursi"], ["会計", "kaikei", "pembayaran"], ["少々", "shoushou", "sebentar"]], "Buat dialog pelayan menanyakan pesanan."],
  ["工", "Vokasi Pabrik", "Vokasi", "Instruksi keselamatan, alat, jadwal shift, dan laporan kerja.", "Bahasa pabrik membutuhkan perintah jelas, larangan, dan kosakata keselamatan.", ["安全第一です", "機械を止めてください", "手袋をしてください"], [["安全", "anzen", "aman"], ["機械", "kikai", "mesin"], ["手袋", "tebukuro", "sarung tangan"], ["止める", "tomeru", "menghentikan"]], "Tulis larangan: jangan menyentuh mesin."],
  ["面", "Wawancara Kerja", "Vokasi", "Perkenalan diri, pengalaman, alasan melamar, dan kekuatan pribadi.", "Wawancara kerja butuh jawaban pendek, sopan, dan jelas. Latih pola 自己紹介 dan 志望動機.", ["自己紹介をお願いします", "経験があります", "一生懸命働きます"], [["自己紹介", "jikoshoukai", "perkenalan diri"], ["経験", "keiken", "pengalaman"], ["志望動機", "shibou douki", "alasan melamar"], ["働く", "hataraku", "bekerja"]], "Tulis perkenalan diri 3 kalimat."],
  ["読", "Reading Pengumuman", "Dokkai", "Cara membaca pengumuman fasilitas, sekolah, toko, dan stasiun.", "Fokus pada waktu, tempat, aturan, dan siapa yang terkena informasi.", ["休館日は月曜日です", "入口は右側です", "午後6時まで利用できます"], [["休館日", "kyuukanbi", "hari tutup"], ["入口", "iriguchi", "pintu masuk"], ["右側", "migigawa", "sebelah kanan"], ["利用", "riyou", "penggunaan"]], "Jawab dari teks: fasilitas buka sampai jam berapa?"],
  ["便", "Reading Email Pendek", "Dokkai", "Membaca email undangan, perubahan jadwal, dan permintaan sederhana.", "Cari pengirim, penerima, tanggal, tujuan email, dan tindakan yang diminta.", ["会議は金曜日に変わりました", "資料を送ってください", "駅で会いましょう"], [["会議", "kaigi", "rapat"], ["変わる", "kawaru", "berubah"], ["資料", "shiryou", "dokumen"], ["送る", "okuru", "mengirim"]], "Tentukan tindakan yang diminta dalam email pendek."],
  ["聴", "Listening Angka & Harga", "Choukai", "Latihan menangkap angka, harga, nomor telepon, dan waktu.", "Dengarkan kata sebelum dan sesudah angka karena konteks menentukan apakah itu jam, harga, atau jumlah.", ["500円です", "電話番号は1234です", "3時半に来てください"], [["番号", "bangou", "nomor"], ["半", "han", "setengah"], ["円", "en", "yen"], ["来る", "kuru", "datang"]], "Latih membedakan 4, 7, dan 9 dalam audio."],
  ["会", "Listening Dialog Harian", "Choukai", "Menjawab pertanyaan berdasarkan percakapan singkat.", "Fokus pada maksud pembicara, keputusan akhir, dan perubahan rencana.", ["今日は映画を見ません", "駅の前で会います", "雨なのでバスで行きます"], [["映画", "eiga", "film"], ["前", "mae", "depan"], ["雨", "ame", "hujan"], ["なので", "nanode", "karena itu"]], "Tentukan: mereka bertemu di mana?"],
  ["模", "Simulasi JLPT N5", "Latihan", "Paket latihan grammar, vocabulary, kanji, reading, dan listening level N5.", "Simulasi N5 menguji dasar. Kerjakan dengan batas waktu dan catat bagian yang salah untuk diulang dengan SRS.", ["問題を読んでください", "正しい答えを選んでください", "時間を計って練習します"], [["問題", "mondai", "soal"], ["正しい", "tadashii", "benar"], ["答え", "kotae", "jawaban"], ["時間", "jikan", "waktu"]], "Kerjakan 5 soal kuis cepat lalu review kesalahan."],
  ["模", "Simulasi JLPT N4", "Latihan", "Paket latihan pola N4 seperti potensial, ている, たことがある, dan kewajiban.", "N4 mulai menuntut kemampuan menghubungkan grammar dengan konteks kalimat.", ["日本語が読めます", "行ったことがあります", "勉強しなければなりません"], [["読める", "yomeru", "bisa membaca"], ["経験", "keiken", "pengalaman"], ["義務", "gimu", "kewajiban"], ["復習", "fukushuu", "review"]], "Review 3 pola N4 yang paling sering salah."],
  ["模", "Simulasi JLPT N3", "Latihan", "Latihan transisi intermediate dengan conditional, passive, causative, dan reading panjang.", "N3 mengukur kemampuan memahami maksud, bukan hanya arti kata. Latih inferensi dan grammar konteks.", ["安ければ買います", "先生にほめられました", "休ませてください"], [["条件", "jouken", "kondisi"], ["受身", "ukemi", "pasif"], ["使役", "shieki", "kausatif"], ["推測", "suisoku", "inferensi"]], "Baca satu paragraf dan tulis kesimpulan utamanya."]
];

extraLessonModules.forEach(([symbol, title, level, summary, focus, examples, vocab, practice]) => {
  if (!data.lessonDetails[title]) {
    data.lessons.push([symbol, title, level, summary]);
    data.lessonDetails[title] = {
      level,
      summary,
      goals: [
        `Memahami fungsi utama ${title}`,
        "Mengenali pola dalam contoh kalimat",
        "Memakai materi ini dalam latihan pendek"
      ],
      body: [
        focus,
        "Baca contoh dari kiri ke kanan: bentuk Jepang, romaji atau petunjuk bunyi, lalu arti. Setelah itu ulangi dengan suara pelan agar pola melekat.",
        "Untuk hasil terbaik, ambil 3 kosakata kunci dari modul ini dan masukkan ke sesi flashcard harian."
      ],
      examples,
      vocab,
      practice
    };
  }
});

function loadState() {
  const fallback = { users: [], currentEmail: "" };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(storeKey) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function currentUser() {
  return state.users.find((user) => user.email === state.currentEmail);
}

function setView(view) {
  document.querySelectorAll("[data-page]").forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === view);
  });
  document.querySelectorAll(".nav .nav-action").forEach((button) => {
    const isLessonDetail = view === "lesson-detail" && button.dataset.view === "lessons";
    button.classList.toggle("is-active", button.dataset.view === view || isLessonDetail);
  });
  document.querySelector(".topbar")?.classList.remove("menu-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  bloomSakura();
  if (view === "dashboard" && !currentUser()) openAuth("login");
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetal(className = "") {
  const petal = document.createElement("span");
  petal.className = `sakura-petal ${className}`.trim();
  return petal;
}

function initSakura() {
  const layer = document.querySelector(".sakura-layer");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  layer.innerHTML = "";
  const amount = window.innerWidth < 760 ? 18 : 34;
  for (let index = 0; index < amount; index += 1) {
    const petal = createPetal();
    petal.style.setProperty("--x", `${randomBetween(-4, 100)}vw`);
    petal.style.setProperty("--size", `${randomBetween(8, 17)}px`);
    petal.style.setProperty("--opacity", randomBetween(0.35, 0.82).toFixed(2));
    petal.style.setProperty("--rotate", `${randomBetween(0, 180)}deg`);
    petal.style.setProperty("--drift", `${randomBetween(-90, 90)}px`);
    petal.style.setProperty("--duration", `${randomBetween(9, 18)}s`);
    petal.style.setProperty("--delay", `${randomBetween(-18, 0)}s`);
    layer.appendChild(petal);
  }
}

function bloomSakura(originX = window.innerWidth * 0.5, originY = 120) {
  const layer = document.querySelector(".sakura-layer");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let index = 0; index < 14; index += 1) {
    const petal = createPetal("burst");
    petal.style.setProperty("--size", `${randomBetween(8, 15)}px`);
    petal.style.setProperty("--opacity", randomBetween(0.45, 0.88).toFixed(2));
    petal.style.setProperty("--burst-x", `${originX + randomBetween(-70, 70)}px`);
    petal.style.setProperty("--burst-y", `${originY + randomBetween(-22, 22)}px`);
    petal.style.setProperty("--burst-dx", `${randomBetween(-160, 160)}px`);
    petal.style.setProperty("--burst-dy", `${randomBetween(60, 190)}px`);
    petal.style.setProperty("--burst-rotate", `${randomBetween(120, 640)}deg`);
    layer.appendChild(petal);
    petal.addEventListener("animationend", () => petal.remove(), { once: true });
  }
}

function openAuth(tab = "login") {
  document.querySelector("[data-auth-modal]").classList.remove("is-hidden");
  setAuthTab(tab);
}

function closeAuth() {
  document.querySelector("[data-auth-modal]").classList.add("is-hidden");
}

function setAuthTab(tab) {
  document.querySelectorAll("[data-auth-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authTab === tab);
  });
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.classList.toggle("is-hidden", form.dataset.authForm !== tab);
  });
}

function updateAuthUI() {
  const user = currentUser();
  document.querySelectorAll("[data-open-auth]").forEach((button) => button.classList.toggle("is-hidden", Boolean(user)));
  const pill = document.querySelector(".user-pill");
  pill.classList.toggle("is-hidden", !user);
  pill.textContent = user ? user.name.slice(0, 1).toUpperCase() : "";

  if (!user) return;
  document.querySelector("[data-dashboard-greeting]").textContent = `Selamat datang, ${user.name}. Target belajar Anda ${user.target}.`;
  document.querySelector("[data-xp]").textContent = user.xp;
  document.querySelector("[data-streak]").textContent = `${user.streak} hari`;
  document.querySelector("[data-reviewed]").textContent = user.reviewed;
  document.querySelector("[data-target-level]").textContent = user.target;
}

function recordActivity(text, xp = 0, reviewed = 0) {
  const user = currentUser();
  if (!user) return;
  user.xp += xp;
  user.reviewed += reviewed;
  user.streak = Math.max(user.streak, 1);
  user.activities.unshift(text);
  user.activities = user.activities.slice(0, 6);
  saveState();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
}

function renderDashboard() {
  const pathWrap = document.querySelector("[data-daily-path]");
  pathWrap.innerHTML = data.path.map((item) => {
    const view = item[0] === "問" ? "quiz" : "";
    const lesson = item[0] === "あ" ? "Hiragana Dasar" : item[0] === "語" ? "Kamus Kosakata" : "Partikel & Grammar";
    const action = view ? `data-view="${view}"` : `data-lesson-open="${lesson}"`;
    return `
      <div class="path-item">
        <span>${item[0]}</span>
        <div><strong>${item[1]}</strong><p>${item[2]}</p></div>
        <button class="text-link nav-action" ${action}>Buka</button>
      </div>
    `;
  }).join("");

  const user = currentUser();
  const logs = user?.activities?.length ? user.activities : ["Belum ada aktivitas. Mulai dari flashcard atau kuis cepat."];
  document.querySelector("[data-activity-log]").innerHTML = logs.map((log) => `<li>${log}</li>`).join("");
}

function renderCategories() {
  document.querySelector("[data-category-list]").innerHTML = data.categories
    .map(([name, count]) => `<span>${name} <b>${count}</b></span>`)
    .join("");
}

function renderKana() {
  const rows = data.kana[activeKana];
  document.querySelector("[data-kana-grid]").innerHTML = rows.map(([char, romaji, meaning]) => `
    <article class="kana-tile">
      <strong>${char}</strong>
      <span>${romaji}</span>
      <small>${meaning}</small>
    </article>
  `).join("");
}

function renderLessons() {
  const countLabel = document.querySelector("[data-lesson-count]");
  if (countLabel) countLabel.textContent = `${data.lessons.length} modul`;

  document.querySelector("[data-lesson-grid]").innerHTML = data.lessons.map((lesson) => `
    <article class="lesson-card">
      <div>
        <span class="lesson-symbol">${lesson[0]}</span>
        <h2>${lesson[1]}</h2>
        <span class="lesson-level">${lesson[2]}</span>
        <p>${lesson[3]}</p>
      </div>
      <button class="text-link" data-lesson-open="${lesson[1]}">Mulai Materi</button>
    </article>
  `).join("");
}

function renderLessonDetail() {
  const lesson = data.lessonDetails[activeLesson] || data.lessonDetails["Hiragana Dasar"];
  document.querySelector("[data-lesson-level]").textContent = lesson.level;
  document.querySelector("[data-lesson-title]").textContent = activeLesson;
  document.querySelector("[data-lesson-summary]").textContent = lesson.summary;
  document.querySelector("[data-lesson-goals]").innerHTML = lesson.goals.map((goal) => `<li>${goal}</li>`).join("");
  document.querySelector("[data-lesson-body]").innerHTML = lesson.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  document.querySelector("[data-lesson-examples]").innerHTML = lesson.examples.map((example) => `<div>${example}</div>`).join("");
  document.querySelector("[data-lesson-vocab]").innerHTML = lesson.vocab.map((row) => `
    <div><strong>${row[0]}</strong><span>${row[1]}</span><small>${row[2]}</small></div>
  `).join("");
  document.querySelector("[data-lesson-practice]").textContent = lesson.practice;
}

function openLesson(title) {
  activeLesson = data.lessonDetails[title] ? title : "Hiragana Dasar";
  renderLessonDetail();
  recordActivity(`Membuka materi ${activeLesson}`, 5, 0);
  setView("lesson-detail");
}

function renderCard() {
  const card = data.cards[activeCard];
  cardFlipped = false;
  document.querySelector("[data-card-label]").textContent = card[0];
  document.querySelector("[data-card-front]").textContent = card[1];
  const back = document.querySelector("[data-card-back]");
  back.textContent = card[2];
  back.classList.add("is-hidden");
}

function renderQuestion() {
  const question = data.questions[activeQuestion];
  quizAnswered = false;
  document.querySelector("[data-question-count]").textContent = `Soal ${activeQuestion + 1}/${data.questions.length}`;
  document.querySelector("[data-quiz-score]").textContent = `${currentUser()?.xp || 0} XP`;
  document.querySelector("[data-question-text]").textContent = question.text;
  document.querySelector("[data-quiz-choices]").innerHTML = question.choices.map((choice, index) => `
    <button data-choice="${index}">${choice}</button>
  `).join("");
}

function renderLeaderboard() {
  const users = state.users.map((user) => ({ name: user.name, xp: user.xp, target: user.target }));
  const rows = [
    { name: "Alya Sakura", xp: 1280, target: "N4" },
    { name: "Raka Nihongo", xp: 980, target: "N3" },
    { name: "Dina Kanji", xp: 740, target: "N5" },
    ...users
  ].sort((a, b) => b.xp - a.xp).slice(0, 8);

  document.querySelector("[data-leaderboard]").innerHTML = rows.map((row, index) => `
    <article class="leaderboard-row">
      <span class="rank">${index + 1}</span>
      <div><strong>${row.name}</strong><p>Target JLPT ${row.target}</p></div>
      <strong>${row.xp} XP</strong>
    </article>
  `).join("");
}

function renderSearch(query = "") {
  const haystack = [
    ...data.lessons.map((item) => ({ type: "Materi", title: item[1], body: item[3], view: "lesson-detail", lesson: item[1] })),
    ...data.categories.map((item) => ({ type: "Kosakata", title: item[0], body: item[1], view: "lessons" })),
    ...Object.values(data.kana).flat().map((item) => ({ type: "Aksara", title: `${item[0]} ${item[1]}`, body: item[2], view: "kana" })),
    ...data.cards.map((item) => ({ type: "Flashcard", title: item[1], body: item[2], view: "flashcard" }))
  ];
  const normalized = query.trim().toLowerCase();
  const matches = haystack.filter((item) => {
    const text = `${item.type} ${item.title} ${item.body}`.toLowerCase();
    return !normalized || text.includes(normalized);
  }).slice(0, 10);

  document.querySelector("[data-search-results]").innerHTML = matches.map((item) => `
    <button class="search-result" data-search-target="${item.view}" ${item.lesson ? `data-lesson-open="${item.lesson}"` : ""}>
      <span>${item.type}</span>
      <strong>${item.title}</strong>
      <small>${item.body}</small>
    </button>
  `).join("");
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeAuth();

  if (event.target.closest("[data-close-search]")) {
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
  }

  const target = event.target.closest("button");
  if (!target) return;

  if (target.matches(".mobile-menu")) {
    document.querySelector(".topbar").classList.toggle("menu-open");
  }

  if (target.dataset.view) {
    const rect = target.getBoundingClientRect();
    bloomSakura(rect.left + rect.width / 2, rect.top + rect.height / 2);
    setView(target.dataset.view);
  }

  if (target.dataset.openAuth) {
    openAuth(target.dataset.openAuth);
  }

  if (target.matches("[data-open-search]")) {
    document.querySelector("[data-search-modal]").classList.remove("is-hidden");
    renderSearch();
    document.querySelector("[data-search-input]").focus();
  }

  if (target.dataset.authTab) setAuthTab(target.dataset.authTab);

  if (target.dataset.kanaTab) {
    activeKana = target.dataset.kanaTab;
    document.querySelectorAll("[data-kana-tab]").forEach((button) => {
      button.classList.toggle("is-active", button === target);
    });
    renderKana();
  }

  if (target.dataset.lessonOpen) {
    openLesson(target.dataset.lessonOpen);
  }

  if (target.matches("[data-start-learning]")) {
    currentUser() ? setView("dashboard") : openAuth("register");
  }

  if (target.matches("[data-flip-card]")) {
    cardFlipped = !cardFlipped;
    document.querySelector("[data-card-back]").classList.toggle("is-hidden", !cardFlipped);
  }

  if (target.dataset.grade) {
    const label = target.textContent.trim();
    recordActivity(`Flashcard dinilai: ${label}`, Number(target.dataset.grade) * 2, 1);
    activeCard = (activeCard + 1) % data.cards.length;
    renderCard();
  }

  if (target.dataset.choice !== undefined && !quizAnswered) {
    quizAnswered = true;
    const question = data.questions[activeQuestion];
    const index = Number(target.dataset.choice);
    target.classList.add(index === question.answer ? "is-correct" : "is-wrong");
    if (index === question.answer) recordActivity("Menjawab kuis dengan benar", 10, 0);
  }

  if (target.matches("[data-next-question]")) {
    activeQuestion = (activeQuestion + 1) % data.questions.length;
    renderQuestion();
  }

  if (target.matches("[data-logout]")) {
    state.currentEmail = "";
    saveState();
    updateAuthUI();
    setView("home");
  }

  if (target.dataset.searchTarget) {
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
    if (!target.dataset.lessonOpen) setView(target.dataset.searchTarget);
  }
});

document.querySelector("[data-auth-form='register']").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email")).toLowerCase();
  const message = document.querySelector("[data-register-message]");

  if (state.users.some((user) => user.email === email)) {
    message.textContent = "Email sudah terdaftar. Silakan masuk.";
    return;
  }

  const user = {
    name: String(formData.get("name")).trim(),
    email,
    password: String(formData.get("password")),
    target: String(formData.get("target")),
    xp: 25,
    streak: 1,
    reviewed: 0,
    activities: ["Akun gratis berhasil dibuat", "Bonus awal +25 XP"]
  };
  state.users.push(user);
  state.currentEmail = email;
  saveState();
  form.reset();
  message.textContent = "";
  closeAuth();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
  setView("dashboard");
});

document.querySelector("[data-auth-form='login']").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email")).toLowerCase();
  const password = String(formData.get("password"));
  const user = state.users.find((item) => item.email === email && item.password === password);
  const message = document.querySelector("[data-login-message]");

  if (!user) {
    message.textContent = "Email atau password tidak cocok.";
    return;
  }

  state.currentEmail = email;
  saveState();
  form.reset();
  message.textContent = "";
  closeAuth();
  updateAuthUI();
  renderDashboard();
  renderLeaderboard();
  setView("dashboard");
});

document.querySelector("[data-search-input]").addEventListener("input", (event) => {
  renderSearch(event.target.value);
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("[data-search-modal]").classList.remove("is-hidden");
    renderSearch();
    document.querySelector("[data-search-input]").focus();
  }

  if (event.key === "Escape") {
    closeAuth();
    document.querySelector("[data-search-modal]").classList.add("is-hidden");
  }
});

document.querySelectorAll(".quiz-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".quiz-option").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

renderCategories();
renderKana();
renderLessons();
renderLessonDetail();
renderCard();
renderQuestion();
renderDashboard();
renderLeaderboard();
updateAuthUI();
initSakura();
