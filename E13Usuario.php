<?php
namespace Models;

class Usuario extends Conexion
{
    public $id;
    public $nombre;
    public $edad;

    public function__construct(){
        parent::__construct();
    }

    static function find($id){
        $me = new Conexion();
        $pre = mysqli_prepare($me->con, "SELECT * FROM personas WHERE id = ?");
        $pre->bind_param("i", $id);
        $pre->execute();
        $res = $pre->get_result();
        return $res->fetch_object(Usuario::class);
    }
    function insert(){
        $this->Fecha_Registro = date("D-M-Y");
        $pre = mysqli_prepare($this->con, "INSERT INTO personas(nombre, edad) VALUES (?,?)");
        $pre-> bind_param("sssssss", $this->Nombre, $this ->edad)
        $pre->execute();

        $pre = mysql_prepare($this->con, "SELECT LAST_INSERT_ID() id"):
        $pre -> execute();
        $r = $pre -> get_result();
        $this->id_Usuario = $r->fetch_assoc()["id"];
    }
    function guardar(){
        $pre = mysqli_prepare($this->con, "INSERT INTO personas(nombre, edad) VALUES (?,?)");
        $pre->bind_param("ss", $this->nombre, $this->edad);
        $pre->execute();
    }
}
?>