<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "../php/conexion.php";

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Mensajes</title>
    <link rel="stylesheet" href="../css/sesion.css">
    <link rel="stylesheet" href="../css/mensajes.css">
</head>
<body>
    <div class="container">
        <?php include "../php/menu.php"?>
        <div class="container-homepage">
            <div class="container-mensajes">
                <div class="box-mensajes">
                    <div class="box-nuevo-mensaje">
                        <h3>Mensajes</h3>
                        <div class="nuevo-mensaje">
                            <img src="../img/nuevo_mensaje.png">
                        </div>
                    </div>
                    <div class="header-usuarios-chat">
                        <!-- <div class="container-usuarios-chat">
                            <div>
                                <img src="../img/perfil/messi127.jpg">
                            </div>
                            <div>
                                <p>Lionel Messi</p>
                                <p>lionel10</p>
                            </div>
                        </div>
                        <div class="container-usuarios-chat">
                            <div>
                                <img src="../img/perfil/messi127.jpg">
                            </div>
                            <div>
                                <p>Lionel Messi</p>
                                <p>lionel10</p>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="box-chat">
                    <div class="chat-enviar-mensajes">
                        <img src="../img/chat_logo.png">
                        <h3>Tus Mensajes</h3>
                        <p>Envia mensajes privados a tus amigos</p>
                        <button class="boton">Enviar mensajes</button>
                    </div>
                </div>
                <!-- <div class="caja-mensajes" style="display: none">
                    <div class="header-mensajes">
                        <div>
                            <img src="../img/perfil/messi127.jpg">
                        </div>
                        <div>
                            <span>Lionel Messi</span>
                        </div>
                    </div>
                    <div class="caja-mensaje-usuarios">
                        <div class="perfil-chat">
                            <div>
                                <img src="../img/perfil/messi127.jpg">
                            </div>
                            <div>
                                <p>Lionel Messi</p>
                                <p>messi10 . Faketagram</p>
                            </div>
                            <div>
                                <a href="">Ver perfil</a>
                            </div>
                        </div>
                        <div class="ver-mensajes">
                            <p class="mensaje-recibido">Hola Mundo 1</p>
                            <p class="mensaje-enviado">Hola Mundo 2 jsbjbsjfb jsbfjbsjfbj sjbfjbsjfbjsb sjfbjsbjbfj sj bfjsb jbjfbjsbfjbsjfb</p>
                            <p class="mensaje-recibido">Hola Mundo 3</p>
                            <p class="mensaje-recibido">Hola Mundo 4</p>
                            <p class="mensaje-enviado">Hola Mundo 5</p>
                            <p class="mensaje-enviado">Hola Mundo 6</p>
                        </div>
                    </div>
                    <div class="mensaje-texto">
                        <form action="" method="" id="formularioMensajee">
                            <input type="text" name="mensaaje" id="mensajee" placeholder="Envía un mensaje..." required>
                            <input type="submit" value="Enviar" id="eenviar">
                        </form>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <div class="buscar-usuarios-chat">
        <div class="caja-buscar-usuarios">
            <div class="header-titulo-mensaje">
                <h3>Nuevo mensaje</h3>
                <div class="buscar-usuarios">
                    <div>
                        <label for="buscarusuarios">Para: </label>
                    </div>
                    <div>
                        <input type="search" name="buscarusuarios" id="buscarusuarios" placeholder="Busca...">
                    </div>
                </div>
            </div>
            <div class="caja-usuarios">
            
            </div>
            <!-- <div class="caja-boton-chat">
                <button class="boton-chat">Chat</button>
            </div> -->
            <span class="cancelar-publicacion x">X</span>
        </div>
    </div>
    <script type="text/javascript" src="../js/mensajes.js"></script>
</body>
</html>