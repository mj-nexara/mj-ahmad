function Setup-Initiative2025 {
    $base = "C:\MJ-Ahmad\quraner-fariwala\Docs\Initiative2025"

    $folders = @(
        "$base\Planning",
        "$base\DistrictMobilization\OutreachLetters",
        "$base\MediaCampaign\Posters",
        "$base\MediaCampaign\Scripts",
        "$base\LegalSafeguards\PublicStatements",
        "$base\Funding",
        "$base\Monitoring\ProgressReports"
    )

    foreach ($folder in $folders) {
        if (-not (Test-Path $folder)) {
            New-Item -ItemType Directory -Path $folder | Out-Null
            Write-Host "📁 Created: $folder" -ForegroundColor Green
        } else {
            Write-Host "✅ Exists: $folder" -ForegroundColor Yellow
        }
    }

    Write-Host "`n✅ Initiative2025 folder structure setup complete." -ForegroundColor Magenta
}
