<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/html; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /index.html');
    exit;
}

$fullName = isset($_POST['full_name']) ? trim($_POST['full_name']) : '';
$idNumber = isset($_POST['id_number']) ? trim($_POST['id_number']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$typedSignature = isset($_POST['typed_signature']) ? trim($_POST['typed_signature']) : '';
$signatureImage = isset($_POST['signature_image']) ? trim($_POST['signature_image']) : '';
$signedAt = isset($_POST['signed_at']) ? trim($_POST['signed_at']) : '';
$signedTimezone = isset($_POST['signed_timezone']) ? trim($_POST['signed_timezone']) : '';
$userAgent = isset($_POST['user_agent']) ? trim($_POST['user_agent']) : '';
$acceptTerms = isset($_POST['accept_terms']) ? 'Si' : 'No';

if ($fullName === '' || $idNumber === '' || $email === '' || $phone === '' || $typedSignature === '' || $acceptTerms !== 'Si') {
    header('Location: /acuerdo-servicios.html');
    exit;
}

$fullNameSafe = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
$idNumberSafe = htmlspecialchars($idNumber, ENT_QUOTES, 'UTF-8');
$emailSafe = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phoneSafe = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$companySafe = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$typedSignatureSafe = htmlspecialchars($typedSignature, ENT_QUOTES, 'UTF-8');
$signedAtSafe = htmlspecialchars($signedAt, ENT_QUOTES, 'UTF-8');
$signedTimezoneSafe = htmlspecialchars($signedTimezone, ENT_QUOTES, 'UTF-8');
$userAgentSafe = htmlspecialchars($userAgent, ENT_QUOTES, 'UTF-8');

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'page.email@crescendodigitalmarketingagency.com';
    $mail->Password = 'Crescendo#478543650';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->setFrom('page.email@crescendodigitalmarketingagency.com', 'Crescendo Web');
    $mail->addAddress('informacionescrescendo@gmail.com');
    $mail->addReplyTo($email, $fullName);
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo acuerdo firmado - ' . mb_substr($fullName, 0, 60, 'UTF-8');

    $mailBody = '<h2>Nuevo Acuerdo de Prueba y Servicios firmado</h2>'
        . '<b>Nombre completo:</b> ' . $fullNameSafe . '<br>'
        . '<b>Documento o ID:</b> ' . $idNumberSafe . '<br>'
        . '<b>Email:</b> ' . $emailSafe . '<br>'
        . '<b>Telefono:</b> ' . $phoneSafe . '<br>'
        . '<b>Empresa:</b> ' . ($companySafe !== '' ? $companySafe : 'No especificada') . '<br>'
        . '<b>Firma digital escrita:</b> ' . $typedSignatureSafe . '<br>'
        . '<b>Aceptacion de terminos:</b> ' . $acceptTerms . '<br>'
        . '<b>Fecha ISO de firma:</b> ' . $signedAtSafe . '<br>'
        . '<b>Zona horaria:</b> ' . $signedTimezoneSafe . '<br>'
        . '<b>User Agent:</b> ' . $userAgentSafe . '<br>';

    $mail->Body = $mailBody;

    if (strpos($signatureImage, 'data:image/png;base64,') === 0) {
        $base64 = substr($signatureImage, strlen('data:image/png;base64,'));
        $binary = base64_decode($base64, true);
        if ($binary !== false) {
            $safeName = preg_replace('/[^A-Za-z0-9_-]/', '_', $fullName);
            $mail->addStringAttachment($binary, 'firma_' . $safeName . '.png', 'base64', 'image/png');
        }
    }

    $mail->send();

    // ─── Copia al cliente ─────────────────────────────────────────────────────
    $mail->clearAddresses();
    $mail->clearAttachments();
    $mail->clearReplyTos();

    $mail->addAddress($email, $fullName);
    $mail->addReplyTo('page.email@crescendodigitalmarketingagency.com', 'Crescendo Digital');
    $mail->Subject = 'Tu copia del Acuerdo de Prueba y Servicios - Crescendo';

    $clientBody = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="font-family:Georgia,serif;color:#111;max-width:640px;margin:0 auto;padding:24px;">'
        . '<p style="font-size:1.1rem;font-weight:700;color:#1a1a2e;">Crescendo Digital Marketing Agency</p>'
        . '<h2 style="border-bottom:2px solid #1a1a2e;padding-bottom:8px;">Acuerdo de Prueba y Servicios &mdash; Copia para el firmante</h2>'
        . '<p>Hola <b>' . $fullNameSafe . '</b>, a continuacion encontra&aacute;s el resumen de tu acuerdo firmado con Crescendo Digital Marketing Agency.</p>'
        . '<table style="width:100%;border-collapse:collapse;font-size:0.95rem;margin:16px 0;">'
        . '<tr style="background:#f1f5f9;"><td style="padding:8px 12px;border:1px solid #ccc;font-weight:700;width:45%;">Campo</td><td style="padding:8px 12px;border:1px solid #ccc;">Valor</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Nombre completo</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $fullNameSafe . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Documento / ID</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $idNumberSafe . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Correo electr&oacute;nico</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $emailSafe . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Tel&eacute;fono</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $phoneSafe . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Empresa</td><td style="padding:8px 12px;border:1px solid #ccc;">' . ($companySafe !== '' ? $companySafe : 'No especificada') . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Firma escrita</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $typedSignatureSafe . '</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Aceptaci&oacute;n de t&eacute;rminos</td><td style="padding:8px 12px;border:1px solid #ccc;">S&Iacute; &mdash; Acepto todos los t&eacute;rminos</td></tr>'
        . '<tr><td style="padding:8px 12px;border:1px solid #ccc;">Fecha y hora de firma</td><td style="padding:8px 12px;border:1px solid #ccc;">' . $signedAtSafe . ' (' . $signedTimezoneSafe . ')</td></tr>'
        . '</table>'
        . '<p style="font-size:0.9rem;color:#555;">Si tienes alguna pregunta, puedes contactarnos en <a href="mailto:informacionescrescendo@gmail.com">informacionescrescendo@gmail.com</a>.</p>'
        . '<p style="font-size:0.8rem;color:#888;margin-top:24px;border-top:1px solid #eee;padding-top:12px;">Crescendo Digital Marketing Agency &mdash; Acuerdo de Prueba y Servicios &mdash; Versi&oacute;n 2026.04</p>'
        . '</body></html>';

    $mail->Body = $clientBody;

    if (strpos($signatureImage, 'data:image/png;base64,') === 0) {
        $base64c = substr($signatureImage, strlen('data:image/png;base64,'));
        $binaryc = base64_decode($base64c, true);
        if ($binaryc !== false) {
            $safeNameC = preg_replace('/[^A-Za-z0-9_-]/', '_', $fullName);
            $mail->addStringAttachment($binaryc, 'firma_' . $safeNameC . '.png', 'base64', 'image/png');
        }
    }

    $mail->send();
    // ─────────────────────────────────────────────────────────────────────────

    header('Location: /thank-you.html');
} catch (Exception $e) {
    file_put_contents(
        __DIR__ . '/agreement_backup.txt',
        date('Y-m-d H:i:s') . ' | FAILED | ' . $fullName . ' | ' . $email . ' | ' . $mail->ErrorInfo . PHP_EOL,
        FILE_APPEND
    );
    header('Location: /thank-you.html');
}

exit;
