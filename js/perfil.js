function cargando() {

    let body = document.querySelector("body");

    let containerHome = body.children[1];
    let cargando = body.children[0];

    setTimeout(() => {

        containerHome.remove();

        setTimeout(() => {

            cargando.remove();
            containerHome.style.display = "block";
            body.style.backgroundColor = "black";
            body.prepend(containerHome);     
            pedirPublicaciones();           
        }, 1000);
    });
}

cargando();

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
    });

    reels.addEventListener("click", () => { 

        window.location.href = "./reels.php";
    })

    mensajes.addEventListener("click", () => {

        window.location.href = "./mensajes.php";
    })
    // let containerExplorar = document.createElement("div");
    // let container = document.querySelector(".container");

    // explorar.addEventListener("click", () => {

    //     if(!(containerExplorar.children[0])){

    //         let containerPerfil = document.querySelector(".container-perfil-principal");
    //         containerPerfil.remove();

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

            window.location.href = "./perfil.php";
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

function foto(){

    let foto = document.querySelector(".foto-perfil");
    let cancelar = document.querySelector(".cancelar");
    let cambiarFoto = document.querySelector(".cambiar-foto");
    let subir = document.querySelector(".subir");
    let file = document.querySelector(".file");
    let formulario = document.querySelector("#formulario");
    let eliminarFoto = document.querySelector(".eliminar");
    let ancho = window.innerWidth;

    foto.addEventListener("click", () => {

        cambiarFoto.style.width = `${ancho}px`;
        cambiarFoto.style.display = "flex";
    });

    cancelar.addEventListener("click", () => {

        cambiarFoto.style.display = "none";
    });

    subir.addEventListener("click", () => {

        file.click();
    });

    file.addEventListener("change", (e) => {

        e.preventDefault();

        cambiarFoto.style.display = "none";

        let datos = new FormData(formulario);

        fetch("../php/agregar_foto.php", {

            method: "post",
            body: datos
        })
        .then((response) => {

            return response.text();
        })
        .then((texto) => {

            window.location.href = "./perfil.php";
        })
    });

    eliminarFoto.addEventListener("click", () => {

        let datos = new FormData();

        datos.append("eliminar", "si");

        fetch("../php/eliminar_foto.php", {

            method: "post", 
            body: datos
        })
        .then((response) => {

            return response.text();
        })
        .then((texto) => {

            if(texto == "hecho"){
            
                window.location.href = "./perfil.php";
            }
        })
    });
}

foto();

async function pedirMeGustas(id){

    let idPublicacion = new FormData();

    idPublicacion.append("idPublicacion", id);

    let peticion = await fetch("../php/pedir_megustas.php", {

        method: "post",
        body: idPublicacion
    });
    let respuesta = await peticion.text();

    return respuesta;
}

async function cargarPublicaciones(array){

    let publicacionePerfil = document.querySelector(".publicaciones-perfil");
    let seguidores = document.querySelector(".seguidores");
    let cantidad = array.length;

    if(cantidad == 1){

        seguidores.innerHTML = `${cantidad} Publicacion`; 
    }
    else{

        seguidores.innerHTML = `${cantidad} Publicaciones`; 
    }

    for(let nombreImg of array){

        let div = document.createElement("div");
        let divMeGusta = document.createElement("div");
        let divCorazon = document.createElement("div");
        let divCantidad = document.createElement("div");
        let imgCorazon = document.createElement("img");
        let spanCantidad = document.createElement("span");

        if((nombreImg[0].indexOf(".mp4")) < 0){

            div.style.backgroundImage = "url('../img/publicaciones/"+`${nombreImg[0]}`+"')";
        }
        else{

            let video = document.createElement("video");
            let source = document.createElement("source");
            let poster = document.createElement("img");
            let canvas = document.createElement("canvas");
            source.setAttribute("src", "../img/publicaciones/"+nombreImg[0]);
            video.appendChild(source);
            video.style.width = "100%";
            video.style.height = "100%";
            // div.classList.add("box-megusta");
            // div.classList.add("box-publicacion2");

            div.appendChild(video);
        }

        div.classList.add("box-publicacion3");
        divMeGusta.classList.add("me-gusta");

        div.prepend(divMeGusta);
        divMeGusta.appendChild(divCorazon);
        divMeGusta.appendChild(divCantidad);
        divCorazon.appendChild(imgCorazon);
        divCorazon.classList.add("box-cantidad");
        divCantidad.appendChild(spanCantidad);

        imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
        imgCorazon.id = `${nombreImg[1]}`;

        spanCantidad.classList.add("cantidad"+`${nombreImg[1]}`);

        let meGustas = await pedirMeGustas(nombreImg[1]);
        
        spanCantidad.innerHTML = `${meGustas}`;

        // let img = document.createElement("img");

        // img.setAttribute("src", "../img/publicaciones/"+nombreImg);
        // div.appendChild(img);
        
        publicacionePerfil.prepend(div);
    }
    meGustaHover();
    agregarMeGusta();
}

function pedirPublicaciones(){

    fetch("../php/cargar_publicaciones_perfil.php")
    .then((response) => {

        return response.json();
    })
    .then((datos) => {

        cargarPublicaciones(datos);
    })
}

function meGustaHover(){

    let publicacionesPerfil = document.querySelector(".publicaciones-perfil");
    let boxPublicaciones = document.querySelectorAll(".box-publicacion3");
    let meGusta = document.querySelectorAll(".me-gusta");


    for(let publicacion of boxPublicaciones){

        publicacion.addEventListener("mouseenter", () => {

            publicacion.children[0].style.display = "flex";

            if(publicacion.children[1] != undefined){

                publicacion.children[1].style.display = "none";
            }
        })

        publicacion.addEventListener("mouseleave", () => {

            publicacion.children[0].style.display = "none";

            if(publicacion.children[1] != undefined){

                publicacion.children[1].style.display = "flex";
            }
        })
    }


    // publicacionesPerfil.addEventListener("mouseenter", () => {

    //     meGusta.style.display = "flex";
    // })

    // publicacionesPerfil.addEventListener("mouseleave", () => {

    //     meGusta.style.display = "none";
    // })
}

function actualizarMeGusta(id){

    let idPublicacion = new FormData();

    idPublicacion.append("idPublicacion", id);

    fetch("../php/pedir_megustas.php", {

        method: "post",
        body: idPublicacion
    })
    .then((response) => {

        return response.text();
    })
    .then((dato) => {

        let claseCantidad = document.querySelector(`.cantidad${id}`);
    
        claseCantidad.innerHTML = `${dato}`;
    })
}

function agregarMeGusta(){

    let boxCantidad = document.querySelectorAll(".box-cantidad");

    for(let valor of boxCantidad){

        valor.addEventListener("click", () => {

            let idChildren = valor.children[0].id;

            let id = new FormData();
            id.append("id", idChildren);

            fetch("../php/me_gustas.php", {

                method: "post",
                body: id
            })
            .then((response) => {

                return response.text();
            })
            .then((dato) => {

                actualizarMeGusta(idChildren);
            })
        })
    }
}



function seguidoos(){

    let headerPerfil2 = document.querySelector(".header-perfil2");
    let seguidos = headerPerfil2.children[2];

    seguidos.style.cursor = "pointer";

    fetch("../php/seguidos_perfil.php")
    .then((response) => {

        return response.text();
    })
    .then((dato) => {

        if(dato == 1){

            seguidos.innerHTML = `${dato} seguido`;
        }
        else{

            seguidos.innerHTML = `${dato} seguidos`;
        }
    })
}

seguidoos();

function seguidores(){

    let headerPerfil2 = document.querySelector(".header-perfil2");
    let seguidores = headerPerfil2.children[1];

    seguidores.style.cursor = "pointer";

    fetch("../php/seguidores_perfil.php")
    .then((response) => {

        return response.text();
    })
    .then((dato) => {

        if(dato == 1){

            seguidores.innerHTML = `${dato} seguidor`;
        }
        else{

            seguidores.innerHTML = `${dato} seguidores`;
        }
    })
}

seguidores(); 

function cargarSeguidores(){

    let body = document.querySelector("body");
    let headerPerfil2 = document.querySelector(".header-perfil2");
    let seguidores = headerPerfil2.children[1];

    seguidores.addEventListener("click", async () => {

        let containerMenu = document.createElement("div");
        containerMenu.classList.add("seguidores-cargar");
        let boxMenu = document.createElement("div");
        boxMenu.classList.add("seguidores-box")
        let encabezado = document.createElement("div");
        encabezado.classList.add("encabezado-seguidores");
        let h2 = document.createElement("h2");
        h2.innerHTML = "Seguidores";
        let x = document.createElement("p");
        x.innerHTML = "X";
        x.classList.add("cancelar-seguidores");

        let peticion = await fetch("../php/mostrar_seguidores_perfil.php");
        let respuesta = await peticion.json();

        if(respuesta[0] != "No tiene seguidores"){

            let peticion1 = await fetch("../php/usuario.php");
            let respuesta1 = await peticion1.text();

            let meSigue = [];

            for(let datos of respuesta){

                meSigue.push(datos[1]);
            }

            meSigue = JSON.stringify(meSigue);

            let datos = new FormData();

            datos.append("usuario", meSigue);

            let peticion2 = await fetch("../php/seguidores_seguir.php", {

                method: "post",
                body: datos
            })
            let respuesta2 = await peticion2.json();

            console.log(respuesta2);

            let tamanio = respuesta.length;

            for(let i = 0; i < tamanio; i++){

                respuesta[i].push(respuesta2[i]);
            }

            console.log(respuesta);

            for(let usuario of respuesta){

                let seguidorContainer = document.createElement("div");
                let divImg = document.createElement("div");
                divImg.classList.add("seguidor-img");
                let img = document.createElement("img");
                let divDatos = document.createElement("div");
                let pUsuario = document.createElement("p");
                let pNombre = document.createElement("p");
                
                divDatos.classList.add("seguidores-datos");
                seguidorContainer.classList.add("seguidorContainer");

                divImg.appendChild(img);
                img.setAttribute("src", "../img/perfil/"+usuario[2]);

                divDatos.appendChild(pUsuario);
                divDatos.appendChild(pNombre);
                pUsuario.innerHTML = usuario[1];
                pNombre.innerHTML = usuario[0];

                seguidorContainer.appendChild(divImg);
                seguidorContainer.appendChild(divDatos);

                if(!(usuario[1] == respuesta1)){

                        let divBoton = document.createElement("div");
                        let boton = document.createElement("button");

                        divBoton.classList.add("seguidores-boton");

                        boton.addEventListener("click", async () => {

                            let milisegundos = Date.now();
                            let segundos = milisegundos/1000;
                            let minutos = segundos/60;
                            let horas = minutos/60;
                            let dias = parseInt(horas/24);

                            let datos = new FormData();
 
                            datos.append("fecha", dias);
                            datos.append("usuario", usuario[1]);

                            let peticion = await fetch("../php/agregar_seguir_otrousuario.php", {

                                method: "post",
                                body: datos
                            })
                            let respuesta = await peticion.text();
                            
                            respuesta == 1 ? boton.innerHTML = "siguiendo" : boton.innerHTML = "seguir";

                            divBoton.appendChild(boton);
                            seguidorContainer.appendChild(divBoton);

                            seguidoos();
                        })

                        usuario[3] == 1 ? boton.innerHTML = "siguiendo" : boton.innerHTML = "seguir";

                        divBoton.appendChild(boton);
                        seguidorContainer.appendChild(divBoton);
                    
                }

                boxMenu.appendChild(seguidorContainer);

                divImg.addEventListener("click", async () => {

                    if(respuesta1 == usuario[1]){

                        window.location.href = "./perfil.php";
                    }
                    else{

                        let nombreUsuario = new FormData();
                        nombreUsuario.append("nombreUsuario", usuario[1]);

                        let peticion3 = await fetch("../php/agregar_otro_usuario.php", {

                            method: "post",
                            body: nombreUsuario
                        });
                        let respuesta3 = await peticion3.text();

                        window.location.href = "./otro_usuario.php";
                    }
                })

                divDatos.addEventListener("click", async () => {

                    if(respuesta1 == usuario[1]){

                        window.location.href = "./perfil.php";
                    }
                    else{

                        let nombreUsuario = new FormData();
                        nombreUsuario.append("nombreUsuario", usuario[1]);

                        let peticion3 = await fetch("../php/agregar_otro_usuario.php", {

                            method: "post",
                            body: nombreUsuario
                        });
                        let respuesta3 = await peticion3.text();

                        window.location.href = "./otro_usuario.php";
                    }
                })
            }
        }

        encabezado.appendChild(h2);
        encabezado.appendChild(x);
        boxMenu.prepend(encabezado);
        containerMenu.appendChild(boxMenu);
        body.appendChild(containerMenu);

        x.addEventListener("click", () => {

            containerMenu.remove();
        })
    })
}

cargarSeguidores();

function cargarSeguidos(){

    let body = document.querySelector("body");
    let headerPerfil2 = document.querySelector(".header-perfil2");
    let seguidos = headerPerfil2.children[2];

    seguidos.addEventListener("click", async () => {

        let containerMenu = document.createElement("div");
        containerMenu.classList.add("seguidores-cargar");
        let boxMenu = document.createElement("div");
        boxMenu.classList.add("seguidores-box")
        let encabezado = document.createElement("div");
        encabezado.classList.add("encabezado-seguidores");
        let h2 = document.createElement("h2");
        h2.innerHTML = "Seguidos";
        let x = document.createElement("p");
        x.innerHTML = "X";
        x.classList.add("cancelar-seguidores");

        let peticion = await fetch("../php/mostrar_seguidos_perfil.php");
        let respuesta = await peticion.json();

        if(respuesta[0] != "No sigue a nadie"){

            let peticion1 = await fetch("../php/usuario.php");
            let respuesta1 = await peticion1.text();

            let meSigue = [];

            for(let datos of respuesta){

                meSigue.push(datos[1]);
            }

            meSigue = JSON.stringify(meSigue);

            let datos = new FormData();

            datos.append("usuario", meSigue);

            let peticion2 = await fetch("../php/seguidores_seguir.php", {

                method: "post",
                body: datos
            })
            let respuesta2 = await peticion2.json();

            console.log(respuesta2);

            let tamanio = respuesta.length;

            for(let i = 0; i < tamanio; i++){

                respuesta[i].push(respuesta2[i]);
            }

            console.log(respuesta);

            for(let usuario of respuesta){

                let seguidorContainer = document.createElement("div");
                let divImg = document.createElement("div");
                divImg.classList.add("seguidor-img");
                let img = document.createElement("img");
                let divDatos = document.createElement("div");
                let pUsuario = document.createElement("p");
                let pNombre = document.createElement("p");
                
                divDatos.classList.add("seguidores-datos");
                seguidorContainer.classList.add("seguidorContainer");

                divImg.appendChild(img);
                img.setAttribute("src", "../img/perfil/"+usuario[2]);

                divDatos.appendChild(pUsuario);
                divDatos.appendChild(pNombre);
                pUsuario.innerHTML = usuario[1];
                pNombre.innerHTML = usuario[0];

                seguidorContainer.appendChild(divImg);
                seguidorContainer.appendChild(divDatos);

                if(!(usuario[1] == respuesta1)){

                        let divBoton = document.createElement("div");
                        let boton = document.createElement("button");

                        divBoton.classList.add("seguidores-boton");

                        boton.addEventListener("click", async () => {

                            let milisegundos = Date.now();
                            let segundos = milisegundos/1000;
                            let minutos = segundos/60;
                            let horas = minutos/60;
                            let dias = parseInt(horas/24);

                            let datos = new FormData();
 
                            datos.append("fecha", dias);
                            datos.append("usuario", usuario[1]);

                            let peticion = await fetch("../php/agregar_seguir_otrousuario.php", {

                                method: "post",
                                body: datos
                            })
                            let respuesta = await peticion.text();
                            
                            respuesta == 1 ? boton.innerHTML = "siguiendo" : boton.innerHTML = "seguir";

                            divBoton.appendChild(boton);
                            seguidorContainer.appendChild(divBoton);

                            seguidoos();
                        })

                        usuario[3] == 1 ? boton.innerHTML = "siguiendo" : boton.innerHTML = "seguir";

                        divBoton.appendChild(boton);
                        seguidorContainer.appendChild(divBoton);
                    
                }

                boxMenu.appendChild(seguidorContainer);

                divImg.addEventListener("click", async () => {

                    if(respuesta1 == usuario[1]){

                        window.location.href = "./perfil.php";
                    }
                    else{

                        let nombreUsuario = new FormData();
                        nombreUsuario.append("nombreUsuario", usuario[1]);

                        let peticion3 = await fetch("../php/agregar_otro_usuario.php", {

                            method: "post",
                            body: nombreUsuario
                        });
                        let respuesta3 = await peticion3.text();

                        window.location.href = "./otro_usuario.php";
                    }
                })

                divDatos.addEventListener("click", async () => {

                    if(respuesta1 == usuario[1]){

                        window.location.href = "./perfil.php";
                    }
                    else{

                        let nombreUsuario = new FormData();
                        nombreUsuario.append("nombreUsuario", usuario[1]);

                        let peticion3 = await fetch("../php/agregar_otro_usuario.php", {

                            method: "post",
                            body: nombreUsuario
                        });
                        let respuesta3 = await peticion3.text();

                        window.location.href = "./otro_usuario.php";
                    }
                })
            }
        }

        encabezado.appendChild(h2);
        encabezado.appendChild(x);
        boxMenu.prepend(encabezado);
        containerMenu.appendChild(boxMenu);
        body.appendChild(containerMenu);

        x.addEventListener("click", () => {

            containerMenu.remove();
        })
    })
}

cargarSeguidos();

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

function cerrarSesion(){

    //let sesion = document.querySelector(".cerrar-sesion");
    let sesion = document.querySelector(".boton-cerrar-sesion");

    sesion.addEventListener("click", () => {

        window.location.href = "../php/cerrar_sesion.php";
    })
}

cerrarSesion();