# ┌────────────────────────────────────────────┐
# │ Setup-QuranerFariwalaDocs.ps1              │
# │ Ethical • Structured • Inheritable         │
# └────────────────────────────────────────────┘

$root = "C:\MJ-Ahmad\quraner-fariwala\Docs"

# --- Core folders ---
$folders = @(
    "$root\Registry",
    "$root\Legal\Investors",
    "$root\Legal\Conspirators",
    "$root\Legal\ImageConspiracy\Originals",
    "$root\Legal\ImageConspiracy\MetadataReports",
    "$root\Legal\ImageConspiracy\AppTrace",
    "$root\Legal\ImageConspiracy\DeviceTrace",
    "$root\Legacy\DistrictNetwork",
    "$root\fyja-legacy\Evidence\Prescriptions",
    "$root\fyja-legacy\Evidence\Bills",
    "$root\fyja-legacy\Evidence\VetCertificates",
    "$root\fyja-legacy\Media\Photos\BeforeAttack",
    "$root\fyja-legacy\Media\Photos\TreatmentPhase",
    "$root\fyja-legacy\Media\Photos\FinalMoments",
    "$root\fyja-legacy\Media\Videos\VetInterviews",
    "$root\fyja-legacy\Media\Videos\TributeClips",
    "$root\fyja-legacy\Scripts"
)

# --- Create folders ---
foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
        Write-Host "📁 Created: $folder" -ForegroundColor Green
    } else {
        Write-Host "✅ Exists: $folder" -ForegroundColor Yellow
    }
}

# --- Create README anchors ---
$readmes = @(
    "$root\README.md",
    "$root\Registry\README.md",
    "$root\Legal\README.md",
    "$root\Legal\Investors\README.md",
    "$root\Legal\Conspirators\README.md",
    "$root\Legal\ImageConspiracy\README.md",
    "$root\Legacy\README.md",
    "$root\Legacy\DistrictNetwork\README.md",
    "$root\fyja-legacy\README.md"
)

foreach ($readme in $readmes) {
    if (-not (Test-Path $readme)) {
        "🛡️ README anchor for $(Split-Path $readme -Leaf) folder." | Out-File -FilePath $readme -Encoding UTF8
        Write-Host "📄 Created README: $readme" -ForegroundColor Cyan
    } else {
        Write-Host "📄 Exists: $readme" -ForegroundColor Gray
    }
}

Write-Host "`n✅ Quraner Fariwala Docs structure setup complete." -ForegroundColor Magenta
