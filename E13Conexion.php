<?php
namespace Models;
class Conexion {
    public $con;
    function__construct() {
        $Host = "localhost";
        $Username = "root";
        $Password = "";
        $Database = "2421IS";
        
        $this->con = mysqli_connect($servername, $Username, $Password, $Database);
        mysqli_query($this->con, "SET NAMES "utf8"");
    }
}
?>