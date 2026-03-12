<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- Config ---
require_once __DIR__ . '/ses_credentials.php';
define('SMTP_HOST', 'email-smtp.us-west-2.amazonaws.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'AKIA27FKIXTVZB6RNBMU');
define('SMTP_PASS', SMTP_PASS_VALUE);
define('FROM_EMAIL', 'no-reply@groovyhosting.com');
define('FROM_NAME',  'Pazos Chávez Web');
define('TO_EMAIL',   'klokmx@gmail.com');

// --- Parse input (JSON or form-encoded) ---
$raw = file_get_contents('php://input');
$input = json_decode($raw, true) ?: $_POST;

$name     = trim($input['name']     ?? '');
$lastname = trim($input['lastname'] ?? '');
$email    = trim($input['email']    ?? '');
$phone    = trim($input['phone']    ?? '');
$company  = trim($input['company']  ?? '');
$message  = trim($input['message']  ?? '');

// --- Validate ---
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Campos requeridos faltantes']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

// --- Build email body ---
$subject = "Contacto web: {$name} {$lastname}";
$body  = "Nombre:   {$name} {$lastname}\n";
$body .= "Email:    {$email}\n";
$body .= "Teléfono: {$phone}\n";
$body .= "Empresa:  {$company}\n\n";
$body .= "Mensaje:\n{$message}\n";

// --- SMTP over SSL (port 465) ---
function ses_send(string $subject, string $body, string $reply_to): bool|string
{
    $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $sock = @stream_socket_client(
        'ssl://' . SMTP_HOST . ':' . SMTP_PORT,
        $errno, $errstr, 15,
        STREAM_CLIENT_CONNECT, $ctx
    );
    if (!$sock) return "Connection failed: {$errstr} ({$errno})";

    stream_set_timeout($sock, 15);

    $read = function () use ($sock): string {
        $r = '';
        while ($line = fgets($sock, 512)) {
            $r .= $line;
            if ($line[3] === ' ') break;
        }
        return $r;
    };
    $cmd = fn(string $s) => fwrite($sock, $s . "\r\n");

    $read(); // greeting
    $cmd('EHLO pazoschavez.mx'); $read();
    $cmd('AUTH LOGIN');          $read();
    $cmd(base64_encode(SMTP_USER)); $read();
    $cmd(base64_encode(SMTP_PASS)); $resp = $read();

    if (strpos($resp, '235') === false) {
        fclose($sock);
        return "Auth failed: {$resp}";
    }

    $cmd('MAIL FROM:<' . FROM_EMAIL . '>');   $read();
    $cmd('RCPT TO:<'   . TO_EMAIL   . '>');   $read();
    $cmd('DATA');                              $read();

    $headers  = 'From: '     . FROM_NAME . ' <' . FROM_EMAIL . ">\r\n";
    $headers .= 'To: '       . TO_EMAIL  . "\r\n";
    $headers .= 'Reply-To: ' . $reply_to . "\r\n";
    $headers .= 'Subject: '  . $subject  . "\r\n";
    $headers .= 'Date: '     . date('r') . "\r\n";
    $headers .= "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n";

    $cmd($headers . "\r\n" . $body . "\r\n."); $resp = $read();
    $cmd('QUIT');
    fclose($sock);

    return strpos($resp, '250') !== false ? true : "Send failed: {$resp}";
}

$result = ses_send($subject, $body, $email);

if ($result === true) {
    echo json_encode(['success' => true]);
} else {
    error_log('[contact.php] SES error: ' . $result);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
}
