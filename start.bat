@echo off
chcp 65001 >nul
title Japanese Learning Site Server
color 0A

echo ====================================
echo   Japanese Language Learning Site
echo   Starting HTTP Server...
echo ====================================
echo.

python -m http.server 8000

pause