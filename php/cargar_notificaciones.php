<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_SESSION["usuario"];

    $consultaNotificaciones = $conexion->prepare("SELECT * FROM notificaciones WHERE para_notificacion = '$usuario'");
    $consultaNotificaciones->execute();

    $resultadoNotificaciones = $consultaNotificaciones->fetchAll();

    $arreglo = [];

    if(!(empty($resultadoNotificaciones[0]))){

        foreach($resultadoNotificaciones as $datos){

            array_push($arreglo, [$datos["de_notificacion"], $datos["tipo_notificacion"], $datos["img_usuario"], $datos["img_publicacion"], $datos["fecha_notificacion"]]);
        }
    }
    else{

        array_push($arreglo, "no");
    }

    echo json_encode($arreglo);
?>