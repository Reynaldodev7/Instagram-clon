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


function mostrarContrasena(){

    let input = document.querySelector("#contra");
    let mostrar = document.querySelector(".mostrar");

    input.addEventListener("input", (e) => {

        let mostrarValor = e.target.value;

        if(mostrarValor != ""){

            mostrar.style.display = "block";
        }
        else{

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

function formularioRegistrarse(){

    const submit = document.querySelector("#formulario");

    submit.addEventListener("submit", (e) => {

        e.preventDefault();
        const form = new FormData(submit); 

        let correo = limpiarCadena(form.get("correo"));
        form.set("correo", correo);
        let nombre = limpiarCadena(form.get("nombre"));
        form.set("nombre", nombre);
        let usuario = limpiarCadena(form.get("usuario"));
        usuario = usuario.replaceAll(" ", "");
        form.set("usuario", usuario);
        let contra = limpiarCadena(form.get("contra"));
        form.set("contra", contra);

        fetch("../php/registrar_datos.php", {

            method: "POST",
            body: form
        })
        .then((response) => {

           return response.text();
        })
        .then((response) => {

            console.log(response);

            let xCorreo = document.querySelector(".x-correo");
            let xUsuario = document.querySelector(".x-usuario");

            if(response == "ambos"){

                xCorreo.style.display = "block";
                xUsuario.style.display = "block";
            }
            else if(response == "correo" || response == "usuario"){

                response == "correo" ? xCorreo.style.display = "block" : xCorreo.style.display = "none";
                response == "usuario" ? xUsuario.style.display = "block" : xUsuario.style.display = "none";
            }
            else if(response == "creado"){

                window.location.href = "../index.php";
            }   
        })
    });
}

formularioRegistrarse();