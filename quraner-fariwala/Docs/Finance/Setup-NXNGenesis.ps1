# Setup-NXNGenesis.ps1
# Creates NXN-GENESIS folder structure with README anchors
# Author: MJ Ahmad (Nexara Steward)
# Purpose: Ethical, inheritable financial architecture

$root = "C:\MJ-Ahmad\quraner-fariwala\Docs\Finance\"
$folders = @(
    "$root",
    "$root\dao\proposals",
    "$root\dao\votes",
    "$root\dao\roles",
    "$root\chain\contracts",
    "$root\chain\logs",
    "$root\chain\scripts",
    "$root\bridge\adapters",
    "$root\bridge\verification",
    "$root\bridge\fallback",
    "$root\backend\models",
    "$root\backend\routes",
    "$root\backend\middleware",
    "$root\frontend\components",
    "$root\frontend\pages",
    "$root\frontend\styles",
    "$root\scripts",
    "$root\docs"
)

# Create folders
foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# Create root README
@"
# NXN-GENESIS

## Purpose
A modular, ethical financial system for Nexara projects.

## Structure
- DAO: Contributor governance
- Chain: Blockchain audit trail
- Bridge: External gateway integration
- Backend/Frontend: Transaction engine & UI
- Scripts: Logging & onboarding
- Docs: Public proof & legacy ethics
"@ | Set-Content "$root\README.md"

# Create README anchors for key modules
$readmes = @{
    "dao" = "Empowers contributors to govern with dignity."
    "chain" = "Logs every transaction as a blockchain legacy."
    "bridge" = "Connects external gateways with ethical verification."
    "backend" = "Handles secure API for transactions and roles."
    "frontend" = "Displays contributor wallets, votes, and logs."
    "scripts" = "PowerShell/Node scripts for onboarding and logging."
    "docs" = "Public documentation for inheritance and clarity."
}

foreach ($key in $readmes.Keys) {
    $path = "$root\$key\README.md"
    @"
# NXN-GENESIS/$key

## Purpose
$($readmes[$key])

## Ethics
Every file is a legacy artifact. No shortcut. No opacity.
"@ | Set-Content $path
}

Write-Host "✅ NXN-GENESIS structure created with README anchors."
