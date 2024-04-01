async function cargarNotificaciones(){

    let peticionNotificaciones = await fetch("../php/cargar_notificaciones.php");
    let respuestaNotificaciones = await peticionNotificaciones.json();

    if(respuestaNotificaciones[0] != "0"){

        let divCargarNotificaciones = document.querySelector(".cargar-notificaciones");
        let divContainerNotificaciones = document.querySelectorAll(".container-notificaciones-usuarios");

        if(divContainerNotificaciones[0] != undefined){

            for(let div of divContainerNotificaciones){

                div.remove();
            }
        }

        for(let datos of respuestaNotificaciones){

            if(datos[1] == "publicacion"){

                let divContainerNotificacioneUsuario = document.createElement("div");
                divContainerNotificacioneUsuario.classList.add("container-notificaciones-usuarios");
                let div1 = document.createElement("div");
                let div2 = document.createElement("div");
                let div3 = document.createElement("div");
                let img1 = document.createElement("img");
                let p = document.createElement("p");

                let milisegundos = Date.now();
                let segundos = milisegundos/1000;
                let minutos = segundos/60;
                let horas = minutos/60;
                let dias = parseInt(horas/24);

                div1.appendChild(img1);
                img1.setAttribute("src", "../img/perfil/"+datos[2]);
 
                div2.appendChild(p);

                if(datos[4] == dias){

                    p.innerHTML = `A ${datos[0]} le ha gustado tu publicacion. <span class='gray'>hoy</span>`;
                }
                else{
        
                    let horasPublicacion = dias - datos[4];

                    if(horasPublicacion == 1){
        
                        p.innerHTML = `A ${datos[0]} le ha gustado tu publicacion. <span class='gray'>${horasPublicacion} día</span>`;
                    }
                    else{
        
                        p.innerHTML = `A ${datos[0]} le ha gustado tu publicacion. <span class='gray'>${horasPublicacion} días</span>`;
                    }
                }

                let mp4 = datos[3].indexOf(".mp4");

                if(mp4 < 0){

                    let img2 = document.createElement("img");

                    div3.appendChild(img2);
                    img2.setAttribute("src", "../img/publicaciones/"+datos[3]);
                }
                else{

                    let video = document.createElement("video");
                    let source = document.createElement("source");

                    video.appendChild(source);
                    source.setAttribute("src", "../img/publicaciones/"+datos[3]);

                    div3.appendChild(video);
                }

                divContainerNotificacioneUsuario.appendChild(div1);
                divContainerNotificacioneUsuario.appendChild(div2);
                divContainerNotificacioneUsuario.appendChild(div3);

                divCargarNotificaciones.prepend(divContainerNotificacioneUsuario);
            }

            if(datos[1] == "seguidor"){

                let divContainerNotificacioneUsuario = document.createElement("div");
                divContainerNotificacioneUsuario.classList.add("container-notificaciones-usuarios");
                let div1 = document.createElement("div");
                let div2 = document.createElement("div");
                let img1 = document.createElement("img");
                let p = document.createElement("p");

                let milisegundos = Date.now();
                let segundos = milisegundos/1000;
                let minutos = segundos/60;
                let horas = minutos/60;
                let dias = parseInt(horas/24);

                div1.appendChild(img1);
                img1.setAttribute("src", "../img/perfil/"+datos[2]);

                div2.appendChild(p);

                if(datos[4] == dias){

                    p.innerHTML = `${datos[0]} ahora es seguidor de tu cuenta. <span class='gray'>hoy</span>`;
                } 
                else{
        
                    let horasPublicacion = dias - datos[4];

                    if(horasPublicacion == 1){
        
                        p.innerHTML = `${datos[0]} ahora es seguidor de tu cuenta. <span class='gray'>${horasPublicacion} día</span>`;
                    }
                    else{
        
                        p.innerHTML = `${datos[0]} ahora es seguidor de tu cuenta. <span class='gray'>${horasPublicacion} días</span>`;
                    }
                }

                divContainerNotificacioneUsuario.appendChild(div1);
                divContainerNotificacioneUsuario.appendChild(div2);

                divCargarNotificaciones.prepend(divContainerNotificacioneUsuario);
            }
        }
    }
}

function menu(){

    let home = document.querySelector(".home");
    let home2 = document.querySelector(".home2");
    let busqueda = document.querySelector(".busqueda");
    let explorar = document.querySelector(".explorar");
    let reels = document.querySelector(".reels");
    let mensajes = document.querySelector(".mensajes");
    let notificaciones = document.querySelector(".notificaciones");
    let crear = document.querySelector(".crear");
    let agregarPublicacion = document.querySelector(".agregar-publicacion");
    let containerCerrarSesion = document.querySelector(".container-cerrar-sesion");
    let botonPublicacion = document.querySelector(".boton-publicacion");
    let filePublicacion = document.querySelector(".file-publicacion");
    let cancelarSesion = document.querySelector(".cancelar-cerrar-sesion");
    let cancelarPublicacion = document.querySelector(".cancelar-publicacion");
    let perfil = document.querySelector(".usuario");
    let mas = document.querySelector(".mas");
    let containerBusqueda = document.querySelector(".container-busqueda");
    let containerNotificaciones = document.querySelector(".container-notificaciones");

    let hijoHome = home.children[0];

    let containerNav = document.querySelector(".container-nav");

    home.addEventListener("click", () => {

        window.location.href = "./sesion_iniciada.php";
    });

    home2.addEventListener("click", () => {

        window.location.href = "./sesion_iniciada.php";
    });

    busqueda.addEventListener("click", () => {

        let texto = busqueda.children[1];
        let sstyle = window.getComputedStyle(texto);
        let display = sstyle.getPropertyValue("display");

        let nav = [home2, busqueda, explorar, reels, mensajes, notificaciones, crear, perfil, mas];

        if(display == "block" || containerNotificaciones.style.display == "block"){

            if(containerNotificaciones.style.display == "block"){

                containerNotificaciones.style.display = "none";
            }
            else{
                hijoHome.style.display = "none";
                let newHijoHome = document.createElement("img");
                newHijoHome.setAttribute("src", "../img/icon_instagram.png");

                home.appendChild(newHijoHome);
                home.style.marginBottom = "10px";

                for(let dato of nav){

                    let caja = dato.children[1]; 
                    dato.classList.remove("hover");
                    caja.style.display = "none";
                } 

                containerNav.style.borderRight = "0px";
            }

            containerBusqueda.style.display = "block";

        }
        else if(display == "none"){

            let hijo2Home = home.children[1];

            hijo2Home.remove();
            hijoHome.style.display = "block";
            home.style.marginBottom = "20px";

            for(let dato of nav){

                let caja = dato.children[1];
                dato.classList.add("hover");
                caja.style.display = "block";
            }

            containerNav.style.borderRight = "1px solid gray";
            containerBusqueda.style.display = "none";
        }
        
    });

    notificaciones.addEventListener("click", async () => {

        let texto = notificaciones.children[1];
        let sstyle = window.getComputedStyle(texto);
        let display = sstyle.getPropertyValue("display");

        let nav = [home2, busqueda, explorar, reels, mensajes, notificaciones, crear, perfil, mas];

        if(display == "block" || containerBusqueda.style.display == "block"){

            if(containerBusqueda.style.display == "block"){

                containerBusqueda.style.display = "none";
            }
            else{

                hijoHome.style.display = "none";
                let newHijoHome = document.createElement("img");
                newHijoHome.setAttribute("src", "../img/icon_instagram.png");

                home.appendChild(newHijoHome);
                home.style.marginBottom = "10px";

                for(let dato of nav){

                    let caja = dato.children[1]; 
                    dato.classList.remove("hover");
                    caja.style.display = "none";
                }

                containerNav.style.borderRight = "0px";
            }

            await cargarNotificaciones();

            containerNotificaciones.style.display = "block";
        }
        else if(display == "none"){

            let hijo2Home = home.children[1];

            hijo2Home.remove();
            hijoHome.style.display = "block";
            home.style.marginBottom = "20px";

            for(let dato of nav){

                let caja = dato.children[1];
                dato.classList.add("hover");
                caja.style.display = "block";
            }

            containerNav.style.borderRight = "1px solid gray";
            containerNotificaciones.style.display = "none";
        }
        
    });

    explorar.addEventListener("click", () => {

        window.location.href = "./explorar.php";
    })

    reels.addEventListener("click", () => {

        window.location.href = "./reels.php";
    })

    // let containerExplorar = document.createElement("div");
    // let container = document.querySelector(".container");

    // explorar.addEventListener("click", () => {

    //     if(!(containerExplorar.children[0])){
            
    //         let containerHomePage = document.querySelector(".container-homepage");
    //         containerHomePage.remove();

    //         containerExplorar.classList.add("container-explorar");
    //         container.appendChild(containerExplorar);



    //         fetch("https://pixabay.com/api/?key=38946657-1055da0cfdc3da287b5735df8&image_type=photo")
    //         .then((response) => {

    //             return response.json();
    //         })
    //         .then((response) => {

    //             mostrarImagenes(response);
    //         })

    //         function mostrarImagenes(imagenes){

    //             let contador = 0;

    //             for(let j = 0; j <= 3; j++){

    //                 if(j%2 == 0){

    //                     let derecha = document.createElement("div");
    //                     derecha.classList.add("derecha");
    //                     let div1 = document.createElement("div");
    //                     let div2 = document.createElement("div");

    //                     for(let i = contador; i <= (contador+3); i++){

    //                         let image = imagenes.hits[i].largeImageURL;
                        
    //                         let img = document.createElement("img");
    //                         img.setAttribute("src", image);
                            
    //                         div1.appendChild(img);
    //                     }
    //                     contador+=4;
    //                     derecha.appendChild(div1);
    //                     containerExplorar.appendChild(derecha);

    //                     for(let i = contador; i <= contador; i++){

    //                         let image = imagenes.hits[i].largeImageURL;

    //                         let img = document.createElement("img");
    //                         img.setAttribute("src", image);

    //                         div2.appendChild(img);
    //                         derecha.appendChild(div2);
    //                     }

    //                     contador+=1;
    //                 }
    //                 else{

    //                     let izquierda = document.createElement("div");
    //                     izquierda.classList.add("izquierda");
    //                     let div1 = document.createElement("div");
    //                     let div2 = document.createElement("div");

    //                     for(let i = contador; i <= (contador+3); i++){

    //                         let image = imagenes.hits[i].largeImageURL;
                        
    //                         let img = document.createElement("img");
    //                         img.setAttribute("src", image);
                            
    //                         div1.appendChild(img);
    //                     }
    //                     contador+=4;
    //                     izquierda.appendChild(div1);
    //                     containerExplorar.appendChild(izquierda);

    //                     for(let i = contador; i <= contador; i++){

    //                         let image = imagenes.hits[i].largeImageURL;

    //                         let img = document.createElement("img");
    //                         img.setAttribute("src", image);

    //                         div2.appendChild(img);
    //                         izquierda.appendChild(div2);
    //                     }

    //                     contador+=1;
    //                 }
    //             }
    //         }
    //     }
    // });

    mensajes.addEventListener("click", () => {

        window.location.href = "./mensajes.php";
    });

    crear.addEventListener("click", () => {

        agregarPublicacion.style.display = "flex";
    });

    botonPublicacion.addEventListener("click", () => {

        filePublicacion.click();
    });

    cancelarPublicacion.addEventListener("click", () => {

        agregarPublicacion.style.display = "none";
    });

    perfil.addEventListener("click", () => {

        window.location.href = "./perfil.php";
    });

    filePublicacion.addEventListener("change", () => {

        let formulario1 = document.querySelector("#formulario1");

        let file = new FormData(formulario1);

        console.log(file.get("publicacion"));

        let milisegundos = Date.now();
        let segundos = milisegundos/1000;
        let minutos = segundos/60;
        let horas = minutos/60;
        let dias = parseInt(horas/24);

        file.append("fecha", dias);

        fetch("../php/agregar_publicacion.php", {

            method: "POST",
            body: file
        })
        .then((response) => {

            return response.json();
        })
        .then((datos) => {

            window.location.href = "../index.php";
        })
    })

    cancelarSesion.addEventListener("click", () => {

        containerCerrarSesion.style.display = "none";
    })

    mas.addEventListener("click", () => {

        containerCerrarSesion.style.display = "flex";
    })
}

menu();

async function usuariosMensaje(){

    let pedirUsuario = await fetch("../php/usuario.php");
    let usuarioHome = await pedirUsuario.text();

    let nombreUsuarioHome = new FormData();
    nombreUsuarioHome.append("usuario", usuarioHome);

    let pedirUsuarios = await fetch("../php/pedir_usuarios_con_chat.php", {

        method: "post",
        body: nombreUsuarioHome
    });
    let usuariosChat = await pedirUsuarios.json();

    console.log(usuariosChat);

    if(usuariosChat[0] != "-no-"){

        let containerBusqueda = document.querySelector(".header-usuarios-chat");
        let containerUsuariosChat = document.querySelectorAll(".container-usuarios-chat");

        if(containerUsuariosChat != undefined){

            for(let hijo of containerUsuariosChat){

                hijo.remove();
            }
        }

        for(let datos of usuariosChat){

            let divUsuario = document.createElement("div");
            let divImg = document.createElement("div");
            let img = document.createElement("img");
            let divDatos = document.createElement("div");
            let pUsuario = document.createElement("p");
            let pNombre = document.createElement("p");

            divUsuario.classList.add("container-usuarios-chat");

            divImg.appendChild(img);
            img.setAttribute("src", "../img/perfil/"+datos[2]);

            divUsuario.appendChild(divImg);

            divDatos.appendChild(pUsuario);
            divDatos.appendChild(pNombre);

            pUsuario.innerHTML = datos[0];
            pNombre.innerHTML = datos[1];

            divUsuario.appendChild(divDatos);

            containerBusqueda.appendChild(divUsuario);

            divUsuario.addEventListener("click", async () => {

                // let peticion2 = await fetch("../php/usuario.php");
                // let respuesta2 = await peticion2.text();

                // if(respuesta2 == datos[0]){

                //     window.location.href = "./perfil.php";
                // }
                // else{

                //     let nuevoChat = new FormData();
                //     nuevoChat.append("nombreUsuario", datos[0]);

                //     let peticion1 = await fetch("../php/agregar_otro_usuario.php", {

                //         method: "post",
                //         body: nuevoChat
                //     });
                //     let respuesta1 = await peticion1.text();

                //     window.location.href = "./otro_usuario.php"
                // }

                let peticion2 = await fetch("../php/usuario.php");
                let respuesta2 = await peticion2.text();

                let nombreUsuarioMensaje = new FormData();
                nombreUsuarioMensaje.append("usuario", datos[0]);

                let peticionDatosUsuarioMensaje = await fetch("../php/datos_usuario_mensajes.php", {

                    method: "post",
                    body: nombreUsuarioMensaje
                });
                let datosUsuarioMensaje = await peticionDatosUsuarioMensaje.json();

                let idUsuarioMensajes = new FormData();
                idUsuarioMensajes.append("id", datosUsuarioMensaje[2]);

                let peticionFotoUsuarioMensaje = await fetch("../php/foto_usuario_mensajes.php", {

                    method: "post",
                    body: idUsuarioMensajes
                })
                let fotoUsuarioMensajes = await peticionFotoUsuarioMensaje.text();

                crearMensaje(respuesta2, datosUsuarioMensaje[0], datosUsuarioMensaje[1], fotoUsuarioMensajes);
            })
        }
    }
}

usuariosMensaje();

function limpiarCadena(cadena){

    let cadenaLimpia = cadena.trim();
    cadenaLimpia = cadenaLimpia.toLowerCase();
    cadenaLimpia = cadenaLimpia.replace(/<\/?[^>]+(>|$)/g, "");
    cadenaLimpia = cadenaLimpia.replace("select", "");
    cadenaLimpia = cadenaLimpia.replace("update", "");
    cadenaLimpia = cadenaLimpia.replace("delete", "");
    cadenaLimpia = cadenaLimpia.replace("insert", "");
    cadenaLimpia = cadenaLimpia.trim();

    return cadenaLimpia;
}

function busquedaUsuario(){


    let search = document.querySelector(".search");

    search.addEventListener("input", async () => {

        let busqueda = search.value;

        busqueda = limpiarCadena(busqueda);
        busqueda = busqueda.replaceAll(" ", "");

        if(busqueda != ""){

            let buscar = new FormData();

            buscar.append("busca", busqueda);

            let peticion = await fetch("../php/buscar_usuarios.php", {

                method: "post",
                body: buscar
            })
            let respuesta = await peticion.json();

            if(respuesta[0] != "No existe ese usuario"){

                let containerBusqueda = document.querySelector(".container-busqueda");
                let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }

                console.log(containerBusqueda);

                for(let datos of respuesta){

                    let divUsuario = document.createElement("div");
                    let divImg = document.createElement("div");
                    let img = document.createElement("img");
                    let divDatos = document.createElement("div");
                    let pUsuario = document.createElement("p");
                    let pNombre = document.createElement("p");

                    divUsuario.classList.add("container-usuarios");

                    divImg.appendChild(img);
                    img.setAttribute("src", "../img/perfil/"+datos[2]);

                    divUsuario.appendChild(divImg);

                    divDatos.appendChild(pUsuario);
                    divDatos.appendChild(pNombre);

                    pUsuario.innerHTML = datos[0];
                    pNombre.innerHTML = datos[1];

                    divUsuario.appendChild(divDatos);

                    containerBusqueda.appendChild(divUsuario);

                    divUsuario.addEventListener("click", async () => {

                        let peticion2 = await fetch("../php/usuario.php");
                        let respuesta2 = await peticion2.text();

                        if(respuesta2 == datos[0]){

                            window.location.href = "./perfil.php";
                        }
                        else{

                            let otroUsuario = new FormData();
                            otroUsuario.append("nombreUsuario", datos[0]);

                            let peticion1 = await fetch("../php/agregar_otro_usuario.php", {

                                method: "post",
                                body: otroUsuario
                            });
                            let respuesta1 = await peticion1.text();

                            window.location.href = "./otro_usuario.php"
                        }
                    })

                    console.log(`Usuario: ${datos[0]} Nombre: ${datos[1]} Foto: ${datos[2]}`);
                }
            }
            else{

                let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }
            }
        }
        else{

            let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }
        }
    })
}

busquedaUsuario();

function buscarUsuarioChat(){

    let boton = document.querySelector(".boton");
    let buscarUsuario = document.querySelector(".buscar-usuarios-chat");

    boton.addEventListener("click", () => {

        buscarUsuario.style.display = "flex";
    })
}

buscarUsuarioChat();

function cancelarMensaje(){

    let x = document.querySelector(".x");
    let buscarUsuario = document.querySelector(".buscar-usuarios-chat");

    x.addEventListener("click", () => {

        buscarUsuario.style.display = "none";
    })
}

cancelarMensaje();

function busquedaUsuarioChat(){


    let search = document.querySelector("#buscarusuarios");

    search.addEventListener("input", async () => {

        let busqueda = search.value;

        busqueda = limpiarCadena(busqueda);
        busqueda = busqueda.replaceAll(" ", "");

        if(busqueda != ""){

            let buscar = new FormData();

            buscar.append("busca", busqueda);

            let peticion = await fetch("../php/buscar_usuarios.php", {

                method: "post",
                body: buscar
            })
            let respuesta = await peticion.json();

            if(respuesta[0] != "No existe ese usuario"){

                let containerBusqueda = document.querySelector(".caja-usuarios");
                let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }

                console.log(containerBusqueda);

                let peticion2 = await fetch("../php/usuario.php");
                let respuesta2 = await peticion2.text();

                for(let datos of respuesta){

                    if(datos[0] != respuesta2){

                        let divUsuario = document.createElement("div");
                        let divImg = document.createElement("div");
                        let img = document.createElement("img");
                        let divDatos = document.createElement("div");
                        let pUsuario = document.createElement("p");
                        let pNombre = document.createElement("p");

                        divUsuario.classList.add("container-usuarios");

                        divImg.appendChild(img);
                        img.setAttribute("src", "../img/perfil/"+datos[2]);

                        divUsuario.appendChild(divImg);

                        divDatos.appendChild(pUsuario);
                        divDatos.appendChild(pNombre);

                        pUsuario.innerHTML = datos[0];
                        pNombre.innerHTML = datos[1];

                        divUsuario.appendChild(divDatos);

                        containerBusqueda.appendChild(divUsuario);

                        divUsuario.addEventListener("click", async () => {

                            // let peticion2 = await fetch("../php/usuario.php");
                            // let respuesta2 = await peticion2.text();

                            // if(respuesta2 == datos[0]){

                            //     window.location.href = "./perfil.php";
                            // }
                            // else{

                            //     let nuevoChat = new FormData();
                            //     nuevoChat.append("nombreUsuario", datos[0]);

                            //     let peticion1 = await fetch("../php/agregar_otro_usuario.php", {

                            //         method: "post",
                            //         body: nuevoChat
                            //     });
                            //     let respuesta1 = await peticion1.text();

                            //     window.location.href = "./otro_usuario.php"
                            // }

                            let nombreUsuarioMensaje = new FormData();
                            nombreUsuarioMensaje.append("usuario", datos[0]);

                            let peticionDatosUsuarioMensaje = await fetch("../php/datos_usuario_mensajes.php", {

                                method: "post",
                                body: nombreUsuarioMensaje
                            });
                            let datosUsuarioMensaje = await peticionDatosUsuarioMensaje.json();

                            let idUsuarioMensajes = new FormData();
                            idUsuarioMensajes.append("id", datosUsuarioMensaje[2]);

                            let peticionFotoUsuarioMensaje = await fetch("../php/foto_usuario_mensajes.php", {

                                method: "post",
                                body: idUsuarioMensajes
                            })
                            let fotoUsuarioMensajes = await peticionFotoUsuarioMensaje.text();

                            crearMensaje(respuesta2, datosUsuarioMensaje[0], datosUsuarioMensaje[1], fotoUsuarioMensajes);
                        })
                    }
                }
            }
            else{

                let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }
            }
        }
        else{

            let containerUsuarios = document.querySelectorAll(".container-usuarios");

                for(let hijo of containerUsuarios){

                    hijo.remove();
                }
        }
    })
}

busquedaUsuarioChat();

async function enviarMensaje(usuario, usuarioMensaje){

    let mensaje = document.querySelector("#mensaje");
    let submit = document.querySelector("#enviar");

    console.log(usuario, usuarioMensaje);

    mensaje.addEventListener("input", () => {

        if(mensaje.value != ""){

            submit.style.display = "inline";
        }
        else{

            submit.style.display = "none";
        }
    })

    let formulario = document.querySelector("#formularioMensaje");

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        let dbMensaje = new FormData(formulario);
        dbMensaje.append("envia", usuario);
        dbMensaje.append("recibe", usuarioMensaje);

        let enviarMensajeTexto = await fetch("../php/enviar_mensaje.php", {

            method: "post",
            body: dbMensaje
        });
        let mensajeEnviado = await enviarMensajeTexto.text();

        mensaje.value = "";
        submit.style.display = "none";

        let existeVerMensajes = document.querySelector(".ver-mensajes");
        existeVerMensajes.remove();

        pedirMensajes(usuario, usuarioMensaje);
        usuariosMensaje();
    })
}

function scrollHaciaAbajo(){

    let scroll = document.querySelector(".caja-mensaje-usuarios");

    scroll.scrollTop = scroll.scrollHeight;
}

async function pedirMensajes(usuario, usuarioMensaje){

    let datosUsuariosMensajes = new FormData();
    datosUsuariosMensajes.append("usuario", usuario);
    datosUsuariosMensajes.append("usuarioMensaje", usuarioMensaje);
    let divVerMensajes = document.createElement("div");
    divVerMensajes.classList.add("ver-mensajes");
    let divCajaMensajeUsuarios = document.querySelector(".caja-mensaje-usuarios");

    let peticionMensajes = await fetch("../php/pedir_mensajes.php", {

        method: "post",
        body: datosUsuariosMensajes
    });
    let mensajes = await peticionMensajes.json();

    let mensajesOrdenados = [];
    let existenLosMensajes = true;

    if(mensajes[0] == 0 && mensajes[1] == 0){

        existenLosMensajes = false;
        console.log("no hay mensajes");
    }

    else if(mensajes[0] == 0 && mensajes[1] != 0){

        for(let msg of mensajes[1]){

            mensajesOrdenados.push(msg);
        }

        console.log("solo mensaje1 existe");
    }
    else if(mensajes[1] == 0 && mensajes[0] != 0){

        for(let msg of mensajes[0]){

            mensajesOrdenados.push(msg);
        }

        console.log("solo mensaje0 existe");
    }
    else{

        let tamanio1;
        let tamanio2;

        if(mensajes[0].length-1 < mensajes[1].length-1){

            tamanio2 = mensajes[1].length-1;
            tamanio1 = mensajes[0].length-1;

            let contadorJ = 0;
            let restoj = 0;

            for(let i = 0; i <= tamanio2; i++){

                if(restoj <= tamanio1){
                    
                    for(let j = contadorJ; j <= tamanio1; j++){
        
                        if(mensajes[1][i][0] < mensajes[0][j][0]){
        
                            contadorJ = j;
                            restoj = j;
                            break;
                        }
                        else if(mensajes[1][i][0] > mensajes[0][j][0]){
        
                            mensajesOrdenados.push(mensajes[0][j]);
                            console.log(mensajesOrdenados);
                            restoj = j+1;
                        }
                    }
                }
    
                mensajesOrdenados.push(mensajes[1][i]);
    
                if(i+1 > tamanio2 && restoj <= tamanio1){
    
                    for(let f = restoj; f <= tamanio1; f++){
    
                        mensajesOrdenados.push(mensajes[0][f]);
                    }
                }
            }
        }
        else{

            tamanio1 = mensajes[1].length-1;
            tamanio2 = mensajes[0].length-1;

            let contadorJ = 0;
            let restoj = 0;

            for(let i = 0; i <= tamanio2; i++){

                if(restoj <= tamanio1){
                    for(let j = contadorJ; j <= tamanio1; j++){
        
                        if(mensajes[0][i][0] < mensajes[1][j][0]){
        
                            contadorJ = j;
                            restoj = j;
                            break;
                        }
                        else if(mensajes[0][i][0] > mensajes[1][j][0]){
        
                            mensajesOrdenados.push(mensajes[1][j]);
                            restoj = j+1;
                        }
                    }
                }  
    
                mensajesOrdenados.push(mensajes[0][i]);
    
                if(i+1 > tamanio2 && restoj <= tamanio1){
    
                    for(let f = restoj; f <= tamanio1; f++){
    
                        mensajesOrdenados.push(mensajes[1][f]);
                    }
                }
            }

            console.log("ambos mensajes existen");
        }
    }

    if(existenLosMensajes){

        console.log("ingresando los mensajes porque existe al menos 1 mensaje");

        for(let msg of mensajesOrdenados){

            let pMensaje = document.createElement("p");

            pMensaje.innerHTML = msg[2];

            if(msg[1] == usuario){

                pMensaje.classList.add("mensaje-enviado");
            }
            else{

                pMensaje.classList.add("mensaje-recibido");
            }

            divVerMensajes.prepend(pMensaje);
        }
    }

    divCajaMensajeUsuarios.appendChild(divVerMensajes);
    scrollHaciaAbajo();
}

async function crearMensaje(usuario, nombreMensaje, usuarioMensaje, foto){

    let containerMensajes = document.querySelector(".container-mensajes");
    let buscarUsuariosChat = document.querySelector(".buscar-usuarios-chat");

    if(containerMensajes.children[2] != undefined){

        containerMensajes.children[2].remove();
    }

    buscarUsuariosChat.style.display = "none";

    let divCajaMensajes = document.createElement("div");
    divCajaMensajes.classList.add("caja-mensajes");
    let divHeaderMensajes = document.createElement("div");
    divHeaderMensajes.classList.add("header-mensajes");
    let divHeaderMensajes0 = document.createElement("div");
    divHeaderMensajes0.classList.add("header-div");
    let divHeaderMensajes1 = document.createElement("div");
    let divHeaderMensajes2 = document.createElement("div");
    let divHeaderMensajes3 = document.createElement("div");
    divHeaderMensajes3.classList.add("header-mensajes-actualizar");
    let imgHeaderMensajes1 = document.createElement("img");
    let imgHeaderMensajes = document.createElement("img");
    let spanHeaderMensajes = document.createElement("span");
    let divCajaMensajeUsuarios = document.createElement("div");
    divCajaMensajeUsuarios.classList.add("caja-mensaje-usuarios");
    let divPerfilChat = document.createElement("div");
    divPerfilChat.classList.add("perfil-chat");
    let divPerfilChat1 = document.createElement("div");
    let divPerfilChat2 = document.createElement("div");
    let divPerfilChat3 = document.createElement("div");
    let imgPerfilChat = document.createElement("img");
    let pPerfilChat1 = document.createElement("p");
    let pPerfilChat2 = document.createElement("p");
    let aPerfilChat = document.createElement("a");
    aPerfilChat.innerHTML = "Ver perfil";
    //let divVerMensajes = document.createElement("div");
    //divVerMensajes.classList.add("ver-mensajes");
    let divMensajeTexto = document.createElement("div");
    divMensajeTexto.classList.add("mensaje-texto");
    let formMensajeTexto = document.createElement("form");
    formMensajeTexto.id = "formularioMensaje";
    let inputMensajeTexto1 = document.createElement("input");
    inputMensajeTexto1.setAttribute("type", "text");
    inputMensajeTexto1.setAttribute("name", "mensaje");
    inputMensajeTexto1.id = "mensaje";
    inputMensajeTexto1.setAttribute("placeholder", "Envía un mensaje...");
    inputMensajeTexto1.setAttribute("autocomplete", "off");
    inputMensajeTexto1.setAttribute("required", true);
    let inputMensajeTexto2 = document.createElement("input");
    inputMensajeTexto2.setAttribute("type", "submit");
    inputMensajeTexto2.setAttribute("value", "Enviar");
    inputMensajeTexto2.id = "enviar";

    // let datosUsuariosMensajes = new FormData();
    // datosUsuariosMensajes.append("usuario", usuario);
    // datosUsuariosMensajes.append("usuarioMensaje", usuarioMensaje);

    // let peticionMensajes = await fetch("../php/pedir_mensajes.php", {

    //     method: "post",
    //     body: datosUsuariosMensajes
    // });
    // let mensajes = await peticionMensajes.json();

    //Header Mensajes
    divHeaderMensajes0.appendChild(divHeaderMensajes1);
    divHeaderMensajes0.appendChild(divHeaderMensajes2);
    divHeaderMensajes.appendChild(divHeaderMensajes0);
    divHeaderMensajes.appendChild(divHeaderMensajes3);
    divHeaderMensajes1.appendChild(imgHeaderMensajes);
    imgHeaderMensajes.setAttribute("src", "../img/perfil/"+foto);
    divHeaderMensajes2.appendChild(spanHeaderMensajes);
    spanHeaderMensajes.innerHTML = nombreMensaje;
    divHeaderMensajes3.appendChild(imgHeaderMensajes1);
    imgHeaderMensajes1.setAttribute("src", "../img/actualizar.png");
    divHeaderMensajes0.addEventListener("click", async () => {

        if(usuario == usuarioMensaje){

            window.location.href = "./perfil.php";
        }
        else{

            let otroUsuario = new FormData();
            otroUsuario.append("nombreUsuario", usuarioMensaje);

            let peticion1 = await fetch("../php/agregar_otro_usuario.php", {

                method: "post",
                body: otroUsuario
            });
            let respuesta1 = await peticion1.text();

            window.location.href = "./otro_usuario.php"
        }
    })


    //Perfil chat
    divPerfilChat.appendChild(divPerfilChat1);
    divPerfilChat.appendChild(divPerfilChat2);
    divPerfilChat.appendChild(divPerfilChat3);
    divPerfilChat1.appendChild(imgPerfilChat);
    imgPerfilChat.setAttribute("src", "../img/perfil/"+foto);
    divPerfilChat2.appendChild(pPerfilChat1);
    pPerfilChat1.innerHTML = nombreMensaje;
    divPerfilChat2.appendChild(pPerfilChat2);
    pPerfilChat2.innerHTML = usuarioMensaje;
    divPerfilChat3.appendChild(aPerfilChat);
    aPerfilChat.addEventListener("click", async () => {

        if(usuario == usuarioMensaje){

            window.location.href = "./perfil.php";
        }
        else{

            let otroUsuario = new FormData();
            otroUsuario.append("nombreUsuario", usuarioMensaje);

            let peticion1 = await fetch("../php/agregar_otro_usuario.php", {

                method: "post",
                body: otroUsuario
            });
            let respuesta1 = await peticion1.text();

            window.location.href = "./otro_usuario.php"
        }
    })

    // if(mensajes[0] == 0){

    //     console.log("No hay mensajes");
    // }
    // else{

    //     for(let msg of mensajes){

    //         let pMensaje = document.createElement("p");

    //         pMensaje.innerHTML = msg[3];

    //         divVerMensajes.appendChild(pMensaje);
    //     }
    // }

    divCajaMensajeUsuarios.appendChild(divPerfilChat);
    //divCajaMensajeUsuarios.appendChild(divVerMensajes);

    divMensajeTexto.appendChild(formMensajeTexto);
    formMensajeTexto.appendChild(inputMensajeTexto1);
    formMensajeTexto.appendChild(inputMensajeTexto2);

    divCajaMensajes.appendChild(divHeaderMensajes);
    divCajaMensajes.appendChild(divCajaMensajeUsuarios);
    divCajaMensajes.appendChild(divMensajeTexto);

    containerMensajes.children[1].style.display = "none";
    containerMensajes.appendChild(divCajaMensajes);

    await pedirMensajes(usuario, usuarioMensaje);

    await enviarMensaje(usuario, usuarioMensaje);

    actualizarMensajes(usuario, usuarioMensaje);
}

function actualizarMensajes(usuario, usuarioMensaje){

    let divActualizar = document.querySelector(".header-mensajes-actualizar");

    divActualizar.addEventListener("click", () => {


        let existeVerMensajes = document.querySelector(".ver-mensajes");
        existeVerMensajes.remove();

        pedirMensajes(usuario, usuarioMensaje);
    });
}

function botonNuevoMensaje(){

    let divNuevoMensaje = document.querySelector(".nuevo-mensaje");

    divNuevoMensaje.addEventListener("click", () => {

    let buscarUsuario = document.querySelector(".buscar-usuarios-chat");


        buscarUsuario.style.display = "flex";
    })
}

botonNuevoMensaje();

function cerrarSesion(){

    //let sesion = document.querySelector(".cerrar-sesion");
    let sesion = document.querySelector(".boton-cerrar-sesion");

    sesion.addEventListener("click", () => {

        window.location.href = "../php/cerrar_sesion.php";
    })
}

cerrarSesion();