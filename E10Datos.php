<?php
$Nombre = $_GET["nombre"];
$Apellido = $_GET["apellido"];
$Sexo = $_GET["sexo"];
$Edad = $_GET["edad"];
$Pais = $_GET["pais"];

if (isset($_GET["pais"])) {
    print "Ingreso exitoso <br>";
    print "Sea bienvenido <br>";
    echo "Sus datos son: $Nombre, $Apellido, $Sexo, $Edad, $Pais <br>";
}
?>