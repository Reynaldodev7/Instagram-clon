<?php 

session_start();

if(!(isset($_SESSION["iniciada"]))){

    header("Location: ./cerrar_sesion.php");
    exit();
}

include "./conexion.php";

$nombreUsuario = $_SESSION["otroUsuario"];

$nombresImg = [];

$consulta = $conexion->prepare("SELECT nombre_publicacion, id_publicacion FROM publicaciones WHERE nombre_usuario = '$nombreUsuario'");
$consulta->execute();

$resultado = $consulta->fetchAll();

foreach($resultado as $valor){

    array_push($nombresImg, [$valor["nombre_publicacion"], $valor["id_publicacion"]]);
}

echo json_encode($nombresImg);

?>