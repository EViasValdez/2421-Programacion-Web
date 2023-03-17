<?php
    if (isset($_GET["palabra"]))
    {
        $Palabra = $_GET["palabra"];
        if (isset($_GET["tipo"]))
        {
            $tipo = $_GET["tipo"];
        }
        if ($tipo == 0){
            $Palabra = strtolower($Palabra);
            echo "El resultado es: $Palabra";
        }
        else
        {
            $Palabra = strtoupper($Palabra);
            echo "El resultado es: $Palabra";
        }
    }
?>