<?php 

    $cadena = "foto.webp";
    $id = 12;

    $tipo = "";
    $size = strlen($cadena);

    for($i = ($size - 1); $i>=0; $i--){

        $tipo = $tipo.$cadena[$i];
        if($cadena[$i] == "."){

            $tipo = strrev($tipo);
            break;
        }
    }

    $cadena = str_replace($tipo, "", $cadena);

    $cadena = $cadena."$id".$tipo;

    echo $cadena;
?>