@echo off
REM ==========================================
REM DEPLOY SCRIPT - QUICKSTART-KUIS-RANDOM-XP
REM ==========================================

echo ========================================
echo  🚀 Deploy: Random Quiz + XP System
echo ========================================
echo.

echo Step 1/3: Checking git status...
git status

echo.
echo Step 2/3: Adding all changes...
git add .

echo.
echo Step 3/3: Committing changes...
git commit -m "feat: Add random quiz + flashcard no quiz + XP tracking system"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo ✅ Deployment Complete!
echo ========================================
echo.
echo Website will be live at:
echo https://zak3123.github.io/web-belajar-bahasa-jepang-/
echo.
echo Check deployment status:
echo https://github.com/zak3123/web-belajar-bahasa-jepang-/actions
echo.
echo Wait 2-3 minutes for auto-deploy...
pause
