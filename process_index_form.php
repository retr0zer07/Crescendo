<?php
// process_index_form.php
// Este script procesa los formularios de index.html en ambos idiomas (español e inglés)


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Configuración del correo
$to = 'tucorreo@tudominio.com'; // Cambia esto por tu correo
$subject = 'Nuevo mensaje desde el formulario de la página principal';

// Recoge los datos del formulario
$nombre    = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$email     = isset($_POST['email']) ? trim($_POST['email']) : '';
$telefono  = isset($_POST['telefono']) ? trim($_POST['telefono']) : '';
$objetivos = isset($_POST['objetivos']) ? trim($_POST['objetivos']) : '';
$mensaje   = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';
$lang      = isset($_POST['lang']) ? trim($_POST['lang']) : '';
$sms_consent = isset($_POST['sms_consent']) ? 'Yes' : 'No';

// Validación básica
if (empty($nombre) || empty($email) || empty($telefono) || empty($objetivos)) {
    header('Location: gracias.html?status=error');
    exit();
}

// Construye el cuerpo del mensaje
$body = "Formulario recibido desde la página principal\n\n";
$body .= "Nombre: $nombre\n";
$body .= "Email: $email\n";
$body .= "Teléfono: $telefono\n";
$body .= "Objetivos: $objetivos\n";
$body .= "Mensaje: $mensaje\n";
$body .= "Idioma: $lang\n";

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
    $mail->addAddress('crescendomarketingdigital@gmail.com');
    $mail->addReplyTo($email, $nombre);
    $mail->isHTML(true);
    $mail->Subject = ($lang === 'en' ? '🎯 New form - Crescendo Marketing: ' : '🎯 Nuevo formulario - Crescendo Marketing: ') . substr($nombre, 0, 60);

    $bodyHtml = ($lang === 'en'
        ? '<h2>New form received</h2>'
            . '<b>Name:</b> ' . htmlspecialchars($nombre) . '<br>'
            . '<b>Email:</b> ' . htmlspecialchars($email) . '<br>'
            . '<b>Phone:</b> ' . htmlspecialchars($telefono) . '<br>'
            . '<b>Main objectives:</b> ' . htmlspecialchars($objetivos) . '<br>'
            . '<b>Message:</b> ' . nl2br(htmlspecialchars($mensaje)) . '<br>'
            . '<b>Language:</b> ' . htmlspecialchars($lang) . '<br>'
            . '<b>SMS Consent:</b> ' . htmlspecialchars($sms_consent) . '<br>'
        : '<h2>Nuevo formulario recibido</h2>'
            . '<b>Nombre:</b> ' . htmlspecialchars($nombre) . '<br>'
            . '<b>Email:</b> ' . htmlspecialchars($email) . '<br>'
            . '<b>Teléfono:</b> ' . htmlspecialchars($telefono) . '<br>'
            . '<b>Objetivos:</b> ' . htmlspecialchars($objetivos) . '<br>'
            . '<b>Mensaje:</b> ' . nl2br(htmlspecialchars($mensaje)) . '<br>'
            . '<b>Idioma:</b> ' . htmlspecialchars($lang) . '<br>'
            . '<b>Consentimiento SMS:</b> ' . ($sms_consent === 'Yes' ? 'Sí' : 'No') . '<br>'
    );
    $mail->Body = $bodyHtml;

    // Adjuntos
    if (isset($_FILES['adjunto']) && $_FILES['adjunto']['error'] === UPLOAD_ERR_OK) {
        $mail->addAttachment($_FILES['adjunto']['tmp_name'], $_FILES['adjunto']['name']);
    }

    $mail->send();
    header('Location: /thank-you.html');
    exit();
} catch (Exception $e) {
    file_put_contents('leads_backup.txt', date('Y-m-d H:i:s') . " | FAILED | $nombre | $email | " . $mail->ErrorInfo . "\n", FILE_APPEND);
    header('Location: /thank-you.html');
    exit();
}
