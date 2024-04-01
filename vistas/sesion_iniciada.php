<?php 
    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ../php/cerrar_sesion.php");
        exit();
    }

    include "../php/conexion.php";
    include "../php/img_perfil.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Inicio</title>
    <link rel="stylesheet" href="../css/sesion.css">
</head>
<body>
    <?php 
        include "../php/cargando_vistas.php";
    ?>
    <div class="container">
        <?php 
            include "../php/menu.php";
        ?>
        <div class="container-homepage">
            <div class="box-homepage">
                <div class="historia">
                    <img src="../img/historia-husky.jpg">
                    <img src="../img/historia-mustang.jpg">
                    <img src="../img/historia-marsmello.jpg">
                    <img src="../img/historia-warzone.jpg">
                    <img src="../img/historia-futbol.jpg">
                    <img src="../img/historia-pupusas.jpg">
                </div>
                <div class="titulo-historia">
                    <span>Husky</span>
                    <span>Mustang</span>
                    <span>Marsmello</span>
                    <span>Warzone</span>
                    <span>Futbol</span>
                    <span>Pupusas</span>
                </div>
                <div class="menu-header">
                    <div class="menu-header-titulo">
                        <h3>Faketagram</h3>
                    </div>
                    <div class="container-busqueda-header">
                        <div>
                            <input class="search1" type="search" name="busqueda1" id="busqueda1" placeholder="Buscar usuarios" required>
                        </div>
                        <div class="cargar-usuarios-header">

                        </div>
                    </div>
                    <div class="menu-header-notificaciones">
                        <img src="../img/notificaciones.jpg">
                        <div class="container-notificaciones-header">
                            <h4>Notificaciones</h4>
                            <div class="cargar-notificaciones-header">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="publicacion">
                    <div class="container-perfil-publicacion">
                        <div class="perfil-publicacion">
                            <div>
                                <img src="../img/perfil/user.png">
                            </div>
                            <div>
                                <span>Usuario</span>
                            </div>
                            <div>
                                <span>- 1 dia</span>
                            </div>
                        </div>
                        <div class="tres-puntos">
                            <span>...</span>
                        </div>
                    </div>
                    <div class="publicacion-img">
                        <img src="../img/perfil/user.png">
                    </div>
                    <div class="img-megusta">
                        <img src="../img/notificaciones.jpg">
                    </div>
                    <div>
                        <span>0 Me gusta</span>
                    </div> 
                </div> -->
            </div>
            <div class="sugerencia">
                <div>
                    <a href="./perfil.php">
                        <img src="../img/perfil/<?php echo $nombreImg?>">
                    </a>
                </div>
                <div class="usuario-nombre">
                    <div>
                        <a href="./perfil.php"><?php echo $_SESSION["usuario"]?></a>
                    </div>
                    <div>
                        <span><?php echo $_SESSION["nombre"]?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="../js/sesion.js"></script>
</body>
</html>