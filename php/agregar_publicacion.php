<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $fecha = $_POST["fecha"];
    $file = $_FILES["publicacion"];
    $nombreUsuario = $_SESSION["usuario"];
    $nombre = $file["name"];
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

    $consulta1 = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
    $consulta1->execute();

    $resultado1 = $consulta1->fetchAll();

    $nombrePerfil;

    if(empty($resultado1[0]["foto_perfil"])){

        $nombrePerfil = "user.png";
    }
    else{

        $nombrePerfil = $resultado1[0]["foto_perfil"];
    }

    $consulta = $conexion->prepare("SELECT nombre_publicacion FROM publicaciones WHERE nombre_publicacion = '$nombre'");
    $consulta->execute();
    $resultado = $consulta->fetchAll(); 

    $random = random_int(0, 10000);

    if(!(empty($resultado[0]))){

        $nombre = "$random".$resultado[0]["nombre_publicacion"];
    }

    move_uploaded_file($file["tmp_name"], "C:/xampp/htdocs/php/faketagram/img/publicaciones/".$nombre);

    $insertar = $conexion->prepare("INSERT INTO publicaciones(nombre_publicacion, nombre_usuario, nombre_perfil, id_usuario, fecha_publicacion) VALUES ('$nombre', '$nombreUsuario', '$nombrePerfil', $id, $fecha)");
    $insertar->execute();

    echo json_encode($file);

?>