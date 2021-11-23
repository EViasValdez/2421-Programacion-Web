<?php
    include "E13Datos.php"
    class Individuo {
        public $nombre = "Uriel";
        private $edad = 20;
    }
    public function_construct(){

    }
    public function saludouno(){
        echo "Hola, mi nombre es".$this->nombre;
    }
    private function saludouno(){
        echo "Hola, mi edad es".$this->edad;
    }
    static function saludotres(){
        echo "Yo ando bien";
    }
?>