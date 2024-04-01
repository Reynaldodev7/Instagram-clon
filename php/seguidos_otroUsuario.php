<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_SESSION["otroUsuario"];

    $consulta = $conexion->prepare("SELECT * FROM seguir WHERE sigue_seguir = '$usuario' AND validacion_seguir = 1");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $cantidad = count($resultado);

    echo $cantidad;

?>