<?php include "../php/img_perfil.php"?>

<div class="container-nav">
    <nav class="nav">
        <div class="nav-link home">
            <h1 class="titulo-nav"><span>Faketagram</span></h1>
        </div>
        <div class="nav-link home2 hover">
            <div>
                <img src="../img/casa.jpg">
            </div>
            <div class="titulo-nav">
                <span>Inicio</span>
            </div>  
        </div>
        <div class="nav-link busqueda hover">
            <div>
                <img src="../img/lupa.png">
            </div>
            <div>
                <span>Busqueda</span>
            </div>
        </div>
        <div class="nav-link explorar hover">
            <div>
                <img src="../img/explorar.png">
            </div>
            <div>
                <span>Explorar</span>
            </div>
        </div>
        <div class="nav-link reels hover">
            <div>
                <img src="../img/reels.png">
            </div>
            <div>
                <span>Reels</span>
            </div>
        </div>
        <div class="nav-link mensajes hover">
            <div>
                <img src="../img/mensaje.png">
            </div>
            <div>
                <span>Mensajes</span>
            </div>
        </div>
        <div class="nav-link notificaciones hover">
            <div>
                <img src="../img/notificaciones.jpg">
            </div>
            <div>
                <span>Notificaciones</span>
            </div>
        </div>
        <div class="nav-link crear hover">
            <div>
                <img src="../img/crear.png">
            </div>
            <div>
                <span>Crear</span>
            </div>
        </div>
        <div class="nav-link usuario hover">
            <div>
                <img src="../img/perfil/<?php echo $nombreImg?>">
            </div>
            <div>
                <span>Perfil</span>
            </div>
        </div>
        <div class="nav-link mas hover">
            <div>
                <img src="../img/mas.jpg">
            </div>
            <div>
                <span>Más</span>
            </div>
        </div>
    </nav>
</div>
<div class="container-busqueda">
    <h4>Búsqueda</h4>
    <div>
        <input class="search" type="search" name="busqueda" id="busqueda" placeholder="Buscar usuarios" required>
    </div>
    <div class="cargar-usuarios">

    </div>
</div>
<div class="container-notificaciones">
    <h4>Notificaciones</h4>
    <div class="cargar-notificaciones">
        <!-- <div class="container-notificaciones-usuarios">
            <div>
                <img src="../img/perfil/messi127.jpg">
            </div>
            <div>
                <p>A Cristiano07 le ha gustado tu publicacion . hoy</p>
            </div>
            <div>
                <img src="../img/publicaciones/722cristiano526.jpg">
            </div>
        </div>
        <div class="container-notificaciones-usuarios">
            <div>
                <img src="../img/perfil/cristiano326.jpg">
            </div>
            <div>
                <p>A Cristiano07 le ha gustado tu publicacion . hoy</p>
            </div>
        </div>
        <div class="container-notificaciones-usuarios">
            <div>
                <img src="../img/perfil/user.jpg">
            </div>
            <div>
                <p>A Cristiano07 le ha gustado tu publicacion . hoy</p>
            </div>
        </div> -->
    </div>
</div>
<div class="agregar-publicacion">
    <div class="container-publicacion">
        <span class="cancelar-publicacion">X</span>
        <form action="" method="" id="formulario1">
            <input type="file" name="publicacion" class="file-publicacion" accept="image/jpeg, image/png, image/gif, image/bmp, image/tiff, image/heic, video/mp4">
        </form>
        <h4>Crear nueva publicacion</h4>
        <div class="img-publicacion">
            <img src="../img/icon_instagram.png">
        </div>
        <p>Agregar fotos o videos</p>
        <div class="container-boton-publicacion">
            <button class="boton-publicacion">Seleccionar del ordenador</button>
        </div>
    </div>
</div>
<div class="container-cerrar-sesion">
    <div class="box-cerrar-sesion">
        <span class="cancelar-cerrar-sesion">X</span>
        <h4>Cerrar sesion</h4>
        <button class="boton-cerrar-sesion">Cerrar sesion</button>
    </div>
</div>