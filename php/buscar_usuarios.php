<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $busca = $_POST["busca"];

    $consulta = $conexion->prepare("SELECT nombre_usuario, usuario_usuario, id_usuario FROM usuario WHERE usuario_usuario LIKE '$busca%'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $datos = [];

    if(!(empty($resultado[0]))){

        foreach($resultado as $valor){

            $id = $valor["id_usuario"];

            $consulta1 = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
            $consulta1->execute();

            $resultado1 = $consulta1->fetchAll();

            array_push($datos, [$valor["usuario_usuario"], $valor["nombre_usuario"], $resultado1[0]["foto_perfil"]]);
        }

        echo json_encode($datos);
    }
    else{

        array_push($datos, "No existe ese usuario");
        echo json_encode($datos);
    }

?>