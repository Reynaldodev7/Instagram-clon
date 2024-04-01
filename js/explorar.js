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

            window.location.href = "./explorar.php";
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

let tamanio;

// async function mostrarPublicaciones(imagenes){


//     let containerExplorar = document.createElement("div");
//     let container = document.querySelector(".container");

//     containerExplorar.classList.add("container-explorar");
//     container.appendChild(containerExplorar);

//     let contador = imagenes.length;
//     let contador2 = 0;

//     tamanio = imagenes.length/5;

//     tamanio = Math.ceil(tamanio);

//     console.log(tamanio);
//     console.log(imagenes);

//     for(let j = 0; j < tamanio; j++){

//         if(j%2 == 0){

//             let derecha = document.createElement("div");
//             derecha.classList.add("derecha");
//             let div1 = document.createElement("div");
//             div1.classList.add("caja-publicacion");
//             let div2 = document.createElement("div");
//             div2.classList.add("caja2-publicacion");

//             for(let i = contador; i <= (contador+3); i++){
            
//                 let meGusta = document.createElement("div");
//                 meGusta.classList.add("me-gusta");

//                 let boxCantidad = document.createElement("div");
//                 boxCantidad.classList.add("box-cantidad");

//                 let imgCorazon = document.createElement("img");
//                 imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
//                 imgCorazon.id = `${imagenes[i][3]}`;

//                 let cantidad = document.createElement("div");

//                 let spanCantidad = document.createElement("span");
//                 spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

//                 let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

//                 spanCantidad.innerHTML = `${meGustaCantidad}`;

//                 meGusta.appendChild(boxCantidad);
//                 boxCantidad.appendChild(imgCorazon)
//                 meGusta.appendChild(cantidad);
//                 cantidad.appendChild(spanCantidad);

//                 let div = document.createElement("div");
//                 div.classList.add("box-megusta");
//                 div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";
                
//                 div.appendChild(meGusta);
//                 div1.appendChild(div);

//                 if(imagenes[contador2+1] == undefined){

//                     break;
//                 }

//                 contador2++;
//             }
//             contador+=4;
//             contador2 = contador;
//             derecha.appendChild(div1);
//             containerExplorar.appendChild(derecha);

//             if(imagenes[contador2] == undefined){

//                 meGustaHover();
//                 agregarMeGusta();
//                 return 0;
//             }

//             for(let i = contador; i <= contador; i++){

//                 let meGusta = document.createElement("div");
//                 meGusta.classList.add("me-gusta");

//                 let boxCantidad = document.createElement("div");
//                 boxCantidad.classList.add("box-cantidad");

//                 let imgCorazon = document.createElement("img");
//                 imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
//                 imgCorazon.id = `${imagenes[i][3]}`;

//                 let cantidad = document.createElement("div");

//                 let spanCantidad = document.createElement("span");
//                 spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

//                 let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

//                 spanCantidad.innerHTML = `${meGustaCantidad}`;

//                 meGusta.appendChild(boxCantidad);
//                 boxCantidad.appendChild(imgCorazon)
//                 meGusta.appendChild(cantidad);
//                 cantidad.appendChild(spanCantidad);

//                 let div = document.createElement("div");
//                 div.classList.add("box-megusta");
//                 div.classList.add("box-publicacion2");
//                 div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

//                 div.appendChild(meGusta);
//                 div2.appendChild(div);
//                 derecha.appendChild(div2);

//                 if(imagenes[contador2+1] == undefined){

//                     meGustaHover();
//                     agregarMeGusta();
//                     return 0;
//                 }

//                 contador2++;
//             }

//             contador+=1;
//             contador2 = contador;
//         }
//         else{

//             let izquierda = document.createElement("div");
//             izquierda.classList.add("izquierda");
//             let div1 = document.createElement("div");
//             div1.classList.add("caja-publicacion");
//             let div2 = document.createElement("div");
//             div2.classList.add("caja2-publicacion");

//             for(let i = contador; i <= (contador+3); i++){

//                 let meGusta = document.createElement("div");
//                 meGusta.classList.add("me-gusta");

//                 let boxCantidad = document.createElement("div");
//                 boxCantidad.classList.add("box-cantidad");

//                 let imgCorazon = document.createElement("img");
//                 imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
//                 imgCorazon.id = `${imagenes[i][3]}`;

//                 let cantidad = document.createElement("div");

//                 let spanCantidad = document.createElement("span");
//                 spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

//                 let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

//                 spanCantidad.innerHTML = `${meGustaCantidad}`;

//                 meGusta.appendChild(boxCantidad);
//                 boxCantidad.appendChild(imgCorazon)
//                 meGusta.appendChild(cantidad);
//                 cantidad.appendChild(spanCantidad);
            
//                 let div = document.createElement("div");
//                 div.classList.add("box-megusta");
//                 div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";
                
//                 div.appendChild(meGusta);
//                 div1.appendChild(div);

//                 if(imagenes[contador2+1] == undefined){

//                     break;
//                 }
//                 contador2++;
//             }
//             contador+=4;
//             contador2 = contador;
//             izquierda.appendChild(div1);
//             containerExplorar.appendChild(izquierda);

//             if(imagenes[contador2] == undefined){

//                 meGustaHover();
//                 agregarMeGusta();
//                 return 0;
//             }

//             for(let i = contador; i <= contador; i++){

//                 let meGusta = document.createElement("div");
//                 meGusta.classList.add("me-gusta");

//                 let boxCantidad = document.createElement("div");
//                 boxCantidad.classList.add("box-cantidad");

//                 let imgCorazon = document.createElement("img");
//                 imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
//                 imgCorazon.id = `${imagenes[i][3]}`;

//                 let cantidad = document.createElement("div");

//                 let spanCantidad = document.createElement("span");
//                 spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

//                 let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

//                 spanCantidad.innerHTML = `${meGustaCantidad}`;

//                 meGusta.appendChild(boxCantidad);
//                 boxCantidad.appendChild(imgCorazon)
//                 meGusta.appendChild(cantidad);
//                 cantidad.appendChild(spanCantidad);

//                 let div = document.createElement("div");
//                 div.classList.add("box-megusta");
//                 div.classList.add("box-publicacion2");
//                 div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

//                 div.appendChild(meGusta);
//                 div2.appendChild(div);
//                 izquierda.appendChild(div2);

//                 if(imagenes[contador2+1] == undefined){

//                     meGustaHover();
//                     agregarMeGusta();
//                     return 0;
//                 }

//                 contador2++;
//             }

//             contador+=1;
//             contador2 = contador;
//         }
//     }
//     meGustaHover();
//     agregarMeGusta();
// }

async function mostrarPublicaciones(imagenes){


    let containerExplorar = document.createElement("div");
    let container = document.querySelector(".container");

    containerExplorar.classList.add("container-explorar");
    container.appendChild(containerExplorar);

    let contador = (imagenes.length)-1;
    let contador2 = (imagenes.length)-1;

    tamanio = imagenes.length/5;

    tamanio = Math.ceil(tamanio);

    console.log(tamanio);
    console.log(imagenes);

    for(let j = 0; j < tamanio; j++){

        if(j%2 == 0){

            let derecha = document.createElement("div");
            derecha.classList.add("derecha");
            let div1 = document.createElement("div");
            div1.classList.add("caja-publicacion");
            let div2 = document.createElement("div");
            div2.classList.add("caja2-publicacion");

            for(let i = contador; i >= (contador-3); i--){
            
                let meGusta = document.createElement("div");
                meGusta.classList.add("me-gusta");

                let boxCantidad = document.createElement("div");
                boxCantidad.classList.add("box-cantidad");

                let imgCorazon = document.createElement("img");
                imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
                imgCorazon.id = `${imagenes[i][3]}`;

                let cantidad = document.createElement("div");

                let spanCantidad = document.createElement("span");
                spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

                let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

                spanCantidad.innerHTML = `${meGustaCantidad}`;

                meGusta.appendChild(boxCantidad);
                boxCantidad.appendChild(imgCorazon)
                meGusta.appendChild(cantidad);
                cantidad.appendChild(spanCantidad);

                if((imagenes[i][0].indexOf(".mp4")) ==  -1){

                    let div = document.createElement("div");
                    div.classList.add("box-megusta");
                    div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                    div.appendChild(meGusta);
                    div1.appendChild(div);
                }
                else{

                    let div = document.createElement("div");
                    let video = document.createElement("video");
                    let source = document.createElement("source");
                    source.setAttribute("src", "../img/publicaciones/"+imagenes[i][0]);
                    video.appendChild(source);
                    video.style.width = "100%";
                    video.style.height = "100%";
                    div.classList.add("box-megusta");
                    div.appendChild(video);

                    div.prepend(meGusta);
                    div1.appendChild(div);
                }

                if(imagenes[contador2-1] == undefined){

                    break;
                }

                contador2--;
            }
            contador-=4;
            contador2 = contador;
            derecha.appendChild(div1);
            containerExplorar.appendChild(derecha);

            if(imagenes[contador2] == undefined){

                meGustaHover();
                agregarMeGusta();
                return 0;
            }

            for(let i = contador; i >= contador; i--){

                let meGusta = document.createElement("div");
                meGusta.classList.add("me-gusta");

                let boxCantidad = document.createElement("div");
                boxCantidad.classList.add("box-cantidad");

                let imgCorazon = document.createElement("img");
                imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
                imgCorazon.id = `${imagenes[i][3]}`;

                let cantidad = document.createElement("div");

                let spanCantidad = document.createElement("span");
                spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

                let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

                spanCantidad.innerHTML = `${meGustaCantidad}`;

                meGusta.appendChild(boxCantidad);
                boxCantidad.appendChild(imgCorazon)
                meGusta.appendChild(cantidad);
                cantidad.appendChild(spanCantidad);

                if((imagenes[i][0].indexOf(".mp4")) ==  -1){

                    let div = document.createElement("div");
                    div.classList.add("box-megusta");
                    div.classList.add("box-publicacion2");
                    div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                    div.appendChild(meGusta);
                    div2.appendChild(div);
                    derecha.appendChild(div2);
                }
                else{

                    let div = document.createElement("div");
                    let video = document.createElement("video");
                    let source = document.createElement("source");
                    source.setAttribute("src", "../img/publicaciones/"+imagenes[i][0]);
                    video.appendChild(source);
                    video.style.width = "100%";
                    video.style.height = "100%";
                    div.classList.add("box-megusta");
                    div.classList.add("box-publicacion2");
                    div.appendChild(video);

                    div.prepend(meGusta);
                    div2.appendChild(div);
                    derecha.appendChild(div2);
                }

                // let div = document.createElement("div");
                // div.classList.add("box-megusta");
                // div.classList.add("box-publicacion2");
                // div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                // div.appendChild(meGusta);
                // div2.appendChild(div);
                // derecha.appendChild(div2);

                if(imagenes[contador2-1] == undefined){

                    meGustaHover();
                    agregarMeGusta();
                    return 0;
                }

                contador2--;
            }

            contador-=1;
            contador2 = contador;
        }
        else{

            let izquierda = document.createElement("div");
            izquierda.classList.add("izquierda");
            let div1 = document.createElement("div");
            div1.classList.add("caja-publicacion");
            let div2 = document.createElement("div");
            div2.classList.add("caja2-publicacion");

            for(let i = contador; i >= (contador-3); i--){

                let meGusta = document.createElement("div");
                meGusta.classList.add("me-gusta");

                let boxCantidad = document.createElement("div");
                boxCantidad.classList.add("box-cantidad");

                let imgCorazon = document.createElement("img");
                imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
                imgCorazon.id = `${imagenes[i][3]}`;

                let cantidad = document.createElement("div");

                let spanCantidad = document.createElement("span");
                spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

                let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

                spanCantidad.innerHTML = `${meGustaCantidad}`;

                meGusta.appendChild(boxCantidad);
                boxCantidad.appendChild(imgCorazon)
                meGusta.appendChild(cantidad);
                cantidad.appendChild(spanCantidad);

                if((imagenes[i][0].indexOf(".mp4")) ==  -1){

                    let div = document.createElement("div");
                    div.classList.add("box-megusta");
                    div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                    div.appendChild(meGusta);
                    div1.appendChild(div);
                }
                else{

                    let div = document.createElement("div");
                    let video = document.createElement("video");
                    let source = document.createElement("source");
                    source.setAttribute("src", "../img/publicaciones/"+imagenes[i][0]);
                    video.appendChild(source);
                    video.style.width = "100%";
                    video.style.height = "100%";
                    div.classList.add("box-megusta");
                    div.appendChild(video);

                    div.prepend(meGusta);
                    div1.appendChild(div);
                }
            
                // let div = document.createElement("div");
                // div.classList.add("box-megusta");
                // div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";
                
                // div.appendChild(meGusta);
                // div1.appendChild(div);

                if(imagenes[contador2-1] == undefined){

                    break;
                }
                contador2--;
            }
            contador-=4;
            contador2 = contador;
            izquierda.appendChild(div1);
            containerExplorar.appendChild(izquierda);

            if(imagenes[contador2] == undefined){

                meGustaHover();
                agregarMeGusta();
                return 0;
            }

            for(let i = contador; i >= contador; i--){

                let meGusta = document.createElement("div");
                meGusta.classList.add("me-gusta");

                let boxCantidad = document.createElement("div");
                boxCantidad.classList.add("box-cantidad");

                let imgCorazon = document.createElement("img");
                imgCorazon.setAttribute("src", "../img/notificaciones.jpg");
                imgCorazon.id = `${imagenes[i][3]}`;

                let cantidad = document.createElement("div");

                let spanCantidad = document.createElement("span");
                spanCantidad.classList.add("cantidad"+`${imagenes[i][3]}`);

                let meGustaCantidad = await pedirMeGustas(imagenes[i][3]);

                spanCantidad.innerHTML = `${meGustaCantidad}`;

                meGusta.appendChild(boxCantidad);
                boxCantidad.appendChild(imgCorazon)
                meGusta.appendChild(cantidad);
                cantidad.appendChild(spanCantidad);

                if((imagenes[i][0].indexOf(".mp4")) ==  -1){

                    let div = document.createElement("div");
                    div.classList.add("box-megusta");
                    div.classList.add("box-publicacion2");
                    div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                    div.appendChild(meGusta);
                    div2.appendChild(div);
                    izquierda.appendChild(div2);
                }
                else{

                    let div = document.createElement("div");
                    let video = document.createElement("video");
                    let source = document.createElement("source");
                    source.setAttribute("src", "../img/publicaciones/"+imagenes[i][0]);
                    video.appendChild(source);
                    video.style.width = "100%";
                    video.style.height = "100%";
                    div.classList.add("box-megusta");
                    div.classList.add("box-publicacion2");
                    div.appendChild(video);

                    div.prepend(meGusta);
                    div2.appendChild(div);
                    izquierda.appendChild(div2);
                }

                // let div = document.createElement("div");
                // div.classList.add("box-megusta");
                // div.classList.add("box-publicacion2");
                // div.style.backgroundImage = "url('../img/publicaciones/"+imagenes[i][0]+"')";

                // div.appendChild(meGusta);
                // div2.appendChild(div);
                // izquierda.appendChild(div2);

                if(imagenes[contador2-1] == undefined){

                    meGustaHover();
                    agregarMeGusta();
                    return 0;
                }

                contador2--;
            }

            contador-=1;
            contador2 = contador;
        }
    }
    meGustaHover();
    agregarMeGusta();
}

function pedirPublicaciones(){


    fetch("../php/cargar_publicaciones.php")
    .then((response) => {

        return response.json();
    })
    .then((datos) => {

        mostrarPublicaciones(datos);
    })
}

pedirPublicaciones();

function meGustaHover(){

    let publicacionesPerfil = document.querySelector(".publicaciones-perfil");
    let boxPublicaciones = document.querySelectorAll(".box-megusta");
    let meGusta = document.querySelectorAll(".me-gusta");

    console.log("hola");

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

                publicacion.children[1].style.display = "block";
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

async function agregarMeGusta(){

    let boxCantidad = document.querySelectorAll(".box-cantidad");

    for(let valor of boxCantidad){ 

        valor.addEventListener("click", async () => {

            let idChildren = valor.children[0].id;

            let id = new FormData();
            id.append("id", idChildren);

            let peticionUsuario = await fetch("../php/pedir_usuario_publicacion.php", {

                method: "post",
                body: id
            })
            let respuestaUsuario = await peticionUsuario.json();

            let milisegundos = Date.now();
            let segundos = milisegundos/1000;
            let minutos = segundos/60;
            let horas = minutos/60;
            let dias = parseInt(horas/24);

            id.append("fecha", dias);
            id.append("publicacion", respuestaUsuario[0][0]);
            id.append("usuario", respuestaUsuario[0][1]);

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

function cerrarSesion(){

    //let sesion = document.querySelector(".cerrar-sesion");
    let sesion = document.querySelector(".boton-cerrar-sesion");

    sesion.addEventListener("click", () => {

        window.location.href = "../php/cerrar_sesion.php";
    })
}

cerrarSesion();