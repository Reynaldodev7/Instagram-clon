<?php 

    session_start();

    if(!(isset($_SESSION["otroUsuario"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    if($_SESSION["otroUsuario"] == $_SESSION["usuario"]){

        header("Location: ./perfil.php");
        exit();
    }
    include "../php/conexion.php";

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Perfil de <?php echo $_SESSION["otroUsuario"]?></title>
    <link rel="stylesheet" href="../css/sesion.css">
    <link rel="stylesheet" href="../css/usuario.css">
</head>
<body>
    <?php include "../php/cargando_vistas.php"?>
    <div class="container"> 
        <?php include "../php/menu.php"?>
        <div class="container-perfil-principal">
            <div class="container-perfil">
                    <div class="header-perfil">
                        <div class="header-perfil0"> 
                            <div class="header-perfil1">
                                <span><?php echo $_SESSION["otroUsuario"]?></span>
                                <span class="boton-perfil1">Seguir</span>
                            </div>
                            <div class="header-perfil2">
                                <span class="seguidores">0 Publicaciones</span>
                                <span>0 Seguidores</span>
                                <span>0 Seguidos</span>
                            </div>
                            <div class="header-perfil3">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="titulo-publicacion">
                    <h2>Publicaciones</h2>
                </div>
                <div class="publicaciones-perfil">
                    
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="../js/otro_usuario.js"></script>
</body>
</html>