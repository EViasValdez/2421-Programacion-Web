<?php
    include "E13Datos.php"
    class Individuo {
        public $Nombre = "Uriel";
        private $Edad = 20;
    }
    public function_construct() {

    }
    public function saludouno() {
        echo "Hola, mi nombre es".$this->Nombre;
    }
    private function saludouno() {
        echo "Hola, mi edad es".$this->Edad;
    }
    static function saludotres() {
        echo "Yo ando bien";
    }
?>