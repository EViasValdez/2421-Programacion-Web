<?php
include "Conexion.php";
include "E13Usuario.php";

class ControlUsuarios{
    function__construct(){
    }
    public function buscarId(){
        $id = $_GET["id"];
        $usuario = Usuario::buscar($id);
        echo json_encode($usuario);
    }
    public function insertar(){
        $usuario = new Usuario();
        $usuario->nombre = "Xavier";
        $usuario->edad = 50;
        $usuario->guardar();
    }
    public function testEncriptar(){
        echo password_hash("", PASSWPRD_DEFAULT);
    }
}
?>