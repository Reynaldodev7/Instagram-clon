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
    <title>Explorar</title>
    <link rel="stylesheet" href="../css/sesion.css">
</head>
<body> 
    <div class="container">
        <?php 
            include "../php/menu.php";
        ?>
        <div class="">

        </div>
    </div>
    <script type="text/javascript" src="../js/explorar.js"></script>
</body>
</html>