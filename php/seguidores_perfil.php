<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $otroUsuario = $_SESSION["usuario"];

    $consulta = $conexion->prepare("SELECT * FROM seguir WHERE siguiendo_seguir = '$otroUsuario' AND validacion_seguir = 1");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $cantidad = count($resultado);

    echo $cantidad;

?>