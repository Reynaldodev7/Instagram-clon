<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    $id = $_POST["id"];
    $idUsuario = $_SESSION["id"];

    $usuario = $_SESSION["usuario"];
    $publicacion = $_POST["publicacion"];
    $usuarioPublicacion = $_POST["usuario"];
    $fecha = $_POST["fecha"];

    include "./conexion.php"; 

    $consulta = $conexion->prepare("SELECT * FROM gusta WHERE id_usuario = $idUsuario AND id_publicacion = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $consultaFotoPerfil = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $idUsuario");
    $consultaFotoPerfil->execute();

    $resultadoFotoPerfil = $consultaFotoPerfil->fetchAll();

    $foto = $resultadoFotoPerfil[0]["foto_perfil"];
    $idMeGusta = $resultado[0]["id_gusta"];

    if(empty($resultado[0])){

        $insertar = $conexion->prepare("INSERT INTO gusta(valor_gusta, id_usuario, id_publicacion) VALUES (1, $idUsuario, $id)");
        $insertar->execute();

        if($usuarios != $usuarioPublicacion){

            $consulta = $conexion->prepare("SELECT * FROM gusta WHERE id_usuario = $idUsuario AND id_publicacion = $id");
            $consulta->execute();

            $resultado = $consulta->fetchAll();

            $idMeGusta = $resultado[0]["id_gusta"];

            $insertarNotificacion = $conexion->prepare("INSERT INTO notificaciones(para_notificacion, de_notificacion, tipo_notificacion, img_usuario, img_publicacion, fecha_notificacion, id_publicacion) VALUES('$usuarioPublicacion', '$usuario', 'publicacion', '$foto', '$publicacion', $fecha, $idMeGusta)");
            $insertarNotificacion->execute();
        }

        echo "Se inserto el nuevo registro";
    }
    else{

        if(($resultado[0]["valor_gusta"]) == 0){

            $actualizar = $conexion->prepare("UPDATE gusta SET valor_gusta = 1 WHERE id_usuario = $idUsuario AND id_publicacion = $id");
            $actualizar->execute();

            if($usuario != $usuarioPublicacion){

                $insertarNotificacion = $conexion->prepare("INSERT INTO notificaciones(para_notificacion, de_notificacion, tipo_notificacion, img_usuario, img_publicacion, fecha_notificacion, id_publicacion) VALUES('$usuarioPublicacion', '$usuario', 'publicacion', '$foto', '$publicacion', $fecha, $idMeGusta)");
                $insertarNotificacion->execute();
            }

            echo "Se actualizo el valor a 1 porque valia 0";
        }
        else if(($resultado[0]["valor_gusta"]) == 1){

            $actualizar = $conexion->prepare("UPDATE gusta SET valor_gusta = 0 WHERE id_usuario = $idUsuario AND id_publicacion = $id");
            $actualizar->execute();

            if($usuario != $usuarioPublicacion){
                
                $eliminarNotificacion = $conexion->prepare("DELETE FROM notificaciones WHERE id_publicacion = $idMeGusta");
                $eliminarNotificacion->execute();
            }

            echo "Se actualizo el valor a 0 porque valia 1";
        }
    }

?>