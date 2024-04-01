<?php 

    session_start();

    if(isset($_SESSION["iniciada"])){

        header("Location: ./vistas/sesion_iniciada.php");
        exit();
    }
    else{

        session_destroy();
    }

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Instagram</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php include "./php/cargando.php";?>
    <!--Pagina Home-->
    <div class="container-home">
        <div class="container">
            <div class="celulares">
                <img src="./img/celular1.png">
                <img src="./img/celular1.png">
                <img>
                <img src="./img/imginstagram5.png">
            </div>
            <div class="formulario-index">
                <div class="formulario">
                    <h1>Faketagram</h1>
                    <form action="" method="" id="formulario">
                        <div class="input margin">
                            <input type="text" name="usuario" placeholder="Telefono, usuario o correo electronico" required>
                            <div class="x-usuario">
                                <img src="./img/x.png">
                            </div>
                        </div>
                        <div class="input margin">
                            <input type="password" name="contra" id="contra" placeholder="Contraseña" required>
                            <div class="mostrar-contra">
                            <p class="mostrar">Mostrar</p>
                            <div class="x-contra">
                                <img src="./img/x.png">
                            </div>
                            </div>
                        </div>
                        <div class="margin boton">
                            <input type="submit" value="Iniciar sesion">
                        </div>
                    </form> 
                    <div class="separacion">
                        <div class="hr">
                            <hr>
                        </div>
                        <div class="o">
                            o
                        </div>
                        <div class="hr">
                            <hr>
                        </div>
                    </div>
                    <div class="container-facebook">
                        <div class="facebook">
                            <div class="icon">
                                <img src="./img/facebook.png">
                            </div>
                            <div class="link-text">
                                <span>Iniciar sesion con Facebook</span>
                            </div>
                        </div>
                    </div>
                    <div class="link">
                        <a href="">¿Olvidaste la contraseña?</a>
                    </div>
                </div>
                <div class="link-registrate">
                    <span>¿No tienes cuenta? <a href="./vistas/registrarse.php">Registrate</a></span>
                </div>
                <div class="descargar">
                    <p>Descarga la aplicación</p>
                    <div class="link-descargar">
                        <div>
                            <a href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dig_mid%253DCA2EBAE5-5F8B-47AD-AEE5-C259181F8AA5%2526utm_campaign%253DloginPage%2526utm_content%253Dlo%2526utm_source%253Dinstagramweb%2526utm_medium%253Dbadge&e=AT3xFrdbMPyvf0ZyZkv0cY_5T8mus3zsDkvFymSnW2qRMFXof_nxjKI9A-sDD5HcEc07RIxiBJdr_cugtP6MEDkTgvZxAwabORwIZYrrI2o_XiG1qgnepVRHM8CeAQOl0ddT63xgs8gJlC8THxxcdA">
                                <img src="./img/googlePlay.png">
                            </a>
                        </div>
                        <div>
                            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1030">
                                <img src="./img/microsoftStore.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="links-home">
            <nav>
                <a href="https://about.meta.com/">Meta</a>
                <a href="https://about.instagram.com/">Informacion</a>
                <a href="https://about.instagram.com/blog/">Blog</B></a>
                <a href="https://www.instagram.com/about/jobs/">Empleo</a>
                <a href="https://help.instagram.com/">Ayuda</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://www.instagram.com/legal/privacy/">Privacidad</a>
                <a href="https://www.instagram.com/legal/terms/">Condiciones</a>
                <a href="https://www.instagram.com/directory/profiles/">Cuentas destacadas</a>
                <a href="https://www.instagram.com/explore/locations/">Ubicaciones</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.threads.net/">Threads</a>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT0WxZEcnUWMvrrFZ3k1wolhnruGWORa2ENbjYWejWO24nLjX6RCKenoXCZhHRgdTawplhtjCwRkv8thxOqC2VCkFM1GHrhr59y6r_cepwZ1Ksp6T1wRPUI2RymPL-tUi7d4JEOiSnRXj2oagcEWJA">Subir contactos y personas no usuarias</a>
                <a href="https://about.meta.com/technologies/meta-verified/">Meta verified</a>
            </nav>
        </div>
        <footer>
            <div class="footer">
                <div>
                    <select>
                        <option>Español</option>
                        <option>English</option>
                    </select>
                </div>
                <p>© 2023 Instagram from Meta</p>
            </div>
        </footer>
    </div>
    <script type="text/javascript" src="./js/main.js"></script>
</body>
</html>