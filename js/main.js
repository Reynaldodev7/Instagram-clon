function cargando() {

    let body = document.querySelector("body");

    let containerHome = body.children[1];
    let cargando = body.children[0];

    setTimeout(() => {

        containerHome.remove();

        setTimeout(() => {

            cargando.remove();
            containerHome.style.display = "block";
            body.prepend(containerHome);                
        }, 1000);
    });
}

cargando();

function linkFacebook(){

    let facebook = document.querySelector(".facebook");

    facebook.addEventListener("click", () => {

        window.location.href = "https://facebook.com";
    });
}

linkFacebook();

function imgCelular(){

    const direccion = "./img/";
    let imgNombres = ["imginstagram1.png", "imginstagram2.png", "imginstagram3.png", "imginstagram4.png"];
    let celulares = document.querySelector(".celulares");
    let imgEtiqueta = celulares.children[2];

    setTimeout(() => {

        imgEtiqueta.setAttribute("src", direccion +imgNombres[0]);

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[1]);
        }, 5000);

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[2]);
        }, 10000)

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[3]);
        }, 15000)
    })

    setInterval(() => {

        imgEtiqueta.setAttribute("src", direccion +imgNombres[0]);

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[1]);
        }, 5000);

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[2]);
        }, 10000)

        setTimeout(() => {

            imgEtiqueta.setAttribute("src", direccion + imgNombres[3]);
        }, 15000)
    }, 20000)
}

imgCelular();

function mostrarContrasena(){

    let input = document.querySelector("#contra");
    let mostrar = document.querySelector(".mostrar");
    let contraMostrar = document.querySelector(".x-contra");

    input.addEventListener("input", (e) => {

        let mostrarValor = e.target.value;

        if(mostrarValor != ""){


            if(window.innerWidth < 325){

                mostrar.style.left = "190px"
            }
            else{

                mostrar.style.left = "240px";
            }

            if(contraMostrar.style.display == "block"){

                contraMostrar.style.display = "none";
            }

            mostrar.style.display = "block";
        }
        else{

            if(window.innerWidth < 325){

                mostrar.style.left = "220px";
            }
            else{

                mostrar.style.left = "270px";
            }

            mostrar.style.display = "none";
        }
    });

    mostrar.addEventListener("click", () => {

        if(input.getAttribute("type") == "password"){

            input.setAttribute("type", "text");
        }
        else{

            input.setAttribute("type", "password");
        }
    })
}

mostrarContrasena();

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

function iniciarSesion(){

    let form = document.querySelector("#formulario");
    
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let datos = new FormData(form);

        let usuario = limpiarCadena(datos.get("usuario"));
        let contra = limpiarCadena(datos.get("contra"));

        datos.set("usuario", usuario);
        datos.set("contra", contra);

        fetch("./php/iniciar_sesion.php", {

            method: "POST",
            body: datos
        })
        .then((response) => {

            return response.text();
        })
        .then((response) => {

            let mostrar = document.querySelector(".mostrar");
            let contraMostrar = document.querySelector(".x-contra");
            let usuarioMostrar = document.querySelector(".x-usuario");

            console.log(response);

            if(response == "ambos"){

                usuarioMostrar.style.display = "block";
                contraMostrar.style.display = "block";
            }
            else{

                response == "usuario" ? usuarioMostrar.style.display = "block" : usuarioMostrar.style.display = "none";
                response == "contra" ? contraMostrar.style.display = "block" : contraMostrar.style.display = "none";
            }

            if(mostrar.style.display == "block" && contraMostrar.style.display == "block"){

                if(window.innerWidth < 325){

                    mostrar.style.left = "160px";
                    contraMostrar.style.left = "170px";
                }
                else{

                    mostrar.style.left = "210px";
                    contraMostrar.style.left = "220px";

                    console.log(window.innerWidth);
                }
            }
            else{

                if(window.innerWidth < 325){

                    mostrar.style.left = "190px";
                }
                else{

                    mostrar.style.left = "240px";
                    console.log(window.innerWidth);
                }
            }

            response == "inicia" ? window.location.href = "./vistas/sesion_iniciada.php" : "";
        })
    })
}

iniciarSesion();