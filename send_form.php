<?php
    $firstName = $_POST['firstname'];
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];

    $con = new mysqli("localhost", "root", "", "inscriptions");
    if ($con->connect_error) {
        die("Connection Failed : ".$con->connect_error);
    }
    else {
        $stmt = $con->prepare("insert into test(Nom, Prénom, Email, Téléphone) values(?, ?, ?, ?)");
        $stmt->bind_param("sssi", $firstName, $name, $mail, $phone);
        $stmt->execute();

        $stmt->close();
        $con->close();
    }
?>