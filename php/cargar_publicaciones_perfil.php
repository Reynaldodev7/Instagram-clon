<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $id = $_SESSION["id"];

    $nombresImg = [];

    $consulta = $conexion->prepare("SELECT nombre_publicacion, id_publicacion FROM publicaciones WHERE id_usuario = $id");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    foreach($resultado as $valor){
 
        array_push($nombresImg, [$valor["nombre_publicacion"], $valor["id_publicacion"]]);
    }

    echo json_encode($nombresImg);

?>