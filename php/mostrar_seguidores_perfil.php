<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit(); 
    }

    include "./conexion.php";

    $otroUsuario = $_SESSION["usuario"];

    $consulta = $conexion->prepare("SELECT sigue_seguir FROM seguir WHERE siguiendo_seguir = '$otroUsuario' AND validacion_seguir = 1");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $usuario = [];

    if(!(empty($resultado[0]))){

        foreach($resultado as $valor){

            $nombreUsuario = $valor["sigue_seguir"];
            $consulta2 = $conexion->prepare("SELECT id_usuario, nombre_usuario, usuario_usuario FROM usuario WHERE usuario_usuario = '$nombreUsuario'");
            $consulta2->execute();

            $resultado2 = $consulta2->fetchAll();

            $id = $resultado2[0]["id_usuario"];

            $consulta3 = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
            $consulta3->execute();

            $resultado3 = $consulta3->fetchAll();

            array_push($usuario, [$resultado2[0]["nombre_usuario"], $resultado2[0]["usuario_usuario"], $resultado3[0]["foto_perfil"]]);
        }

        echo json_encode($usuario);
    }
    else{

        array_push($usuario, "No tiene seguidores");
        echo json_encode($usuario);
    }

?>