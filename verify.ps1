# PowerShell verification script for Assessment & Feedback Module
# Run: powershell -File verify.ps1

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$src = Join-Path $root "src"
$slides = Join-Path $src "components\slides"
$errors = @()
$checks = 0

# Check required files exist
$required = @("package.json","vite.config.ts","tsconfig.json","index.html","src\main.tsx","src\App.tsx","src\styles.css","src\data\content.ts","src\vite-env.d.ts")
foreach ($f in $required) {
    $checks++
    $path = Join-Path $root $f
    if (Test-Path $path) {
        Write-Host "[OK] $f exists" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] $f missing" -ForegroundColor Red
        $errors += $f
    }
}

# Check 8 slide components exist
$expectedSlides = @("Slide01Hook","Slide02Explain","Slide03Visualise","Slide04Explore","Slide05GuidedExample","Slide06TryIt","Slide07Feedback","Slide08Takeaway")
foreach ($s in $expectedSlides) {
    $checks++
    $path = Join-Path $slides "$s.tsx"
    if (Test-Path $path) {
        Write-Host "[OK] $s.tsx exists" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] $s.tsx missing" -ForegroundColor Red
        $errors += $s
    }
}

# Verify slide count
$checks++
$slideCount = (Get-ChildItem $slides -Filter "*.tsx" | Measure-Object).Count
if ($slideCount -eq 8) {
    Write-Host "[OK] Exactly 8 slide components" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Found $slideCount slides (expected 8)" -ForegroundColor Red
    $errors += "slide-count"
}

# Check App.tsx imports all 8 slides
$checks++
$appContent = Get-Content (Join-Path $src "App.tsx") -Raw
$importCount = ([regex]::Matches($appContent, "import Slide\d+")).Count
if ($importCount -eq 8) {
    Write-Host "[OK] App.tsx imports all 8 slides" -ForegroundColor Green
} else {
    Write-Host "[FAIL] App.tsx imports $importCount slides (expected 8)" -ForegroundColor Red
    $errors += "app-imports"
}

# Check for instructor panel
$checks++
if ($appContent -match "passwordInput === '1234'") {
    Write-Host "[OK] Instructor password gate present" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Instructor password gate missing" -ForegroundColor Red
    $errors += "instructor-gate"
}

# Check 5-click trigger
$checks++
if ($appContent -match "clickCount.*>=\s*5") {
    Write-Host "[OK] 5-click trigger present" -ForegroundColor Green
} else {
    Write-Host "[FAIL] 5-click trigger missing" -ForegroundColor Red
    $errors += "click-trigger"
}

# Check keyboard navigation
$checks++
if ($appContent -match "ArrowRight|ArrowLeft") {
    Write-Host "[OK] Keyboard navigation present" -ForegroundColor Green
} else {
    Write-Host "[FAIL] Keyboard navigation missing" -ForegroundColor Red
    $errors += "keyboard-nav"
}

# Check key interactive content strings
$interactiveStrings = @(
    @{file="Slide01Hook.tsx"; text="hookScenario"},
    @{file="Slide03Visualise.tsx"; text="assessmentDesigns"},
    @{file="Slide04Explore.tsx"; text="feedbackExamples"},
    @{file="Slide06TryIt.tsx"; text="tryItScenarios"}
)
foreach ($item in $interactiveStrings) {
    $checks++
    $content = Get-Content (Join-Path $slides $item.file) -Raw
    if ($content -match $item.text) {
        Write-Host "[OK] $($item.file) uses interactive data" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] $($item.file) missing interactive data" -ForegroundColor Red
        $errors += "$($item.file)-data"
    }
}

# Summary
Write-Host "`n===============================" -ForegroundColor Cyan
if ($errors.Count -eq 0) {
    Write-Host "ALL $checks CHECKS PASSED" -ForegroundColor Green
} else {
    Write-Host "$($errors.Count) FAILURES out of $checks checks:" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
}
Write-Host "===============================" -ForegroundColor Cyan
Write-Host "`nNote: npm run build requires Node.js (not available on this machine)." -ForegroundColor Yellow
Write-Host "Push to GitHub and deploy via Vercel for build verification." -ForegroundColor Yellow
