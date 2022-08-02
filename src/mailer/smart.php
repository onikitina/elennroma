<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$date = $_POST['date'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'external-smtp.1gb.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yolic';                 // Наш логин
$mail->Password = 'geyssjztlcnrmapn';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 10017;                                    // TCP port to connect to
 
$mail->setFrom('yolic@yandex.ru', 'Elennroma');   // От кого письмо 
$mail->addAddress('yolic@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Когда нужен визажист (дата, время): ' . $date . '<br>
	Сообщение (что нужно сделать): ' . $text . '';
	

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>