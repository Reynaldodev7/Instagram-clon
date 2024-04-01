<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $idPublicacion = $_POST["idPublicacion"];

    $consulta = $conexion->prepare("SELECT valor_gusta FROM gusta WHERE id_publicacion = $idPublicacion");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $suma = 0;

    if(empty($resultado[0])){

        $suma = 0;
    }
    else{

        foreach($resultado as $valor){

            $suma = $suma + intval($valor["valor_gusta"]);
        }
    }

    echo $suma;

?>