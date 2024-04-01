<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_POST["usuario"];
    $usuarioMensaje = $_POST["usuarioMensaje"];

    $consulta = $conexion->prepare("SELECT id_mensaje, envia_mensaje, recibe_mensaje, mensaje_mensaje FROM mensaje WHERE envia_mensaje = '$usuario' AND recibe_mensaje = '$usuarioMensaje'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $consulta1 = $conexion->prepare("SELECT id_mensaje, envia_mensaje, recibe_mensaje, mensaje_mensaje FROM mensaje WHERE envia_mensaje = '$usuarioMensaje' AND recibe_mensaje = '$usuario'");
    $consulta1->execute();

    $resultado1 = $consulta1->fetchAll();

    $arreglo = [];

    if(!(empty($resultado[0]))){

        $enviados = [];

        foreach($resultado as $valor){

            array_push($enviados, [$valor["id_mensaje"], $valor["envia_mensaje"], $valor["mensaje_mensaje"]]);
        }

        array_push($arreglo, $enviados);
    }
    else{

        array_push($arreglo, 0);
    }

    if(!(empty($resultado1[0]))){

        $enviados1 = [];

        foreach($resultado1 as $valor){

            array_push($enviados1, [$valor["id_mensaje"], $valor["envia_mensaje"], $valor["mensaje_mensaje"]]);
        }

        array_push($arreglo, $enviados1);
    }
    else{

        array_push($arreglo, 0);
    }

    echo json_encode($arreglo);
?>