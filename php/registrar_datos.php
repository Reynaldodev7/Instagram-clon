<?php 

    if($_POST){
        $correo = $_POST["correo"];
        $nombre = $_POST["nombre"];
        $usuario = $_POST["usuario"];
        $contra = $_POST["contra"];

        include "./conexion.php";

        $consulta1 = $conexion->prepare("SELECT correo_usuario FROM usuario WHERE correo_usuario = '$correo'");
        $consulta2 = $conexion->prepare("SELECT usuario_usuario FROM usuario WHERE usuario_usuario = '$usuario'");

        $consulta1->execute();
        $consulta2->execute();
        $resultado1 = $consulta1->fetchAll();
        $resultado2 = $consulta2->fetchAll();

        if(!(empty($resultado1[0])) && !(empty($resultado2[0]))){

            echo "ambos";
        }

        else if((!empty($resultado1[0]))){

            echo "correo";
        }
        else if(!(empty($resultado2[0]))){

            echo "usuario";
        }
        else{
            if(empty($resultado1[0]) && empty($resultado2[0])){

                $insertar = $conexion->prepare("INSERT INTO usuario(correo_usuario, nombre_usuario, usuario_usuario, contra_usuario) VALUES ('$correo', '$nombre', '$usuario', '$contra')");
                $insertar->execute();

                $consulta = $conexion->prepare("SELECT id_usuario FROM usuario WHERE usuario_usuario = '$usuario'");
                $consulta->execute();

                $resultado = $consulta->fetchAll();

                $id = $resultado[0]["id_usuario"];

                $insertar1 = $conexion->prepare("INSERT INTO perfil(foto_perfil, id_usuario) VALUES ('user.jpg', $id)");
                $insertar1->execute();

                echo "creado"; 
            }
        }

    }
?>