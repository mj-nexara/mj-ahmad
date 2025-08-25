# MJ-NEXARA Project Folder Initialization Script
# Author: MJ Ahmad
# Purpose: Create dignified, modular folder structure for MJ-NEXARA

# Root directory
$root = "MJ-NEXARA"
New-Item -Path $root -ItemType Directory -Force

# Core folders
$folders = @(
    "$root/core-json",
    "$root/scripts",
    "$root/docs",
    "$root/modules/governance",
    "$root/modules/automation",
    "$root/modules/education",
    "$root/assets",
    "$root/test",
    "$root/.github/workflows",
    "$root/.nexara/infra/scripts",
    "$root/.nexara/infra/logs",
    "$root/.nexara/infra/config",
    "$root/.nexara/corejson",
    "$root/.nexara/bootstrap",
    "$root/.nexara/ethics"
)

# Create folders
foreach ($folder in $folders) {
    New-Item -Path $folder -ItemType Directory -Force | Out-Null
}

# Create placeholder files
$files = @(
    "$root/README.md",
    "$root/LICENSE.md",
    "$root/CONTRIBUTING.md",
    "$root/.gitignore",
    "$root/docs/product-overview.md",
    "$root/docs/module-guide.md",
    "$root/docs/contributor-map.md",
    "$root/modules/governance/roles.json",
    "$root/modules/governance/milestones.json",
    "$root/modules/governance/ethics.json",
    "$root/modules/automation/ci-cd.json",
    "$root/modules/automation/packaging.json",
    "$root/modules/education/onboarding.json",
    "$root/modules/education/survival-english.json",
    "$root/scripts/setup.ps1",
    "$root/scripts/update.ps1",
    "$root/scripts/publish.ps1",
    "$root/test/validate-corejson.ps1",
    "$root/.github/ISSUE_TEMPLATE.md",
    "$root/.github/PULL_REQUEST_TEMPLATE.md",
    "$root/.github/FUNDING.yml",
    "$root/.nexara/infra/scripts/bootstrap.ps1",
    "$root/.nexara/infra/scripts/validate.ps1",
    "$root/.nexara/infra/scripts/teardown.ps1",
    "$root/.nexara/infra/logs/setup.log",
    "$root/.nexara/infra/logs/error.log",
    "$root/.nexara/infra/logs/audit.log",
    "$root/.nexara/infra/config/infra-settings.json"
)

# Create empty files
foreach ($file in $files) {
    New-Item -Path $file -ItemType File -Force | Out-Null
}

Write-Host "✅ MJ-NEXARA folder structure initialized successfully."
