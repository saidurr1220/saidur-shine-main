# Portfolio Images Check Script

Write-Host "`n=== Portfolio Images Status ===" -ForegroundColor Cyan

# Check Profile Picture
$profilePath = "public/images/profile.jpg"
if (Test-Path $profilePath) {
    Write-Host "✓ Profile Picture: Found" -ForegroundColor Green
    $profileSize = (Get-Item $profilePath).Length / 1KB
    Write-Host "  Size: $([math]::Round($profileSize, 2)) KB" -ForegroundColor Gray
} else {
    Write-Host "✗ Profile Picture: NOT FOUND" -ForegroundColor Red
    Write-Host "  Expected location: $profilePath" -ForegroundColor Yellow
    Write-Host "  Action: Copy your professional photo to this location" -ForegroundColor Yellow
}

Write-Host ""

# Check Sukoon Thumbnail
$sukoonPath = "public/images/portfolio/sukoon.png"
if (Test-Path $sukoonPath) {
    Write-Host "✓ Sukoon Thumbnail: Found" -ForegroundColor Green
    $sukoonSize = (Get-Item $sukoonPath).Length / 1KB
    Write-Host "  Size: $([math]::Round($sukoonSize, 2)) KB" -ForegroundColor Gray
} else {
    Write-Host "✗ Sukoon Thumbnail: NOT FOUND" -ForegroundColor Red
    Write-Host "  Expected location: $sukoonPath" -ForegroundColor Yellow
    Write-Host "  Action: Copy Sukoon app screenshot to this location" -ForegroundColor Yellow
}

Write-Host ""

# Check other portfolio images
Write-Host "Other Portfolio Images:" -ForegroundColor Cyan
$portfolioImages = Get-ChildItem "public/images/portfolio" -Filter *.* | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|webp)$' }
Write-Host "  Total: $($portfolioImages.Count) images found" -ForegroundColor Gray

Write-Host "`n=== Instructions ===" -ForegroundColor Cyan
Write-Host "1. Copy your professional photo to: public/images/profile.jpg" -ForegroundColor White
Write-Host "2. Copy Sukoon screenshot to: public/images/portfolio/sukoon.png" -ForegroundColor White
Write-Host "3. Run 'npm run dev' to test" -ForegroundColor White
Write-Host ""
