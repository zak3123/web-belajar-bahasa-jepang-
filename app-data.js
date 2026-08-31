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
  ["即", "TOTAN NI", "N2-N3", "Segera setelah suatu kejadian, langsung terjadi aksi lain.", "とたんに menekankan kejadian yang langsung terjadi setelah momen tertentu, sering di luar kendali subjek.", ["家を出たとたん、雨が降り出した", "立ち上がったとたん、めまいがした", "電話を切ったとたん、また鳴った"], [["出る", "deru", "keluar"], ["降り出す", "furidasu", "mulai turun"], ["めまい", "memai", "pusing"], ["鳴る", "naru", "berbunyi"]], "Buat kalimat: begitu membuka pintu, angin masuk."],
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
      symbol,
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

data.lessons.forEach(([symbol, title]) => {
  if (data.lessonDetails[title] && !data.lessonDetails[title].symbol) {
    data.lessonDetails[title].symbol = symbol;
  }
});

const supplementalKana = {
  hiragana: [
    ["な", "na", "namae - nama"], ["に", "ni", "niwa - taman"], ["ぬ", "nu", "nuno - kain"], ["ね", "ne", "neko - kucing"], ["の", "no", "nomu - minum"],
    ["は", "ha", "hana - bunga"], ["ひ", "hi", "hikari - cahaya"], ["ふ", "fu", "fuyu - musim dingin"], ["へ", "he", "heya - kamar"], ["ほ", "ho", "hoshi - bintang"],
    ["ま", "ma", "machi - kota"], ["み", "mi", "mizu - air"], ["む", "mu", "mushi - serangga"], ["め", "me", "mata"], ["も", "mo", "mori - hutan"],
    ["や", "ya", "yama - gunung"], ["ゆ", "yu", "yuki - salju"], ["よ", "yo", "yoru - malam"], ["ら", "ra", "raion - singa"], ["り", "ri", "ringo - apel"],
    ["る", "ru", "rusu - tidak di rumah"], ["れ", "re", "rekishi - sejarah"], ["ろ", "ro", "roka - koridor"], ["わ", "wa", "watashi - saya"], ["を", "wo", "partikel objek"], ["ん", "n", "hon - buku"]
  ],
  katakana: [
    ["チ", "chi", "chiizu"], ["ツ", "tsu", "tsuaa"], ["テ", "te", "terebi"], ["ト", "to", "toire"],
    ["ナ", "na", "naifu"], ["ニ", "ni", "nyuusu"], ["ヌ", "nu", "nuudoru"], ["ネ", "ne", "netto"], ["ノ", "no", "nooto"],
    ["ハ", "ha", "hanbaagaa"], ["ヒ", "hi", "hoteru"], ["フ", "fu", "furansu"], ["ヘ", "he", "herumetto"], ["ホ", "ho", "hoomu"],
    ["マ", "ma", "maiku"], ["ミ", "mi", "miruku"], ["ム", "mu", "muubi"], ["メ", "me", "meeru"], ["モ", "mo", "mooru"],
    ["ヤ", "ya", "yasai"], ["ユ", "yu", "yuuzaa"], ["ヨ", "yo", "yooroppa"], ["ラ", "ra", "rajio"], ["リ", "ri", "risuto"],
    ["ル", "ru", "ruuru"], ["レ", "re", "resutoran"], ["ロ", "ro", "roketto"], ["ワ", "wa", "wain"], ["ヲ", "wo", "jarang dipakai"], ["ン", "n", "pan"]
  ]
};

const kanjiBank = [
  ["一", "ichi/hito", "satu"], ["二", "ni/futa", "dua"], ["三", "san/mi", "tiga"], ["四", "shi/yon", "empat"], ["五", "go/itsu", "lima"], ["六", "roku/mu", "enam"], ["七", "shichi/nana", "tujuh"], ["八", "hachi/ya", "delapan"], ["九", "kyuu/koko", "sembilan"], ["十", "juu/too", "sepuluh"],
  ["百", "hyaku", "seratus"], ["千", "sen/chi", "seribu"], ["万", "man/ban", "sepuluh ribu"], ["円", "en/maru", "yen, lingkaran"], ["年", "nen/toshi", "tahun"], ["上", "jou/ue", "atas"], ["下", "ka/shita", "bawah"], ["中", "chuu/naka", "tengah"], ["外", "gai/soto", "luar"], ["右", "u/migi", "kanan"],
  ["左", "sa/hidari", "kiri"], ["前", "zen/mae", "depan"], ["後", "go/ato", "belakang, setelah"], ["北", "hoku/kita", "utara"], ["南", "nan/minami", "selatan"], ["東", "tou/higashi", "timur"], ["西", "sei/nishi", "barat"], ["高", "kou/taka", "tinggi, mahal"], ["安", "an/yasu", "murah, aman"], ["新", "shin/atara", "baru"],
  ["古", "ko/furu", "lama, tua"], ["長", "chou/naga", "panjang"], ["短", "tan/mijika", "pendek"], ["白", "haku/shiro", "putih"], ["黒", "koku/kuro", "hitam"], ["赤", "seki/aka", "merah"], ["青", "sei/ao", "biru"], ["先", "sen/saki", "sebelum, depan"], ["生", "sei/i", "hidup, lahir"], ["学", "gaku/mana", "belajar"],
  ["校", "kou", "sekolah"], ["友", "yuu/tomo", "teman"], ["名", "mei/na", "nama"], ["何", "ka/nani", "apa"], ["時", "ji/toki", "waktu, jam"], ["分", "fun/bun/wa", "menit, bagian"], ["半", "han/naka", "setengah"], ["今", "kon/ima", "sekarang"], ["毎", "mai", "setiap"], ["週", "shuu", "minggu"],
  ["曜", "you", "hari dalam pekan"], ["朝", "chou/asa", "pagi"], ["昼", "chuu/hiru", "siang"], ["夜", "ya/yoru", "malam"], ["午", "go", "tengah hari"], ["休", "kyuu/yasu", "istirahat"], ["体", "tai/karada", "tubuh"], ["車", "sha/kuruma", "mobil"], ["駅", "eki", "stasiun"], ["電", "den", "listrik"],
  ["気", "ki", "energi, udara"], ["天", "ten/ama", "langit"], ["雨", "u/ame", "hujan"], ["雪", "setsu/yuki", "salju"], ["花", "ka/hana", "bunga"], ["草", "sou/kusa", "rumput"], ["犬", "ken/inu", "anjing"], ["猫", "neko", "kucing"], ["魚", "gyo/sakana", "ikan"], ["肉", "niku", "daging"],
  ["米", "bei/kome", "beras"], ["茶", "cha/sa", "teh"], ["飯", "han/meshi", "nasi, makanan"], ["店", "ten/mise", "toko"], ["買", "bai/ka", "membeli"], ["売", "bai/u", "menjual"], ["読", "doku/yo", "membaca"], ["書", "sho/ka", "menulis"], ["聞", "bun/ki", "mendengar"], ["話", "wa/hana", "berbicara"],
  ["見", "ken/mi", "melihat"], ["行", "kou/i", "pergi"], ["来", "rai/ku", "datang"], ["帰", "ki/kae", "pulang"], ["食", "shoku/ta", "makan"], ["飲", "in/no", "minum"], ["立", "ritsu/ta", "berdiri"], ["入", "nyuu/hai", "masuk"], ["出", "shutsu/de", "keluar"], ["会", "kai/a", "bertemu"],
  ["社", "sha/yashiro", "perusahaan"], ["員", "in", "anggota"], ["国", "koku/kuni", "negara"], ["語", "go/kata", "bahasa"], ["英", "ei", "Inggris"], ["漢", "kan", "Cina, kanji"], ["字", "ji/aza", "huruf"], ["文", "bun/fumi", "kalimat, tulisan"], ["母", "bo/haha", "ibu"], ["父", "fu/chichi", "ayah"],
  ["子", "shi/ko", "anak"], ["女", "jo/onna", "perempuan"], ["男", "dan/otoko", "laki-laki"], ["手", "shu/te", "tangan"], ["足", "soku/ashi", "kaki"], ["目", "moku/me", "mata"], ["口", "kou/kuchi", "mulut"], ["耳", "ji/mimi", "telinga"], ["心", "shin/kokoro", "hati"], ["力", "riki/chikara", "kekuatan"],
  ["間", "kan/aida", "interval, ruang"], ["道", "dou/michi", "jalan"], ["家", "ka/ie", "rumah"], ["室", "shitsu/muro", "ruangan"], ["町", "chou/machi", "kota"], ["村", "son/mura", "desa"], ["市", "shi/ichi", "kota, pasar"], ["場", "jou/ba", "tempat"], ["物", "butsu/mono", "benda"], ["者", "sha/mono", "orang"],
  ["事", "ji/koto", "hal"], ["料", "ryou", "biaya, bahan"], ["理", "ri", "alasan, prinsip"], ["作", "saku/tsuku", "membuat"], ["使", "shi/tsuka", "memakai"], ["始", "shi/haji", "mulai"], ["終", "shuu/o", "selesai"], ["習", "shuu/nara", "belajar"], ["教", "kyou/oshi", "mengajar"], ["考", "kou/kanga", "berpikir"],
  ["答", "tou/kota", "jawaban"], ["問", "mon/to", "pertanyaan"], ["題", "dai", "topik, soal"], ["用", "you/mochi", "keperluan"], ["意", "i", "maksud"], ["味", "mi/aji", "rasa"], ["音", "on/oto", "suara"], ["楽", "gaku/tano", "musik, senang"], ["切", "setsu/ki", "memotong"], ["近", "kin/chika", "dekat"],
  ["遠", "en/too", "jauh"], ["早", "sou/haya", "cepat, pagi"], ["遅", "chi/oso", "lambat"], ["多", "ta/oo", "banyak"], ["少", "shou/suku", "sedikit"], ["強", "kyou/tsuyo", "kuat"], ["弱", "jaku/yowa", "lemah"], ["正", "sei/tada", "benar"], ["同", "dou/ona", "sama"], ["別", "betsu/waka", "berbeda"],
  ["便", "ben/tayo", "praktis, surat"], ["利", "ri", "keuntungan"], ["不", "fu/bu", "tidak"], ["有", "yuu/a", "ada, punya"], ["無", "mu/na", "tidak ada"], ["化", "ka/ba", "perubahan"], ["主", "shu/nushi", "utama"], ["注", "chuu/soso", "menuang, catatan"], ["医", "i", "dokter"], ["病", "byou/yamai", "sakit"],
  ["院", "in", "institusi"], ["薬", "yaku/kusuri", "obat"], ["働", "dou/hatara", "bekerja"], ["動", "dou/ugo", "bergerak"], ["勉", "ben", "usaha"], ["強", "kyou/tsuyo", "kuat, belajar"], ["試", "shi/kokoro", "mencoba"], ["験", "ken", "ujian"], ["質", "shitsu", "kualitas, pertanyaan"], ["問", "mon/to", "pertanyaan"]
];

const extendedKanjiBank = [
  ["自", "ji/mizuka", "sendiri"], ["転", "ten/koro", "berputar, pindah"], ["空", "kuu/sora", "langit, kosong"], ["港", "kou/minato", "pelabuhan"], ["海", "kai/umi", "laut"], ["森", "shin/mori", "hutan"], ["林", "rin/hayashi", "hutan kecil"], ["田", "den/ta", "sawah"], ["畑", "hatake", "ladang"], ["石", "seki/ishi", "batu"],
  ["岩", "gan/iwa", "batu besar"], ["虫", "chuu/mushi", "serangga"], ["鳥", "chou/tori", "burung"], ["馬", "ba/uma", "kuda"], ["牛", "gyuu/ushi", "sapi"], ["羊", "you/hitsuji", "domba"], ["貝", "bai/kai", "kerang"], ["竹", "chiku/take", "bambu"], ["糸", "shi/ito", "benang"], ["紙", "shi/kami", "kertas"],
  ["絵", "kai/e", "gambar"], ["色", "shoku/iro", "warna"], ["声", "sei/koe", "suara"], ["歌", "ka/uta", "lagu"], ["春", "shun/haru", "musim semi"], ["夏", "ka/natsu", "musim panas"], ["秋", "shuu/aki", "musim gugur"], ["冬", "tou/fuyu", "musim dingin"], ["風", "fuu/kaze", "angin"], ["光", "kou/hikari", "cahaya"],
  ["暑", "sho/atsu", "panas"], ["寒", "kan/samu", "dingin"], ["晴", "sei/ha", "cerah"], ["雲", "un/kumo", "awan"], ["星", "sei/hoshi", "bintang"], ["明", "mei/aka", "terang"], ["暗", "an/kura", "gelap"], ["元", "gen/moto", "asal, sehat"], ["良", "ryou/yo", "baik"], ["悪", "aku/waru", "buruk"],
  ["忙", "bou/isoga", "sibuk"], ["広", "kou/hiro", "luas"], ["狭", "kyou/sema", "sempit"], ["重", "juu/omo", "berat"], ["軽", "kei/karu", "ringan"], ["太", "tai/futo", "tebal, gemuk"], ["細", "sai/hoso", "tipis, halus"], ["甘", "kan/ama", "manis"], ["辛", "shin/kara", "pedas, sulit"], ["苦", "ku/kuru", "pahit, menderita"],
  ["若", "jaku/waka", "muda"], ["老", "rou/o", "tua"], ["親", "shin/oya", "orang tua"], ["兄", "kei/ani", "kakak laki-laki"], ["弟", "tei/otouto", "adik laki-laki"], ["姉", "shi/ane", "kakak perempuan"], ["妹", "mai/imouto", "adik perempuan"], ["夫", "fu/otto", "suami"], ["妻", "sai/tsuma", "istri"], ["族", "zoku", "keluarga, suku"],
  ["私", "shi/watashi", "saya"], ["僕", "boku", "saya pria"], ["君", "kun/kimi", "kamu"], ["彼", "hi/kare", "dia laki-laki"], ["氏", "shi", "tuan, marga"], ["民", "min/tami", "rakyat"], ["官", "kan", "pejabat"], ["客", "kyaku", "tamu"], ["患", "kan/wazura", "menderita sakit"], ["歯", "shi/ha", "gigi"],
  ["頭", "tou/atama", "kepala"], ["顔", "gan/kao", "wajah"], ["首", "shu/kubi", "leher"], ["胸", "kyou/mune", "dada"], ["腹", "fuku/hara", "perut"], ["指", "shi/yubi", "jari"], ["背", "hai/se", "punggung"], ["血", "ketsu/chi", "darah"], ["骨", "kotsu/hone", "tulang"], ["熱", "netsu/atsu", "panas, demam"],
  ["痛", "tsuu/ita", "sakit"], ["治", "chi/nao", "sembuh, mengobati"], ["屋", "oku/ya", "toko, atap"], ["台", "dai", "alas, platform"], ["所", "sho/tokoro", "tempat"], ["部", "bu", "bagian"], ["開", "kai/hira", "membuka"], ["閉", "hei/shi", "menutup"], ["門", "mon/kado", "gerbang"], ["戸", "ko/to", "pintu"],
  ["窓", "sou/mado", "jendela"], ["階", "kai", "lantai, tingkat"], ["建", "ken/ta", "membangun"], ["橋", "kyou/hashi", "jembatan"], ["船", "sen/fune", "kapal"], ["飛", "hi/to", "terbang"], ["機", "ki", "mesin, kesempatan"], ["地", "chi/ji", "tanah, lokasi"], ["図", "zu/to", "gambar, peta"], ["館", "kan", "gedung"],
  ["園", "en/sono", "taman"], ["寺", "ji/tera", "kuil Buddha"], ["神", "shin/kami", "dewa"], ["交", "kou/maji", "bergaul, bertukar"], ["通", "tsuu/too", "lewat, komunikasi"], ["運", "un/hako", "membawa, nasib"], ["送", "sou/oku", "mengirim"], ["着", "chaku/tsu", "tiba, memakai"], ["乗", "jou/no", "naik kendaraan"], ["降", "kou/o", "turun"],
  ["歩", "ho/aru", "berjalan"], ["走", "sou/hashi", "berlari"], ["止", "shi/to", "berhenti"], ["待", "tai/ma", "menunggu"], ["持", "ji/mo", "memegang"], ["取", "shu/to", "mengambil"], ["置", "chi/o", "meletakkan"], ["貸", "tai/ka", "meminjamkan"], ["借", "shaku/ka", "meminjam"], ["返", "hen/kae", "mengembalikan"],
  ["忘", "bou/wasu", "lupa"], ["覚", "kaku/obo", "ingat"], ["住", "juu/su", "tinggal"], ["泊", "haku/to", "menginap"], ["洗", "sen/ara", "mencuci"], ["掃", "sou/ha", "menyapu"], ["起", "ki/o", "bangun, terjadi"], ["寝", "shin/ne", "tidur"], ["遊", "yuu/aso", "bermain"], ["泳", "ei/oyo", "berenang"],
  ["泣", "kyuu/na", "menangis"], ["笑", "shou/wara", "tertawa"], ["怒", "do/oko", "marah"], ["急", "kyuu/iso", "mendesak, cepat"], ["困", "kon/koma", "kesulitan"], ["疲", "hi/tsuka", "lelah"], ["助", "jo/tasu", "membantu"], ["呼", "ko/yo", "memanggil"], ["吸", "kyuu/su", "menghirup"], ["吹", "sui/fu", "meniup"],
  ["押", "ou/o", "mendorong"], ["引", "in/hi", "menarik"], ["払", "futsu/hara", "membayar"], ["選", "sen/era", "memilih"], ["決", "ketsu/ki", "memutuskan"], ["定", "tei/sada", "menentukan"], ["予", "yo", "sebelumnya"], ["約", "yaku", "janji, ringkas"], ["計", "kei/haka", "menghitung"], ["画", "ga/kaku", "gambar, rencana"],
  ["録", "roku", "merekam"], ["写", "sha/utsu", "menyalin, foto"], ["真", "shin/ma", "kebenaran"], ["映", "ei/utsu", "memantulkan, film"], ["放", "hou/hana", "melepas"], ["組", "so/kumi", "kelompok"], ["番", "ban", "nomor, giliran"], ["号", "gou", "nomor"], ["品", "hin/shina", "barang"], ["服", "fuku", "pakaian"],
  ["靴", "ka/kutsu", "sepatu"], ["帽", "bou", "topi"], ["財", "zai", "harta"], ["布", "fu/nuno", "kain"], ["貨", "ka", "barang, uang"], ["庫", "ko", "gudang"], ["冷", "rei/tsume", "dingin"], ["温", "on/atata", "hangat"], ["暖", "dan/atata", "hangat"], ["酒", "shu/sake", "alkohol"],
  ["油", "yu/abura", "minyak"], ["塩", "en/shio", "garam"], ["糖", "tou", "gula"], ["卵", "ran/tamago", "telur"], ["乳", "nyuu/chichi", "susu"], ["野", "ya/no", "ladang"], ["菜", "sai/na", "sayur"], ["果", "ka/ha", "buah, hasil"], ["豆", "tou/mame", "kacang"], ["麦", "baku/mugi", "gandum"],
  ["粉", "fun/ko", "bubuk"], ["皿", "sara", "piring"], ["箸", "hashi", "sumpit"], ["包", "hou/tsutsu", "membungkus"], ["丁", "chou/tei", "blok, alat"], ["刀", "tou/katana", "pedang"], ["工", "kou", "teknik, pekerjaan"], ["業", "gyou/waza", "pekerjaan, industri"], ["産", "san/u", "produksi, melahirkan"], ["農", "nou", "pertanian"],
  ["商", "shou", "dagang"], ["課", "ka", "bagian, pelajaran"], ["係", "kei/kakari", "petugas"], ["務", "mu", "tugas"], ["勤", "kin/tsuto", "bekerja"], ["役", "yaku", "peran"], ["席", "seki", "kursi, tempat"], ["議", "gi", "diskusi"], ["報", "hou/shira", "laporan"], ["告", "koku/tsu", "memberitahu"],
  ["資", "shi", "modal, dokumen"], ["表", "hyou/omote", "permukaan, tabel"], ["線", "sen", "garis"], ["点", "ten", "titik"], ["丸", "gan/maru", "bulat"], ["形", "kei/katachi", "bentuk"], ["角", "kaku/kado", "sudut"], ["直", "choku/nao", "langsung, memperbaiki"], ["曲", "kyoku/ma", "lagu, berbelok"], ["平", "hei/taira", "datar"],
  ["和", "wa/yawa", "harmoni, Jepang"], ["洋", "you", "barat, samudra"], ["界", "kai", "dunia, batas"], ["世", "sei/yo", "dunia, generasi"], ["代", "dai/ka", "generasi, biaya"], ["歴", "reki", "sejarah"], ["史", "shi", "sejarah"], ["昔", "seki/mukashi", "dahulu"], ["未", "mi/mada", "belum"], ["末", "matsu/sue", "akhir"],
  ["次", "ji/tsugi", "berikutnya"], ["初", "sho/hatsu", "pertama"], ["最", "sai/motto", "paling"], ["回", "kai/mawa", "kali, berputar"], ["度", "do/tabi", "derajat, kali"], ["第", "dai", "urutan"], ["等", "tou/hito", "setara, kelas"], ["級", "kyuu", "tingkat"], ["類", "rui", "jenis"], ["例", "rei/tato", "contoh"],
  ["数", "suu/kazu", "angka, jumlah"], ["算", "san", "menghitung"], ["辞", "ji", "kata, kamus"], ["典", "ten", "kamus, aturan"], ["説", "setsu/to", "menjelaskan"], ["研", "ken/to", "mengasah, meneliti"], ["究", "kyuu/kiwa", "menyelidiki"], ["宿", "shuku/yado", "penginapan, tugas"], ["卒", "sotsu", "lulus"], ["政", "sei", "politik"],
  ["済", "sai/su", "selesai, ekonomi"], ["経", "kei/he", "melalui, ekonomi"], ["法", "hou", "hukum, cara"], ["律", "ritsu", "hukum, irama"], ["則", "soku", "aturan"], ["規", "ki", "aturan"], ["制", "sei", "sistem"], ["戦", "sen/ikusa", "perang"], ["争", "sou/araso", "bertengkar"], ["勝", "shou/ka", "menang"],
  ["負", "fu/ma", "kalah, memikul"], ["敗", "hai/yabu", "kalah"], ["守", "shu/mamo", "melindungi"], ["攻", "kou/se", "menyerang"], ["軍", "gun", "tentara"], ["隊", "tai", "pasukan"], ["兵", "hei", "prajurit"], ["警", "kei", "waspada, polisi"], ["察", "satsu", "memeriksa"], ["消", "shou/ke", "menghapus"],
  ["防", "bou/fuse", "mencegah"], ["救", "kyuu/suku", "menolong"], ["険", "ken/kewa", "bahaya, curam"], ["危", "ki/abu", "bahaya"], ["害", "gai", "kerugian"], ["全", "zen/matta", "utuh, semua"], ["皆", "kai/mina", "semua orang"], ["各", "kaku", "masing-masing"], ["他", "ta/hoka", "lain"], ["共", "kyou/tomo", "bersama"],
  ["対", "tai/tsui", "berhadapan"], ["反", "han/so", "melawan"], ["賛", "san", "setuju"], ["協", "kyou", "kerja sama"], ["努", "do/tsuto", "berusaha"], ["労", "rou", "tenaga, kerja"], ["功", "kou", "prestasi"], ["成", "sei/na", "menjadi"], ["失", "shitsu/ushina", "hilang, gagal"], ["得", "toku/e", "mendapat"],
  ["可", "ka", "boleh, dapat"], ["能", "nou", "kemampuan"], ["許", "kyo/yuru", "mengizinkan"], ["認", "nin/mito", "mengakui"], ["識", "shiki", "pengetahuan"], ["感", "kan", "merasakan"], ["情", "jou/nasa", "perasaan"], ["想", "sou/omo", "pikiran"], ["念", "nen", "pikiran, perhatian"], ["願", "gan/nega", "harapan"],
  ["望", "bou/nozo", "harapan"], ["希", "ki", "harapan, jarang"], ["愛", "ai", "cinta"], ["好", "kou/su", "suka"], ["嫌", "ken/kira", "benci"], ["悲", "hi/kana", "sedih"], ["喜", "ki/yoroko", "senang"], ["怖", "fu/kowa", "takut"], ["寂", "jaku/sabi", "sepi"], ["静", "sei/shizu", "tenang"],
  ["賑", "shin/nigi", "ramai"], ["必", "hitsu/kanara", "pasti, perlu"], ["要", "you/i", "perlu, inti"], ["術", "jutsu", "teknik, seni"], ["技", "gi", "teknik"], ["科", "ka", "sains, departemen"], ["管", "kan/kuda", "mengelola, pipa"], ["営", "ei/itona", "mengelola"], ["造", "zou/tsuku", "membuat"], ["築", "chiku/kizu", "membangun"],
  ["設", "setsu/mou", "mendirikan"], ["備", "bi/sona", "persiapan"], ["準", "jun", "standar, persiapan"], ["量", "ryou/haka", "jumlah"], ["増", "zou/fu", "bertambah"], ["減", "gen/he", "berkurang"], ["比", "hi/kura", "membandingkan"], ["較", "kaku", "membandingkan"], ["差", "sa", "perbedaan"], ["違", "i/chiga", "berbeda"],
  ["似", "ji/ni", "mirip"], ["変", "hen/ka", "berubah"], ["移", "i/utsu", "pindah"], ["続", "zoku/tsuzu", "lanjut"], ["過", "ka/su", "melewati, berlebih"], ["去", "kyo/sa", "pergi, masa lalu"], ["戻", "rei/modo", "kembali"], ["進", "shin/susu", "maju"], ["退", "tai/shirizo", "mundur"], ["登", "tou/nobo", "naik"],
  ["落", "raku/o", "jatuh"], ["流", "ryuu/naga", "mengalir"], ["準", "jun", "persiapan"], ["優", "yuu/yasa", "unggul, lembut"], ["易", "eki/yasa", "mudah"], ["難", "nan/muzuka", "sulit"], ["単", "tan", "sederhana"], ["簡", "kan", "sederhana"], ["適", "teki", "cocok"], ["確", "kaku/tashi", "pasti"]
];

const vocabularyBank = [
  ["挨拶", "aisatsu", "salam"], ["おはよう", "ohayou", "selamat pagi"], ["こんにちは", "konnichiwa", "halo/selamat siang"], ["こんばんは", "konbanwa", "selamat malam"], ["ありがとう", "arigatou", "terima kasih"], ["すみません", "sumimasen", "permisi/maaf"], ["お願いします", "onegaishimasu", "tolong"], ["大丈夫", "daijoubu", "baik-baik saja"], ["名前", "namae", "nama"], ["学生", "gakusei", "pelajar"],
  ["先生", "sensei", "guru"], ["会社員", "kaishain", "pegawai perusahaan"], ["友達", "tomodachi", "teman"], ["家族", "kazoku", "keluarga"], ["母", "haha", "ibu"], ["父", "chichi", "ayah"], ["兄", "ani", "kakak laki-laki"], ["姉", "ane", "kakak perempuan"], ["弟", "otouto", "adik laki-laki"], ["妹", "imouto", "adik perempuan"],
  ["家", "ie", "rumah"], ["部屋", "heya", "kamar"], ["台所", "daidokoro", "dapur"], ["机", "tsukue", "meja"], ["椅子", "isu", "kursi"], ["窓", "mado", "jendela"], ["ドア", "doa", "pintu"], ["布団", "futon", "kasur"], ["電気", "denki", "lampu/listrik"], ["時計", "tokei", "jam"],
  ["ご飯", "gohan", "nasi/makanan"], ["水", "mizu", "air"], ["お茶", "ocha", "teh"], ["牛乳", "gyuunyuu", "susu"], ["肉", "niku", "daging"], ["魚", "sakana", "ikan"], ["野菜", "yasai", "sayur"], ["果物", "kudamono", "buah"], ["卵", "tamago", "telur"], ["塩", "shio", "garam"],
  ["砂糖", "satou", "gula"], ["皿", "sara", "piring"], ["箸", "hashi", "sumpit"], ["包丁", "houchou", "pisau dapur"], ["冷蔵庫", "reizouko", "kulkas"], ["学校", "gakkou", "sekolah"], ["教室", "kyoushitsu", "kelas"], ["宿題", "shukudai", "PR"], ["試験", "shiken", "ujian"], ["勉強", "benkyou", "belajar"],
  ["本", "hon", "buku"], ["辞書", "jisho", "kamus"], ["鉛筆", "enpitsu", "pensil"], ["紙", "kami", "kertas"], ["質問", "shitsumon", "pertanyaan"], ["駅", "eki", "stasiun"], ["電車", "densha", "kereta"], ["地下鉄", "chikatetsu", "metro"], ["バス", "basu", "bus"], ["車", "kuruma", "mobil"],
  ["自転車", "jitensha", "sepeda"], ["切符", "kippu", "tiket"], ["空港", "kuukou", "bandara"], ["道", "michi", "jalan"], ["右", "migi", "kanan"], ["左", "hidari", "kiri"], ["前", "mae", "depan"], ["後ろ", "ushiro", "belakang"], ["近い", "chikai", "dekat"], ["遠い", "tooi", "jauh"],
  ["会社", "kaisha", "perusahaan"], ["仕事", "shigoto", "pekerjaan"], ["会議", "kaigi", "rapat"], ["メール", "meeru", "email"], ["資料", "shiryou", "dokumen"], ["報告", "houkoku", "laporan"], ["上司", "joushi", "atasan"], ["同僚", "douryou", "rekan kerja"], ["予定", "yotei", "jadwal"], ["残業", "zangyou", "lembur"],
  ["病院", "byouin", "rumah sakit"], ["薬", "kusuri", "obat"], ["頭", "atama", "kepala"], ["お腹", "onaka", "perut"], ["熱", "netsu", "demam"], ["痛い", "itai", "sakit"], ["咳", "seki", "batuk"], ["医者", "isha", "dokter"], ["看護師", "kangoshi", "perawat"], ["予約", "yoyaku", "reservasi"],
  ["晴れ", "hare", "cerah"], ["雨", "ame", "hujan"], ["雪", "yuki", "salju"], ["暑い", "atsui", "panas"], ["寒い", "samui", "dingin"], ["忙しい", "isogashii", "sibuk"], ["楽しい", "tanoshii", "menyenangkan"], ["難しい", "muzukashii", "sulit"], ["簡単", "kantan", "mudah"], ["便利", "benri", "praktis"],
  ["買う", "kau", "membeli"], ["売る", "uru", "menjual"], ["読む", "yomu", "membaca"], ["書く", "kaku", "menulis"], ["聞く", "kiku", "mendengar"], ["話す", "hanasu", "berbicara"], ["見る", "miru", "melihat"], ["行く", "iku", "pergi"], ["来る", "kuru", "datang"], ["帰る", "kaeru", "pulang"],
  ["食べる", "taberu", "makan"], ["飲む", "nomu", "minum"], ["待つ", "matsu", "menunggu"], ["休む", "yasumu", "istirahat"], ["働く", "hataraku", "bekerja"]
];

function appendUniqueRows(target, rows) {
  const seen = new Set(target.map((row) => row[0]));
  rows.forEach((row) => {
    if (!seen.has(row[0])) {
      target.push(row);
      seen.add(row[0]);
    }
  });
}

appendUniqueRows(data.kana.hiragana, supplementalKana.hiragana);
appendUniqueRows(data.kana.katakana, supplementalKana.katakana);
appendUniqueRows(data.kana.kanji, kanjiBank);
appendUniqueRows(data.kana.kanji, extendedKanjiBank);

const kanjiCorrections = {
  晴: ["sei/hare", "cerah"], 考: ["kou/kangaeru", "berpikir"], 作: ["saku/tsukuru", "membuat"], 使: ["shi/tsukau", "memakai"],
  始: ["shi/hajimeru", "mulai"], 終: ["shuu/owaru", "selesai"], 習: ["shuu/narau", "belajar"], 教: ["kyou/oshieru", "mengajar"],
  答: ["tou/kotaeru", "jawaban"], 問: ["mon/tou", "bertanya"], 用: ["you/mochiiru", "keperluan, memakai"], 楽: ["gaku/tanoshii", "musik, senang"],
  切: ["setsu/kiru", "memotong"], 近: ["kin/chikai", "dekat"], 遠: ["en/tooi", "jauh"], 早: ["sou/hayai", "cepat, pagi"],
  遅: ["chi/osoi", "lambat"], 多: ["ta/ooi", "banyak"], 少: ["shou/sukunai", "sedikit"], 強: ["kyou/tsuyoi", "kuat, belajar"],
  弱: ["jaku/yowai", "lemah"], 正: ["sei/tadashii", "benar"], 同: ["dou/onaji", "sama"], 別: ["betsu/wakareru", "berbeda, terpisah"],
  便: ["ben/tayori", "praktis, surat"], 有: ["yuu/aru", "ada, punya"], 無: ["mu/nai", "tidak ada"], 化: ["ka/bakeru", "perubahan"],
  注: ["chuu/sosogu", "menuang, catatan"], 働: ["dou/hataraku", "bekerja"], 動: ["dou/ugoku", "bergerak"], 試: ["shi/kokoromiru", "mencoba"],
  行: ["kou/iku", "pergi"], 来: ["rai/kuru", "datang"], 帰: ["ki/kaeru", "pulang"], 立: ["ritsu/tatsu", "berdiri"],
  入: ["nyuu/hairu", "masuk"], 出: ["shutsu/deru", "keluar"], 会: ["kai/au", "bertemu"], 語: ["go/kataru", "bahasa"],
  買: ["bai/kau", "membeli"], 売: ["bai/uru", "menjual"], 読: ["doku/yomu", "membaca"], 書: ["sho/kaku", "menulis"],
  聞: ["bun/kiku", "mendengar"], 話: ["wa/hanasu", "berbicara"], 見: ["ken/miru", "melihat"], 起: ["ki/okiru", "bangun, terjadi"],
  寝: ["shin/neru", "tidur"], 遊: ["yuu/asobu", "bermain"], 泳: ["ei/oyogu", "berenang"], 泣: ["kyuu/naku", "menangis"],
  笑: ["shou/warau", "tertawa"], 怒: ["do/okoru", "marah"], 困: ["kon/komaru", "kesulitan"], 疲: ["hi/tsukareru", "lelah"],
  助: ["jo/tasukeru", "membantu"], 呼: ["ko/yobu", "memanggil"], 吸: ["kyuu/suu", "menghirup"], 吹: ["sui/fuku", "meniup"],
  押: ["ou/osu", "mendorong"], 引: ["in/hiku", "menarik"], 払: ["futsu/harau", "membayar"], 選: ["sen/erabu", "memilih"],
  決: ["ketsu/kimeru", "memutuskan"], 定: ["tei/sadameru", "menentukan"], 計: ["kei/hakaru", "menghitung"], 写: ["sha/utsusu", "menyalin, foto"],
  映: ["ei/utsuru", "memantulkan, film"], 放: ["hou/hanasu", "melepas"], 住: ["juu/sumu", "tinggal"], 泊: ["haku/tomaru", "menginap"],
  洗: ["sen/arau", "mencuci"], 掃: ["sou/haku", "menyapu"], 借: ["shaku/kariru", "meminjam"], 返: ["hen/kaesu", "mengembalikan"],
  忘: ["bou/wasureru", "lupa"], 覚: ["kaku/oboeru", "ingat"], 開: ["kai/hiraku", "membuka"], 閉: ["hei/shimeru", "menutup"],
  建: ["ken/tateru", "membangun"], 飛: ["hi/tobu", "terbang"], 交: ["kou/majiru", "bergaul, bertukar"], 通: ["tsuu/tooru", "lewat, komunikasi"],
  運: ["un/hakobu", "membawa, nasib"], 送: ["sou/okuru", "mengirim"], 着: ["chaku/tsuku", "tiba, memakai"], 乗: ["jou/noru", "naik kendaraan"],
  降: ["kou/oriru", "turun"], 歩: ["ho/aruku", "berjalan"], 走: ["sou/hashiru", "berlari"], 止: ["shi/tomaru", "berhenti"],
  待: ["tai/matsu", "menunggu"], 持: ["ji/motsu", "memegang"], 取: ["shu/toru", "mengambil"], 置: ["chi/oku", "meletakkan"],
  貸: ["tai/kasu", "meminjamkan"], 重: ["juu/omoi", "berat"], 軽: ["kei/karui", "ringan"], 太: ["tai/futoi", "tebal, gemuk"],
  細: ["sai/hosoi", "tipis, halus"], 甘: ["kan/amai", "manis"], 辛: ["shin/karai", "pedas, sulit"], 苦: ["ku/kurushii", "pahit, menderita"],
  若: ["jaku/wakai", "muda"], 老: ["rou/oiru", "tua"], 広: ["kou/hiroi", "luas"], 狭: ["kyou/semai", "sempit"],
  良: ["ryou/yoi", "baik"], 悪: ["aku/warui", "buruk"], 忙: ["bou/isogashii", "sibuk"], 痛: ["tsuu/itai", "sakit"],
  治: ["chi/naoru", "sembuh, mengobati"], 済: ["sai/sumu", "selesai, ekonomi"], 経: ["kei/heru", "melalui, ekonomi"], 争: ["sou/arasou", "bertengkar"],
  勝: ["shou/katsu", "menang"], 負: ["fu/makeru", "kalah, memikul"], 敗: ["hai/yabureru", "kalah"], 守: ["shu/mamoru", "melindungi"],
  攻: ["kou/semeru", "menyerang"], 消: ["shou/kesu", "menghapus"], 防: ["bou/fusegu", "mencegah"], 救: ["kyuu/sukuu", "menolong"],
  険: ["ken/kewashii", "bahaya, curam"], 危: ["ki/abunai", "bahaya"], 全: ["zen/mattaku", "utuh, semua"], 努: ["do/tsutomeru", "berusaha"],
  成: ["sei/naru", "menjadi"], 失: ["shitsu/ushinau", "hilang, gagal"], 得: ["toku/eru", "mendapat"], 許: ["kyo/yurusu", "mengizinkan"],
  認: ["nin/mitomeru", "mengakui"], 想: ["sou/omou", "pikiran"], 願: ["gan/negau", "harapan"], 望: ["bou/nozomu", "harapan"],
  好: ["kou/suki", "suka"], 嫌: ["ken/kirai", "benci"], 悲: ["hi/kanashii", "sedih"], 喜: ["ki/yorokobu", "senang"],
  怖: ["fu/kowai", "takut"], 寂: ["jaku/sabishii", "sepi"], 静: ["sei/shizuka", "tenang"], 賑: ["shin/nigiyaka", "ramai"],
  営: ["ei/itonamu", "mengelola"], 造: ["zou/tsukuru", "membuat"], 築: ["chiku/kizuku", "membangun"], 設: ["setsu/moukeru", "mendirikan"],
  備: ["bi/sonaeru", "persiapan"], 量: ["ryou/hakaru", "jumlah"], 増: ["zou/fueru", "bertambah"], 減: ["gen/heru", "berkurang"],
  比: ["hi/kuraberu", "membandingkan"], 違: ["i/chigau", "berbeda"], 似: ["ji/niru", "mirip"], 変: ["hen/kawaru", "berubah"],
  移: ["i/utsuru", "pindah"], 続: ["zoku/tsuzuku", "lanjut"], 過: ["ka/sugiru", "melewati, berlebih"], 去: ["kyo/saru", "pergi, masa lalu"],
  戻: ["rei/modoru", "kembali"], 進: ["shin/susumu", "maju"], 退: ["tai/shirizoku", "mundur"], 登: ["tou/noboru", "naik"],
  落: ["raku/ochiru", "jatuh"], 流: ["ryuu/nagareru", "mengalir"], 優: ["yuu/yasashii", "unggul, lembut"], 易: ["eki/yasashii", "mudah"],
  難: ["nan/muzukashii", "sulit"], 確: ["kaku/tashika", "pasti"]
};

data.kana.kanji = data.kana.kanji.map((row) => {
  const correction = kanjiCorrections[row[0]];
  return correction ? [row[0], correction[0], correction[1]] : row;
});

data.lessonDetails["Hiragana Dasar"].vocab = data.kana.hiragana;
data.lessonDetails["Hiragana Dasar"].examples = data.kana.hiragana.slice(0, 36).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Katakana Dasar"].vocab = data.kana.katakana;
data.lessonDetails["Katakana Dasar"].examples = data.kana.katakana.slice(0, 36).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kanji N5-N1"].vocab = data.kana.kanji;
data.lessonDetails["Kanji N5-N1"].examples = data.kana.kanji.slice(0, 80).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kanji N5-N1"].body.push(`Bank kanji sekarang berisi ${data.kana.kanji.length} kanji dasar sampai menengah. Daftar ini dipakai sama untuk halaman Kanji, detail materi Kanji, pencarian, dan flashcard Kanji.`);
data.lessonDetails["Kamus Kosakata"].vocab = vocabularyBank;
data.lessonDetails["Kamus Kosakata"].examples = vocabularyBank.slice(0, 80).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kamus Kosakata"].body.push(`Bank kosakata utama berisi ${vocabularyBank.length} kata tematik. Isi ini dipakai sama untuk detail Kamus Kosakata, pencarian, dan flashcard kosakata.`);
data.categories = [
  ["salam & perkenalan", "10 kosakata"], ["keluarga", "10 kosakata"], ["benda rumah", "10 kosakata"], ["dapur & makanan", "20 kosakata"],
  ["sekolah", "10 kosakata"], ["transportasi", "15 kosakata"], ["kantor & pekerjaan", "10 kosakata"], ["kesehatan", "10 kosakata"],
  ["cuaca & sifat", "10 kosakata"], ["kata kerja dasar", "15 kosakata"], ["kanji utama", `${data.kana.kanji.length} kanji`], ["aksara dasar", `${data.kana.hiragana.length + data.kana.katakana.length} huruf`]
];

const lessonSummaryOverrides = {
  "Hiragana Dasar": `${data.kana.hiragana.length} huruf Hiragana dasar dan contoh kata untuk latihan baca.`,
  "Katakana Dasar": `${data.kana.katakana.length} huruf Katakana dan contoh kata serapan untuk latihan visual.`,
  "Kanji N5-N1": `${data.kana.kanji.length} kanji prioritas dengan bacaan, arti, contoh, dan flashcard.`,
  "Kamus Kosakata": `${vocabularyBank.length} kosakata tematik dari salam, rumah, dapur, sekolah, kerja, kesehatan, transportasi, dan kata kerja.`,
  "Partikel & Grammar": "Pahami partikel inti dan pola kalimat dasar untuk membangun kalimat Jepang yang benar.",
  "Reading Dokkai": "Latihan membaca teks pendek, pengumuman, jadwal, email, dan dialog JLPT.",
  "Listening Choukai": "Latihan memahami percakapan, instruksi, jadwal, lokasi, dan respons singkat.",
  "Flashcard SRS": "Gunakan kartu pintar untuk mengulang materi sesuai tingkat kesulitan daya ingat."
};

Object.entries(lessonSummaryOverrides).forEach(([title, summary]) => {
  if (data.lessonDetails[title]) data.lessonDetails[title].summary = summary;
});

data.lessons = data.lessons.map((lesson) => {
  const override = lessonSummaryOverrides[lesson[1]];
  return override ? [lesson[0], lesson[1], lesson[2], override] : lesson;
});

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const KNOWN_PARTICLES = ["は", "が", "を", "に", "で", "へ", "も", "の", "から", "まで", "と", "や"];

const PARTICLE_INFO = {
  "を": "objek langsung",
  "は": "topik kalimat",
  "が": "subjek atau informasi baru",
  "に": "waktu, tujuan, atau keberadaan",
  "で": "tempat terjadinya aksi atau alat",
  "へ": "arah gerak",
  "も": "juga / pun",
  "の": "kepemilikan atau keterangan"
};

const lessonTypes = {
  "Hiragana Dasar": "kana",
  "Katakana Dasar": "kana",
  "Kanji N5-N1": "kanji",
  "Kamus Kosakata": "vocabulary",
  "Partikel & Grammar": "grammar",
  "Reading Dokkai": "reading",
  "Listening Choukai": "listening",
  "Flashcard SRS": "flashcard",
  "Partikel WA vs GA": "grammar",
  "Partikel WO untuk Objek": "grammar",
  "Partikel NI Waktu & Tujuan": "grammar",
  "Partikel DE Tempat Aksi": "grammar",
  "Partikel E Arah": "grammar",
  "Partikel MO": "grammar",
  "Partikel NO Kepemilikan": "grammar",
  "Waktu & Jam": "grammar",
  "Angka & Counter Dasar": "grammar",
  "Kata Kerja Bentuk MASU": "grammar",
  "Kata Sifat I dan NA": "grammar",
  "Bentuk TE Dasar": "grammar",
  "Bentuk TE IMASU": "grammar",
  "Bentuk Potensial": "grammar",
  "Tai Form Keinginan": "grammar",
  "Pengalaman TA KOTO GA ARU": "grammar",
  "TE MO II": "grammar",
  "TE WA IKENAI": "grammar",
  "NAKEREBA NARANAI": "grammar",
  "TSUMORI": "grammar",
  "Perbandingan YORI": "grammar",
  "Superlatif ICHIBAN": "grammar",
  "SOU DESU Kabar": "grammar",
  "SOU DESU Terlihat": "grammar",
  "TARA Conditional": "grammar",
  "BA Conditional": "grammar",
  "NARA Conditional": "grammar",
  "Passive Ukemi": "grammar",
  "Causative Shieki": "grammar",
  "Keigo Dasar": "grammar",
  "Wake Da": "grammar",
  "Hazu Da": "grammar",
  "Hodo": "grammar",
  "Kagiri": "grammar",
  "Sai Ni": "grammar",
  "Yue Ni": "grammar",
  "Uru/Eru": "grammar",
  "TOTAN NI": "grammar",
  "Nuki Ni Shite": "grammar",
  "Kosakata Rumah": "vocabulary",
  "Kosakata Dapur": "vocabulary",
  "Kosakata Transportasi": "vocabulary",
  "Kosakata Belanja": "vocabulary",
  "Kosakata Kesehatan": "vocabulary",
  "Kosakata Kantor": "vocabulary",
  "Vokasi Kaigo": "vocabulary",
  "Vokasi Restoran": "vocabulary",
  "Vokasi Pabrik": "vocabulary",
  "Wawancara Kerja": "vocabulary",
  "Reading Pengumuman": "vocabulary",
  "Reading Email Pendek": "vocabulary",
  "Listening Angka & Harga": "vocabulary",
  "Listening Dialog Harian": "vocabulary",
  "Simulasi JLPT N5": "vocabulary",
  "Simulasi JLPT N4": "vocabulary",
  "Simulasi JLPT N3": "vocabulary"
};

function slugify(s) {
  return String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const titleToSlug = {};
const slugToTitle = {};
data.lessons.forEach((l) => {
  const t = l[1];
  const s = slugify(t);
  titleToSlug[t] = s;
  slugToTitle[s] = t;
});

const dashboardPath = [
  { slug: titleToSlug["Hiragana Dasar"], task: "Review 10 kartu Hiragana", time: "5 menit", action: "flashcard" },
  { slug: titleToSlug["Kamus Kosakata"], task: "Tambah 8 kosakata dapur", time: "10 menit", action: "lesson" },
  { slug: titleToSlug["Partikel WA vs GA"], task: "Baca ulang partikel WA dan GA", time: "12 menit", action: "lesson" },
  { slug: titleToSlug["Kamus Kosakata"], task: "Kerjakan kuis cepat JLPT N5", time: "8 menit", action: "quiz" }
];

function buildKanaQuestions(title) {
  const lesson = data.lessonDetails[title];
  if (!lesson) return [];
  const rows = (lesson.vocab || []).filter((r) => r[0] && r[1]);
  if (!rows.length) return [];
  const questions = [];
  const romajis = rows.map((r) => r[1]);
  const chars = rows.map((r) => r[0]);

  rows.forEach((row, idx) => {
    const correct = row[1];
    const pool = shuffle(romajis.filter((r, i) => i !== idx && r !== correct));
    const set = new Set([correct]);
    for (const d of pool) { if (set.size >= 4) break; set.add(d); }
    if (set.size < 2) return;
    const options = shuffle([...set]);
    questions.push({
      id: `${title}__k${idx}`,
      lessonId: title,
      category: lesson.level || "kana",
      type: "kana",
      question: `Apa bunyi (romaji) dari huruf 「${row[0]}」?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `「${row[0]}」 dibaca ${row[1]}${row[2] ? ` (contoh kata: ${row[2]})` : ""}.`
    });
  });

  rows.forEach((row, idx) => {
    const correct = row[0];
    const pool = shuffle(chars.filter((c, i) => i !== idx && c !== correct));
    const set = new Set([correct]);
    for (const d of pool) { if (set.size >= 4) break; set.add(d); }
    if (set.size < 2) return;
    const options = shuffle([...set]);
    questions.push({
      id: `${title}__kr${idx}`,
      lessonId: title,
      category: lesson.level || "kana",
      type: "kana",
      question: `Huruf apa yang dibaca "${row[1]}"?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `"${row[1]}" adalah bunyi huruf 「${row[0]}」.`
    });
  });

  return questions;
}

function buildVocabularyQuestions(title) {
  const lesson = data.lessonDetails[title];
  if (!lesson) return [];
  const rows = (lesson.vocab || []).filter((r) => r[0] && r[2]);
  if (!rows.length) return [];
  const globalMeanings = [];
  vocabularyBank.forEach((r) => r[2] && globalMeanings.push(r[2]));
  data.kana.kanji.forEach((r) => r[2] && globalMeanings.push(r[2]));

  const questions = [];
  rows.forEach((row, idx) => {
    const correct = row[2];
    const lessonDistract = rows.filter((r, i) => i !== idx && r[2] !== correct).map((r) => r[2]);
    const pool = shuffle(lessonDistract.concat(globalMeanings.filter((m) => m !== correct)));
    const set = new Set([correct]);
    for (const d of pool) { if (set.size >= 4) break; set.add(d); }
    if (set.size < 2) return;
    const options = shuffle([...set]);
    questions.push({
      id: `${title}__v${idx}`,
      lessonId: title,
      category: lesson.level || "vocab",
      type: "vocabulary",
      question: `Apa arti dari 「${row[0]}」 (${row[1]})?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `「${row[0]}」 (${row[1]}) artinya ${row[2]}.`
    });
  });
  return questions;
}

function buildKanjiQuestions(title, session = 0) {
  const lesson = data.lessonDetails[title];
  if (!lesson) return [];
  const rows = (lesson.vocab || []).filter((r) => r[0] && r[2]);
  if (!rows.length) return [];
  const PER_SESSION = 15;
  const shuffled = shuffle(rows.slice());
  const start = (session * PER_SESSION) % shuffled.length;
  const sessionRows = shuffled.slice(start, start + PER_SESSION);
  const questions = [];
  sessionRows.forEach((row, idx) => {
    const correct = row[2];
    const pool = shuffle(rows.filter((r) => r[2] && r[2] !== correct).map((r) => r[2]));
    const set = new Set([correct]);
    for (const d of pool) { if (set.size >= 4) break; set.add(d); }
    if (set.size < 2) return;
    const options = shuffle([...set]);
    questions.push({
      id: `${title}__c${session}-${idx}`,
      lessonId: title,
      category: lesson.level || "kanji",
      type: "kanji",
      question: `Apa arti dari kanji 「${row[0]}」 (${row[1]})?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `「${row[0]}」 (${row[1]}) artinya ${row[2]}.`
    });
  });
  return questions;
}

function buildGrammarQuestions(title) {
  const lesson = data.lessonDetails[title];
  if (!lesson) return [];
  const examples = lesson.examples || [];
  const vocab = lesson.vocab || [];
  if (!examples.length && !vocab.length) return [];

  const focal = lesson.symbol || (vocab.length ? vocab[0][0] : null);
  const isParticle = focal && KNOWN_PARTICLES.includes(focal);
  const questions = [];

  if (isParticle && focal) {
    const particleChoices = KNOWN_PARTICLES.filter((p) => p !== focal);
    examples.forEach((ex, idx) => {
      if (typeof ex !== "string" || !ex.includes(focal)) return;
      const blanked = ex.replace(focal, "___");
      const distractors = shuffle(particleChoices).slice(0, 3);
      const options = shuffle([focal, ...distractors]);
      const expl = `${focal} (${focal}) menandai ${PARTICLE_INFO[focal] || "fungsi partikel"} dalam kalimat ini.`;
      questions.push({
        id: `${title}__g${idx}`,
        lessonId: title,
        category: lesson.level || "grammar",
        type: "grammar",
        question: `Lengkapi kalimat: 「${blanked}」`,
        options,
        correctAnswer: options.indexOf(focal),
        explanation: expl
      });
    });
  }

  if (questions.length < 3) {
    vocab.forEach((row, idx) => {
      if (!row[0] || !row[2]) return;
      const correct = row[2];
      const pool = shuffle(vocab.filter((v, i) => i !== idx && v[2] && v[2] !== correct).map((v) => v[2]));
      const set = new Set([correct]);
      for (const d of pool) { if (set.size >= 4) break; set.add(d); }
      if (set.size < 2) return;
      const options = shuffle([...set]);
      questions.push({
        id: `${title}__gf${idx}`,
        lessonId: title,
        category: lesson.level || "grammar",
        type: "grammar",
        question: `Apa fungsi ${row[0]} (${row[1]})?`,
        options,
        correctAnswer: options.indexOf(correct),
        explanation: `${row[0]} (${row[1]}) berfungsi sebagai ${row[2]}.`
      });
    });
  }
  return questions;
}

function buildLessonQuestions(title) {
  const type = lessonTypes[title] || "vocabulary";
  switch (type) {
    case "kana": return buildKanaQuestions(title);
    case "kanji": return buildKanjiQuestions(title);
    case "grammar": return buildGrammarQuestions(title);
    case "reading":
    case "listening":
    case "vocabulary":
    case "flashcard":
    default: return buildVocabularyQuestions(title);
  }
}

function buildGeneralQuestions() {
  const explanations = [
    "「ご飯」(gohan) berarti nasi atau makanan secara umum.",
    "Huruf Hiragana untuk bunyi 'ka' adalah か.",
    "Partikel は (wa) menandai topik kalimat.",
    "Kanji 水 (mizu/sui) berarti air.",
    "Bentuk sopan kata kerja makan adalah 食べます (tabemasu)."
  ];
  return data.questions.map((q, i) => ({
    id: `umum__${i}`,
    lessonId: "umum",
    category: "Campuran",
    type: "mixed",
    question: q.text,
    options: q.choices.slice(),
    correctAnswer: q.answer,
    explanation: explanations[i] || ""
  }));
}

function validateContent() {
  const errors = [];
  const titles = new Set();
  data.lessons.forEach((lesson) => {
    const t = lesson[1];
    if (titles.has(t)) errors.push(`Duplikat judul materi: ${t}`);
    titles.add(t);
    if (!lessonTypes[t]) errors.push(`Tidak ada type untuk materi: ${t}`);
  });
  const checkQuestions = (qs, source) => {
    qs.forEach((q) => {
      if (!Array.isArray(q.options) || q.options.length < 2) {
        errors.push(`[${source}] Soal tidak punya cukup opsi: ${q.question}`);
      }
      if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
        errors.push(`[${source}] correctAnswer di luar opsi: ${q.question}`);
      } else if (q.options[q.correctAnswer] === undefined) {
        errors.push(`[${source}] opsi jawaban benar tidak ada: ${q.question}`);
      }
    });
  };
  checkQuestions(buildGeneralQuestions(), "umum");
  data.lessons.forEach((lesson) => {
    const t = lesson[1];
    checkQuestions(buildLessonQuestions(t), t);
  });
  return errors;
}

const contentErrors = validateContent();
if (typeof window !== "undefined" && contentErrors.length) {
  console.warn("[HiraKataKan] Masalah validasi materi/soal:", contentErrors);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    data,
    extraLessonModules,
    vocabularyBank,
    kanjiBank,
    shuffle,
    lessonTypes,
    titleToSlug,
    slugToTitle,
    dashboardPath,
    KNOWN_PARTICLES,
    buildKanaQuestions,
    buildVocabularyQuestions,
    buildKanjiQuestions,
    buildGrammarQuestions,
    buildLessonQuestions,
    buildGeneralQuestions,
    validateContent
  };
}

