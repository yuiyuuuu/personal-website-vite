<!-- <?php
    if(isset($_POST['email']) && $_POST['email'] != ''){
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $userMessage = $_POST['message'];

            $to ='yingsonyu@gmail.com';
            $body = "";

            $body  .='From: ' .$userName. "\r\n";
            $body  .='Email: ' .$userEmail. "\r\n";
            $body  .='Message : ' .$userMessage. "\r\n";

            // mail($to, 'personal website message', $body);
            require '../../vendor/autoload.php';
            use PHPMailer\PHPMailer\PHPMailer;
            use PHPMailer\PHPMailer\SMTP;
            $mail = new PHPMailer(true);
            $mail => isSMTP();

        }
    }
?> -->