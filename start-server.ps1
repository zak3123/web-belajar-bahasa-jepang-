# Start HTTP Server for Japanese Language Learning Website
Write-Host "Starting HTTP Server on port 8000..." -ForegroundColor Green
Set-Location $PSScriptRoot
python -m http.server 8000
Pause
