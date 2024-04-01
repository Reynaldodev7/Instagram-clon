<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $id = $_POST["id"];

    $consulta = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    if(!(empty($resultado[0]))){

        $foto = $resultado[0]["foto_perfil"];
        echo $foto;
    }
    else{

        echo "Error";
    }
?>