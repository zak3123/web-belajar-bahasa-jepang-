# 🛠️ Option A: Deploy via Vercel CLI (Command Line)

## Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

Atau kalau pakai PowerShell:
```powershell
npm install -g vercel --global
```

## Step 2: Login ke Vercel

```bash
vercel login
```

Pilih authentication method:
- Continue with GitHub (recommended)
- Continue with GitLab
- Continue with Email

## Step 3: Deploy!

```bash
vercel --prod
```

Vercel akan:
1. Initialize project di directory current
2. Detect framework (auto-detect static site)
3. Ask konfigurasi (biasanya bisa skip semua)
4. Build & deploy

## Step 4: Done!

Website live di: `https://your-random-name.vercel.app`

Bisa customize name:
```bash
vercel --name web-belajar-bahasa-jepang --prod
```

## ⚡ One-Command Deploy (After Initial Setup)

Setiap kali push update:
```bash
git add . && git commit -m "update" && git push && vercel --prod
```

---

## 🎯 Comparison: Web UI vs CLI

| Feature | Web UI | CLI |
|---------|--------|-----|
| Speed | Fast ⭐ | Slower |
| Easy? | Easier ✅ | More steps |
| Auto-deploy | Yes (GitHub hook) | Manual command |
| Recommended for | Beginners | Advanced users |

---

**My Recommendation:** Use **Web UI** (Option B) first time, then can use CLI later if needed.
