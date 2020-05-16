<?php
require_once 'header.php';

$conn= new mysqli('sql9.freesqldatabase.com', 'sql9327840', 'zG79suMubn', 'sql9327840');

if($_SERVER['REQUEST_METHOD'] === 'GET')
{
    if(isset($_GET['id'])){
        $id= $conn->real_escape_string($_GET['id']);
        $sql= $conn->query("SELECT * FROM productos WHERE id= '$id'");
        $data = $sql ->fetch_assoc();
    } else {
        $data=array();
        $sql= $conn->query("SELECT * FROM productos");
        while ($d =$sql->fetch_assoc()){
            $data[]=$d;
        }
    }
    exit(json_encode($data));
}
if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $data= json_decode(file_get_contents("php://input"));
    $sql= $conn->query("INSERT INTO productos (Nombre,Descripcion) VALUES ('".$data->Nombre."', '".$data->Descripcion."')");
    if ($sql){
        $data->id= $conn->insert_id;
        exit(json_encode($data));
    }else{
        exit(json_encode(array('status'=> 'error')));
    }
}
if($_SERVER['REQUEST_METHOD'] === 'PUT')
{
   if (isset($_GET['id'])){
       $id = $conn->real_escape_string($_GET['id']);
       $data = json_decode(file_get_contents("php://input"));
       $sql = $conn->query("UPDATE productos SET Nombre = '".$data->Nombre."', Descripcion ='".$data->Descripcion."' WHERE id = '$id'");
       if($sql){
           exit(json_encode(array('status' => 'success')));
       } else {
           exit(json_encode(array('status' => 'error')));
       }
   }
}
if($_SERVER['REQUEST_METHOD'] === 'DELETE')
{
    if(isset($_GET['id'])){
        $id = $conn->real_escape_string($_GET['id']);
        $sql =$conn->query("DELETE FROM productos WHERE id= '$id'");
        if($sql){
            exit(json_encode(array('status' => 'success')));
        } else {
            exit(json_encode(array('status' => 'error')));
        }
    }
}
