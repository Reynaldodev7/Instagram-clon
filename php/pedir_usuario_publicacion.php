<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $id = $_POST["id"];

    $consulta = $conexion->prepare("SELECT nombre_publicacion, nombre_usuario, nombre_perfil FROM publicaciones WHERE id_publicacion = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $arreglo = [];

    if(!(empty($resultado[0]))){

        array_push($arreglo, [$resultado[0]["nombre_publicacion"], $resultado[0]["nombre_usuario"]]);
    }
    else{

        array_push($arreglo, "error");
    }

    echo json_encode($arreglo);
?>