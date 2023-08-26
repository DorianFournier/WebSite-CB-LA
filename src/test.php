<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $message = $_POST["message"];
    
    // Créer le message à envoyer
    $email_message = "Nom : " . $nom . "\n";
    $email_message .= "Adresse e-mail : " . $email . "\n";
    $email_message .= "Téléphone : " . $telephone . "\n";
    $email_message .= "Message : \n" . $message;
    
    // Envoyer l'e-mail
    $destinataire = "dorianfournier@hotmail.fr"; // Remplacez par votre adresse e-mail
    $sujet = "Nouveau message depuis le formulaire de contact";
    
    // En-têtes de l'e-mail
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Utilisez la fonction mail() pour envoyer l'e-mail
    mail($destinataire, $sujet, $email_message, $headers);
    
    // Rediriger l'utilisateur vers une page de confirmation
    header("Location: confirmation.html");
    exit;
}
?>
