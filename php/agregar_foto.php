<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $foto = $_FILES["perfil"];
    $nombre = $foto["name"];
    $id = $_SESSION["id"];

    $tipo = "";
    $size = strlen($nombre);

    for($i = ($size - 1); $i>=0; $i--){

        $tipo = $tipo.$nombre[$i];
        if($nombre[$i] == "."){

            $tipo = strrev($tipo);
            break;
        }
    }

    $nombre = str_replace($tipo, "", $nombre);

    $nombre = $nombre."$id".$tipo;

    $consulta = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    if((($resultado[0]["foto_perfil"]) == "user.jpg")){

        move_uploaded_file($foto["tmp_name"], "C:/xampp/htdocs/php/faketagram/img/perfil/".$nombre);

        $insertar = $conexion->prepare("UPDATE perfil SET foto_perfil = '$nombre' WHERE id_usuario = $id");
        $insertar->execute();
    }
    else{

        unlink("../img/perfil/".$resultado[0]["foto_perfil"]);
        move_uploaded_file($foto["tmp_name"], "C:/xampp/htdocs/php/faketagram/img/perfil/".$nombre);

        $insertar = $conexion->prepare("UPDATE perfil SET foto_perfil = '$nombre' WHERE id_usuario = $id");
        $insertar->execute();
    }

    $actualizar  = $conexion->prepare("UPDATE publicaciones SET nombre_perfil = '$nombre' WHERE id_usuario = $id");
    $actualizar->execute();

    echo "hecho";

?>