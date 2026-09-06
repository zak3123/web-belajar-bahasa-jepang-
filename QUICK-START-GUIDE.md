# 🚀 Quick Start Guide - JLPT Quiz Selection Modal

## ✅ Fitur SUDAH Selesai Diimplementasikan!

**Yang Sudah Dibuat:**
1. ✅ File `jlpt-quiz-handler.js` (479 baris) - Handler lengkap dengan popup modal
2. ✅ Script tag ditambahkan ke `index.html` (line 425)
3. ✅ Configuration di `app-data.js` dengan dashboard path baru
4. ✅ Popup modal interaktif untuk pilih jumlah soal (5, 10, 15, 20, 30)
5. ✅ Multi-level JLPT selection (N5-N1)
6. ✅ Real-time summary update
7. ✅ Mobile responsive design
8. ✅ Japanese-themed UI dengan warna & animasi autentik

---

## 🎯 Cara Menggunakan (Step-by-Step)

### Step 1: Buka Website
Website sudah bisa diakses di: **http://localhost:8000**

### Step 2: Lihat Dashboard
Anda akan melihat halaman dashboard dengan beberapa card. Cari card yang bertulisan:

```
┌─────────────────────────────────────┐
│ Simulasi JLPT N5                    │
│ Kerjakan kuis cepat JLPT           │
│ (Pilih jumlah soal)                 │
│ ⏱️ 8 menit                          │
└─────────────────────────────────────┘
```

### Step 3: KLIK Card Tersebut
Ketika Anda klik card "Simulasi JLPT N5", **POPUP MODAL AKAN MUNCUL**!

---

## 🎊 Tampilan Popup Modal

Modal akan muncul seperti ini:

```
┌──────────────────────────────────────────────────────────┐
│  🎌 Kuis Cepat JLPT N5                        [X]        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Pilih jumlah soal yang ingin dikerjakan:               │
│                                                          │
│  ┌─────────┬─────────────┬─────────┬─────────┬─────────┐ │
│  │  5 Soal │ 10 Soal⭐   │ 15 Soal │ 20 Soal │ 30 Soal │ │
│  │         │Recommended )│         │         │         │ │
│  └─────────┴─────────────┴─────────┴─────────┴─────────┘ │
│                                                          │
│  Pilih Level JLPT:                                       │
│                                                          │
│  [N5]  [N4]  [N3]  [N2]  [N1]                           │
│  ↑ Chip ini bisa dipilih multiple                       │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ ℹ️ Summary:                                        │ │
│  │ Total soal: 10                                     │ │
│  │ Level: N5                                          │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [     Batal     ]    [ Mulai Kuis ▶ ]                  │
└──────────────────────────────────────────────────────────┘
```

---

## 💡 Contoh Penggunaan

### Contoh 1: Latihan Cepat (Rekomendasi Pemula)
1. Klik tombol **"10 Soal⭐"**
2. Biarkan level di **"N5"** (sudah default)
3. Klik **"Mulai Kuis ▶"**
4. **Hasil:** Kuis dimulai dengan tepat 10 soal dari level N5!

### Contoh 2: Latihan Medium
1. Klik tombol **"20 Soal"**
2. Klik chip **"N5"** dan **"N4"** (multi-level)
3. Summary akan berubah jadi: "Total soal: 20, Level: N5, N4"
4. Klik **"Mulai Kuis ▶"**
5. **Hasil:** Kuis dengan 20 soal campuran dari N5 + N4!

### Contoh 3: Latihan Singkat Saat Waktu Sempit
1. Klik tombol **"5 Soal"**
2. Pilih level sesuai target
3. Klik **"Mulai Kuis ▶"**
4. **Hasil:** Kuis mini 5 soal untuk drill cepat!

---

## ✨ Keuntungan Fitur Ini

### Sebelum (Lama):
❌ Langsung dapat 95 soal tanpa kontrol  
❌ Harus scroll ratusan pertanyaan  
❌ Time commitment sangat lama (60+ menit)  
❌ Tidak ada pilihan - pasif menerima  

### Sekarang (Baru):
✅ **Pilih sendiri berapa soal** (5, 10, 15, 20, atau 30)  
✅ **Time flexible** - 3 menit sampai 25 menit  
✅ **Level customizable** - single atau multi-level  
✅ **Better UX** - popup modal interaktif yang jelas  

---

## 🔧 Troubleshooting

### Jika Popup Modal Tidak Muncul:

1. **Refresh Browser** (Ctrl+R / F5)
2. **Cek Console Log** (F12 → Console tab):
   ```javascript
   // Should see no errors related to jlpt-quiz-handler
   // If you see errors, check:
   - File jlpt-quiz-handler.js exists
   - Script loaded properly in index.html
   ```

3. **Manual Test Function**:
   ```javascript
   // Di browser console, ketik:
   showJLPTQuizSelection("N5");
   // Popup harus muncul
   ```

### Jika Soal Masih Banyak Sekali:

Pastikan Anda **KLIK tombol jumlah soal SEBELUM start**:
- Default: 10 soal (recommended)
- Bisa diubah ke 5, 15, 20, atau 30 soal
- Tanpa klik tombol = tetap pakai default 10 soal

---

## 📝 Technical Notes

### File Structure:
```
web-belajar-bahasa-jepang-/
├── jlpt-quiz-handler.js       ← BARU (479 lines)
├── index.html                  ← Updated (added script)
├── app-data.js                 ← Updated (config added)
├── styles.css                  ← Existing (Japanese theme)
└── ...
```

### Functions Exposed Globally:
```javascript
showJLPTQuizSelection(level)      // Open modal
closeJLPTQuizSelection()          // Close modal
selectQuestionCount(count)        // Select: 5, 10, 15, 20, 30
toggleJLPTLevel(level)            // Toggle level: N5-N1
startJLPTQuickQuiz()              // Start quiz with selection
```

### State Object:
```javascript
let JLPT_QUIZ_SELECTION = {
  isOpen: false,
  selectedCount: 10,    // User's choice
  levels: ["N5"]        // Selected levels
};
```

---

## 🎉 Testing Checklist

Sebelum deploy ke production:

- [ ] Server running di http://localhost:8000
- [ ] Dashboard page terbuka
- [ ] Card "Simulasi JLPT N5" terlihat
- [ ] Klik card → popup modal muncul
- [ ] Tombol jumlah soal dapat diklik
- [ ] Chip level dapat di-toggle
- [ ] Summary real-time update
- [ ] Klik "Mulai Kuis" → quiz dimulai
- [ ] Jumlah soal sesuai dengan yang dipilih
- [ ] Semua soal dari level terpilih

---

## 📞 Support

Jika ada masalah:
1. Cek browser console log (F12)
2. Pastikan semua file tersimpan
3. Hard refresh browser (Ctrl+Shift+R)
4. Restart server jika perlu

---

**🎌 Selamat belajar bahasa Jepang!**

**✨ Fitur pilihan jumlah soal JLPT QUIZ siap digunakan!**
