<?php
require ("E12Conexion.php");

$nombre = "";
$edad = "";

if(isset($_GET["nombre"])){
    $nombre = $_POST["nombre"];
}
if(isset($_POST["edad"])){
    $edad = $_POST["edad"];
}

$sql = "INSERT INTO personas (id, nombre, edad) VALUES ('', '$nombre', '$edad')";
    if(mysqli_query($conn, $sql)){
        echo "New record created successfully";
    }
    else{
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
?>