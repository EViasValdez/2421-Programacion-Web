<?php
    if(isset($_GET["palabra"]))
    {
        $palabra = $_GET["palabra"];
        if(isset($_GET["tipo"]))
        {
            $tipo = $_GET["tipo"];
        }
        if($tipo == 0){
            $palabra = strtolower($palabra);
            echo "El resultado es: $palabra";
        }
        else
        {
            $palabra = strtoupper($palabra);
            echo "El resultado es: $palabra";
        }
    }
?>