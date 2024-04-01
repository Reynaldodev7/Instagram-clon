<?php 

session_start();

if(!(isset($_SESSION["iniciada"]))){

    header("Location: ../php/cerrar_sesion.php");
    exit();
}

include "./conexion.php";

$id = $_SESSION["id"];

$consulta = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
$consulta->execute();

$resultado = $consulta->fetchAll();
$nombreImg;

if(empty($resultado[0])){

    $nombreImg = "user.png";
}
else{

    $nombreImg = $resultado[0]["foto_perfil"];
}

$consulta1 = $conexion->prepare("SELECT usuario_usuario FROM usuario WHERE id_usuario = $id");
$consulta1->execute();

$resultado2 = $consulta1->fetchAll();

$arreglo = [$resultado2[0]["usuario_usuario"], $nombreImg];

echo json_encode($arreglo);

?>