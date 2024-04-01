<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $sigue = $_SESSION["usuario"];
    $siguiendo = $_SESSION["otroUsuario"];

    $consulta = $conexion->prepare("SELECT validacion_seguir FROM seguir WHERE sigue_seguir = '$sigue' AND siguiendo_seguir = '$siguiendo'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    if(!(empty($resultado[0]))){

        echo $resultado[0]["validacion_seguir"];
    }
    else{

        echo 0;
    }

?>