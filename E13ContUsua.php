<?php
include "Conexion.php";
include "E13Usuario.php";

class ControlUsuarios {
    function__construct() {
    }
    public function buscarId() {
        $Id = $_GET["id"];
        $Usuario = Usuario::buscar($Id);
        echo json_encode($Usuario);
    }
    public function insertar() {
        $Usuario = new Usuario();
        $Usuario->nombre = "Xavier";
        $Usuario->edad = 50;
        $Usuario->guardar();
    }
    public function testEncriptar() {
        echo password_hash("", PASSWPRD_DEFAULT);
    }
}
?>