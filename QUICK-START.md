# ⚡ QUICK START - Deployment & Development

## 🎯 Website Sudah Live!

**URL:** https://zak3123.github.io/web-belajar-bahasa-jepang-/

---

## 🚀 Cara Deploy Perubahan (3 Langkah Sederhana)

### Setiap Kali Ada Update:

```bash
# 1. Commit changes
git add .
git commit -m "your message"

# 2. Push to GitHub
git push origin main

# 3. Done! ✨
# Tunggu 1-2 menit, auto-deploy ke GitHub Pages
```

**Done!** Website otomatis update di production!

---

## 🔍 Monitor Deployment

**Check Status:**  
https://github.com/zak3123/web-belajar-bahasa-jepang-/actions

**Expected Flow:**
1. You push code
2. GitHub Actions starts running
3. Wait ~2 minutes
4. Green checkmark ✅ = Success!
5. Visit website → Changes live!

---

## 🎌 Latest Features in Production

✅ **JLPT Quiz Selection Modal** - Pilih 5-30 soal  
✅ **Multi-Level Support** - N5, N4, N3, N2, N1  
✅ **Hash Routing Fixed** - Navigasi URL works perfectly  
✅ **State Isolation** - No conflicts between tabs  

---

## 📁 Files yang Changed Terakhir

| File | Change | Purpose |
|------|--------|---------|
| `jlpt-quiz-handler.js` | NEW | Quiz selection modal |
| `script.js` | UPDATED | Hash routing fix |
| `index.html` | UPDATED | Include handler |
| `app-data.js` | UPDATED | Config updates |
| `.github/workflows/deploy.yml` | NEW | Auto-deploy workflow |

---

## 🆘 Troubleshooting

### If Changes Not Showing:

1. **Hard refresh browser:** Ctrl+Shift+R
2. **Clear cache:** Settings → Clear browsing data
3. **Check deployment:** GitHub Actions tab
4. **Wait a bit:** Deployment may still be running

### If Deployment Failed:

1. Check Action logs for errors
2. Fix issues locally
3. Test at localhost:8000
4. Re-push after fixing

---

## 💡 Pro Tips

- ✅ **Test locally first** sebelum push
- ✅ **Small commits** lebih mudah di-debug
- ✅ **Monitor Actions tab** untuk status
- ✅ **Use meaningful commit messages**

---

## 📞 Support

- Issues: https://github.com/zak3123/web-belajar-bahasa-jepang-/issues
- Documentation: DEPLOYMENT-GUIDE.md
- Full guide: Semua file *.md di repository

---

**🎉 Ready to deploy! Update code → Push → DONE!** ✨
