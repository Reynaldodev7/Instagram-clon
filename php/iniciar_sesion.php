<?php 

    if($_POST){

        $usuario = $_POST["usuario"];
        $contra = $_POST["contra"];

        include "./conexion.php";

        $csUsuario = $conexion->prepare("SELECT usuario_usuario FROM usuario WHERE usuario_usuario = '$usuario'");
        $csUsuario->execute();
        $rsUsuario = $csUsuario->fetchAll();

        $csCorreo = $conexion->prepare("SELECT correo_usuario FROM usuario WHERE correo_usuario = '$usuario'");
        $csCorreo->execute();
        $rsCorreo = $csCorreo->fetchAll();

        $csContra = $conexion->prepare("SELECT contra_usuario FROM usuario WHERE contra_usuario = '$contra'");
        $csContra->execute();
        $rsContra = $csContra->fetchAll();

        if((empty($rsUsuario[0]) && empty($rsCorreo[0])) && empty($rsContra)){

            echo "ambos";
        }

        else if(empty($rsUsuario[0]) && empty($rsCorreo[0])){

            echo "usuario";
        }
        else if(empty($rsContra[0])){

            echo "contra";
        }
        else if((!(empty($rsCorreo[0])) || !(empty($rsUsuario[0]))) && !(empty($rsContra[0]))){

            $csLogin;

            if(!(empty($rsUsuario[0]))){

                $csLogin = $conexion->prepare("SELECT * FROM usuario WHERE usuario_usuario = '$usuario'");
            }
            else if(!(empty($rsCorreo[0]))){

                $csLogin = $conexion->prepare("SELECT * FROM usuario WHERE correo_usuario = '$usuario'");
            }

            $csLogin->execute();
            $login = $csLogin->fetchAll();

            session_start();

            $_SESSION["nombre"] = $login[0]["nombre_usuario"];
            $_SESSION["usuario"] = $login[0]["usuario_usuario"];
            $_SESSION["correo"] = $login[0]["correo_usuario"];
            $_SESSION["id"] = $login[0]["id_usuario"];
            $_SESSION["iniciada"] = true;


            echo "inicia";
        }
    }

?>