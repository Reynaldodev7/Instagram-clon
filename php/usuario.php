<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    echo $_SESSION["usuario"];

?>