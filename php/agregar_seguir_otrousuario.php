<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $sigue = $_SESSION["usuario"];
    $siguiendo = $_POST["usuario"];

    $idUsuario = $_SESSION["id"];
    $usuario = $_SESSION["usuario"];
    $fecha = $_POST["fecha"];

    $consulta = $conexion->prepare("SELECT * FROM seguir WHERE sigue_seguir = '$sigue' AND siguiendo_seguir = '$siguiendo'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $consultaFotoPerfil = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $idUsuario");
    $consultaFotoPerfil->execute();

    $resultadoFotoPerfil = $consultaFotoPerfil->fetchAll();

    $foto = $resultadoFotoPerfil[0]["foto_perfil"];
    $idSeguir = $resultado[0]["id_seguir"];

    if(empty($resultado[0])){

        $insertar = $conexion->prepare("INSERT INTO seguir(sigue_seguir, siguiendo_seguir, validacion_seguir) VALUES ('$sigue', '$siguiendo', 1)");
        $insertar->execute();

        if($usuarios != $siguiendo){

            $consulta1 = $conexion->prepare("SELECT * FROM seguir WHERE sigue_seguir = '$sigue' AND siguiendo_seguir = '$siguiendo'");
            $consulta1->execute();

            $resultado1 = $consulta1->fetchAll();

            $idSeguir = $resultado1[0]["id_seguir"];

            $insertarNotificacion = $conexion->prepare("INSERT INTO notificaciones(para_notificacion, de_notificacion, tipo_notificacion, img_usuario, img_publicacion, fecha_notificacion, id_publicacion) VALUES('$siguiendo', '$usuario', 'seguidor', '$foto', 'vacio', $fecha, $idSeguir)");
            $insertarNotificacion->execute();
        }

        echo 1; 
    }
    else{

        $validacion = $resultado[0]["validacion_seguir"];

        if($validacion == 0){

            $actualizar = $conexion->prepare("UPDATE seguir SET validacion_seguir = 1 WHERE sigue_seguir = '$sigue' AND siguiendo_seguir = '$siguiendo'");
            $actualizar->execute();

            if($usuario != $siguiendo){

                $insertarNotificacion = $conexion->prepare("INSERT INTO notificaciones(para_notificacion, de_notificacion, tipo_notificacion, img_usuario, img_publicacion, fecha_notificacion, id_publicacion) VALUES('$siguiendo', '$usuario', 'seguidor', '$foto', 'vacio', $fecha, $idSeguir)");
                $insertarNotificacion->execute();
            }

            echo 1;
        }
        else if($validacion == 1){

            $actualizar = $conexion->prepare("UPDATE seguir SET validacion_seguir = 0 WHERE sigue_seguir = '$sigue' AND siguiendo_seguir = '$siguiendo'");
            $actualizar->execute();

            if($usuario != $siguiendo){
                
                $eliminarNotificacion = $conexion->prepare("DELETE FROM notificaciones WHERE id_publicacion = $idSeguir");
                $eliminarNotificacion->execute();
            }

            echo 0;
        }
    }
?>