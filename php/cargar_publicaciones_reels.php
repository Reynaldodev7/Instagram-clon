<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $consulta = $conexion->prepare("SELECT id_publicacion, nombre_publicacion, nombre_usuario, nombre_perfil, fecha_publicacion FROM publicaciones WHERE nombre_publicacion LIKE '%.mp4'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $arreglo = [];

    foreach($resultado as $valor){

        array_push($arreglo, [$valor["nombre_publicacion"], $valor["nombre_usuario"], $valor["nombre_perfil"], $valor["id_publicacion"], $valor["fecha_publicacion"]]);
    }

    echo json_encode($arreglo);
?>