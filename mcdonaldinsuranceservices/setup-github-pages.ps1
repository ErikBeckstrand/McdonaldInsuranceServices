# GitHub Pages Deployment Setup Script
# Run this script once to prepare for deployment

Write-Host "=== McDonald Insurance Services - GitHub Pages Setup ===" -ForegroundColor Green
Write-Host ""

# Step 1: Install gh-pages package
Write-Host "Step 1: Installing gh-pages package..." -ForegroundColor Cyan
npm install --save-dev gh-pages

if ($LASTEXITCODE -eq 0) {
	Write-Host "✓ gh-pages installed successfully!" -ForegroundColor Green
} else {
	Write-Host "✗ Failed to install gh-pages" -ForegroundColor Red
	exit 1
}

Write-Host ""
Write-Host "=== Setup Complete! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: npm run deploy" -ForegroundColor White
Write-Host "2. Go to GitHub repository Settings > Pages" -ForegroundColor White
Write-Host "3. Set Source to 'gh-pages' branch" -ForegroundColor White
Write-Host "4. Set custom domain to 'mcdinserv.com'" -ForegroundColor White
Write-Host "5. Configure DNS at your domain provider" -ForegroundColor White
Write-Host ""
Write-Host "Full instructions in: GITHUB_PAGES_DEPLOYMENT.md" -ForegroundColor Cyan
