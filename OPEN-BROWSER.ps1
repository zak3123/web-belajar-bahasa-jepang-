# Script untuk Start Server & Buka Browser
$port = 8000
$url = "http://localhost:$port"

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  JAPANESE LANGUAGE LEARNING WEBSITE" -ForegroundColor Green
Write-Host "  Starting Server..." -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Cek apakah sudah ada process di port ini
$existingProcess = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($existingProcess) {
    Write-Host "Server already running on port $port" -ForegroundColor Green
} else {
    # Start Python HTTP server
    Write-Host "Starting Python HTTP server on port $port..." -ForegroundColor Yellow
    
    # Run server in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; python -m http.server $port"
    
    Write-Host ""
    Write-Host "⏳ Waiting for server to start... (3 seconds)" -ForegroundColor Gray
    Start-Sleep -Seconds 3
}

# Open browser
Write-Host ""
Write-Host "🌐 Opening website at: $url" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Start-Process $url

Write-Host ""
Write-Host "✅ Done! Website should be opening now." -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
