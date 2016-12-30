<?php

$email_from = "lucascfontenla@hotmail.com";
$email_subject = "Alright";
$email_body = "Thats cool!";

$to = "lucascfontenla@hotmail.com";
$headers = "From: $email_from \r\n";

mail($to, $email_subject, $email_body, $headers);

function debug_to_console( $data ) {

    if ( is_array( $data ) )
        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
    else
        $output = "<script>console.log( 'Debug Objects: " . $data . "' );</script>";

    echo $output;
}

debug_to_console("OK!");
?>