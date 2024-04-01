<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $eliminar = $_POST["eliminar"];
    $id = $_SESSION["id"];

    $consulta = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();
    $nombrePerfil = $resultado[0]["foto_perfil"];

    if($nombrePerfil == "user.jpg"){

        echo "fallo";
    }
    else{

        unlink("../img/perfil/$nombrePerfil");

        $delete = $conexion->prepare("UPDATE perfil SET foto_perfil = 'user.jpg' WHERE id_usuario = $id");
        $delete->execute();

        $actualizar = $conexion->prepare("UPDATE publicaciones SET nombre_perfil = 'user.jpg' WHERE id_usuario = $id");
        $actualizar->execute();
        echo "hecho";
    }
?>