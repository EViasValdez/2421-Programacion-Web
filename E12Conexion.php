<?php
public $con;

function__construct(){
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "2421IS";

    $this->con = mysqli_connect($servername, $username, $password, $database);
    mysqli_query($this->con, "SET NAMES "utf8"");

    if (!$con){
        die("Connection failed: " . mysqli_connect_error());
    }
}
?>