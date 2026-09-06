# 🎌 Quick Reference Card - Website Belajar Bahasa Jepang

## 🚀 One-Click Deployment (Windows)

```batch
DEPLOY.bat
```

atau manual:

```bash
git add .
git commit -m "Update fitur"
git push origin main
```

**Auto-deploy dalam 2-3 menit** → https://zak3123.github.io/web-belajar-bahasa-jepang-/

---

## 📁 File Locations & Line Numbers

### Core Files
| File | Lines | Purpose |
|------|-------|---------|
| `app-data.js` | 543-552 | Fisher-Yates shuffle |
| `app-data.js` | 554-658 | XP Progress functions |
| `app-data.js` | 993 | JLPT_QUIZ_CONFIG |
| `script.js` | 226 | openLesson dengan reset |
| `script.js` | 255 | applyHash dengan reset |
| `script.js` | 275 | openLessonFlashcard reset |
| `jlpt-quiz-handler.js` | 11-509 | Complete quiz handler |
| `.github/workflows/deploy.yml` | 1-61 | Auto-deploy workflow |

---

## 🔧 Functions & Methods

### Quiz Functions
```javascript
getShuffledArray(array)       // Perfect randomization
showJLPTQuizSelection(level)  // Open modal popup
startJLPTQuickQuiz()          // Start with default settings
buildAndStartJLPTQuiz(...)    // Custom question count
selectQuestionCount(count)    // Update selection
toggleJLPTLevel(level)        // Toggle levels N5-N1
```

### XP Tracking Functions
```javascript
loadXPProgress()              // Load from localStorage
saveXPProgress(progress)      // Save progress
getXpForAnswer(isCorrect)     // Calculate reward
recordQuizCompletion()        // Record session stats
updateXpDisplay(stats)        // Update UI elements
resetXPProgress()             // Clear all data
getProgressStats()            // Get summary statistics
```

### Navigation Functions
```javascript
openLesson(title)             // Open lesson detail
applyHash()                   // Handle URL hash changes
openLessonBySlug(slug)        // Navigate via slug
openLessonFlashcard(title)    // Open flashcard mode
```

---

## 💾 Configuration Values

### Quiz Config
```javascript
MIN_QUESTIONS: 10
DEFAULT_QUESTIONS: 15
MAX_QUESTIONS: 50
MIXED_QUIZ_POOL_SIZE: 30
```

### JLPT Quiz Options
- **Counts:** 5, 10, 15, 20, All (custom)
- **Levels:** N5, N4, N3, N2, N1 (multi-select)
- **Default:** 10 soal, Level N5

### XP System
- **Benar:** 10 XP
- **Salah:** 2 XP
- **Storage Key:** `japanese_xp_progress`

---

## 🎨 Japanese Color Palette

```css
Japanese Red:    #c91818   /* Correct answers */
Japanese Gold:   #d4af37  /* Buttons, highlights */
Japanese Green:  #2e5a27  /* Success states */
Japanese Blue:   #1e3d59  /* Info text */
Sakura Pink:     #ffb7c5  /* Decorative elements */
Washi Paper:     #faf8f5  /* Backgrounds */
```

---

## 🔍 Debugging Checklist

### If Quiz Not Working:
1. ✅ Check console errors (`F12 > Console`)
2. ✅ Verify `window.showJLPTQuizSelection` exists
3. ✅ Check `JLPT_QUIZ_CONFIG` defined in app-data.js
4. ✅ Test `jlpt-quiz-handler.js` loaded in index.html

### If XP Not Saving:
1. ✅ Check browser LocalStorage (`F12 > Application > Local Storage`)
2. ✅ Look for key `japanese_xp_progress`
3. ✅ Verify JSON format valid
4. ✅ Check console for save errors

### If Navigation Broken:
1. ✅ Verify reset variables in `applyHash()` line ~255
2. ✅ Check hash format: `#lesson=` + slugified title
3. ✅ Ensure slug mapping in `slugToTitle` object
4. ✅ Test `hashchange` event listener active

---

## 🐛 Common Issues & Solutions

### Issue: Modal tidak muncul
**Solution:** Check `<script src="jlpt-quiz-handler.js"></script>` tag di index.html setelah script.js

### Issue: Soal selalu sama
**Solution:** Ensure `getShuffledArray()` called, check Math.random() seed

### Issue: XP counter 0
**Solution:** Initial load, complete first quiz to get XP

### Issue: Server port already in use
**Solution:** Change port in command: `http.server 8001`

---

## 📊 Testing Commands

### Quick Test (Local)
```bash
# Python
python -m http.server 8000

# Node.js  
npx http-server -p 8000

# Or just open index.html directly in browser
```

### Browser Tests
```
1. Go to http://localhost:8000
2. Click "JLPT Quick Quiz"
3. Verify popup modal appears
4. Select different question counts
5. Complete quiz
6. Check XP displayed correctly
7. Refresh page
8. Verify XP persisted
```

---

## 🔗 Useful Links

### Repositories & Dashboards
- **GitHub:** https://github.com/zak3123/web-belajar-bahasa-jepang-
- **Live Site:** https://zak3123.github.io/web-belajar-bahasa-jepang-/
- **Actions:** https://github.com/zak3123/web-belajar-bahasa-jepang-/actions
- **Issues:** https://github.com/zak3123/web-belajar-bahasa-jepang-/issues

### Documentation Files
- `FINAL-SUMMARY-ALL-FEATURES.md` - Complete feature list
- `JLPT-QUIZ-FEATURE.md` - JLPT quiz detailed guide
- `DEPLOYMENT-GUIDE.md` - Step-by-step deployment
- `DEPLOYMENT-CHECKLIST.md` - Professional checklist
- `HASH-ROUTING-FIX.md` - Navigation fix explanation
- `STATUS-FINAL-VERIFICATION.md` - This verification report

---

## ⌨️ Keyboard Shortcuts (Dev)

```
F12          - Open DevTools
Ctrl+Shift+I - Direct to Console
Ctrl+R       - Reload page
Ctrl+F5      - Hard reload (clear cache)
Ctrl+S       - Save file (auto-deploy if git hooks set)
```

---

## 📈 Performance Monitoring

### Metrics to Track
- Page load time
- Quiz completion rate
- Average XP per session
- User retention (daily return)
- Most used JLPT levels
- Question difficulty distribution

### Tools Recommended
- Google Analytics
- Lighthouse scores
- Console error tracking
- LocalStorage size monitor

---

## 🎯 Development Workflow

```bash
# 1. Make changes locally
edit file.js

# 2. Test locally
npm start OR python -m http.server 8000
visit http://localhost:8000

# 3. Commit changes
git add .
git commit -m "feature: descriptive message"

# 4. Push to trigger deploy
git push origin main

# 5. Wait 2-3 minutes
check GitHub Actions dashboard

# 6. Verify live site
https://zak3123.github.io/web-belajar-bahasa-jepang-/
```

---

## ✨ Feature Status

✅ **Implemented & Live**
- Random kuis 10-14 soal
- Pilihan jumlah soal (5-30)
- Multi-level JLPT selection
- XP progress tracking
- State reset navigation
- Enhanced Japanese UI
- Auto-deploy CI/CD

🔄 **Future Enhancements**
- Timer mode
- Difficulty filter
- Visual dashboard
- User accounts
- Cloud backup
- Achievement system
- Leaderboard
- Speech recognition

---

**Generated by Qoder AI Assistant**  
*Quick Reference - Always Up-to-Date*
