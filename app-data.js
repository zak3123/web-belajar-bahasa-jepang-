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
      ["?", "a", "asa - pagi"], ["?", "i", "inu - anjing"], ["?", "u", "umi - laut"],
      ["?", "e", "eki - stasiun"], ["?", "o", "ocha - teh"], ["?", "ka", "kasa - payung"],
      ["?", "ki", "kiku - mendengar"], ["?", "ku", "kuni - negara"], ["?", "ke", "kesa - pagi ini"],
      ["?", "ko", "kome - beras"], ["?", "sa", "sakura - bunga sakura"], ["?", "shi", "shio - garam"],
      ["?", "su", "sushi"], ["?", "se", "sensei - guru"], ["?", "so", "sora - langit"],
      ["?", "ta", "taberu - makan"], ["?", "chi", "chizu - peta"], ["?", "tsu", "tsuki - bulan"],
      ["?", "te", "tegami - surat"], ["?", "to", "tokei - jam"]
    ],
    katakana: [
      ["?", "a", "amerika"], ["?", "i", "indo"], ["?", "u", "uranium"], ["?", "e", "eakon - AC"],
      ["?", "o", "orenji"], ["?", "ka", "kamera"], ["?", "ki", "kiwi"], ["?", "ku", "kurabu"],
      ["?", "ke", "keeki"], ["?", "ko", "koohii"], ["?", "sa", "sando"], ["?", "shi", "shatsu"],
      ["?", "su", "supo-tsu"], ["?", "se", "sentaa"], ["?", "so", "sofuto"], ["?", "ta", "takushii"]
    ],
    kanji: [
      ["?", "hi/nichi", "hari, matahari"], ["?", "tsuki/getsu", "bulan"], ["?", "hi/ka", "api"],
      ["?", "mizu/sui", "air"], ["?", "ki/moku", "pohon"], ["?", "kane/kin", "emas, uang"],
      ["?", "tsuchi/do", "tanah"], ["?", "hito/jin", "orang"], ["?", "yama/san", "gunung"],
      ["?", "kawa/sen", "sungai"], ["?", "oo/dai", "besar"], ["?", "chii/shou", "kecil"],
      ["?", "hon", "buku"], ["?", "go", "bahasa"], ["?", "ta/shoku", "makan"], ["?", "no/in", "minum"]
    ]
  },
  lessons: [
    ["?", "Hiragana Dasar", "N5", "46 huruf dasar, dakuten, handakuten, youon, dan latihan baca kata pendek."],
    ["?", "Katakana Dasar", "N5", "Pola baca kata serapan, nama asing, benda modern, dan latihan membedakan bentuk mirip."],
    ["?", "Kanji Campuran", "Campuran", "Kumpulan kanji campuran (berbagai level) dengan onyomi, kunyomi, makna, dan contoh kalimat."],
    ["?", "Kamus Kosakata", "Tematik", "Kosakata harian dari rumah, dapur, sekolah, kantor, bisnis, arah, cuaca, dan vokasi."],
    ["?", "Partikel & Grammar", "N5-N3", "Partikel WA, GA, WO, NI, DE, HE, TO, kara, made, dan pola kalimat dasar."],
    ["?", "Reading Dokkai", "N5-N2", "Latihan membaca pengumuman, email pendek, dialog, dan teks informatif."],
    ["?", "Listening Choukai", "N5-N2", "Simulasi percakapan sehari-hari, instruksi, jadwal, dan respons cepat."],
    ["?", "Flashcard SRS", "Semua Level", "Dek pintar yang menyesuaikan pengulangan berdasarkan jawaban belajar Anda."]
  ],
  lessonDetails: {
    "Hiragana Dasar": {
      level: "N5 - Aksara Dasar",
      summary: "Pelajari 46 huruf Hiragana, urutan bunyi, dakuten, handakuten, dan cara membaca kata sederhana.",
      goals: ["Mengenali baris vokal a-i-u-e-o", "Membaca kombinasi ka, sa, ta, na, ha, ma, ya, ra, wa", "Memahami dakuten seperti ka menjadi ga dan sa menjadi za"],
      body: [
        "Hiragana dipakai untuk kata asli Jepang, partikel, akhiran tata bahasa, dan furigana di atas kanji. Mulai dari lima vokal dasar: ? a, ? i, ? u, ? e, ? o.",
        "Setelah vokal, lanjutkan per baris konsonan. Contoh baris K adalah ? ka, ? ki, ? ku, ? ke, ? ko. Pola ini membuat hafalan lebih rapi daripada menghafal acak.",
        "Dakuten adalah tanda dua garis kecil yang mengubah bunyi. ? menjadi ?, ? menjadi ?, ? menjadi ?, dan ? menjadi ?. Handakuten berupa lingkaran kecil yang mengubah ? menjadi ?."
      ],
      examples: ["?? = asa = pagi", "?? = inu = anjing", "?? = kasa = payung", "???? = sensei = guru"],
      vocab: [["?", "a", "vokal dasar"], ["?", "ka", "baris K"], ["?", "ga", "dakuten K"], ["?", "pa", "handakuten H"]],
      practice: "Baca perlahan: ?????????????. Setelah lancar, buka Aksara Jepang dan cocokkan bentuk hurufnya."
    },
    "Katakana Dasar": {
      level: "N5 - Aksara Serapan",
      summary: "Katakana dipakai untuk kata serapan, nama asing, istilah modern, dan penekanan bunyi.",
      goals: ["Membedakan bentuk mirip seperti ?/? dan ?/?", "Membaca kata serapan dasar", "Memahami tanda panjang vokal ?"],
      body: [
        "Katakana memiliki bunyi yang sama dengan Hiragana, tetapi bentuknya lebih tegas dan sering dipakai untuk kata dari bahasa asing.",
        "Tanda ? memperpanjang vokal. ???? dibaca koohii, artinya kopi. ???? dibaca takushii, artinya taksi.",
        "Beberapa huruf terlihat mirip. ? shi dan ? tsu dibedakan dari arah goresan dan posisi titik. Latihan visual berulang sangat penting."
      ],
      examples: ["??? = kamera", "???? = kopi", "???? = taksi", "?????? = Indonesia"],
      vocab: [["?", "a", "vokal"], ["?", "ka", "kamera"], ["?", "shi", "shatsu"], ["?", "chouon", "pemanjang vokal"]],
      practice: "Coba baca: ?????????????????. Fokus pada vokal panjang."
    },
    "Kanji Campuran": {
      level: "Campuran",
      summary: "Kenali makna, onyomi, kunyomi, dan contoh pemakaian dari kumpulan kanji campuran (berbagai level).",
      goals: ["Membaca kanji harian N5", "Memahami bedanya onyomi dan kunyomi", "Menghubungkan kanji dengan kosakata nyata"],
      body: [
        "Kanji membawa makna. Satu kanji bisa punya beberapa bacaan. ? bisa dibaca hi, nichi, atau ka tergantung kata.",
        "Onyomi biasanya berasal dari bacaan Sino-Jepang dan sering muncul pada gabungan kanji. Kunyomi biasanya bacaan asli Jepang.",
        "Belajar kanji paling efektif lewat kata, bukan simbol saja. Contoh: ? saja berarti hari/matahari, tetapi ?? berarti Jepang dan ??? berarti Minggu."
      ],
      examples: ["? = hari/matahari", "? = bulan", "? = air", "?? = sekolah"],
      vocab: [["?", "hi/nichi", "hari"], ["?", "tsuki/getsu", "bulan"], ["?", "mizu/sui", "air"], ["??", "gakkou", "sekolah"]],
      practice: "Cocokkan arti: ?, ?, ?, ?, ?. Lalu cari contoh katanya di flashcard."
    },
    "Kamus Kosakata": {
      level: "Tematik",
      summary: "Kumpulan kosakata harian berdasarkan kategori agar mudah dipakai dalam percakapan.",
      goals: ["Menghafal kosakata dapur dan rumah", "Membuat kalimat pendek", "Memakai kosakata dalam konteks"],
      body: [
        "Kosakata tematik membantu otak menyimpan kata berdasarkan situasi. Mulai dari benda yang sering dilihat: rumah, dapur, sekolah, kantor, dan transportasi.",
        "Setiap kata sebaiknya dipasangkan dengan contoh kalimat. Contoh ?? tidak hanya berarti nasi, tetapi juga makanan secara umum dalam percakapan.",
        "Untuk latihan cepat, pilih 8 kata per hari dan ulang dengan SRS sampai jawabannya terasa otomatis."
      ],
      examples: ["?? = nasi/makanan", "? = air", "? = meja", "? = stasiun"],
      vocab: [["??", "gohan", "nasi/makanan"], ["?", "mizu", "air"], ["?", "tsukue", "meja"], ["?", "eki", "stasiun"]],
      practice: "Buat kalimat: ??????????????????????"
    },
    "Partikel & Grammar": {
      level: "N5-N3",
      summary: "Pahami partikel inti dan pola kalimat dasar untuk membangun kalimat Jepang yang benar.",
      goals: ["Membedakan ?, ?, ?, ?, ?", "Membuat kalimat A ? B ??", "Memakai kata kerja bentuk ??"],
      body: [
        "Partikel adalah penanda fungsi kata. ? menandai topik, ? sering menandai subjek atau informasi baru, ? menandai objek langsung.",
        "? sering dipakai untuk waktu atau tujuan, sedangkan ? menandai tempat terjadinya aksi atau alat yang digunakan.",
        "Pola dasar yang aman untuk pemula adalah: Topik ? Keterangan ?? dan Subjek ? Objek ? Kata kerja ??."
      ],
      examples: ["?????? = Saya pelajar", "?????? = Minum air", "??????? = Pergi ke sekolah", "?????? = Menunggu di stasiun"],
      vocab: [["?", "wa", "topik"], ["?", "o", "objek"], ["?", "ni", "waktu/tujuan"], ["?", "de", "tempat aksi/alat"]],
      practice: "Isi partikel: ?___??___????. Jawaban dasar: ??????????"
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
      examples: ["??? 9?? ??? ?????", "????? 8??? 10??????", "????? ?? ???????"],
      vocab: [["???", "ashita", "besok"], ["9?", "ku-ji", "jam 9"], ["??", "kara", "dari"], ["??", "made", "sampai"]],
      practice: "Baca: ?????8???10??????Pertanyaan: buka sampai jam berapa?"
    },
    "Listening Choukai": {
      level: "N5-N2",
      summary: "Latihan memahami percakapan, instruksi, jadwal, lokasi, dan respons singkat.",
      goals: ["Menangkap kata kunci audio", "Mengenali angka, waktu, dan tempat", "Memilih respons yang paling alami"],
      body: [
        "Listening tidak harus menangkap semua kata. Fokus pada kata kunci yang menjawab pertanyaan: siapa, di mana, kapan, berapa, dan melakukan apa.",
        "Biasakan mendengar angka dan waktu: ??, ?, ??, ??, ??, serta kata lokasi seperti ??, ????, ??.",
        "Untuk respons, perhatikan nada kalimat. Pertanyaan ????? biasanya membutuhkan jawaban waktu."
      ],
      examples: ["A: ??????B: 9????", "A: ????????B: ????", "A: ???????????B: ????????"],
      vocab: [["??", "nanji", "jam berapa"], ["?", "migi", "kanan"], ["?", "hidari", "kiri"], ["??", "hai", "ya"]],
      practice: "Simulasikan audio: ???????. Jawab: stasiun ada di kanan."
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
      examples: ["??? -> taberu -> makan", "?? -> nomu -> minum", "?? -> gakkou -> sekolah"],
      vocab: [["Lagi", "0", "ulang cepat"], ["Sulit", "3", "ulang agak cepat"], ["Bagus", "4", "normal"], ["Mudah", "5", "interval panjang"]],
      practice: "Buka Flashcard, balik kartu, lalu pilih penilaian sesuai daya ingat Anda."
    }
  },
  cards: [
    ["Kosakata N5", "???", "taberu - makan. Contoh: ????????"],
    ["Kosakata N5", "??", "nomu - minum. Contoh: ???????"],
    ["Kanji N5", "??", "gakkou - sekolah. Kanji: ? belajar, ? sekolah."],
    ["Grammar", "??????", "Watashi wa gakusei desu - Saya adalah pelajar."],
    ["Kosakata Harian", "?", "eki - stasiun. Contoh: ????????"]
  ],
  questions: [
    { text: "Apa arti dari ???? (gohan)?", choices: ["Air putih", "Nasi / makanan", "Sekolah", "Kereta"], answer: 1 },
    { text: "Huruf Hiragana untuk bunyi 'ka' adalah...", choices: ["?", "?", "?", "?"], answer: 1 },
    { text: "Partikel yang sering menandai topik kalimat adalah...", choices: ["?", "?", "?", "?"], answer: 2 },
    { text: "Kanji ??? berarti...", choices: ["Api", "Air", "Kayu", "Tanah"], answer: 1 },
    { text: "Kalimat sopan untuk 'makan' memakai bentuk...", choices: ["tabeta", "tabemasen", "tabemasu", "tabete"], answer: 2 }
  ],
  path: [
    ["?", "Review 10 kartu Hiragana", "5 menit"],
    ["?", "Tambah 8 kosakata dapur", "10 menit"],
    ["?", "Baca ulang partikel WA dan GA", "12 menit"],
    ["?", "Kerjakan kuis cepat JLPT N5", "8 menit"]
  ]
};

const extraLessonModules = [
  ["?", "Partikel WA vs GA", "N5", "Bedakan topik lama dan subjek/informasi baru dalam kalimat dasar.", "Gunakan ? untuk topik pembicaraan dan ? untuk penekanan subjek atau informasi yang baru diperkenalkan.", ["??????", "????????", "????????"], [["?", "wa", "topik"], ["?", "ga", "subjek"], ["?", "watashi", "saya"], ["?", "hon", "buku"]], "Isi partikel: ??___????????"],
  ["?", "Partikel WO untuk Objek", "N5", "Pahami objek langsung dalam kalimat kerja transitif.", "Partikel ? menandai benda yang menerima aksi langsung dari kata kerja seperti makan, minum, membaca, dan membeli.", ["???????", "??????", "??????"], [["??", "gohan", "nasi"], ["?", "mizu", "air"], ["??", "yomu", "membaca"], ["??", "kau", "membeli"]], "Buat 3 kalimat dengan pola: benda + ? + kata kerja."],
  ["?", "Partikel NI Waktu & Tujuan", "N5", "Gunakan ? untuk waktu spesifik, arah tujuan, dan keberadaan.", "? dipakai pada jam, hari tertentu, lokasi tujuan, dan posisi keberadaan dengan ????/???.", ["7??????", "???????", "??????????"], [["7?", "shichi-ji", "jam 7"], ["??", "gakkou", "sekolah"], ["?", "ue", "atas"], ["????", "arimasu", "ada benda"]], "Terjemahkan: Saya pergi ke sekolah jam 8."],
  ["?", "Partikel DE Tempat Aksi", "N5", "Gunakan ? untuk tempat terjadinya aktivitas dan alat yang dipakai.", "Jika suatu aksi terjadi di lokasi tertentu, gunakan ?. Partikel ini juga menandai alat, kendaraan, atau bahasa yang digunakan.", ["?????????", "???????", "????????"], [["???", "toshokan", "perpustakaan"], ["??", "benkyou", "belajar"], ["??", "basu", "bus"], ["??", "hanasu", "berbicara"]], "Pilih partikel: ?????___????????"],
  ["?", "Partikel E Arah", "N5", "Pahami perbedaan arah umum ? dan tujuan spesifik ?.", "? menandai arah gerak. Dalam banyak kalimat dasar, ? dan ? sama-sama bisa muncul, tetapi ? menekankan arah menuju tempat.", ["???????", "??????", "??????"], [["??", "nihon", "Jepang"], ["?", "ie", "rumah"], ["??", "kaeru", "pulang"], ["??", "aruku", "berjalan"]], "Buat kalimat: pergi ke Jepang."],
  ["?", "Partikel MO", "N5", "Gunakan ? untuk arti juga atau pun.", "? menggantikan ?/?/? ketika ingin menyatakan kesamaan: saya juga, ini juga, air pun diminum.", ["??????", "??????", "??????"], [["?", "watashi", "saya"], ["??", "gakusei", "pelajar"], ["??", "kore", "ini"], ["?", "mo", "juga"]], "Ubah: ?????? menjadi Saya juga pelajar."],
  ["?", "Partikel NO Kepemilikan", "N5", "Buat hubungan kepemilikan, asal, dan keterangan benda.", "? menghubungkan dua nomina. Pola A ? B berarti B milik A atau B yang berkaitan dengan A.", ["???", "??????", "????"], [["??", "sensei", "guru"], ["?", "mae", "depan"], ["???", "nihongo", "bahasa Jepang"], ["?", "hon", "buku"]], "Buat frasa: buku saya, guru bahasa Jepang."],
  ["?", "Waktu & Jam", "N5", "Baca jam, menit, hari, dan jadwal dasar.", "Materi waktu penting untuk reading dan listening karena sering menjadi jawaban utama soal.", ["??8???", "????????", "??6??????"], [["?", "ima", "sekarang"], ["??", "maiasa", "setiap pagi"], ["???", "getsuyoubi", "Senin"], ["??", "au", "bertemu"]], "Tulis jam bangun Anda dalam bahasa Jepang."],
  ["?", "Angka & Counter Dasar", "N5", "Pelajari angka, umur, harga, dan penghitung benda umum.", "Angka Jepang berubah bunyi pada beberapa counter. Mulai dari ???, ??? dan pola -? untuk harga.", ["??????????", "500???", "??20???"], [["??", "mittsu", "tiga benda"], ["?", "en", "yen"], ["?", "sai", "umur"], ["????", "kudasai", "tolong beri"]], "Baca: 100?, 300?, 800?."],
  ["?", "Kata Kerja Bentuk MASU", "N5", "Konjugasi sopan positif, negatif, lampau, dan lampau negatif.", "Bentuk ?? adalah bentuk sopan yang aman dipakai pemula. Ubah akar kata kerja menjadi pola ??, ???, ???, ??????.", ["????", "?????", "?????"], [["???", "taberu", "makan"], ["??", "nomu", "minum"], ["??", "iku", "pergi"], ["??", "miru", "melihat"]], "Konjugasikan: ?? ke bentuk negatif sopan."],
  ["?", "Kata Sifat I dan NA", "N5", "Bedakan akhiran ? dan kata sifat ? dalam kalimat.", "Kata sifat ? bisa langsung menerangkan benda, sedangkan kata sifat ? membutuhkan ? sebelum nomina.", ["????", "????", "?????????"], [["???", "ookii", "besar"], ["??", "shizuka", "tenang"], ["?", "machi", "kota"], ["???", "omoshiroi", "menarik"]], "Buat 2 frasa: rumah besar, kota tenang."],
  ["?", "Bentuk TE Dasar", "N5-N4", "Gunakan bentuk ? untuk menyambung aksi dan membuat permintaan.", "Bentuk ? adalah fondasi grammar. Dipakai untuk ????, ???, sambungan kalimat, dan banyak pola lanjutan.", ["???????", "????????", "??????????????"], [["??", "matsu", "menunggu"], ["??", "yomu", "membaca"], ["??", "iku", "pergi"], ["????", "kudasai", "tolong"]], "Ubah ?? menjadi bentuk ?."],
  ["?", "Bentuk TE IMASU", "N5-N4", "Nyatakan aktivitas yang sedang berlangsung atau kebiasaan/status.", "??? dapat berarti sedang melakukan, sudah dalam keadaan, atau kebiasaan tergantung kata kerja dan konteks.", ["?????????", "???????", "????????"], [["?", "ima", "sekarang"], ["??", "benkyou", "belajar"], ["??", "kekkon", "menikah"], ["??", "hashiru", "berlari"]], "Tulis kalimat: Saya sedang membaca buku."],
  ["?", "Bentuk Potensial", "N4", "Nyatakan kemampuan: bisa membaca, bisa pergi, bisa makan.", "Bentuk potensial menjawab apa yang bisa dilakukan seseorang. Untuk ichidan, ? berubah menjadi ???.", ["????????", "?????????", "??????"], [["???", "yomeru", "bisa membaca"], ["?????", "taberareru", "bisa makan"], ["???", "ikeru", "bisa pergi"], ["??", "ashita", "besok"]], "Ubah ?? menjadi bentuk potensial."],
  ["?", "Tai Form Keinginan", "N5-N4", "Ungkapkan keinginan melakukan sesuatu.", "Tambahkan ?? pada akar ?? untuk menyatakan ingin melakukan aksi. Objek bisa memakai ? atau ?.", ["?????????", "????????", "????????"], [["????", "ikitai", "ingin pergi"], ["????", "nomitai", "ingin minum"], ["??", "eiga", "film"], ["??", "miru", "melihat"]], "Tulis: Saya ingin makan ramen."],
  ["?", "Pengalaman TA KOTO GA ARU", "N4", "Nyatakan pernah melakukan sesuatu.", "Pola ?????? dipakai untuk pengalaman hidup. Gunakan bentuk lampau biasa sebelum ?????.", ["?????????????", "?????????????", "?????????????"], [["???", "itta", "pergi lampau"], ["???", "tabeta", "makan lampau"], ["???", "fujisan", "Gunung Fuji"], ["??", "keiken", "pengalaman"]], "Buat kalimat: Saya pernah membaca manga Jepang."],
  ["?", "TE MO II", "N4", "Meminta dan memberi izin.", "Pola ?????? berarti boleh melakukan. Untuk bertanya, gunakan ???????.", ["????????????", "???????????", "?????????"], [["??", "suwaru", "duduk"], ["??", "shashin", "foto"], ["??", "toru", "mengambil"], ["??", "hairu", "masuk"]], "Tanyakan: Boleh minum air?"],
  ["?", "TE WA IKENAI", "N4", "Menyatakan larangan dengan sopan.", "Pola ??????? berarti tidak boleh melakukan. Bentuk kasualnya ??????.", ["????????????????", "?????????", "?????????"], [["??", "suu", "mengisap"], ["???", "okureru", "terlambat"], ["???", "wasureru", "lupa"], ["??", "koko", "di sini"]], "Buat larangan: Tidak boleh masuk."],
  ["?", "NAKEREBA NARANAI", "N4", "Menyatakan kewajiban atau harus.", "Pola ????????? berarti harus melakukan. Bentuk percakapan sering menjadi ???.", ["????????????", "?????????????", "?????????????"], [["??", "benkyou", "belajar"], ["?", "kusuri", "obat"], ["??", "hayaku", "cepat/pagi"], ["???", "okiru", "bangun"]], "Tulis: Saya harus pergi ke sekolah."],
  ["?", "TSUMORI", "N4", "Menyatakan rencana atau niat.", "????? dipakai ketika rencana sudah cukup kuat. Gunakan bentuk kamus atau negatif sebelum ???.", ["????????????", "?????????????", "????????????"], [["??", "rainen", "tahun depan"], ["???", "atarashii", "baru"], ["??", "kau", "membeli"], ["???", "tsumori", "niat"]], "Buat kalimat: Saya berniat belajar N4."],
  ["?", "Perbandingan YORI", "N4", "Bandingkan dua benda atau keadaan.", "?? menandai pembanding. Pola A ? B ?? ... berarti A lebih ... daripada B.", ["????????????", "???????????", "?????????????"], [["??", "toukyou", "Tokyo"], ["??", "oosaka", "Osaka"], ["??", "hayai", "cepat"], ["???", "muzukashii", "sulit"]], "Bandingkan kereta dan bus."],
  ["?", "Superlatif ICHIBAN", "N4", "Nyatakan yang paling dalam kelompok.", "???? dipakai untuk menyatakan paling. Biasanya muncul bersama kategori seperti ???? atau ???.", ["??????????????", "?????????", "???????????"], [["??", "ichiban", "paling"], ["??", "takai", "tinggi/mahal"], ["??", "suki", "suka"], ["???", "omoshiroi", "menarik"]], "Tulis: Ramen paling saya suka."],
  ["?", "SOU DESU Kabar", "N4", "Menyampaikan informasi yang didengar.", "???? setelah bentuk biasa berarti katanya/menurut kabar. Ini berbeda dari ???? yang berarti terlihat.", ["?????????", "????????????", "???????????"], [["?", "ame", "hujan"], ["???", "konai", "tidak datang"], ["?", "mise", "toko"], ["??", "yuumei", "terkenal"]], "Ubah: katanya besok libur."],
  ["?", "SOU DESU Terlihat", "N4", "Menyatakan kelihatannya berdasarkan kesan visual.", "???? setelah akar kata sifat berarti terlihat/sepertinya. ???? menjadi ?????.", ["?????????????", "????????", "????????"], [["????", "oishii", "enak"], ["???", "isogashii", "sibuk"], ["??", "furu", "turun hujan"], ["?", "kare", "dia laki-laki"]], "Buat kalimat: Buku ini terlihat sulit."],
  ["?", "TARA Conditional", "N4-N3", "Gunakan ?? untuk jika/ketika suatu kondisi terjadi.", "?? fleksibel untuk kondisi nyata, rencana, dan urutan kejadian setelah sesuatu selesai.", ["???????????", "????????????????", "???????????"], [["??", "jikan", "waktu"], ["??", "kaeru", "pulang"], ["??", "denwa", "telepon"], ["??", "jouken", "kondisi"]], "Buat kalimat: Jika ada uang, saya ingin pergi ke Jepang."],
  ["?", "BA Conditional", "N3", "Menyatakan syarat umum dengan bentuk ?.", "? sering dipakai untuk hubungan logis: jika syarat terpenuhi, hasilnya terjadi.", ["????????", "????????????", "??????????"], [["??", "yasui", "murah"], ["??", "renshuu", "latihan"], ["??", "jouzu", "mahir"], ["?", "ame", "hujan"]], "Ubah ?? menjadi bentuk ?."],
  ["?", "NARA Conditional", "N3", "Memberi saran atau kondisi berdasarkan topik.", "?? dipakai ketika merespons topik yang disebut lawan bicara: kalau soal X, maka Y.", ["?????????????", "????????????", "????????????????"], [["?", "haru", "musim semi"], ["??", "benri", "praktis"], ["???", "hoteru", "hotel"], ["??", "chikaku", "dekat"]], "Beri saran: kalau belajar kanji, pakai flashcard."],
  ["?", "Passive Ukemi", "N3", "Menyatakan dikenai aksi oleh orang lain.", "Bentuk pasif dipakai untuk aksi yang diterima subjek, termasuk pengalaman tidak menyenangkan.", ["??????????", "?????????", "?????????"], [["???", "homeru", "memuji"], ["??", "saifu", "dompet"], ["??", "nusumu", "mencuri"], ["??", "sasou", "mengajak"]], "Ubah: ?????????? ke pasif."],
  ["?", "Causative Shieki", "N3", "Menyuruh atau membiarkan seseorang melakukan sesuatu.", "Bentuk causative menyatakan membuat/membiarkan orang melakukan aksi. Dalam konteks sopan, sering perlu hati-hati.", ["??????????????", "????????????", "??????????"], [["??", "kodomo", "anak"], ["??", "yasai", "sayur"], ["??", "tatsu", "berdiri"], ["??", "yasumu", "istirahat"]], "Terjemahkan: Tolong izinkan saya istirahat sebentar."],
  ["?", "Keigo Dasar", "N3-N2", "Kenali sonkeigo dan kenjougo untuk situasi formal.", "Keigo membedakan tindakan orang yang dihormati dan tindakan diri sendiri. Mulai dari pola ?/? + stem + ??? dan ?????.", ["???????????", "??????????", "?????????"], [["??", "hanasu", "berbicara"], ["??", "annai", "memandu"], ["??", "shoushou", "sebentar"], ["??", "matsu", "menunggu"]], "Ubah ??????? menjadi bentuk lebih sopan."],
  ["?", "Wake Da", "N3", "Menjelaskan alasan alami atau kesimpulan.", "??? menyatakan jadi pantas saja/berarti. Pola ini sering muncul di reading dan percakapan penjelasan.", ["??10??????????????????????", "?????????????????"], [["??", "sumu", "tinggal"], ["??", "jouzu", "mahir"], ["???", "tomaru", "berhenti"], ["???", "okureru", "terlambat"]], "Buat kalimat kesimpulan dengan ????."],
  ["?", "Hazu Da", "N3", "Menyatakan semestinya atau ekspektasi kuat.", "??? menunjukkan keyakinan berdasarkan informasi. Bentuk negatifnya ????? untuk mustahil.", ["???????????", "??????????", "??????????????"], [["??", "kuru", "datang"], ["??", "yasumi", "libur"], ["??", "shiru", "tahu"], ["??", "hazu", "semestinya"]], "Tulis: Seharusnya toko ini buka."],
  ["?", "Hodo", "N3", "Menyatakan tingkat, sampai-sampai, atau perbandingan negatif.", "?? dipakai untuk menyatakan tingkat ekstrem atau pola A ?? B ??: tidak se-B A.", ["???????????", "?????????????", "?????????????????"], [["??", "naku", "menangis"], ["???", "ureshii", "senang"], ["??", "samui", "dingin"], ["??", "omou", "berpikir"]], "Buat kalimat: tidak sesulit yang saya kira."],
  ["?", "Kagiri", "N2", "Menyatakan selama, sejauh, atau batas kondisi.", "?? muncul dalam pola selama kondisi masih berlaku atau sejauh informasi yang diketahui.", ["????????????????", "???????????", "????????????"], [["??", "shiru", "tahu"], ["?", "inochi", "nyawa"], ["??", "yurusu", "mengizinkan"], ["??", "renshuu", "latihan"]], "Buat kalimat dengan: sejauh yang saya tahu."],
  ["?", "Sai Ni", "N2", "Ungkapan formal untuk ketika/saat.", "?? dipakai dalam instruksi, pengumuman, dan dokumen formal, mirip ?? tetapi lebih resmi.", ["????????????????", "????????????????", "??????????????"], [["??", "uketsuke", "resepsionis"], ["????", "moushikomu", "mendaftar"], ["?????", "mibun shoumeisho", "identitas"], ["??", "riyou", "penggunaan"]], "Buat instruksi formal dengan ??."],
  ["?", "Yue Ni", "N2-N1", "Menyatakan karena/sebab secara formal.", "??? bernuansa tertulis dan formal. Sering dipakai pada esai, berita, atau argumen akademik.", ["??????????????", "??????????????", "???????????????"], [["??", "doryoku", "usaha"], ["??", "seikou", "sukses"], ["??", "keiken", "pengalaman"], ["??", "shinchou", "hati-hati"]], "Tulis kalimat sebab-akibat formal."],
  ["?", "Uru/Eru", "N2-N1", "Menyatakan kemungkinan secara formal.", "?? berarti dapat terjadi/mungkin, sedangkan ??? berarti tidak mungkin. Sering muncul dalam teks tertulis.", ["????????????", "???????????", "?????????????"], [["???", "okoru", "terjadi"], ["??", "mondai", "masalah"], ["??", "kekka", "hasil"], ["??", "shippai", "kegagalan"]], "Buat kalimat: kesalahan bisa terjadi pada siapa saja."],
  ["?", "TOTAN NI", "N2-N3", "Segera setelah suatu kejadian, langsung terjadi aksi lain.", "???? menekankan kejadian yang langsung terjadi setelah momen tertentu, sering di luar kendali subjek.", ["???????????????", "????????????????", "???????????????"], [["??", "deru", "keluar"], ["????", "furidasu", "mulai turun"], ["???", "memai", "pusing"], ["??", "naru", "berbunyi"]], "Buat kalimat: begitu membuka pintu, angin masuk."],
  ["?", "Nuki Ni Shite", "N1", "Tanpa sesuatu yang biasanya dianggap penting.", "????? berarti mengesampingkan atau tanpa mempertimbangkan sesuatu.", ["???????????????", "???????????????", "???????????????"], [["??", "joudan", "bercanda"], ["??", "kiken", "bahaya"], ["??", "nenrei", "usia"], ["??", "handan", "menilai"]], "Buat kalimat: tanpa bercanda, ini penting."],
  ["?", "Kosakata Rumah", "Tematik", "Nama ruangan, benda rumah, dan kalimat aktivitas di rumah.", "Kosakata rumah sering muncul di percakapan harian dan listening level dasar.", ["????????", "????????", "???????"], [["??", "heya", "kamar"], ["??", "daidokoro", "dapur"], ["??", "isu", "kursi"], ["??", "souji", "bersih-bersih"]], "Sebutkan 5 benda di kamar Anda dalam bahasa Jepang."],
  ["?", "Kosakata Dapur", "Tematik", "Bahan makanan, alat dapur, dan kata kerja memasak.", "Belajar kosakata dapur membantu membuat kalimat praktis seperti memasak, memotong, mencuci, dan makan.", ["???????", "??????", "??????"], [["??", "yasai", "sayur"], ["?", "niku", "daging"], ["?", "sara", "piring"], ["??", "kiru", "memotong"]], "Buat kalimat memakai ??, ?, dan ?."],
  ["?", "Kosakata Transportasi", "Tematik", "Kata penting untuk kereta, bus, stasiun, arah, dan jadwal.", "Transportasi sangat sering muncul dalam soal JLPT dan percakapan wisata.", ["?????????", "??????????", "???????"], [["?", "eki", "stasiun"], ["??", "densha", "kereta"], ["??", "kippu", "tiket"], ["??", "noru", "naik"]], "Tanyakan: bus berikutnya jam berapa?"],
  ["?", "Kosakata Belanja", "Tematik", "Harga, ukuran, pembayaran, diskon, dan frasa toko.", "Gunakan pola ??????? dan ?????? untuk transaksi sederhana.", ["?????????", "????????", "?????????"], [["???", "ikura", "berapa harga"], ["??", "harau", "membayar"], ["??", "yasui", "murah"], ["??", "takai", "mahal"]], "Buat dialog 2 baris di toko."],
  ["?", "Kosakata Kesehatan", "Tematik", "Gejala, obat, rumah sakit, dan konsultasi sederhana.", "Materi ini berguna untuk situasi darurat dan pekerjaan yang berhubungan dengan layanan.", ["??????", "??????", "??????"], [["?", "atama", "kepala"], ["??", "itai", "sakit"], ["?", "netsu", "demam"], ["?", "kusuri", "obat"]], "Jelaskan gejala: sakit kepala dan demam."],
  ["?", "Kosakata Kantor", "Tematik", "Kata kerja dan benda yang sering dipakai di lingkungan kerja.", "Untuk kerja, hafalkan kata rapat, laporan, jadwal, email, dan atasan.", ["???????", "????????", "????????"], [["??", "kaigi", "rapat"], ["??", "okuru", "mengirim"], ["???", "houkokusho", "laporan"], ["??", "joushi", "atasan"]], "Tulis: Saya mengirim email ke atasan."],
  ["?", "Vokasi Kaigo", "Vokasi", "Kosakata dasar caregiver/perawatan lansia.", "Materi kaigo menekankan instruksi sopan, kondisi tubuh, bantuan makan, mandi, dan mobilitas.", ["???????", "??????????", "??????"], [["???", "tetsudau", "membantu"], ["??", "aruku", "berjalan"], ["?", "kusuri", "obat"], ["??", "jikan", "waktu"]], "Buat kalimat sopan untuk membantu pasien berjalan."],
  ["?", "Vokasi Restoran", "Vokasi", "Frasa pelayanan restoran, pesanan, pembayaran, dan komplain ringan.", "Gunakan ekspresi sopan untuk menyambut pelanggan, mencatat pesanan, dan menjelaskan menu.", ["????????", "???????????", "?????????"], [["??", "chuumon", "pesanan"], ["?", "seki", "kursi"], ["??", "kaikei", "pembayaran"], ["??", "shoushou", "sebentar"]], "Buat dialog pelayan menanyakan pesanan."],
  ["?", "Vokasi Pabrik", "Vokasi", "Instruksi keselamatan, alat, jadwal shift, dan laporan kerja.", "Bahasa pabrik membutuhkan perintah jelas, larangan, dan kosakata keselamatan.", ["??????", "??????????", "?????????"], [["??", "anzen", "aman"], ["??", "kikai", "mesin"], ["??", "tebukuro", "sarung tangan"], ["???", "tomeru", "menghentikan"]], "Tulis larangan: jangan menyentuh mesin."],
  ["?", "Wawancara Kerja", "Vokasi", "Perkenalan diri, pengalaman, alasan melamar, dan kekuatan pribadi.", "Wawancara kerja butuh jawaban pendek, sopan, dan jelas. Latih pola ???? dan ????.", ["???????????", "???????", "????????"], [["????", "jikoshoukai", "perkenalan diri"], ["??", "keiken", "pengalaman"], ["????", "shibou douki", "alasan melamar"], ["??", "hataraku", "bekerja"]], "Tulis perkenalan diri 3 kalimat."],
  ["?", "Reading Pengumuman", "Dokkai", "Cara membaca pengumuman fasilitas, sekolah, toko, dan stasiun.", "Fokus pada waktu, tempat, aturan, dan siapa yang terkena informasi.", ["?????????", "???????", "??6?????????"], [["???", "kyuukanbi", "hari tutup"], ["??", "iriguchi", "pintu masuk"], ["??", "migigawa", "sebelah kanan"], ["??", "riyou", "penggunaan"]], "Jawab dari teks: fasilitas buka sampai jam berapa?"],
  ["?", "Reading Email Pendek", "Dokkai", "Membaca email undangan, perubahan jadwal, dan permintaan sederhana.", "Cari pengirim, penerima, tanggal, tujuan email, dan tindakan yang diminta.", ["?????????????", "??????????", "????????"], [["??", "kaigi", "rapat"], ["???", "kawaru", "berubah"], ["??", "shiryou", "dokumen"], ["??", "okuru", "mengirim"]], "Tentukan tindakan yang diminta dalam email pendek."],
  ["?", "Listening Angka & Harga", "Choukai", "Latihan menangkap angka, harga, nomor telepon, dan waktu.", "Dengarkan kata sebelum dan sesudah angka karena konteks menentukan apakah itu jam, harga, atau jumlah.", ["500???", "?????1234??", "3?????????"], [["??", "bangou", "nomor"], ["?", "han", "setengah"], ["?", "en", "yen"], ["??", "kuru", "datang"]], "Latih membedakan 4, 7, dan 9 dalam audio."],
  ["?", "Listening Dialog Harian", "Choukai", "Menjawab pertanyaan berdasarkan percakapan singkat.", "Fokus pada maksud pembicara, keputusan akhir, dan perubahan rencana.", ["??????????", "????????", "???????????"], [["??", "eiga", "film"], ["?", "mae", "depan"], ["?", "ame", "hujan"], ["???", "nanode", "karena itu"]], "Tentukan: mereka bertemu di mana?"],
  ["?", "Simulasi JLPT N5", "Latihan", "Paket latihan grammar, vocabulary, kanji, reading, dan listening level N5.", "Simulasi N5 menguji dasar. Kerjakan dengan batas waktu dan catat bagian yang salah untuk diulang dengan SRS.", ["??????????", "?????????????", "???????????"], [["??", "mondai", "soal"], ["???", "tadashii", "benar"], ["??", "kotae", "jawaban"], ["??", "jikan", "waktu"]], "Kerjakan 5 soal kuis cepat lalu review kesalahan."],
  ["?", "Simulasi JLPT N4", "Latihan", "Paket latihan pola N4 seperti potensial, ???, ??????, dan kewajiban.", "N4 mulai menuntut kemampuan menghubungkan grammar dengan konteks kalimat.", ["????????", "??????????", "????????????"], [["???", "yomeru", "bisa membaca"], ["??", "keiken", "pengalaman"], ["??", "gimu", "kewajiban"], ["??", "fukushuu", "review"]], "Review 3 pola N4 yang paling sering salah."],
  ["?", "Simulasi JLPT N3", "Latihan", "Latihan transisi intermediate dengan conditional, passive, causative, dan reading panjang.", "N3 mengukur kemampuan memahami maksud, bukan hanya arti kata. Latih inferensi dan grammar konteks.", ["????????", "??????????", "????????"], [["??", "jouken", "kondisi"], ["??", "ukemi", "pasif"], ["??", "shieki", "kausatif"], ["??", "suisoku", "inferensi"]], "Baca satu paragraf dan tulis kesimpulan utamanya."]
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
    ["?", "na", "namae - nama"], ["?", "ni", "niwa - taman"], ["?", "nu", "nuno - kain"], ["?", "ne", "neko - kucing"], ["?", "no", "nomu - minum"],
    ["?", "ha", "hana - bunga"], ["?", "hi", "hikari - cahaya"], ["?", "fu", "fuyu - musim dingin"], ["?", "he", "heya - kamar"], ["?", "ho", "hoshi - bintang"],
    ["?", "ma", "machi - kota"], ["?", "mi", "mizu - air"], ["?", "mu", "mushi - serangga"], ["?", "me", "mata"], ["?", "mo", "mori - hutan"],
    ["?", "ya", "yama - gunung"], ["?", "yu", "yuki - salju"], ["?", "yo", "yoru - malam"], ["?", "ra", "raion - singa"], ["?", "ri", "ringo - apel"],
    ["?", "ru", "rusu - tidak di rumah"], ["?", "re", "rekishi - sejarah"], ["?", "ro", "roka - koridor"], ["?", "wa", "watashi - saya"], ["?", "wo", "partikel objek"], ["?", "n", "hon - buku"]
  ],
  katakana: [
    ["?", "chi", "chiizu"], ["?", "tsu", "tsuaa"], ["?", "te", "terebi"], ["?", "to", "toire"],
    ["?", "na", "naifu"], ["?", "ni", "nyuusu"], ["?", "nu", "nuudoru"], ["?", "ne", "netto"], ["?", "no", "nooto"],
    ["?", "ha", "hanbaagaa"], ["?", "hi", "hoteru"], ["?", "fu", "furansu"], ["?", "he", "herumetto"], ["?", "ho", "hoomu"],
    ["?", "ma", "maiku"], ["?", "mi", "miruku"], ["?", "mu", "muubi"], ["?", "me", "meeru"], ["?", "mo", "mooru"],
    ["?", "ya", "yasai"], ["?", "yu", "yuuzaa"], ["?", "yo", "yooroppa"], ["?", "ra", "rajio"], ["?", "ri", "risuto"],
    ["?", "ru", "ruuru"], ["?", "re", "resutoran"], ["?", "ro", "roketto"], ["?", "wa", "wain"], ["?", "wo", "jarang dipakai"], ["?", "n", "pan"]
  ]
};

const comprehensionQuizBank = {
  "Reading Dokkai": [
    ["??? 9 ?? ????????", "Kapan pergi ke sekolah?", "Besok pukul 9", ["Besok pukul 9", "Hari ini pukul 9", "Besok pukul 10", "Minggu pagi"]],
    ["????? 8 ??? 10 ??????", "Supermarket buka sampai pukul berapa?", "Pukul 10", ["Pukul 8", "Pukul 9", "Pukul 10", "Pukul 11"]],
    ["????? ?? ???????", "Di mana Tanaka-san sedang menunggu?", "Di stasiun", ["Di sekolah", "Di rumah", "Di stasiun", "Di supermarket"]]
  ],
  "Listening Choukai": [
    ["A: ??????B: 9 ????", "Jawaban untuk pertanyaan jam tersebut adalah...", "Pukul 9", ["Pukul 7", "Pukul 8", "Pukul 9", "Pukul 10"]],
    ["A: ????????B: ????", "Stasiun berada di mana?", "Di kanan", ["Di kiri", "Di kanan", "Di depan", "Di belakang"]],
    ["A: ???????????B: ????????", "Apakah B akan minum kopi?", "Ya, akan minum", ["Tidak, tidak minum", "Ya, akan minum", "Akan makan", "Tidak tahu"]]
  ],
  "Reading Pengumuman": [
    ["?????????", "Kapan hari tutup fasilitas?", "Hari Senin", ["Hari Senin", "Hari Selasa", "Hari Jumat", "Hari Minggu"]],
    ["???????", "Di sisi mana pintu masuk berada?", "Sebelah kanan", ["Sebelah kiri", "Sebelah kanan", "Di belakang", "Di lantai dua"]],
    ["?? 6 ?????????", "Fasilitas dapat digunakan sampai kapan?", "Sampai pukul 6 sore", ["Sampai pukul 6 pagi", "Sampai pukul 12 siang", "Sampai pukul 6 sore", "Sampai pukul 8 malam"]]
  ],
  "Reading Email Pendek": [
    ["?????????????", "Rapat dipindahkan ke hari apa?", "Hari Jumat", ["Hari Senin", "Hari Rabu", "Hari Jumat", "Hari Sabtu"]],
    ["??????????", "Apa yang diminta pengirim email?", "Mengirim dokumen", ["Membeli dokumen", "Mengirim dokumen", "Membaca buku", "Menunggu di rumah"]],
    ["????????", "Di mana mereka akan bertemu?", "Di stasiun", ["Di kantor", "Di sekolah", "Di stasiun", "Di restoran"]]
  ],
  "Listening Angka & Harga": [
    ["500 ???", "Berapa harga yang disebutkan?", "500 yen", ["50 yen", "100 yen", "500 yen", "5.000 yen"]],
    ["????? 1234 ??", "Apa nomor telepon yang disebutkan?", "1234", ["1234", "1324", "1243", "4321"]],
    ["3 ?????????", "Datang pukul berapa?", "Pukul 3.30", ["Pukul 3.00", "Pukul 3.30", "Pukul 4.00", "Pukul 4.30"]]
  ],
  "Listening Dialog Harian": [
    ["??????????", "Apa yang tidak dilakukan hari ini?", "Tidak menonton film", ["Tidak pergi ke sekolah", "Tidak menonton film", "Tidak naik bus", "Tidak minum kopi"]],
    ["????????", "Mereka bertemu di mana?", "Di depan stasiun", ["Di dalam stasiun", "Di depan stasiun", "Di rumah", "Di kantor"]],
    ["???????????", "Mengapa pergi naik bus?", "Karena hujan", ["Karena panas", "Karena terlambat", "Karena hujan", "Karena libur"]]
  ],
  "Simulasi JLPT N5": [
    ["??????????", "Instruksi tersebut meminta Anda untuk...", "Membaca soal", ["Membaca soal", "Menulis email", "Membeli tiket", "Menunggu teman"]],
    ["?????????????", "Apa yang harus dipilih?", "Jawaban yang benar", ["Jawaban yang benar", "Kanji tersulit", "Kata terpanjang", "Waktu tercepat"]],
    ["???????????", "Apa yang dilakukan saat berlatih?", "Mengukur waktu", ["Menghafal warna", "Mengukur waktu", "Membeli buku", "Menutup pintu"]],
    ["????????????????", "Apa arti sapaan ini?", "Halo, apa kabar?", ["Selamat malam", "Terima kasih", "Sampai jumpa", "Permisi"]],
    ["????????", "Kalimat ini menunjukkan...", "Kepemilikan", ["Kegiatan", "Lokasi", "Waktu", "Penjelasan"]],
    ["???????", "Maksud kalimat tersebut adalah...", "Pergi ke sekolah", ["Pulang dari sekolah", "Di sekolah", "Dari rumah ke kantor", "Ke perpustakaan"]],
    ["?????????", "Kapan kata ini biasanya diucapkan?", "Saat pagi hari", ["Siang hari", "Malam hari", "Saat bertemu", "Saat pamitan"]],
    ["?????", "Ungkapan ini digunakan untuk...", "Mengucapkan terima kasih", ["Meminta maaf", "Perkenalan diri", "Bertanya nama", "Berterima kasih"]],
    ["?????", "Dalam situasi apa ini digunakan?", "Permisi/Maaf", ["Selamat tinggal", "Selamat datang", "Semoga sehat", "Selamat belajar"]],
    ["?????????", "Respon ini berarti...", "Ya, saya mengerti", ["Tidak, tidak paham", "Mungkin nanti", "Baiklah", "Tunggu sebentar"]],
    ["??????????", "Ini adalah bentuk... dari 'arigato'", "Terima kasih (sopan)", ["Maaf", "Selamat", "Selamat tinggal", "Permintaan"]],
    ["?????", "Kata ini digunakan untuk...", "Perpisahan/sampai jumpa", ["Sapaan pagi", "Ucapan terima kasih", "Ucapan minta maaf", "Sapaan siang"]],
    ["???????", "Kapan mengucapkan ini?", "Sebelum tidur", ["Saat makan", "Saat bangun", "Saat pergi", "Saat pulang"]],
    ["????", "Kata kerja ini berarti...", "Makan", ["Minum", "Tidur", "Belajar", "Pergi"]],
    ["????", "Arti dari kata ini adalah...", "Minum", ["Makan", "Tidur", "Main", "Bekerja"]]
  ],
  "Simulasi JLPT N4": [
    ["????????", "Apa kemampuan pembicara?", "Bisa membaca bahasa Jepang", ["Bisa menulis bahasa Jepang", "Bisa membaca bahasa Jepang", "Tidak bisa berbicara", "Sedang pergi ke Jepang"]],
    ["??????????", "Apa makna pola tersebut?", "Pernah pergi", ["Akan pergi", "Sedang pergi", "Pernah pergi", "Tidak pergi"]],
    ["????????????", "Apa yang harus dilakukan?", "Harus belajar", ["Tidak boleh belajar", "Harus belajar", "Pernah belajar", "Ingin belajar"]],
    ["???????", "Sedang terjadi apa?", "Hujan turun", ["Cerah", "Badai", "Salju", "Angin kencang"]],
    ["???????", "Siapa yang melakukan aksi?", "Tetangga/friend datang", ["Temannya datang", "Ibu datang", "Ayah datang", "Guru datang"]],
    ["???????", "Seberapa sering?", "Setiap hari", ["Sekali sehari", "Dua kali sehari", "Mingguan", "Jarang"]],
    ["???????", "Dengan siapa bertemu?", "Guru/baik", ["Rumah", "Teman", "Tempat", "Halaman"]],
    ["???????", "Mereka akan bermain di mana?", "Di taman", ["Di rumah", "Di sekolah", "Di toko", "Di kantor"]],
    ["??????????", "Kapan berbelanja?", "Kemarin", ["Hari ini", "Besok", "Lusa", "Minggu lalu"]],
    ["??????????", "Menggunakan transportasi apa?", "Kereta/mobil", ["Bus", "Kendaraan", "Berjalan kaki", "Pesawat"]]
  ],
  "Simulasi JLPT N3": [
    ["????????", "Dalam kondisi apa pembicara akan membeli?", "Jika murah", ["Jika mahal", "Jika murah", "Jika hujan", "Jika libur"]],
    ["??????????", "Apa yang terjadi pada pembicara?", "Dipuji guru", ["Memuji guru", "Dipuji guru", "Menunggu guru", "Mengajar guru"]],
    ["????????", "Apa permintaan pembicara?", "Mohon izinkan saya beristirahat", ["Mohon izinkan saya beristirahat", "Mohon pergi ke sekolah", "Mohon membeli makanan", "Mohon membaca buku"]]
  ],

  "Reading Teks Panjang": [
    ["????????????????????????????????????", "??????????", "?????????????", ["????????", "????????", "?????????????", "?????"]],
    ["??????????????????????????", "?????????????", "??", ["?", "??", "?", "??"]],
    ["??????????????????????????????????????", "????????????????????", "?????", ["????", "?????", "?????", "???????"]]
  ],
  "Listening Dialog Panjang": [
    ["A:????????????B:?????????????????A:??????????????B:??????????????????", "??????????????????????", "???", ["?", "???", "???", "???"]],
    ["A:????????B:???????A:????????B:??????", "??????????????", "?????", ["????", "????", "?????", "??????"]]
  ],
  "Reading Email ????": [
    ["??:???????????\n????\n????????????????????????????????????????", "????????????????", "???????", ["??????????", "?????", "???????", "???????"]],
    ["????????????????????????????????????????", "?????????????", "??????????????????", ["???????", "???????", "??????", "?????"]]
  ],
  "Listening Instruksi & Panduan": [
    ["??????????????????????????????????????", "??????????????", "??????", ["???????", "??????", "???????"]],
    ["????????????????????????????????", "??????????????", "???", ["??", "?????", "????"]]
  ],
  "Reading Artikel Pendek": [
    ["????????????????????????????????", "??????????????", "?????????", ["?????", "?????", "?????"]],
    ["???????????????????????????", "?????????????", "????????", ["??????", "??????", "??????", "????????"]]
  ],
  "Listening Pengumuman Stasiun": [
    ["??????????????????????????", "??????????", "??", ["??", "??", "??"]],
    ["??????????????????????", "??????????", "????????", ["?????????", "????????", "?????"]]
  ],
  "Reading Resepsionis & Hotel": [
    ["??????????????????????????????", "????????????????????", "??????", ["??????", "??????", "???"]]
  ],
  "Listening Diskusi Grup": [
    ["A:??????????B:?????????C:??????????????????", "???????", "????????", ["??????", "????", "???"]],
    ["A:??????B:??????C:??????A:???OK!", "???????????????", "??", ["??", "??", "??"]]
  ],
  "Reading Tutorial Produk": [
    ["??????????????????????????", "????????????", "????????", ["?????", "??????", "??"]]
  ],
  "Listening Telefon Resepsionis": [
    ["????????????????????????????????????????????????", "?????????????", "????????", ["?????????????", "????????", "???????????????"]],
    ["Message: ??????????????????????????", "?????????", "????", ["???", "??", "??"]]
  ],
  "Reading Ulasan & Review": [
    ["???????????????????????????????", "?????????????", "?????", ["??", "??", "Mixed"]],
    ["?????????????????????????", "????????", "?????", ["?????", "???????", "???????"]]
  ],
  "Listening Podcast Edukasi": [
    ["???????????????????????????", "podcast ?????????", "??????", ["?????", "?????", "???????"]],
    ["??????????????????????", "???????????", "??", ["??", "??", "??"]]
  ],
  "Reading Laporan Harian": [
    ["?????:???? 3 ???????????????????????", "???????", "??????", ["????", "??", "????"]],
    ["??????????????????????????????", "??????????", "????", ["????", "????", "????"]]
  ]
};

const kanjiBank = [
  ["?", "ichi/hito", "satu"], ["?", "ni/futa", "dua"], ["?", "san/mi", "tiga"], ["?", "shi/yon", "empat"], ["?", "go/itsu", "lima"], ["?", "roku/mu", "enam"], ["?", "shichi/nana", "tujuh"], ["?", "hachi/ya", "delapan"], ["?", "kyuu/koko", "sembilan"], ["?", "juu/too", "sepuluh"],
  ["?", "hyaku", "seratus"], ["?", "sen/chi", "seribu"], ["?", "man/ban", "sepuluh ribu"], ["?", "en/maru", "yen, lingkaran"], ["?", "nen/toshi", "tahun"], ["?", "jou/ue", "atas"], ["?", "ka/shita", "bawah"], ["?", "chuu/naka", "tengah"], ["?", "gai/soto", "luar"], ["?", "u/migi", "kanan"],
  ["?", "sa/hidari", "kiri"], ["?", "zen/mae", "depan"], ["?", "go/ato", "belakang, setelah"], ["?", "hoku/kita", "utara"], ["?", "nan/minami", "selatan"], ["?", "tou/higashi", "timur"], ["?", "sei/nishi", "barat"], ["?", "kou/taka", "tinggi, mahal"], ["?", "an/yasu", "murah, aman"], ["?", "shin/atara", "baru"],
  ["?", "ko/furu", "lama, tua"], ["?", "chou/naga", "panjang"], ["?", "tan/mijika", "pendek"], ["?", "haku/shiro", "putih"], ["?", "koku/kuro", "hitam"], ["?", "seki/aka", "merah"], ["?", "sei/ao", "biru"], ["?", "sen/saki", "sebelum, depan"], ["?", "sei/i", "hidup, lahir"], ["?", "gaku/mana", "belajar"],
  ["?", "kou", "sekolah"], ["?", "yuu/tomo", "teman"], ["?", "mei/na", "nama"], ["?", "ka/nani", "apa"], ["?", "ji/toki", "waktu, jam"], ["?", "fun/bun/wa", "menit, bagian"], ["?", "han/naka", "setengah"], ["?", "kon/ima", "sekarang"], ["?", "mai", "setiap"], ["?", "shuu", "minggu"],
  ["?", "you", "hari dalam pekan"], ["?", "chou/asa", "pagi"], ["?", "chuu/hiru", "siang"], ["?", "ya/yoru", "malam"], ["?", "go", "tengah hari"], ["?", "kyuu/yasu", "istirahat"], ["?", "tai/karada", "tubuh"], ["?", "sha/kuruma", "mobil"], ["?", "eki", "stasiun"], ["?", "den", "listrik"],
  ["?", "ki", "energi, udara"], ["?", "ten/ama", "langit"], ["?", "u/ame", "hujan"], ["?", "setsu/yuki", "salju"], ["?", "ka/hana", "bunga"], ["?", "sou/kusa", "rumput"], ["?", "ken/inu", "anjing"], ["?", "neko", "kucing"], ["?", "gyo/sakana", "ikan"], ["?", "niku", "daging"],
  ["?", "bei/kome", "beras"], ["?", "cha/sa", "teh"], ["?", "han/meshi", "nasi, makanan"], ["?", "ten/mise", "toko"], ["?", "bai/ka", "membeli"], ["?", "bai/u", "menjual"], ["?", "doku/yo", "membaca"], ["?", "sho/ka", "menulis"], ["?", "bun/ki", "mendengar"], ["?", "wa/hana", "berbicara"],
  ["?", "ken/mi", "melihat"], ["?", "kou/i", "pergi"], ["?", "rai/ku", "datang"], ["?", "ki/kae", "pulang"], ["?", "shoku/ta", "makan"], ["?", "in/no", "minum"], ["?", "ritsu/ta", "berdiri"], ["?", "nyuu/hai", "masuk"], ["?", "shutsu/de", "keluar"], ["?", "kai/a", "bertemu"],
  ["?", "sha/yashiro", "perusahaan"], ["?", "in", "anggota"], ["?", "koku/kuni", "negara"], ["?", "go/kata", "bahasa"], ["?", "ei", "Inggris"], ["?", "kan", "Cina, kanji"], ["?", "ji/aza", "huruf"], ["?", "bun/fumi", "kalimat, tulisan"], ["?", "bo/haha", "ibu"], ["?", "fu/chichi", "ayah"],
  ["?", "shi/ko", "anak"], ["?", "jo/onna", "perempuan"], ["?", "dan/otoko", "laki-laki"], ["?", "shu/te", "tangan"], ["?", "soku/ashi", "kaki"], ["?", "moku/me", "mata"], ["?", "kou/kuchi", "mulut"], ["?", "ji/mimi", "telinga"], ["?", "shin/kokoro", "hati"], ["?", "riki/chikara", "kekuatan"],
  ["?", "kan/aida", "interval, ruang"], ["?", "dou/michi", "jalan"], ["?", "ka/ie", "rumah"], ["?", "shitsu/muro", "ruangan"], ["?", "chou/machi", "kota"], ["?", "son/mura", "desa"], ["?", "shi/ichi", "kota, pasar"], ["?", "jou/ba", "tempat"], ["?", "butsu/mono", "benda"], ["?", "sha/mono", "orang"],
  ["?", "ji/koto", "hal"], ["?", "ryou", "biaya, bahan"], ["?", "ri", "alasan, prinsip"], ["?", "saku/tsuku", "membuat"], ["?", "shi/tsuka", "memakai"], ["?", "shi/haji", "mulai"], ["?", "shuu/o", "selesai"], ["?", "shuu/nara", "belajar"], ["?", "kyou/oshi", "mengajar"], ["?", "kou/kanga", "berpikir"],
  ["?", "tou/kota", "jawaban"], ["?", "mon/to", "pertanyaan"], ["?", "dai", "topik, soal"], ["?", "you/mochi", "keperluan"], ["?", "i", "maksud"], ["?", "mi/aji", "rasa"], ["?", "on/oto", "suara"], ["?", "gaku/tano", "musik, senang"], ["?", "setsu/ki", "memotong"], ["?", "kin/chika", "dekat"],
  ["?", "en/too", "jauh"], ["?", "sou/haya", "cepat, pagi"], ["?", "chi/oso", "lambat"], ["?", "ta/oo", "banyak"], ["?", "shou/suku", "sedikit"], ["?", "kyou/tsuyo", "kuat"], ["?", "jaku/yowa", "lemah"], ["?", "sei/tada", "benar"], ["?", "dou/ona", "sama"], ["?", "betsu/waka", "berbeda"],
  ["?", "ben/tayo", "praktis, surat"], ["?", "ri", "keuntungan"], ["?", "fu/bu", "tidak"], ["?", "yuu/a", "ada, punya"], ["?", "mu/na", "tidak ada"], ["?", "ka/ba", "perubahan"], ["?", "shu/nushi", "utama"], ["?", "chuu/soso", "menuang, catatan"], ["?", "i", "dokter"], ["?", "byou/yamai", "sakit"],
  ["?", "in", "institusi"], ["?", "yaku/kusuri", "obat"], ["?", "dou/hatara", "bekerja"], ["?", "dou/ugo", "bergerak"], ["?", "ben", "usaha"], ["?", "kyou/tsuyo", "kuat, belajar"], ["?", "shi/kokoro", "mencoba"], ["?", "ken", "ujian"], ["?", "shitsu", "kualitas, pertanyaan"], ["?", "mon/to", "pertanyaan"]
];

const extendedKanjiBank = [
  ["?", "ji/mizuka", "sendiri"], ["?", "ten/koro", "berputar, pindah"], ["?", "kuu/sora", "langit, kosong"], ["?", "kou/minato", "pelabuhan"], ["?", "kai/umi", "laut"], ["?", "shin/mori", "hutan"], ["?", "rin/hayashi", "hutan kecil"], ["?", "den/ta", "sawah"], ["?", "hatake", "ladang"], ["?", "seki/ishi", "batu"],
  ["?", "gan/iwa", "batu besar"], ["?", "chuu/mushi", "serangga"], ["?", "chou/tori", "burung"], ["?", "ba/uma", "kuda"], ["?", "gyuu/ushi", "sapi"], ["?", "you/hitsuji", "domba"], ["?", "bai/kai", "kerang"], ["?", "chiku/take", "bambu"], ["?", "shi/ito", "benang"], ["?", "shi/kami", "kertas"],
  ["?", "kai/e", "gambar"], ["?", "shoku/iro", "warna"], ["?", "sei/koe", "suara"], ["?", "ka/uta", "lagu"], ["?", "shun/haru", "musim semi"], ["?", "ka/natsu", "musim panas"], ["?", "shuu/aki", "musim gugur"], ["?", "tou/fuyu", "musim dingin"], ["?", "fuu/kaze", "angin"], ["?", "kou/hikari", "cahaya"],
  ["?", "sho/atsu", "panas"], ["?", "kan/samu", "dingin"], ["?", "sei/ha", "cerah"], ["?", "un/kumo", "awan"], ["?", "sei/hoshi", "bintang"], ["?", "mei/aka", "terang"], ["?", "an/kura", "gelap"], ["?", "gen/moto", "asal, sehat"], ["?", "ryou/yo", "baik"], ["?", "aku/waru", "buruk"],
  ["?", "bou/isoga", "sibuk"], ["?", "kou/hiro", "luas"], ["?", "kyou/sema", "sempit"], ["?", "juu/omo", "berat"], ["?", "kei/karu", "ringan"], ["?", "tai/futo", "tebal, gemuk"], ["?", "sai/hoso", "tipis, halus"], ["?", "kan/ama", "manis"], ["?", "shin/kara", "pedas, sulit"], ["?", "ku/kuru", "pahit, menderita"],
  ["?", "jaku/waka", "muda"], ["?", "rou/o", "tua"], ["?", "shin/oya", "orang tua"], ["?", "kei/ani", "kakak laki-laki"], ["?", "tei/otouto", "adik laki-laki"], ["?", "shi/ane", "kakak perempuan"], ["?", "mai/imouto", "adik perempuan"], ["?", "fu/otto", "suami"], ["?", "sai/tsuma", "istri"], ["?", "zoku", "keluarga, suku"],
  ["?", "shi/watashi", "saya"], ["?", "boku", "saya pria"], ["?", "kun/kimi", "kamu"], ["?", "hi/kare", "dia laki-laki"], ["?", "shi", "tuan, marga"], ["?", "min/tami", "rakyat"], ["?", "kan", "pejabat"], ["?", "kyaku", "tamu"], ["?", "kan/wazura", "menderita sakit"], ["?", "shi/ha", "gigi"],
  ["?", "tou/atama", "kepala"], ["?", "gan/kao", "wajah"], ["?", "shu/kubi", "leher"], ["?", "kyou/mune", "dada"], ["?", "fuku/hara", "perut"], ["?", "shi/yubi", "jari"], ["?", "hai/se", "punggung"], ["?", "ketsu/chi", "darah"], ["?", "kotsu/hone", "tulang"], ["?", "netsu/atsu", "panas, demam"],
  ["?", "tsuu/ita", "sakit"], ["?", "chi/nao", "sembuh, mengobati"], ["?", "oku/ya", "toko, atap"], ["?", "dai", "alas, platform"], ["?", "sho/tokoro", "tempat"], ["?", "bu", "bagian"], ["?", "kai/hira", "membuka"], ["?", "hei/shi", "menutup"], ["?", "mon/kado", "gerbang"], ["?", "ko/to", "pintu"],
  ["?", "sou/mado", "jendela"], ["?", "kai", "lantai, tingkat"], ["?", "ken/ta", "membangun"], ["?", "kyou/hashi", "jembatan"], ["?", "sen/fune", "kapal"], ["?", "hi/to", "terbang"], ["?", "ki", "mesin, kesempatan"], ["?", "chi/ji", "tanah, lokasi"], ["?", "zu/to", "gambar, peta"], ["?", "kan", "gedung"],
  ["?", "en/sono", "taman"], ["?", "ji/tera", "kuil Buddha"], ["?", "shin/kami", "dewa"], ["?", "kou/maji", "bergaul, bertukar"], ["?", "tsuu/too", "lewat, komunikasi"], ["?", "un/hako", "membawa, nasib"], ["?", "sou/oku", "mengirim"], ["?", "chaku/tsu", "tiba, memakai"], ["?", "jou/no", "naik kendaraan"], ["?", "kou/o", "turun"],
  ["?", "ho/aru", "berjalan"], ["?", "sou/hashi", "berlari"], ["?", "shi/to", "berhenti"], ["?", "tai/ma", "menunggu"], ["?", "ji/mo", "memegang"], ["?", "shu/to", "mengambil"], ["?", "chi/o", "meletakkan"], ["?", "tai/ka", "meminjamkan"], ["?", "shaku/ka", "meminjam"], ["?", "hen/kae", "mengembalikan"],
  ["?", "bou/wasu", "lupa"], ["?", "kaku/obo", "ingat"], ["?", "juu/su", "tinggal"], ["?", "haku/to", "menginap"], ["?", "sen/ara", "mencuci"], ["?", "sou/ha", "menyapu"], ["?", "ki/o", "bangun, terjadi"], ["?", "shin/ne", "tidur"], ["?", "yuu/aso", "bermain"], ["?", "ei/oyo", "berenang"],
  ["?", "kyuu/na", "menangis"], ["?", "shou/wara", "tertawa"], ["?", "do/oko", "marah"], ["?", "kyuu/iso", "mendesak, cepat"], ["?", "kon/koma", "kesulitan"], ["?", "hi/tsuka", "lelah"], ["?", "jo/tasu", "membantu"], ["?", "ko/yo", "memanggil"], ["?", "kyuu/su", "menghirup"], ["?", "sui/fu", "meniup"],
  ["?", "ou/o", "mendorong"], ["?", "in/hi", "menarik"], ["?", "futsu/hara", "membayar"], ["?", "sen/era", "memilih"], ["?", "ketsu/ki", "memutuskan"], ["?", "tei/sada", "menentukan"], ["?", "yo", "sebelumnya"], ["?", "yaku", "janji, ringkas"], ["?", "kei/haka", "menghitung"], ["?", "ga/kaku", "gambar, rencana"],
  ["?", "roku", "merekam"], ["?", "sha/utsu", "menyalin, foto"], ["?", "shin/ma", "kebenaran"], ["?", "ei/utsu", "memantulkan, film"], ["?", "hou/hana", "melepas"], ["?", "so/kumi", "kelompok"], ["?", "ban", "nomor, giliran"], ["?", "gou", "nomor"], ["?", "hin/shina", "barang"], ["?", "fuku", "pakaian"],
  ["?", "ka/kutsu", "sepatu"], ["?", "bou", "topi"], ["?", "zai", "harta"], ["?", "fu/nuno", "kain"], ["?", "ka", "barang, uang"], ["?", "ko", "gudang"], ["?", "rei/tsume", "dingin"], ["?", "on/atata", "hangat"], ["?", "dan/atata", "hangat"], ["?", "shu/sake", "alkohol"],
  ["?", "yu/abura", "minyak"], ["?", "en/shio", "garam"], ["?", "tou", "gula"], ["?", "ran/tamago", "telur"], ["?", "nyuu/chichi", "susu"], ["?", "ya/no", "ladang"], ["?", "sai/na", "sayur"], ["?", "ka/ha", "buah, hasil"], ["?", "tou/mame", "kacang"], ["?", "baku/mugi", "gandum"],
  ["?", "fun/ko", "bubuk"], ["?", "sara", "piring"], ["?", "hashi", "sumpit"], ["?", "hou/tsutsu", "membungkus"], ["?", "chou/tei", "blok, alat"], ["?", "tou/katana", "pedang"], ["?", "kou", "teknik, pekerjaan"], ["?", "gyou/waza", "pekerjaan, industri"], ["?", "san/u", "produksi, melahirkan"], ["?", "nou", "pertanian"],
  ["?", "shou", "dagang"], ["?", "ka", "bagian, pelajaran"], ["?", "kei/kakari", "petugas"], ["?", "mu", "tugas"], ["?", "kin/tsuto", "bekerja"], ["?", "yaku", "peran"], ["?", "seki", "kursi, tempat"], ["?", "gi", "diskusi"], ["?", "hou/shira", "laporan"], ["?", "koku/tsu", "memberitahu"],
  ["?", "shi", "modal, dokumen"], ["?", "hyou/omote", "permukaan, tabel"], ["?", "sen", "garis"], ["?", "ten", "titik"], ["?", "gan/maru", "bulat"], ["?", "kei/katachi", "bentuk"], ["?", "kaku/kado", "sudut"], ["?", "choku/nao", "langsung, memperbaiki"], ["?", "kyoku/ma", "lagu, berbelok"], ["?", "hei/taira", "datar"],
  ["?", "wa/yawa", "harmoni, Jepang"], ["?", "you", "barat, samudra"], ["?", "kai", "dunia, batas"], ["?", "sei/yo", "dunia, generasi"], ["?", "dai/ka", "generasi, biaya"], ["?", "reki", "sejarah"], ["?", "shi", "sejarah"], ["?", "seki/mukashi", "dahulu"], ["?", "mi/mada", "belum"], ["?", "matsu/sue", "akhir"],
  ["?", "ji/tsugi", "berikutnya"], ["?", "sho/hatsu", "pertama"], ["?", "sai/motto", "paling"], ["?", "kai/mawa", "kali, berputar"], ["?", "do/tabi", "derajat, kali"], ["?", "dai", "urutan"], ["?", "tou/hito", "setara, kelas"], ["?", "kyuu", "tingkat"], ["?", "rui", "jenis"], ["?", "rei/tato", "contoh"],
  ["?", "suu/kazu", "angka, jumlah"], ["?", "san", "menghitung"], ["?", "ji", "kata, kamus"], ["?", "ten", "kamus, aturan"], ["?", "setsu/to", "menjelaskan"], ["?", "ken/to", "mengasah, meneliti"], ["?", "kyuu/kiwa", "menyelidiki"], ["?", "shuku/yado", "penginapan, tugas"], ["?", "sotsu", "lulus"], ["?", "sei", "politik"],
  ["?", "sai/su", "selesai, ekonomi"], ["?", "kei/he", "melalui, ekonomi"], ["?", "hou", "hukum, cara"], ["?", "ritsu", "hukum, irama"], ["?", "soku", "aturan"], ["?", "ki", "aturan"], ["?", "sei", "sistem"], ["?", "sen/ikusa", "perang"], ["?", "sou/araso", "bertengkar"], ["?", "shou/ka", "menang"],
  ["?", "fu/ma", "kalah, memikul"], ["?", "hai/yabu", "kalah"], ["?", "shu/mamo", "melindungi"], ["?", "kou/se", "menyerang"], ["?", "gun", "tentara"], ["?", "tai", "pasukan"], ["?", "hei", "prajurit"], ["?", "kei", "waspada, polisi"], ["?", "satsu", "memeriksa"], ["?", "shou/ke", "menghapus"],
  ["?", "bou/fuse", "mencegah"], ["?", "kyuu/suku", "menolong"], ["?", "ken/kewa", "bahaya, curam"], ["?", "ki/abu", "bahaya"], ["?", "gai", "kerugian"], ["?", "zen/matta", "utuh, semua"], ["?", "kai/mina", "semua orang"], ["?", "kaku", "masing-masing"], ["?", "ta/hoka", "lain"], ["?", "kyou/tomo", "bersama"],
  ["?", "tai/tsui", "berhadapan"], ["?", "han/so", "melawan"], ["?", "san", "setuju"], ["?", "kyou", "kerja sama"], ["?", "do/tsuto", "berusaha"], ["?", "rou", "tenaga, kerja"], ["?", "kou", "prestasi"], ["?", "sei/na", "menjadi"], ["?", "shitsu/ushina", "hilang, gagal"], ["?", "toku/e", "mendapat"],
  ["?", "ka", "boleh, dapat"], ["?", "nou", "kemampuan"], ["?", "kyo/yuru", "mengizinkan"], ["?", "nin/mito", "mengakui"], ["?", "shiki", "pengetahuan"], ["?", "kan", "merasakan"], ["?", "jou/nasa", "perasaan"], ["?", "sou/omo", "pikiran"], ["?", "nen", "pikiran, perhatian"], ["?", "gan/nega", "harapan"],
  ["?", "bou/nozo", "harapan"], ["?", "ki", "harapan, jarang"], ["?", "ai", "cinta"], ["?", "kou/su", "suka"], ["?", "ken/kira", "benci"], ["?", "hi/kana", "sedih"], ["?", "ki/yoroko", "senang"], ["?", "fu/kowa", "takut"], ["?", "jaku/sabi", "sepi"], ["?", "sei/shizu", "tenang"],
  ["?", "shin/nigi", "ramai"], ["?", "hitsu/kanara", "pasti, perlu"], ["?", "you/i", "perlu, inti"], ["?", "jutsu", "teknik, seni"], ["?", "gi", "teknik"], ["?", "ka", "sains, departemen"], ["?", "kan/kuda", "mengelola, pipa"], ["?", "ei/itona", "mengelola"], ["?", "zou/tsuku", "membuat"], ["?", "chiku/kizu", "membangun"],
  ["?", "setsu/mou", "mendirikan"], ["?", "bi/sona", "persiapan"], ["?", "jun", "standar, persiapan"], ["?", "ryou/haka", "jumlah"], ["?", "zou/fu", "bertambah"], ["?", "gen/he", "berkurang"], ["?", "hi/kura", "membandingkan"], ["?", "kaku", "membandingkan"], ["?", "sa", "perbedaan"], ["?", "i/chiga", "berbeda"],
  ["?", "ji/ni", "mirip"], ["?", "hen/ka", "berubah"], ["?", "i/utsu", "pindah"], ["?", "zoku/tsuzu", "lanjut"], ["?", "ka/su", "melewati, berlebih"], ["?", "kyo/sa", "pergi, masa lalu"], ["?", "rei/modo", "kembali"], ["?", "shin/susu", "maju"], ["?", "tai/shirizo", "mundur"], ["?", "tou/nobo", "naik"],
  ["?", "raku/o", "jatuh"], ["?", "ryuu/naga", "mengalir"], ["?", "jun", "persiapan"], ["?", "yuu/yasa", "unggul, lembut"], ["?", "eki/yasa", "mudah"], ["?", "nan/muzuka", "sulit"], ["?", "tan", "sederhana"], ["?", "kan", "sederhana"], ["?", "teki", "cocok"], ["?", "kaku/tashi", "pasti"]
];

const vocabularyBank = [
  ["??", "aisatsu", "salam"], ["????", "ohayou", "selamat pagi"], ["?????", "konnichiwa", "halo/selamat siang"], ["?????", "konbanwa", "selamat malam"], ["?????", "arigatou", "terima kasih"], ["?????", "sumimasen", "permisi/maaf"], ["??????", "onegaishimasu", "tolong"], ["???", "daijoubu", "baik-baik saja"], ["??", "namae", "nama"], ["??", "gakusei", "pelajar"],
  ["??", "sensei", "guru"], ["???", "kaishain", "pegawai perusahaan"], ["??", "tomodachi", "teman"], ["??", "kazoku", "keluarga"], ["?", "haha", "ibu"], ["?", "chichi", "ayah"], ["?", "ani", "kakak laki-laki"], ["?", "ane", "kakak perempuan"], ["?", "otouto", "adik laki-laki"], ["?", "imouto", "adik perempuan"],
  ["?", "ie", "rumah"], ["??", "heya", "kamar"], ["??", "daidokoro", "dapur"], ["?", "tsukue", "meja"], ["??", "isu", "kursi"], ["?", "mado", "jendela"], ["??", "doa", "pintu"], ["??", "futon", "kasur"], ["??", "denki", "lampu/listrik"], ["??", "tokei", "jam"],
  ["??", "gohan", "nasi/makanan"], ["?", "mizu", "air"], ["??", "ocha", "teh"], ["??", "gyuunyuu", "susu"], ["?", "niku", "daging"], ["?", "sakana", "ikan"], ["??", "yasai", "sayur"], ["??", "kudamono", "buah"], ["?", "tamago", "telur"], ["?", "shio", "garam"],
  ["??", "satou", "gula"], ["?", "sara", "piring"], ["?", "hashi", "sumpit"], ["??", "houchou", "pisau dapur"], ["???", "reizouko", "kulkas"], ["??", "gakkou", "sekolah"], ["??", "kyoushitsu", "kelas"], ["??", "shukudai", "PR"], ["??", "shiken", "ujian"], ["??", "benkyou", "belajar"],
  ["?", "hon", "buku"], ["??", "jisho", "kamus"], ["??", "enpitsu", "pensil"], ["?", "kami", "kertas"], ["??", "shitsumon", "pertanyaan"], ["?", "eki", "stasiun"], ["??", "densha", "kereta"], ["???", "chikatetsu", "metro"], ["??", "basu", "bus"], ["?", "kuruma", "mobil"],
  ["???", "jitensha", "sepeda"], ["??", "kippu", "tiket"], ["??", "kuukou", "bandara"], ["?", "michi", "jalan"], ["?", "migi", "kanan"], ["?", "hidari", "kiri"], ["?", "mae", "depan"], ["??", "ushiro", "belakang"], ["??", "chikai", "dekat"], ["??", "tooi", "jauh"],
  ["??", "kaisha", "perusahaan"], ["??", "shigoto", "pekerjaan"], ["??", "kaigi", "rapat"], ["???", "meeru", "email"], ["??", "shiryou", "dokumen"], ["??", "houkoku", "laporan"], ["??", "joushi", "atasan"], ["??", "douryou", "rekan kerja"], ["??", "yotei", "jadwal"], ["??", "zangyou", "lembur"],
  ["??", "byouin", "rumah sakit"], ["?", "kusuri", "obat"], ["?", "atama", "kepala"], ["??", "onaka", "perut"], ["?", "netsu", "demam"], ["??", "itai", "sakit"], ["?", "seki", "batuk"], ["??", "isha", "dokter"], ["???", "kangoshi", "perawat"], ["??", "yoyaku", "reservasi"],
  ["??", "hare", "cerah"], ["?", "ame", "hujan"], ["?", "yuki", "salju"], ["??", "atsui", "panas"], ["??", "samui", "dingin"], ["???", "isogashii", "sibuk"], ["???", "tanoshii", "menyenangkan"], ["???", "muzukashii", "sulit"], ["??", "kantan", "mudah"], ["??", "benri", "praktis"],
  ["??", "kau", "membeli"], ["??", "uru", "menjual"], ["??", "yomu", "membaca"], ["??", "kaku", "menulis"], ["??", "kiku", "mendengar"], ["??", "hanasu", "berbicara"], ["??", "miru", "melihat"], ["??", "iku", "pergi"], ["??", "kuru", "datang"], ["??", "kaeru", "pulang"],
  ["???", "taberu", "makan"], ["??", "nomu", "minum"], ["??", "matsu", "menunggu"], ["??", "yasumu", "istirahat"], ["??", "hataraku", "bekerja"]
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
  ?: ["sei/hare", "cerah"], ?: ["kou/kangaeru", "berpikir"], ?: ["saku/tsukuru", "membuat"], ?: ["shi/tsukau", "memakai"],
  ?: ["shi/hajimeru", "mulai"], ?: ["shuu/owaru", "selesai"], ?: ["shuu/narau", "belajar"], ?: ["kyou/oshieru", "mengajar"],
  ?: ["tou/kotaeru", "jawaban"], ?: ["mon/tou", "bertanya"], ?: ["you/mochiiru", "keperluan, memakai"], ?: ["gaku/tanoshii", "musik, senang"],
  ?: ["setsu/kiru", "memotong"], ?: ["kin/chikai", "dekat"], ?: ["en/tooi", "jauh"], ?: ["sou/hayai", "cepat, pagi"],
  ?: ["chi/osoi", "lambat"], ?: ["ta/ooi", "banyak"], ?: ["shou/sukunai", "sedikit"], ?: ["kyou/tsuyoi", "kuat, belajar"],
  ?: ["jaku/yowai", "lemah"], ?: ["sei/tadashii", "benar"], ?: ["dou/onaji", "sama"], ?: ["betsu/wakareru", "berbeda, terpisah"],
  ?: ["ben/tayori", "praktis, surat"], ?: ["yuu/aru", "ada, punya"], ?: ["mu/nai", "tidak ada"], ?: ["ka/bakeru", "perubahan"],
  ?: ["chuu/sosogu", "menuang, catatan"], ?: ["dou/hataraku", "bekerja"], ?: ["dou/ugoku", "bergerak"], ?: ["shi/kokoromiru", "mencoba"],
  ?: ["kou/iku", "pergi"], ?: ["rai/kuru", "datang"], ?: ["ki/kaeru", "pulang"], ?: ["ritsu/tatsu", "berdiri"],
  ?: ["nyuu/hairu", "masuk"], ?: ["shutsu/deru", "keluar"], ?: ["kai/au", "bertemu"], ?: ["go/kataru", "bahasa"],
  ?: ["bai/kau", "membeli"], ?: ["bai/uru", "menjual"], ?: ["doku/yomu", "membaca"], ?: ["sho/kaku", "menulis"],
  ?: ["bun/kiku", "mendengar"], ?: ["wa/hanasu", "berbicara"], ?: ["ken/miru", "melihat"], ?: ["ki/okiru", "bangun, terjadi"],
  ?: ["shin/neru", "tidur"], ?: ["yuu/asobu", "bermain"], ?: ["ei/oyogu", "berenang"], ?: ["kyuu/naku", "menangis"],
  ?: ["shou/warau", "tertawa"], ?: ["do/okoru", "marah"], ?: ["kon/komaru", "kesulitan"], ?: ["hi/tsukareru", "lelah"],
  ?: ["jo/tasukeru", "membantu"], ?: ["ko/yobu", "memanggil"], ?: ["kyuu/suu", "menghirup"], ?: ["sui/fuku", "meniup"],
  ?: ["ou/osu", "mendorong"], ?: ["in/hiku", "menarik"], ?: ["futsu/harau", "membayar"], ?: ["sen/erabu", "memilih"],
  ?: ["ketsu/kimeru", "memutuskan"], ?: ["tei/sadameru", "menentukan"], ?: ["kei/hakaru", "menghitung"], ?: ["sha/utsusu", "menyalin, foto"],
  ?: ["ei/utsuru", "memantulkan, film"], ?: ["hou/hanasu", "melepas"], ?: ["juu/sumu", "tinggal"], ?: ["haku/tomaru", "menginap"],
  ?: ["sen/arau", "mencuci"], ?: ["sou/haku", "menyapu"], ?: ["shaku/kariru", "meminjam"], ?: ["hen/kaesu", "mengembalikan"],
  ?: ["bou/wasureru", "lupa"], ?: ["kaku/oboeru", "ingat"], ?: ["kai/hiraku", "membuka"], ?: ["hei/shimeru", "menutup"],
  ?: ["ken/tateru", "membangun"], ?: ["hi/tobu", "terbang"], ?: ["kou/majiru", "bergaul, bertukar"], ?: ["tsuu/tooru", "lewat, komunikasi"],
  ?: ["un/hakobu", "membawa, nasib"], ?: ["sou/okuru", "mengirim"], ?: ["chaku/tsuku", "tiba, memakai"], ?: ["jou/noru", "naik kendaraan"],
  ?: ["kou/oriru", "turun"], ?: ["ho/aruku", "berjalan"], ?: ["sou/hashiru", "berlari"], ?: ["shi/tomaru", "berhenti"],
  ?: ["tai/matsu", "menunggu"], ?: ["ji/motsu", "memegang"], ?: ["shu/toru", "mengambil"], ?: ["chi/oku", "meletakkan"],
  ?: ["tai/kasu", "meminjamkan"], ?: ["juu/omoi", "berat"], ?: ["kei/karui", "ringan"], ?: ["tai/futoi", "tebal, gemuk"],
  ?: ["sai/hosoi", "tipis, halus"], ?: ["kan/amai", "manis"], ?: ["shin/karai", "pedas, sulit"], ?: ["ku/kurushii", "pahit, menderita"],
  ?: ["jaku/wakai", "muda"], ?: ["rou/oiru", "tua"], ?: ["kou/hiroi", "luas"], ?: ["kyou/semai", "sempit"],
  ?: ["ryou/yoi", "baik"], ?: ["aku/warui", "buruk"], ?: ["bou/isogashii", "sibuk"], ?: ["tsuu/itai", "sakit"],
  ?: ["chi/naoru", "sembuh, mengobati"], ?: ["sai/sumu", "selesai, ekonomi"], ?: ["kei/heru", "melalui, ekonomi"], ?: ["sou/arasou", "bertengkar"],
  ?: ["shou/katsu", "menang"], ?: ["fu/makeru", "kalah, memikul"], ?: ["hai/yabureru", "kalah"], ?: ["shu/mamoru", "melindungi"],
  ?: ["kou/semeru", "menyerang"], ?: ["shou/kesu", "menghapus"], ?: ["bou/fusegu", "mencegah"], ?: ["kyuu/sukuu", "menolong"],
  ?: ["ken/kewashii", "bahaya, curam"], ?: ["ki/abunai", "bahaya"], ?: ["zen/mattaku", "utuh, semua"], ?: ["do/tsutomeru", "berusaha"],
  ?: ["sei/naru", "menjadi"], ?: ["shitsu/ushinau", "hilang, gagal"], ?: ["toku/eru", "mendapat"], ?: ["kyo/yurusu", "mengizinkan"],
  ?: ["nin/mitomeru", "mengakui"], ?: ["sou/omou", "pikiran"], ?: ["gan/negau", "harapan"], ?: ["bou/nozomu", "harapan"],
  ?: ["kou/suki", "suka"], ?: ["ken/kirai", "benci"], ?: ["hi/kanashii", "sedih"], ?: ["ki/yorokobu", "senang"],
  ?: ["fu/kowai", "takut"], ?: ["jaku/sabishii", "sepi"], ?: ["sei/shizuka", "tenang"], ?: ["shin/nigiyaka", "ramai"],
  ?: ["ei/itonamu", "mengelola"], ?: ["zou/tsukuru", "membuat"], ?: ["chiku/kizuku", "membangun"], ?: ["setsu/moukeru", "mendirikan"],
  ?: ["bi/sonaeru", "persiapan"], ?: ["ryou/hakaru", "jumlah"], ?: ["zou/fueru", "bertambah"], ?: ["gen/heru", "berkurang"],
  ?: ["hi/kuraberu", "membandingkan"], ?: ["i/chigau", "berbeda"], ?: ["ji/niru", "mirip"], ?: ["hen/kawaru", "berubah"],
  ?: ["i/utsuru", "pindah"], ?: ["zoku/tsuzuku", "lanjut"], ?: ["ka/sugiru", "melewati, berlebih"], ?: ["kyo/saru", "pergi, masa lalu"],
  ?: ["rei/modoru", "kembali"], ?: ["shin/susumu", "maju"], ?: ["tai/shirizoku", "mundur"], ?: ["tou/noboru", "naik"],
  ?: ["raku/ochiru", "jatuh"], ?: ["ryuu/nagareru", "mengalir"], ?: ["yuu/yasashii", "unggul, lembut"], ?: ["eki/yasashii", "mudah"],
  ?: ["nan/muzukashii", "sulit"], ?: ["kaku/tashika", "pasti"]
};

data.kana.kanji = data.kana.kanji.map((row) => {
  const correction = kanjiCorrections[row[0]];
  return correction ? [row[0], correction[0], correction[1]] : row;
});

data.lessonDetails["Hiragana Dasar"].vocab = data.kana.hiragana;
data.lessonDetails["Hiragana Dasar"].examples = data.kana.hiragana.slice(0, 36).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Katakana Dasar"].vocab = data.kana.katakana;
data.lessonDetails["Katakana Dasar"].examples = data.kana.katakana.slice(0, 36).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kanji Campuran"].vocab = data.kana.kanji;
data.lessonDetails["Kanji Campuran"].examples = data.kana.kanji.slice(0, 80).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kanji Campuran"].body.push(`Bank kanji sekarang berisi ${data.kana.kanji.length} kanji dasar sampai menengah. Daftar ini dipakai sama untuk halaman Kanji, detail materi Kanji, pencarian, dan flashcard Kanji.`);
data.lessonDetails["Kamus Kosakata"].vocab = vocabularyBank;
data.lessonDetails["Kamus Kosakata"].examples = vocabularyBank.slice(0, 80).map((row) => `${row[0]} = ${row[1]} = ${row[2]}`);
data.lessonDetails["Kamus Kosakata"].body.push(`Bank kosakata utama berisi ${vocabularyBank.length} kata tematik. Isi ini dipakai sama untuk detail Kamus Kosakata, pencarian, dan flashcard kosakata.`);
data.categories = [
  ["salam & perkenalan", "10 kosakata"], ["keluarga", "10 kosakata"], ["benda rumah", "10 kosakata"], ["dapur & makanan", "20 kosakata"],
  ["sekolah", "10 kosakata"], ["transportasi", "15 kosakata"], ["kantor & pekerjaan", "10 kosakata"], ["kesehatan", "10 kosakata"],
  ["cuaca & sifat", "10 kosakata"], ["kata kerja dasar", "15 kosakata"], ["kanji utama", `${data.kana.kanji.length} kanji`], ["aksara dasar", `${data.kana.hiragana.length + data.kana.katakana.length} huruf`]
];

// ==========================================
// XP PROGRESS TRACKING SYSTEM & QUIZ CONFIG
// ==========================================
const XP_STORAGE_KEY = 'japanese_xp_progress';

// Global random seed untuk quiz shuffle (perubahan setiap load)
let currentQuizSeed = Math.random();

// Konfigurasi jumlah soal per jenis kuis
const QUIZ_CONFIG = {
  MIN_QUESTIONS: 10,        // Minimal soal per kuis
  DEFAULT_QUESTIONS: 15,    // Default jumlah soal
  MAX_QUESTIONS: 50,        // Maksimal soal per sesi
  MIXED_QUIZ_POOL_SIZE: 30  // Pool soal campuran untuk variasi
};

function getShuffledArray(array) {
    // Fisher-Yates shuffle dengan Math.random() untuk randomisasi sempurna
    let result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function loadXPProgress() {
  try {
    const saved = localStorage.getItem(XP_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      totalXp: 0,
      quizzesCompleted: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastActiveDate: null,
      dailyXp: {}, // { '2024-01-15': 100 }
      lessonStreak: 0
    };
  } catch (e) {
    console.error('Error loading XP progress:', e);
    return getDefaultXP();
  }
}

function saveXPProgress(progress) {
  try {
    localStorage.setItem(XP_STORAGE_KEY, JSON.stringify(progress));
    updateXpDisplay(progress);
  } catch (e) {
    console.error('Error saving XP progress:', e);
  }
}

function getDefaultXP() {
  return {
    totalXp: 0,
    quizzesCompleted: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    lastActiveDate: null,
    dailyXp: {},
    lessonStreak: 0
  };
}

function getXpForAnswer(isCorrect) {
  return isCorrect ? 10 : 2; // Benar: 10 XP, Salah: 2 XP (untuk tetap belajar)
}

function recordQuizCompletion(correctCount, wrongCount, xpEarned) {
  const now = new Date();
  const dateKey = now.toISOString().split('T')[0]; // '2024-01-15'
  
  const progress = loadXPProgress();
  progress.totalXp += xpEarned;
  progress.quizzesCompleted += 1;
  progress.correctAnswers += correctCount;
  progress.wrongAnswers += wrongCount;
  
  if (!progress.dailyXp[dateKey]) {
    progress.dailyXp[dateKey] = 0;
  }
  progress.dailyXp[dateKey] += xpEarned;
  
  // Check streak
  if (progress.lastActiveDate === dateKey) {
    progress.lessonStreak += 1;
  } else {
    // Reset streak if more than 1 day passed
    const lastDate = new Date(progress.lastActiveDate);
    const today = new Date(dateKey);
    const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    progress.lessonStreak = diffDays <= 1 ? progress.lessonStreak + 1 : 1;
  }
  
  progress.lastActiveDate = dateKey;
  saveXPProgress(progress);
}

function getProgressStats() {
  const progress = loadXPProgress();
  const totalQuizzes = progress.quizzesCompleted;
  const accuracy = totalQuizzes > 0 
    ? Math.round((progress.correctAnswers / totalQuizzes) * 100) 
    : 0;
  
  return {
    totalXp: progress.totalXp,
    quizzesCompleted: progress.quizzesCompleted,
    correctAnswers: progress.correctAnswers,
    wrongAnswers: progress.wrongAnswers,
    accuracy: accuracy,
    currentStreak: progress.lessonStreak,
    lastActiveDate: progress.lastActiveDate
  };
}

function updateXpDisplay(stats) {
  // Update UI jika ada elemen dengan ID terkait
  const xpEl = document.getElementById('total-xp');
  if (xpEl) {
    xpEl.textContent = stats.totalXp.toLocaleString() + ' XP';
  }
  
  const quizzesEl = document.getElementById('quizzes-completed');
  if (quizzesEl) {
    quizzesEl.textContent = stats.quizzesCompleted + ' Kuis';
  }
  
  const accuracyEl = document.getElementById('accuracy-rate');
  if (accuracyEl) {
    accuracyEl.textContent = stats.accuracy + '% Akurasi';
  }
}

function resetXPProgress() {
  localStorage.removeItem(XP_STORAGE_KEY);
  console.log('XP Progress direset');
}

const lessonSummaryOverrides = {
  "Hiragana Dasar": `${data.kana.hiragana.length} huruf Hiragana dasar dan contoh kata untuk latihan baca.`,
  "Katakana Dasar": `${data.kana.katakana.length} huruf Katakana dan contoh kata serapan untuk latihan visual.`,
  "Kanji Campuran": `${data.kana.kanji.length} kanji campuran dengan bacaan, arti, contoh, dan flashcard.`,
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

const KNOWN_PARTICLES = ["?", "?", "?", "?", "?", "?", "?", "?", "??", "??", "?", "ya"];;


const grammarQuizTargets = {
  "Waktu & Jam": [
    ["??????", "jikan"],
    ["???????? 8 ???", "time"],
    ["?????????", "seven o'clock"]
  ],
  "Angka & Counter Dasar": [
    ["??????", "person counter"],
    ["?????????", "book counter"],
    ["??????????", "apple counter"]
  ],
  "Kata Kerja Bentuk MASU": [
    ["??????", "eat verb"],
    ["?????", "study verb"],
    ["???????", "go verb"]
  ],
  "Kata Sifat I dan NA": [
    ["???????", "i-adjective"],
    ["???????", "na-adjective"],
    ["???????", "weather adjective"]
  ],
  "Bentuk TE Dasar": [
    ["???????", "te-form"],
    ["????????", "te-form suggestion"],
    ["????????", "te-form wish"]
  ],
  "Bentuk TE IMASU": [
    ["??????", "te-imasu progressive"],
    ["?????", "te-imasu state"],
    ["??????", "te-imasu action"]
  ],
  "Bentuk Potensial": [
    ["????", "potential form"],
    ["????", "can go"],
    ["????", "can make"]
  ],
  "Tai Form Keinginan": [
    ["?????", "want to see"],
    ["????", "want to eat"],
    ["????", "want to meet"]
  ],
  "Pengalaman TA KOTO GA ARU": [
    ["??????????", "experienced"],
    ["??????????", "have eaten"],
    ["?????????", "have seen"]
  ],
  "TE MO II": [
    ["????????", "permission"],
    ["?????????", "ask permission"],
    ["????????", "ask for sleep"]
  ],
  "TE WA IKENAI": [
    ["?????????", "prohibition"],
    ["?????????", "must not eat"],
    ["?????????", "must not cry"]
  ],
  "NAKEREBA NARANAI": [
    ["????????????", "must study"],
    ["???????????", "must go"],
    ["???????????", "must work"]
  ],
  "TSUMORI": [
    ["???????", "plan to come"],
    ["?????", "plan to buy"],
    ["?????", "plan to rest"]
  ],
  "Perbandingan YORI": [
    ["?????????", "comparison"],
    ["??????????????", "city comparison"],
    ["???????", "season comparison"]
  ],
  "Superlatif ICHIBAN": [
    ["??????", "favorite color"],
    ["????????", "tallest building"],
    ["?????????", "most delicious food"]
  ],
  "SOU DESU Kabar": [
    ["??????", "hear it rains"],
    ["??????", "look busy"],
    ["???????", "heard he is busy"]
  ],
  "SOU DESU Terlihat": [
    ["?????", "looks delicious"],
    ["???????", "looks fun"],
    ["???????", "looks difficult"]
  ],
  "TARA Conditional": [
    ["??????????", "when you come"],
    ["????????", "if it rains"],
    ["??????????", "if no time"]
  ],
  "BA Conditional": [
    ["????????", "if you go"],
    ["????????", "if you eat"],
    ["?????????", "if you ask"]
  ],
  "NARA Conditional": [
    ["????????", "if Tokyo"],
    ["????????????", "if hot"],
    ["??????", "if free"]
  ],
  "Passive Ukemi": [
    ["??????", "was told"],
    ["????", "was seen"],
    ["???????", "was praised"]
  ],
  "Causative Shieki": [
    ["?????", "make drink"],
    ["??????", "made stand"],
    ["????", "let rest"]
  ],
  "Keigo Dasar": [
    ["????????", "honorific speak"],
    ["????????", "humble guide"],
    ["???????", "humble wait"]
  ],
  "Wake Da": [
    ["???????", "explain reason"],
    ["???????", "reason for delay"],
    ["??????", "consequence"]
  ],
  "Hazu Da": [
    ["??????", "should come"],
    ["???????", "should rest"],
    ["??????", "should succeed"]
  ],
  "Hodo": [
    ["??????", "so much want to cry"],
    ["????????", "not as cold as yesterday"],
    ["???????", "easier than expected"]
  ],
  "Kagiri": [
    ["???????", "as far as I know"],
    ["????", "as long as there is"],
    ["????", "to the extent permitted"]
  ],
  "Sai Ni": [
    ["????", "when paying attention"],
    ["??????", "if opportunity arises"],
    ["?????", "when contacting"]
  ],
  "Yue Ni": [
    ["???", "therefore"],
    ["????", "consequently"],
    ["????", "because of"]
  ],
  "Uru/Eru": [
    ["?????", "possible to occur"],
    ["??????", "cannot exist"],
    ["??????", "can occur"]
  ],
  "TOTAN NI": [
    ["?????", "just as left"],
    ["?????????", "stood up and..."],
    ["??????", "just cut and..."]
  ],
  "Nuki Ni Shite": [
    ["?????", "excluding"],
    ["????????", "considering without"],
    ["????????", "cannot without"]
  ]
};


const PARTICLE_INFO = {
  "?": "objek langsung",
  "?": "topik kalimat",
  "?": "subjek atau informasi baru",
  "?": "waktu, tujuan, atau keberadaan",
  "?": "tempat terjadinya aksi atau alat",
  "?": "arah gerak",
  "?": "juga / pun",
  "?": "kepemilikan atau keterangan"
};

const lessonTypes = {
  "Hiragana Dasar": "kana",
  "Katakana Dasar": "kana",
  "Kanji Campuran": "kanji",
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
  "Reading Pengumuman": "reading",
  "Reading Email Pendek": "reading",
  "Listening Angka & Harga": "listening",
  "Listening Dialog Harian": "listening",
  "Simulasi JLPT N5": "reading",
  "Simulasi JLPT N4": "reading",
  "Simulasi JLPT N3": "reading"
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
  { slug: titleToSlug["Simulasi JLPT N5"], task: "Kerjakan kuis cepat JLPT (Pilih jumlah soal)", time: "8 menit", action: "jlpt_quick_quiz", options: { questionCount: 10, levels: ["N5"] } }
];

// JLPT Quick Quiz Configuration
const JLPT_QUIZ_CONFIG = {
  defaultQuestionCount: 10, // Default jumlah soal jika tidak ditentukan
  availableOptions: [5, 10, 15, 20, "All"], // Opsi jumlah soal yang tersedia
  questionPool: {
    "N5": [], // Akan diisi dengan soal-soal JLPT N5 dari berbagai materi
    "N4": [],
    "N3": [],
    "N2": [],
    "N1": []
  }
};

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
      question: `Apa bunyi (romaji) dari huruf ?${row[0]}??`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `?${row[0]}? dibaca ${row[1]}${row[2] ? ` (contoh kata: ${row[2]})` : ""}.`
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
      explanation: `"${row[1]}" adalah bunyi huruf ?${row[0]}?.`
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
      question: `Apa arti dari ?${row[0]}? (${row[1]})?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `?${row[0]}? (${row[1]}) artinya ${row[2]}.`
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
      question: `Apa arti dari kanji ?${row[0]}? (${row[1]})?`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `?${row[0]}? (${row[1]}) artinya ${row[2]}.`
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
        question: `Lengkapi kalimat: ?${blanked}?`,
        options,
        correctAnswer: options.indexOf(focal),
        explanation: expl
      });
    });
  }

  // Jika tidak ada partikel target, coba gunakan pola kata dari grammarQuizTargets
  const targets = grammarQuizTargets[title];
  if (targets && targets.length) {
    // Gunakan contoh kalimat untuk membuat soal rumpang
    // Ambil 3 kalimat pertama sebagai contoh
    const sampleSentences = targets.slice(0, 3).map((t, idx) => t[0]);
    
    // Untuk setiap kalimat, buat blank dari kata yang disebutkan
    sampleSentences.forEach((sentence, idx) => {
      if (!sentence || !sentence || typeof sentence !== 'string') return;
      
      // Temukan kemungkinan pola vocabulary di dalam kalimat
      const possibleWords = sentence.match(/[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]+/g); // Chinese/Japanese characters
      
      if (possibleWords && possibleWords.length > 0) {
        // Ambil satu karakter/kata acak untuk diblank
        const focalWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        const blankedSentence = sentence.replace(focalWord, '___');
        
        // Buat opsi dengan distraktor sederhana (gunakan bagian lain dari sententensah)
        // Pastikan minimal ada 2 opsi unik yang valid
        let uniqueOptions = [...new Set([...possibleWords.filter(w => w !== focalWord), focalWord])];
        // Jika hanya ada 1 kata dalam kalimat seluruhnya, tambahkan dummy distraktor
        while (uniqueOptions.length < 2) {
          const dummies = ['??', '???'];
          dummies.forEach(d => { if (!uniqueOptions.includes(d)) uniqueOptions.push(d); });
        }
        const options = shuffle(uniqueOptions).slice(0, 4);
        
        questions.push({
          id: `${title}__g${idx}`,
          lessonId: title,
          category: lesson.level || "grammar",
          type: "grammar",
          question: `Lengkapi kalimat: ?${blankedSentence}?`,
          options,
          correctAnswer: options.indexOf(focalWord),
          explanation: `Kata?${focalWord}?adalah bagian penting dari pola grammar ini.`
        });
      }
    });
  }

  return questions;
}

function buildComprehensionQuestions(title) {
  const lesson = data.lessonDetails[title];
  if (!lesson) return [];
  const bank = comprehensionQuizBank[title];
  if (!bank || !bank.length) return [];

  return bank.map(([passage, question, correct, choiceList], idx) => {
    const options = shuffle(choiceList);
    return {
      id: `${title}__c${idx}`,
      lessonId: title,
      category: lesson.level || "comprehension",
      type: lessonTypes[title],
      question: `Bacaan/Percakapan: "${passage}"\n${question}`,
      options,
      correctAnswer: options.indexOf(correct),
      explanation: `Jawaban benar: "${correct}", berdasarkan teks "${passage}".`
    };
  });
}

function buildLessonQuestions(title) {
  const type = lessonTypes[title] || "vocabulary";
  switch (type) {
    case "kana": return buildKanaQuestions(title);
    case "kanji": return buildKanjiQuestions(title);
    case "grammar": return buildGrammarQuestions(title);
    case "reading":
    case "listening": return buildComprehensionQuestions(title);
    case "flashcard": return [];
    case "vocabulary":
    default: return buildVocabularyQuestions(title);
  }
}

// Array penjelasan untuk kuis umum (lebih banyak variasi)
const generalExplanations = [
  "????(gohan) berarti nasi atau makanan secara umum.",
  "Huruf Hiragana untuk bunyi 'ka' adalah ?.",
  "Partikel ? (wa) menandai topik kalimat.",
  "Kanji ? (mizu/sui) berarti air.",
  "Bentuk sopan kata kerja makan adalah ???? (tabemasu).",
  "Partikel ? (o) menandai objek langsung dalam kalimat.",
  "Kata sifat ?-adjjective dapat langsung menerangkan benda.",
  "Bentuk negatif ??? untuk kata kerja bentuk masu.",
  "Kata sifat ?-adjjective membutuhkan ? sebelum noun.",
  "Tenses lampau menggunakan -??? atau -?"
];

function buildGeneralQuestions() {
  // Konversi semua data.questions menjadi object question dengan ID
  const allQuestions = data.questions.map((q, i) => ({
    id: `umum__${i}`,
    lessonId: "umum",
    category: "Campuran",
    type: "mixed",
    question: q.text,
    options: q.choices.slice(),
    correctAnswer: q.answer,
    explanation: generalExplanations[i] || generalExplanations[Math.floor(Math.random() * generalExplanations.length)]
  }));
  
  // ACAK SEMUA SOAL DENGAN FISHER-YATES SHUFFLE!
  const shuffledQuestions = getShuffledArray(allQuestions);
  
  // Ambil soal berdasarkan konfigurasi - MINIMAL 10 SOAL!
  const numQuestions = Math.min(
    QUIZ_CONFIG.MIN_QUESTIONS + Math.floor(Math.random() * 5), // Random 10-14 soal
    shuffledQuestions.length
  );
  
  return shuffledQuestions.slice(0, numQuestions);
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

function validateStructure() {
  const errors = [];

  // 1. slug unik & 2. judul unik & 3. setiap lesson punya type
  const slugs = data.lessons.map((l) => titleToSlug[l[1]]);
  const slugSet = new Set();
  const titleSet = new Set();
  data.lessons.forEach((l) => {
    const t = l[1];
    if (titleSet.has(t)) errors.push(`Duplikat judul: ${t}`);
    titleSet.add(t);
    const s = titleToSlug[t];
    if (slugSet.has(s)) errors.push(`Duplikat slug: ${s}`);
    slugSet.add(s);
    if (!lessonTypes[t]) errors.push(`Lesson tanpa type: ${t}`);
  });

  // 4. setiap mapping dashboard mengarah ke lesson valid (round-trip)
  dashboardPath.forEach((item, i) => {
    const title = slugToTitle[item.slug];
    if (!title) { errors.push(`dashboardPath[${i}] slug tidak valid: ${item.slug}`); return; }
    if (titleToSlug[title] !== item.slug) errors.push(`dashboardPath[${i}] slug tidak round-trip: ${item.slug}`);
  });

  // 5. kana: romaji valid (tidak kosong)
  ["hiragana", "katakana"].forEach((k) => {
    data.kana[k].forEach((row) => {
      if (!row[0] || !row[1] || !/^[a-z]+$/.test(row[1])) {
        errors.push(`Kana ${k} tidak valid: ${JSON.stringify(row)}`);
      }
    });
  });

  // 6. vocabulary: kata, reading, arti lengkap
  data.lessons.forEach((l) => {
    const t = l[1];
    if (!["vocabulary", "kana", "kanji", "grammar", "reading", "listening", "flashcard"].includes(lessonTypes[t])) return;
    if (lessonTypes[t] !== "vocabulary") return;
    (data.lessonDetails[t].vocab || []).forEach((row) => {
      if (!row[0] || !row[1] || !row[2]) errors.push(`Vocab tidak lengkap di "${t}": ${JSON.stringify(row)}`);
    });
  });

  // 7. grammar TIDAK memakai generator vocabulary
  data.lessons.forEach((l) => {
    const t = l[1];
    if (lessonTypes[t] !== "grammar") return;
    const qs = buildLessonQuestions(t);
    qs.forEach((q) => {
      if (q.type === "vocabulary") errors.push(`Grammar "${t}" menghasilkan soal vocabulary (seharusnya kalimat): ${q.question}`);
      if (!q.question.includes("___")) errors.push(`Soal grammar "${t}" tidak punya konteks kalimat: ${q.question}`);
    });
  });

  // 8. reading/listening harus punya soal pemahaman (bukan kosong)
  data.lessons.forEach((l) => {
    const t = l[1];
    if (lessonTypes[t] === "reading" || lessonTypes[t] === "listening") {
      const qs = buildLessonQuestions(t);
      if (!qs.length) errors.push(`Reading/Listening "${t}" TIDAK menghasilkan soal padahal seharusnya ada soal pemahaman`);
      else {
        // Check that questions are comprehension type (not vocabulary)
        if (qs.some(q => q.type === "vocabulary")) errors.push(`Reading/Listening "${t}" punya soal vocabulary: ${qs.find(q => q.type === "vocabulary").question}`);
      }
    }
  });

  return errors;
}

const contentErrors = validateContent();
const structureErrors = validateStructure();
if (typeof window !== "undefined" && (contentErrors.length || structureErrors.length)) {
  console.warn("[HiraKataKan] Masalah validasi:", [...contentErrors, ...structureErrors]);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    data,
    extraLessonModules,
    vocabularyBank,
    kanjiBank,
    comprehensionQuizBank,
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
    buildComprehensionQuestions,
    buildLessonQuestions,
    buildGeneralQuestions,
    validateContent,
    validateStructure
  };
}




// Direct JLPT Quiz Handler
function startJLPTDirectQuiz(questionCount) {
  activeQuestion = 0;
  quizAnswered = false;
  quizCorrect = 0;
  quizWrong = 0;
  quizXp = 0;
  
  const allQuestions = buildGeneralQuestions();
  if (allQuestions.length === 0) {
    alert("Belum ada soal tersedia.");
    return;
  }
  
  const shuffled = getShuffledArray(allQuestions);
  const selectedQuestions = shuffled.slice(0, Math.min(questionCount, shuffled.length));
  
  activeQuizLesson = null;
  activeQuizQuestions = selectedQuestions;
  
  renderQuestion();
  setView("quiz");
  recordActivity(`Mulai Kuis JLPT (${questionCount} soal)`, 5, 0);
}
