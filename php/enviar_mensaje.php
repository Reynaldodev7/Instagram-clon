<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $envia = $_POST["envia"];
    $recibe = $_POST["recibe"];
    $mensaje = $_POST["mensaje"];

    $insertar = $conexion->prepare("INSERT INTO mensaje(envia_mensaje, recibe_mensaje, mensaje_mensaje) VALUES ('$envia', '$recibe', '$mensaje')");
    $insertar->execute();

    echo "Listo";
?>