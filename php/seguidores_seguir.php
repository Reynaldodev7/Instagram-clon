<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $datos = $_POST["usuario"];

    $datos = json_decode($datos);
    $usuario = $_SESSION["usuario"];

    $validacion = [];

    foreach($datos as $valor){

        $consulta = $conexion->prepare("SELECT validacion_seguir FROM seguir WHERE sigue_seguir = '$usuario' AND siguiendo_seguir = '$valor'");
        $consulta->execute();

        $resultado = $consulta->fetchAll();

        if(empty($resultado[0])){

            array_push($validacion, 0);
        }
        else{

            array_push($validacion, $resultado[0]["validacion_seguir"]);
        }
    }

    echo json_encode($validacion);

?>