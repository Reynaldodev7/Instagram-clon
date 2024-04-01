<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_POST["usuario"];

    $consulta = $conexion->prepare("SELECT nombre_usuario, usuario_usuario, id_usuario FROM usuario WHERE usuario_usuario = '$usuario'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    if(!(empty($resultado[0]))){

        $datos = [$resultado[0]["nombre_usuario"], $resultado[0]["usuario_usuario"], $resultado[0]["id_usuario"]];
        echo json_encode($datos);
    }

    else{

        echo json_encode(["error"]);
    }

?>