# Script de optimización de imágenes para Crescendo Digital Marketing
# Requiere tener instalado ImageMagick o similar

Write-Host "=== Optimización de Imágenes Crescendo ===" -ForegroundColor Cyan

$imgPath = "C:\xampp\htdocs\Crescendo\img"
$outputPath = "C:\xampp\htdocs\Crescendo\img\optimized"

# Crear carpeta de salida si no existe
if (!(Test-Path $outputPath)) {
    New-Item -ItemType Directory -Path $outputPath | Out-Null
    Write-Host "Carpeta 'optimized' creada" -ForegroundColor Green
}

# Listar imágenes pesadas
Write-Host "`nImágenes a optimizar:" -ForegroundColor Yellow
Get-ChildItem -Path $imgPath -Include *.jpg,*.jpeg,*.png -File | 
    Where-Object { $_.Length -gt 100KB } |
    ForEach-Object {
        $sizeKB = [math]::Round($_.Length / 1KB, 2)
        Write-Host "  - $($_.Name): $sizeKB KB" -ForegroundColor White
    }

Write-Host "`n=== Recomendaciones de Optimización ===" -ForegroundColor Cyan
Write-Host "
1. Usar herramientas online:
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/
   - Compressor.io: https://compressor.io/

2. Convertir a WebP para mejor compresión:
   - Mantener JPG/PNG como fallback
   - WebP reduce 25-35% el tamaño

3. Objetivos de tamaño:
   - Hero images: < 150KB
   - Thumbnails: < 50KB
   - Logos: < 30KB
   - Icons: < 20KB

4. Dimensiones recomendadas:
   - teamwork.jpg: 1200x800px max
   - localseo.jpg: 1200x800px max
   - reputacion.jpg: 1200x800px max
   - logo.png: 500x500px max
" -ForegroundColor White

Write-Host "Proceso completado. Por favor, optimiza manualmente las imágenes listadas arriba." -ForegroundColor Green
