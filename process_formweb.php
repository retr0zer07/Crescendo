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

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recoger todos los datos del formulario
    $nombre_empresa = isset($_POST['nombre_empresa']) ? htmlspecialchars(trim($_POST['nombre_empresa'])) : '';
    $contacto_nombre = isset($_POST['contacto_nombre']) ? htmlspecialchars(trim($_POST['contacto_nombre'])) : '';
    $email_contacto = isset($_POST['email_contacto']) ? htmlspecialchars(trim($_POST['email_contacto'])) : '';
    $telefono_contacto = isset($_POST['telefono_contacto']) ? htmlspecialchars(trim($_POST['telefono_contacto'])) : '';
    $lang = isset($_POST['lang']) ? strtolower($_POST['lang']) : 'es';

    $objetivo_web = isset($_POST['objetivo_web']) ? htmlspecialchars(trim($_POST['objetivo_web'])) : '';
    $descripcion_negocio = isset($_POST['descripcion_negocio']) ? htmlspecialchars(trim($_POST['descripcion_negocio'])) : '';
    $paginas_requeridas = isset($_POST['paginas_requeridas']) ? htmlspecialchars(trim($_POST['paginas_requeridas'])) : '';
    $secciones_especiales = isset($_POST['secciones_especiales']) ? htmlspecialchars(trim($_POST['secciones_especiales'])) : '';
    $colores_estilo = isset($_POST['colores_estilo']) ? htmlspecialchars(trim($_POST['colores_estilo'])) : '';
    $tipografias = isset($_POST['tipografias']) ? htmlspecialchars(trim($_POST['tipografias'])) : '';
    $webs_referencia = isset($_POST['webs_referencia']) ? htmlspecialchars(trim($_POST['webs_referencia'])) : '';
    $textos_principales = isset($_POST['textos_principales']) ? htmlspecialchars(trim($_POST['textos_principales'])) : '';
    $emocion_web = isset($_POST['emocion_web']) ? htmlspecialchars(trim($_POST['emocion_web'])) : '';
    $fecha_entrega = isset($_POST['fecha_entrega']) ? htmlspecialchars(trim($_POST['fecha_entrega'])) : '';
    $comentarios_adicionales = isset($_POST['comentarios_adicionales']) ? htmlspecialchars(trim($_POST['comentarios_adicionales'])) : '';
    $comentarios_funcionalidades = isset($_POST['comentarios_funcionalidades']) ? htmlspecialchars(trim($_POST['comentarios_funcionalidades'])) : '';

    // Recoger checkboxes
    $funcionalidad_especial = isset($_POST['funcionalidad_especial']) ? $_POST['funcionalidad_especial'] : [];

    // Email setup
    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 0;

    // Función UTF-8
    function to_utf8($str) { return mb_convert_encoding($str, 'UTF-8', 'auto'); }
    foreach (['nombre_empresa','contacto_nombre','email_contacto','telefono_contacto','objetivo_web','descripcion_negocio','paginas_requeridas',
    'secciones_especiales','colores_estilo','tipografias','webs_referencia','textos_principales','emocion_web','fecha_entrega',
    'comentarios_adicionales','comentarios_funcionalidades'] as $v) {
        $$v = to_utf8($$v);
    }

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
        $mail->addReplyTo($email_contacto, $contacto_nombre);
        $mail->isHTML(true);
        $mail->Subject = ($lang === 'en' ? '🌐 New Website Form: ' : '🌐 Nuevo Formulario Web: ') . substr($nombre_empresa, 0, 60);

        $body = ($lang === 'en'
            ? '<h2>New Website Creation Form Received</h2>'
            . '<b>Business/Project Name:</b> ' . $nombre_empresa . '<br>'
            . '<b>Contact Person:</b> ' . $contacto_nombre . '<br>'
            . '<b>Contact Email:</b> ' . $email_contacto . '<br>'
            . '<b>Phone:</b> ' . $telefono_contacto . '<br>'
            . '<b>Website Goal:</b> ' . $objetivo_web . '<br>'
            . '<b>Business Description:</b> ' . $descripcion_negocio . '<br>'
            . '<b>Required Pages:</b> ' . $paginas_requeridas . '<br>'
            . '<b>Special Sections:</b> ' . $secciones_especiales . '<br>'
            . '<b>Visual Style & Colors:</b> ' . $colores_estilo . '<br>'
            . '<b>Preferred Fonts:</b> ' . $tipografias . '<br>'
            . '<b>Reference Websites:</b> ' . $webs_referencia . '<br>'
            . '<b>Main Texts:</b> ' . $textos_principales . '<br>'
            . '<b>Special Features:</b> ' . implode(', ', $funcionalidad_especial) . '<br>'
            . '<b>Feature Comments:</b> ' . $comentarios_funcionalidades . '<br>'
            . '<b>Feeling to Transmit:</b> ' . $emocion_web . '<br>'
            . '<b>Desired Deadline:</b> ' . $fecha_entrega . '<br>'
            . '<b>Additional Comments:</b> ' . $comentarios_adicionales . '<br>'
            : '<h2>Nuevo formulario de creación de web recibido</h2>'
            . '<b>Nombre de empresa/proyecto:</b> ' . $nombre_empresa . '<br>'
            . '<b>Contacto:</b> ' . $contacto_nombre . '<br>'
            . '<b>Email de contacto:</b> ' . $email_contacto . '<br>'
            . '<b>Teléfono:</b> ' . $telefono_contacto . '<br>'
            . '<b>Objetivo de la web:</b> ' . $objetivo_web . '<br>'
            . '<b>Descripción del negocio:</b> ' . $descripcion_negocio . '<br>'
            . '<b>Páginas requeridas:</b> ' . $paginas_requeridas . '<br>'
            . '<b>Secciones especiales:</b> ' . $secciones_especiales . '<br>'
            . '<b>Colores y estilos:</b> ' . $colores_estilo . '<br>'
            . '<b>Tipografías preferidas:</b> ' . $tipografias . '<br>'
            . '<b>Webs de referencia:</b> ' . $webs_referencia . '<br>'
            . '<b>Textos principales:</b> ' . $textos_principales . '<br>'
            . '<b>Funcionalidades especiales:</b> ' . implode(', ', $funcionalidad_especial) . '<br>'
            . '<b>Comentarios de funcionalidades:</b> ' . $comentarios_funcionalidades . '<br>'
            . '<b>Sensación/emoción a transmitir:</b> ' . $emocion_web . '<br>'
            . '<b>Fecha de entrega deseada:</b> ' . $fecha_entrega . '<br>'
            . '<b>Comentarios adicionales:</b> ' . $comentarios_adicionales . '<br>'
        );
        $mail->Body = mb_convert_encoding($body, 'UTF-8', 'auto');

        // Adjuntar logotipo
        if (isset($_FILES['logo_file']) && $_FILES['logo_file']['error'] === UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['logo_file']['tmp_name'], $_FILES['logo_file']['name']);
        }
        // Adjuntar imágenes de inspiración
        if (isset($_FILES['imagenes_referencia'])) {
            foreach ($_FILES['imagenes_referencia']['tmp_name'] as $idx => $tmp_name) {
                if ($_FILES['imagenes_referencia']['error'][$idx] === UPLOAD_ERR_OK) {
                    $mail->addAttachment($tmp_name, $_FILES['imagenes_referencia']['name'][$idx]);
                }
            }
        }
        // Adjuntar archivos de contenido
        if (isset($_FILES['archivos_contenido'])) {
            foreach ($_FILES['archivos_contenido']['tmp_name'] as $idx => $tmp_name) {
                if ($_FILES['archivos_contenido']['error'][$idx] === UPLOAD_ERR_OK) {
                    $mail->addAttachment($tmp_name, $_FILES['archivos_contenido']['name'][$idx]);
                }
            }
        }
        $mail->send();
        header('Location: /thank-you.html');
    } catch (Exception $e) {
        file_put_contents('web_leads_backup.txt', date('Y-m-d H:i:s') . " | FAILED | $nombre_empresa | $email_contacto | " . $mail->ErrorInfo . "\n", FILE_APPEND);
        header('Location: /thank-you.html');
    }
    exit;
}
// Si acceso directo
header('Location: /index.html');
exit;