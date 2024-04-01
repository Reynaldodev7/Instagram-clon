<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ../php/cerrar_sesion.php");
        exit();
    }

    include "../php/conexion.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Reels</title>
    <link rel="stylesheet" href="../css/sesion.css">
    <link rel="stylesheet" href="../css/reels.css"> 
</head>
<body>
    <div class="container">
        <?php include "../php/menu.php"?>
        <div class="container-homepage">
            <div class="box-homepage">

            </div>
        </div>
    </div>
    <script type="text/javascript" src="../js/reels.js"></script>
</body>
</html>