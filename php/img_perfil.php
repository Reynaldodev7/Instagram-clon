<?php 

if(!(isset($_SESSION["iniciada"]))){

    header("Location: ../php/cerrar_sesion.php");
}

$id = $_SESSION["id"];

$consulta = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
$consulta->execute();

$resultado = $consulta->fetchAll();
//  if(empty($resultado[0])){

//      $nombreImg = "user.jpg";
//  }
//  else{

//      $nombreImg = $resultado[0]["foto_perfil"];
// }

$nombreImg = $resultado[0]["foto_perfil"];

?>