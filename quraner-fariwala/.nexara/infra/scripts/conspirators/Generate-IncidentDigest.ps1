# ┌────────────────────────────────────────────┐
# │ Generate-IncidentDigest.ps1                │
# │ Truth Summary • Timestamped • Ethical      │
# └────────────────────────────────────────────┘

function Generate-IncidentDigest {
    param (
        [string]$Name
    )

    $basePath   = "C:\mj-ahmad\quranerfariwala\Docs\Legal\Conspirators\$Name"
    $timeline   = "$basePath\Timeline.csv"
    $digestPath = "$basePath\IncidentDigest.txt"

    if (-not (Test-Path $timeline)) {
        Write-Host "❌ Timeline.csv not found for $Name" -ForegroundColor Red
        return
    }

    $digest = @()
    $digest += "🧠 Incident Digest — $Name"
    $digest += "Generated on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    $digest += "`n---`n"

    $entries = Import-Csv -Path $timeline
    foreach ($entry in $entries) {
        $digest += "$($entry.Date) [$($entry.Mode)]: $($entry.Action) → Impact: $($entry.Impact)"
    }

    $digest += "`n🛡️ Ethical Note:`nThis digest is prepared for lawful review and institutional defense. Quraner Fariwala does not retaliate—only documents and defends."

    $digest | Out-File -FilePath $digestPath -Encoding UTF8
    Write-Host "✅ IncidentDigest.txt created for $Name" -ForegroundColor Green
}
