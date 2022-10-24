<?php
    if (isset($_POST)['submit']) && $_POST['email'] != ''{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailto = "ryannelguessab@gmail.com";
        $headers = "From: ".$name "at".$email;
        

        mail($mailto, $subject, $message, $headers);
        header("Location: index.php?mailsend")

    }





?>