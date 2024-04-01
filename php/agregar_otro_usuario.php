<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    $nombreUsuario = $_POST["nombreUsuario"];

    $_SESSION["otroUsuario"] = $nombreUsuario;

    echo "Desde php ".$_SESSION["otroUsuario"];

?>