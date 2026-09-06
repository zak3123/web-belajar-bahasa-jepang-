@echo off
chcp 65001 >nul
title Japanese Learning Site - Server
echo ========================================
echo   Japanese Language Learning Website
echo   Python HTTP Server v3.11
echo ========================================
echo.
echo Starting server on port 8000...
echo.
python -m http.server 8000
