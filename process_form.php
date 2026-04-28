<?php
// Mostrar errores de PHP para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// process_form.php usando PHPMailer SMTP Hostinger
// Forzar header Content-Type UTF-8
header('Content-Type: text/html; charset=UTF-8');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';
require __DIR__ . '/phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre   = isset($_POST['nombre'])   ? htmlspecialchars(trim($_POST['nombre']))   : '';
    $email    = isset($_POST['email'])    ? htmlspecialchars(trim($_POST['email']))    : '';
    $telefono = isset($_POST['telefono']) ? htmlspecialchars(trim($_POST['telefono'])) : '';
    $lang     = isset($_POST['lang'])     ? strtolower($_POST['lang']) : 'es';
    $sms_consent = isset($_POST['sms_consent']) ? 'Yes' : 'No';
    $direccion = isset($_POST['direccion']) ? htmlspecialchars(trim($_POST['direccion'])) : '';
    $ein = isset($_POST['ein']) ? htmlspecialchars(trim($_POST['ein'])) : '';
    $registro_comercial = isset($_POST['registro_comercial']) ? htmlspecialchars(trim($_POST['registro_comercial'])) : '';
    $anio_inicio = isset($_POST['anio_inicio']) ? htmlspecialchars(trim($_POST['anio_inicio'])) : '';
    $canales_preferidos = isset($_POST['canales_preferidos']) ? htmlspecialchars(trim($_POST['canales_preferidos'])) : '';
    $dias_operacion = isset($_POST['dias_operacion']) ? htmlspecialchars(trim($_POST['dias_operacion'])) : '';
    $horario = isset($_POST['horario']) ? htmlspecialchars(trim($_POST['horario'])) : '';
    $dias_especiales = isset($_POST['dias_especiales']) ? htmlspecialchars(trim($_POST['dias_especiales'])) : '';
    $metodos_pago = isset($_POST['metodos_pago']) ? htmlspecialchars(trim($_POST['metodos_pago'])) : '';
    $descuentos = isset($_POST['descuentos']) ? htmlspecialchars(trim($_POST['descuentos'])) : '';
    $sucursales = isset($_POST['sucursales']) ? htmlspecialchars(trim($_POST['sucursales'])) : '';
    $servicios = isset($_POST['servicios']) ? htmlspecialchars(trim($_POST['servicios'])) : '';
    $publico_objetivo = isset($_POST['publico_objetivo']) ? htmlspecialchars(trim($_POST['publico_objetivo'])) : '';
    $canales_marketing = isset($_POST['canales_marketing']) ? htmlspecialchars(trim($_POST['canales_marketing'])) : '';
    $campanas_pagas = isset($_POST['campanas_pagas']) ? htmlspecialchars(trim($_POST['campanas_pagas'])) : '';
    $resenas_google = isset($_POST['resenas_google']) ? htmlspecialchars(trim($_POST['resenas_google'])) : '';
    $responden_resenas = isset($_POST['responden_resenas']) ? htmlspecialchars(trim($_POST['responden_resenas'])) : '';
    $reservas_web = isset($_POST['reservas_web']) ? htmlspecialchars(trim($_POST['reservas_web'])) : '';
    $gestion_reservas = isset($_POST['gestion_reservas']) ? htmlspecialchars(trim($_POST['gestion_reservas'])) : '';
    $tipo_agenda = isset($_POST['tipo_agenda']) ? htmlspecialchars(trim($_POST['tipo_agenda'])) : '';
    $experiencia_deseada = isset($_POST['experiencia_deseada']) ? htmlspecialchars(trim($_POST['experiencia_deseada'])) : '';
    $comentarios_adicionales = isset($_POST['comentarios_adicionales']) ? htmlspecialchars(trim($_POST['comentarios_adicionales'])) : '';

    $mail = new PHPMailer(true);
    // Desactivar debug SMTP para producción
    $mail->SMTPDebug = 0;
        // Convertir todos los datos recibidos a UTF-8
        function to_utf8(
            $str
        ) {
            return mb_convert_encoding($str, 'UTF-8', 'auto');
        }
        $nombre = to_utf8($nombre);
        $direccion = to_utf8($direccion);
        $ein = to_utf8($ein);
        $registro_comercial = to_utf8($registro_comercial);
        $anio_inicio = to_utf8($anio_inicio);
        $telefono = to_utf8($telefono);
        $email = to_utf8($email);
        $canales_preferidos = to_utf8($canales_preferidos);
        $dias_operacion = to_utf8($dias_operacion);
        $horario = to_utf8($horario);
        $dias_especiales = to_utf8($dias_especiales);
        $metodos_pago = to_utf8($metodos_pago);
        $descuentos = to_utf8($descuentos);
        $sucursales = to_utf8($sucursales);
        $servicios = to_utf8($servicios);
        $publico_objetivo = to_utf8($publico_objetivo);
        $canales_marketing = to_utf8($canales_marketing);
        $campanas_pagas = to_utf8($campanas_pagas);
        $resenas_google = to_utf8($resenas_google);
        $responden_resenas = to_utf8($responden_resenas);
        $reservas_web = to_utf8($reservas_web);
        $gestion_reservas = to_utf8($gestion_reservas);
        $tipo_agenda = to_utf8($tipo_agenda);
        $experiencia_deseada = to_utf8($experiencia_deseada);
        $comentarios_adicionales = to_utf8($comentarios_adicionales);
        $sms_consent = to_utf8($sms_consent);
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
        $mail->addReplyTo($email, $nombre);
        $mail->isHTML(true);
        $mail->Subject = ($lang === 'en' ? '🎯 New form - Crescendo Marketing: ' : '🎯 Nuevo formulario - Crescendo Marketing: ') . substr($nombre, 0, 60);

        $body = ($lang === 'en'
            ? '<h2>New form received</h2>'
                . '<b>Business Name:</b> ' . $nombre . '<br>'
                . '<b>Business Address:</b> ' . $direccion . '<br>'
                . '<b>EIN:</b> ' . $ein . '<br>'
                . '<b>Business Registration (URL):</b> ' . $registro_comercial . '<br>'
                . '<b>Year Started:</b> ' . $anio_inicio . '<br>'
                . '<b>Phone:</b> ' . $telefono . '<br>'
                . '<b>Email:</b> ' . $email . '<br>'
                . '<b>Preferred Contact Channels:</b> ' . $canales_preferidos . '<br>'
                . '<b>Operating Days:</b> ' . $dias_operacion . '<br>'
                . '<b>Hours:</b> ' . $horario . '<br>'
                . '<b>Special Days / Holidays:</b> ' . $dias_especiales . '<br>'
                . '<b>Accepted Payment Methods:</b> ' . $metodos_pago . '<br>'
                . '<b>Offers Discounts?:</b> ' . $descuentos . '<br>'
                . '<b>Has Branches?:</b> ' . $sucursales . '<br>'
                . '<b>Services Offered:</b> ' . $servicios . '<br>'
                . '<b>Target Audience:</b> ' . $publico_objetivo . '<br>'
                . '<b>Most Important Marketing Channels:</b> ' . $canales_marketing . '<br>'
                . '<b>Have you run paid campaigns?:</b> ' . $campanas_pagas . '<br>'
                . '<b>Do you have Google reviews?:</b> ' . $resenas_google . '<br>'
                . '<b>Do you respond to reviews?:</b> ' . $responden_resenas . '<br>'
                . '<b>Can clients book from the website?:</b> ' . $reservas_web . '<br>'
                . '<b>Booking Management:</b> ' . $gestion_reservas . '<br>'
                . '<b>Type of calendar:</b> ' . $tipo_agenda . '<br>'
                . '<b>Desired client experience on the website:</b> ' . $experiencia_deseada . '<br>'
                . '<b>Additional comments:</b> ' . $comentarios_adicionales . '<br>'
                . '<b>SMS Consent:</b> ' . $sms_consent . '<br>'
            : '<h2>Nuevo formulario recibido</h2>'
                . '<b>Nombre de la empresa:</b> ' . $nombre . '<br>'
                . '<b>Dirección:</b> ' . $direccion . '<br>'
                . '<b>EIN:</b> ' . $ein . '<br>'
                . '<b>Registro comercial (URL):</b> ' . $registro_comercial . '<br>'
                . '<b>Año de inicio:</b> ' . $anio_inicio . '<br>'
                . '<b>Teléfono:</b> ' . $telefono . '<br>'
                . '<b>Email:</b> ' . $email . '<br>'
                . '<b>Canales de contacto preferidos:</b> ' . $canales_preferidos . '<br>'
                . '<b>Días de operación:</b> ' . $dias_operacion . '<br>'
                . '<b>Horario:</b> ' . $horario . '<br>'
                . '<b>Días especiales / feriados:</b> ' . $dias_especiales . '<br>'
                . '<b>Métodos de pago aceptados:</b> ' . $metodos_pago . '<br>'
                . '<b>¿Ofrece descuentos?:</b> ' . $descuentos . '<br>'
                . '<b>¿Tiene sucursales?:</b> ' . $sucursales . '<br>'
                . '<b>Servicios ofrecidos:</b> ' . $servicios . '<br>'
                . '<b>Público objetivo:</b> ' . $publico_objetivo . '<br>'
                . '<b>Canales de marketing más importantes:</b> ' . $canales_marketing . '<br>'
                . '<b>¿Ha realizado campañas pagas?:</b> ' . $campanas_pagas . '<br>'
                . '<b>¿Tienen reseñas en Google?:</b> ' . $resenas_google . '<br>'
                . '<b>¿Responden reseñas?:</b> ' . $responden_resenas . '<br>'
                . '<b>¿Clientes pueden reservar desde el sitio web?:</b> ' . $reservas_web . '<br>'
                . '<b>Gestión de reservas:</b> ' . $gestion_reservas . '<br>'
                . '<b>Tipo de agenda:</b> ' . $tipo_agenda . '<br>'
                . '<b>Tipo de experiencia deseada en el sitio web:</b> ' . $experiencia_deseada . '<br>'
                . '<b>Comentarios adicionales:</b> ' . $comentarios_adicionales . '<br>'
                . '<b>Consentimiento SMS:</b> ' . ($sms_consent === 'Yes' ? 'Sí' : 'No') . '<br>'
        );
        $mail->Body = mb_convert_encoding($body, 'UTF-8', 'auto');

        // Adjuntos: logotipo, fotos_local[], registro_comercial_file
        if (isset($_FILES['logotipo']) && $_FILES['logotipo']['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['logotipo']['tmp_name'], $_FILES['logotipo']['name']);
        }
        if (isset($_FILES['fotos_local']) && is_array($_FILES['fotos_local']['tmp_name'])) {
            foreach ($_FILES['fotos_local']['tmp_name'] as $idx => $tmp_name) {
                if ($_FILES['fotos_local']['error'][$idx] === UPLOAD_ERR_OK) {
                    $mail->addAttachment($tmp_name, $_FILES['fotos_local']['name'][$idx]);
                }
            }
        }
        if (isset($_FILES['registro_comercial_file']) && $_FILES['registro_comercial_file']['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['registro_comercial_file']['tmp_name'], $_FILES['registro_comercial_file']['name']);
        }

        $mail->send();
        header('Location: /thank-you.html');
    } catch (Exception $e) {
        file_put_contents('leads_backup.txt', date('Y-m-d H:i:s') . " | FAILED | $nombre | $email | " . $mail->ErrorInfo . "\n", FILE_APPEND);
        header('Location: /thank-you.html');
    }
    exit;
}

// Si acceso directo, redirigir al home
header('Location: /index.html');
exit;
