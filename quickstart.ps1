# Quick Start Script - One Command Launch
Write-Host "🌸 Starting Japanese Learning Site..." -ForegroundColor Green

# Start Python server in new window (hidden)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; echo 'Starting server...'; python -m http.server 8000" -WindowStyle Normal

# Wait for server to initialize
Write-Host "⏳ Waiting for server to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Open browser
Write-Host "🌐 Opening website at http://localhost:8000" -ForegroundColor Cyan
Start-Process "http://localhost:8000"

Write-Host ""
Write-Host "✅ Website is starting! Check your browser." -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to exit this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
