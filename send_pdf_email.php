<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ── Leer JSON body ────────────────────────────────────────────────────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data) || empty($data['pdf_data'])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Datos insuficientes']);
    exit;
}

$pdfData    = $data['pdf_data'];
$fileName   = preg_replace('/[^A-Za-z0-9_\-.]/', '_', $data['file_name']  ?? 'Acuerdo_Crescendo.pdf');
$signerName = htmlspecialchars(trim($data['signer_name']  ?? ''), ENT_QUOTES, 'UTF-8');

// Decodificar base64
$pdfBinary = base64_decode($pdfData, true);
if ($pdfBinary === false) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'PDF inválido']);
    exit;
}

// ── Enviar por correo ─────────────────────────────────────────────────────────
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'page.email@crescendodigitalmarketingagency.com';
    $mail->Password   = 'Crescendo#478543650';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';
    $mail->Encoding   = 'base64';

    $mail->setFrom('page.email@crescendodigitalmarketingagency.com', 'Crescendo Web');
    $mail->addAddress('informacionescrescendo@gmail.com');
    $mail->isHTML(true);

    $mail->Subject = 'PDF del acuerdo firmado — ' . $signerName;
    $mail->Body    = '<p>Se adjunta el <b>PDF del Acuerdo de Prueba y Servicios</b> generado para el firmante: <b>' . $signerName . '</b>.</p>'
                   . '<p style="font-size:0.85rem;color:#888;">Crescendo Digital Marketing Agency</p>';

    $mail->addStringAttachment($pdfBinary, $fileName, 'base64', 'application/pdf');

    $mail->send();

    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $mail->ErrorInfo]);
}

exit;
