# 🎌 JLPT Quick Quiz Selection Modal - Demo & Panduan Lengkap

## ✨ Fitur BARU: Pilihan Jumlah Soal yang Dapat Dikustomisasi

**MASALAH SEBELUMNYA:**
- ❌ Kuis JLPT otomatis langsung 95 soal (terlalu banyak!)
- ❌ Tidak ada kontrol jumlah soal
- ❌ User harus scroll dan menjawab ratusan pertanyaan tanpa pilihan

**SOLUSI YANG DIBUAT:**
- ✅ Popup modal interaktif untuk pilih jumlah soal
- ✅ Opsi: **5, 10, 15, 20, atau 30 soal** (recommended: ⭐ 10 soal)
- ✅ Pilihan level JLPT: N5, N4, N3, N2, N1 (multi-select)
- ✅ Real-time summary: Total soal & level terpilih
- ✅ Mobile responsive: Grid layout 2 kolom untuk tampilan mobile

---

## 📱 Cara Menggunakan Fitur Ini

### Langkah 1: Buka Dashboard/Home Page
Ketika Anda membuka website, Anda akan melihat dashboard dengan "Jalur Belajar Hari Ini"

### Langkah 2: Klik Tombol "Kerjakan kuis cepat JLPT (Pilih jumlah soal)"

Di bagian dashboard, akan muncul kartu/dashboard item dengan text:
```
Simulasi JLPT N5 | Kerjakan kuis cepat JLPT (Pilih jumlah soal) | 8 menit
```

**KLIK pada kartu tersebut!**

---

## 🎯 POPUP MODAL Muncul - Pilih Jumlah Soal

Modal popup akan muncul dengan **tampilan bertema Jepang**:

### Header Modal:
```
🎌 Kuis Cepat JLPT N5                    [X]
```

### Bagian 1: Pilih Jumlah Soal
Anda akan melihat **5 tombol besar** dengan pilihan jumlah soal:

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   5 Soal    │  10 Soal⭐   │   15 Soal   │   20 Soal   │   30 Soal   │
│             │ (Recommended) │            │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

**Tombol akan berwarna:**
- 🔵 **PUTIH** = Belum dipilih
- 🔴 **MERAH** = SUDAH DIPILIH (dengan shadow glowing)

**RECOMMENDED:** 10 soal (paling seimbang untuk latihan cepat)

---

### Bagian 2: Pilih Level JLPT
Di bawah jumlah soal, ada section untuk pilih level:

```
Pilih Level JLPT:

┌──────┬──────┬──────┬──────┬──────┐
│  N5  │  N4  │  N3  │  N2  │  N1  │
└──────┴──────┴──────┴──────┴──────┘
```

- Bisa pilih **SINGLE LEVEL** (misal: hanya N5)
- Bisa pilih **MULTI LEVEL** (misal: N5 + N4, atau N4+N3+N2)
- Chip level akan berubah jadi **HIJAU** ketika aktif

---

### Bagian 3: Real-Time Summary
Di tengah modal ada box summary yang update otomatis:

```
┌──────────────────────────────────────────────┐
│ ℹ️ Summary:                                  │
│ Total soal: 10                                │
│ Level: N5                                     │
└──────────────────────────────────────────────┘
```

**Summary akan berubah secara real-time** setiap Anda klik tombol jumlah soal atau level!

---

### Footer Buttons:
```
┌─────────────────┬─────────────────┐
│     BATAL       │  MULAI KUIS ▶   │
│  (Close Modal)  │   (Start Quiz)  │
└─────────────────┴─────────────────┘
```

**Batal:** Tutup modal tanpa mulai kuis  
**Mulai Kuis ▶:** Mulai kuis dengan parameter yang sudah dipilih

---

## 🎮 Contoh Skenario Penggunaan

### Skenario A: Latihan Singkat (Quick Practice)
1. Klik tombol "10 Soal⭐ (Recommended)"
2. Biarkan level di N5 saja
3. Klik "Mulai Kuis ▶"
4. **HASIL:** Kuis dimulai dengan tepat **10 soal** dari level N5

### Skenario B: Latihan Panjang (Extended Practice)
1. Klik tombol "30 Soal"
2. Klik chip "N4" dan "N3" (multi-level)
3. Summary akan update: "Total soal: 30, Level: N4, N3"
4. Klik "Mulai Kuis ▶"
5. **HASIL:** Kuis dimulai dengan **30 soal campuran** dari N4 + N3

### Skenario C: Target Spesifik (Targeted Practice)
1. Klik "5 Soal"
2. Klik chip "N2" saja
3. Klik "Mulai Kuis ▶"
4. **HASIL:** Kuis singkat **5 soal level N2**

---

## 🎨 Tampilan Visual Detail

### Warna-warna yang Digunakan:
- **Japanese Red:** #c91818 (untuk tombol selected & accent)
- **Japanese Green:** #2e5a27 (untuk start button & success states)
- **Japanese Gold:** #d4af37 (untuk border & highlights)
- **Washi Paper:** #faf8f5 (background modal)

### Animasi:
- Fade-in saat modal muncul
- Slide-up effect
- Hover lift pada buttons
- Shadow glow pada button yang dipilih

### Mobile Responsive:
```
Mobile (< 768px):
┌────────────────────┐
│  5 Soal   │  10    │  ← Grid 2 kolom
│  15 Soal  │  20    │
│  30 Soal  │        │
└────────────────────┘

Buttons stacked vertically:
┌────────────────────┐
│      BATAL         │
└────────────────────┘
┌────────────────────┐
│   MULAI KUIS ▶     │
└────────────────────┘
```

---

## 💡 Tips & Best Practices

### Untuk Pemula (Beginner):
- **Gunakan 10 soal** → Balance sempurna untuk pertama kali
- **Level N5 saja** → Fokus pada materi dasar
- Waktu estimasi: ~8 menit

### Untuk Menengah (Intermediate):
- **Gunakan 20 soal** → Latihan lebih ekstensif
- **Level N4 + N5** → Review gabungan
- Waktu estimasi: ~15 menit

### Untuk Mahir (Advanced):
- **Gunakan 30 soal** → Full practice test
- **Multi-level N3+N2** → Tantangan maksimal
- Waktu estimasi: ~25 menit

### Untuk Time-Crunched Users:
- **Gunakan 5 soal** → Mini drill saat waktu sempit
- Level sesuai target
- Waktu estimasi: ~3-4 menit

---

## 🚀 Technical Details

### Functions yang Digunakan:
1. `showJLPTQuizSelection(level)` - Membuka modal
2. `selectQuestionCount(count)` - Update pilihan jumlah soal
3. `toggleJLPTLevel(level)` - Toggle multi-level selection
4. `startJLPTQuickQuiz()` - Start quiz dengan params terpilih
5. `buildAndStartJLPTQuiz(...)` - Generate soal sesuai jumlah & level

### State Management:
```javascript
let JLPT_QUIZ_SELECTION = {
  isOpen: false,
  selectedCount: 10,    // Default 10
  levels: ["N5"]        // Default N5
};
```

### File Files Terkait:
- **jlpt-quiz-handler.js** (479 lines) - Main handler dengan semua logic
- **index.html** (line 425) - Include script handler
- **app-data.js** - Configuration & dashboard setup

---

## 🎉 Benefits of This Feature

### Before (Sebelumnya):
- ❌ Fixed 95 questions - terlalu banyak!
- ❌ No control - pasif menerima semua soal
- ❌ Long time commitment - 60+ menit
- ❌ One-size-fits-all - tidak personal

### After (Sekarang):
- ✅ User control - pilih berapa soal sendiri
- ✅ Flexible time - 3 menit sampai 25 menit
- ✅ Personalized - sesuaikan level & jumlah
- ✅ Better UX - modal interaktif yang jelas

---

## 🔗 How to Access Now

1. Pastikan server running: `http://localhost:8000`
2. Browser otomatis terbuka ke dashboard
3. Cari card dengan judul "**Simulasi JLPT N5**"
4. Klik tombol "**Kerjakan kuis cepat JLPT (Pilih jumlah soal)**"
5. **POPUP MODAL MUNCUL!** 🎊
6. Pilih jumlah soal & level yang diinginkan
7. Klik "Mulai Kuis ▶" dan nikmati latihan!

---

## 📋 Checklist Test

Untuk memverifikasi fitur berfungsi:

- [ ] Server running di port 8000
- [ ] Browser terbuka ke localhost:8000
- [ ] Dashboard tampil
- [ ] Card "Simulasi JLPT N5" terlihat
- [ ] Klik card → Popup modal muncul
- [ ] Tombol jumlah soal dapat diklik (5, 10, 15, 20, 30)
- [ ] Chip level dapat di-toggle (N5-N1)
- [ ] Summary update real-time
- [ ] Klik "Mulai Kuis" → Quiz dimulai
- [ ] Jumlah soal sesuai dengan yang dipilih
- [ ] Semua soal dari level yang dipilih

---

## 🎌 Japanese Theme Inspiration

Modal ini didesain dengan nuansa Jepang autentik:
- Motif warna tradisional Jepang
- Typography clean & modern
- Smooth animations ala Japanese UI/UX
- Sakura-inspired color palette
- Minimalist aesthetic ala Japanese design

---

**Selamat mencoba! Sekarang Anda punya FULL CONTROL atas jumlah soal JLPT quiz!** 🎌✨

*Created with ❤️ for better learning experience*
