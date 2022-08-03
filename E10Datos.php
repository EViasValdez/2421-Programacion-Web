<?php
    $nombre = $_GET["nombre"];
    $apellido = $_GET["apellido"];
    $sexo = $_GET["sexo"];
    $edad = $_GET["edad"];
    $pais = $_GET["pais"];

    if (isset($_GET["pais"])) {
        print "Ingreso exitoso <br>";
        print "Sea bienvenido <br>";
        echo "Sus datos son: $nombre, $apellido, $sexo, $edad, $pais <br>";
    }
?>