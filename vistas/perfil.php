<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ../php/cerrar_sesion.php");
    }

    include "../php/conexion.php";
    include "../php/img_perfil.php";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Perfil</title>
    <link rel="stylesheet" href="../css/sesion.css">
    <link rel="stylesheet" href="../css/usuario.css">
</head> 
<body>
    <?php include "../php/cargando_vistas.php"?>
    <div class="container">
        <?php include "../php/menu.php"?>
        <div class="container-perfil-principal">
            <div class="cambiar-foto">
                <div class="foto-menu">
                    <div>
                        <h2>Cambiar foto de perfil</h2>
                    </div>
                    <div class="subir">
                        <form action="" method="" id="formulario">
                            <input class="file" type="file" name="perfil">
                        </form>
                        <span>Subir foto</span>
                    </div>
                    <div class="eliminar">
                        <span>Eliminar foto actual</span>
                    </div>
                    <div class="cancelar"> 
                        <span>Cancelar</span>
                    </div>
                </div>
            </div>
            <div class="container-perfil">
                <div class="header-perfil">
                    <div class="foto-perfil1">
                        <img src="../img/perfil/<?php echo $nombreImg?>" class="foto-perfil">
                    </div>
                    <div class="header-perfil0">
                        <div class="header-perfil1">
                            <span><?php echo $_SESSION["usuario"]?></span>
                            <span class="boton-perfil">Editar perfil</span>
                            <span class="boton-perfil">Ver archivo</span>
                            <span class="boton-perfil">Herramientas de anuncios</span>
                        </div>
                        <div class="header-perfil2">
                            <span class="seguidores">0 Publicaciones</span>
                            <span>0 Seguidores</span>
                            <span>0 Seguidos</span>
                        </div>
                        <div class="header-perfil3">
                            <span><?php echo $_SESSION["nombre"]?></span>
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
    <script type="text/javascript" src="../js/perfil.js"></script>
</body>
</html>