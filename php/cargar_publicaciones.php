<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $nombresImg = [];

    $consulta = $conexion->prepare("SELECT id_publicacion, nombre_publicacion, nombre_usuario, nombre_perfil, fecha_publicacion FROM publicaciones");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    foreach($resultado as $valor){

        array_push($nombresImg, [$valor["nombre_publicacion"], $valor["nombre_usuario"], $valor["nombre_perfil"], $valor["id_publicacion"], $valor["fecha_publicacion"]]);
    }

    echo json_encode($nombresImg);

?>