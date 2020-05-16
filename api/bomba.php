<?php

require_once 'header.php';
// #servidor #Usuario @Contraseña #NombreBD
//$conn= new mysqli('65.99.225.128', 'designyl_integradora', 'integradora1', 'designyl_proyecto_iot');
$conn= new mysqli('localhost', 'root', '', 'proyecto_iot');

if($_SERVER['REQUEST_METHOD'] === 'POST')
{
   if (isset($_POST['estado'])){
       $estado =$_POST['estado'];
       $sql = $conn->query("UPDATE estado SET estado = '$estado' WHERE Sensor = 'Bomba'");
       if($sql){
           exit(json_encode(array('status' => 'success')));
       } else {
           exit(json_encode(array('status' => 'error')));
       }
   } else {
        exit(json_encode(array('status' => 'error', 'error' => 'No pudimos obtener variable estado')));
   }
}
if($_SERVER['REQUEST_METHOD'] === 'GET')
{
    if(isset($_GET['id'])){
        $id= $conn->real_escape_string($_GET['id']);
        $sql= $conn->query("SELECT * FROM registros WHERE id= '$id'");
        $data = $sql ->fetch_assoc();
    } else {
        $data=array();
        $sql= $conn->query("SELECT * FROM registros ORDER by id DESC LIMIT 1");
        while ($d =$sql->fetch_assoc()){
            $data[]=$d;
        }
    }
    exit(json_encode($data));
}

if($_SERVER['REQUEST_METHOD'] === 'GET')
{
    if(isset($_GET['id'])){
        $id= $conn->real_escape_string($_GET['id']);
        $sql= $conn->query("SELECT * FROM registros WHERE id= '$id'");
        $date = $sql ->fetch_assoc();
    } else {
        $date=array();
        $sql= $conn->query("SELECT * FROM registros");
        while ($d =$sql->fetch_assoc()){
            $date[]=$d;
        }
    }
    exit(json_encode($date));
}