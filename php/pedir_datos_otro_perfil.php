<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_POST["nombre"];
    $informacion = [];

    $consulta = $conexion->prepare("SELECT nombre_usuario, id_usuario FROM usuario WHERE usuario_usuario = '$usuario'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $id = $resultado[0]["id_usuario"];

    if(!(empty($resultado[0]))){

        $dato = $resultado[0]["nombre_usuario"];
        array_push($informacion, $dato);
    }

    $consulta1 = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
    $consulta1->execute();

    $resultado1 = $consulta1->fetchAll();

    if(!(empty($resultado1[0]))){

        $dato1 = $resultado1[0]["foto_perfil"];
        array_push($informacion, $dato1);
    }

    echo json_encode($informacion);

?>