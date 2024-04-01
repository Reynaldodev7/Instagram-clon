<?php 

    session_start();

    if(!(isset($_SESSION["iniciada"]))){

        header("Location: ./cerrar_sesion.php");
        exit();
    }

    include "./conexion.php";

    $usuario = $_POST["usuario"];
    $arreglo = [];
    $arregloCompleto = [];

    $consulta = $conexion->prepare("SELECT recibe_mensaje FROM mensaje WHERE envia_mensaje = '$usuario'");
    $consulta->execute();

    $resultado = $consulta->fetchAll();

    $consulta1 = $conexion->prepare("SELECT envia_mensaje FROM mensaje WHERE recibe_mensaje = '$usuario'");
    $consulta1->execute();

    $resultado1 = $consulta1->fetchAll();

    if(!(empty($resultado[0]))){

        $contador = 0;

        foreach($resultado as $valor){

            $existe = false;

            if($contador == 0){

                array_push($arreglo, $valor["recibe_mensaje"]);
                $contador++;
            }
            else{

                foreach($arreglo as $nombre){

                    if($nombre == $valor["recibe_mensaje"]){

                        $existe = true;
                        break;
                    }
                }

                if($existe == false){

                    array_push($arreglo, $valor["recibe_mensaje"]);
                }
            }
        }

        if(!(empty($resultado1[0]))){
    
            foreach($resultado1 as $valor){
    
                $existe = false;
    
                foreach($arreglo as $nombre){

                    if($nombre == $valor["envia_mensaje"]){

                        $existe = true;
                        break;
                    }
                }

                if($existe == false){

                    array_push($arreglo, $valor["envia_mensaje"]);
                }
                
            }
        }
    }
    else if(!(empty($resultado1[0]))){

        $contador = 0;

        foreach($resultado1 as $valor){

            $existe = false;

            if($contador == 0){

                array_push($arreglo, $valor["envia_mensaje"]);
                $contador++;
            }
            else{

                foreach($arreglo as $nombre){

                    if($nombre == $valor["envia_mensaje"]){

                        $existe = true;
                        break;
                    }
                }

                if($existe == false){

                    array_push($arreglo, $valor["envia_mensaje"]);
                }
            }
        }

        if(!(empty($resultado[0]))){
    
            foreach($resultado as $valor){
    
                $existe = false;
    
                foreach($arreglo as $nombre){

                    if($nombre == $valor["recibe_mensaje"]){

                        $existe = true;
                        break;
                    }
                }

                if($existe == false){

                    array_push($arreglo, $valor["recibe_mensaje"]);
                }
            }
        }
    }
    else{

        array_push($arregloCompleto, "-no-");
        array_push($arreglo, "-no-");
    }

    if($arreglo[0] != "-no-"){

        foreach($arreglo as $valor){

            $consultaDatosUsuario = $conexion->prepare("SELECT nombre_usuario, usuario_usuario, id_usuario FROM usuario WHERE usuario_usuario = '$valor'");
            $consultaDatosUsuario->execute();

            $resultadoDatosUsuario = $consultaDatosUsuario->fetchAll();

            $id = $resultadoDatosUsuario[0]["id_usuario"];

            $consultaFotoUsuario = $conexion->prepare("SELECT foto_perfil FROM perfil WHERE id_usuario = $id");
            $consultaFotoUsuario->execute();

            $resultadoFotoUsuario = $consultaFotoUsuario->fetchAll();

            array_push($arregloCompleto, [$resultadoDatosUsuario[0]["usuario_usuario"], $resultadoDatosUsuario[0]["nombre_usuario"], $resultadoFotoUsuario[0]["foto_perfil"]]);
        }
    }

    echo json_encode($arregloCompleto);
?>