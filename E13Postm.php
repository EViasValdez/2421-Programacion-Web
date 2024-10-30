<?php
include "E13Datos.php"

class Individuo {
    public $Nombre = "Uriel";
    private $Edad = 20;
}
public function_construct() {
    
}
public function SaludoUno() {
    echo "Hola, mi nombre es".$this->Nombre;
}
private function SaludoUno() {
    echo "Hola, mi edad es".$this->Edad;
}
static function SaludoTres() {
    echo "Yo ando bien";
}
?>