<?php
require ("Conexion.php");

$Nombre = "";
$Edad = "";

if (isset($_GET["Nombre"])){
    $Nombre = $_POST["Nombre"];
}
if (isset($_POST["Edad"])){
    $Edad = $_POST["Edad"];
}

$sql = "INSERT INTO personas (id, Nombre, Edad) VALUES ('', '$Nombre', '$Edad')";
    if (mysqli_query($conn, $sql)){
        echo "New record created successfully";
    }
    else{
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
?>