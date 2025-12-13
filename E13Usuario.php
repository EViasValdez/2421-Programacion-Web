<?php
namespace Models;

class Usuario extends Conexion
{
    public $Id;
    public $Nombre;
    public $Edad;

    public function__construct() {
        parent::__construct();
    }
    static function find($Id) {
        $me = new Conexion();
        $pre = mysqli_prepare($me->con, "SELECT * FROM personas WHERE Id = ?");
        $pre->bind_param("i", $Id);
        $pre->execute();
        $res = $pre->get_result();
        return $res->fetch_object(Usuario::class);
    }
    function Insert() {
        $this->FechaRegistro = date("D-M-Y");
        $pre = mysqli_prepare($this->con, "INSERT INTO personas(Nombre, Edad) VALUES (?,?)");
        $pre-> bind_param("sssssss", $this->Nombre, $this ->Edad);
        $pre->execute();

        $pre = mysql_prepare($this->con, "SELECT LAST_INSERT_ID() Id");
        $pre -> execute();
        $r = $pre -> get_result();
        $this->id_Usuario = $r->fetch_assoc()["Id"];
    }
    function Guardar() {
        $pre = mysqli_prepare($this->con, "INSERT INTO personas(Nombre, Edad) VALUES (?,?)");
        $pre->bind_param("ss", $this->Nombre, $this->Edad);
        $pre->execute();
    }
}
?>
