param(
    [Parameter(Mandatory = $false)]
    [string]$Version = (Get-Date -Format 'yyyy.MM.dd.HHmm')
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$versionFile = Join-Path $root 'asset-version.txt'

# Matches local CSS/JS URLs in href/src attributes and rewrites/normalizes ?v=...
$assetPattern = '((?:href|src)\s*=\s*["''])(?!https?:|//|data:)([^"''?#]+\.(?:css|js))(?:\?v=[^"'']*)?(["''])'

$files = Get-ChildItem -Path $root -Recurse -File -Filter *.html
$updatedFiles = 0

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)

    $updated = [System.Text.RegularExpressions.Regex]::Replace(
        $content,
        $assetPattern,
        '$1$2?v=' + $Version + '$3',
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )

    if ($updated -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $updated, (New-Object System.Text.UTF8Encoding($false)))
        $updatedFiles++
    }
}

[System.IO.File]::WriteAllText($versionFile, "$Version`n", (New-Object System.Text.UTF8Encoding($false)))

Write-Output "Asset version: $Version"
Write-Output "HTML files updated: $updatedFiles"
Write-Output "Version file: asset-version.txt"
