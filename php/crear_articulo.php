<?php
require ("config/database.php");

//guardamos los datos del formulario para utilizarlos en sql
$nombre=$_POST["nombre"];
$marca=$_POST["marca"];
$color=$_POST["color"];
$existencia=$_POST["existencia"];
$categoria=$_POST["categoria"];


//preparamos la llamada al procedimiento almacenado
$stmt=$connection->prepare("{CALL sp_insertar_articulo (?,?,?,?,?)}");
//posteriormente se vinculan los parametros
$stmt->bindParam(1,$nombre,PDO::PARAM_STR);
$stmt->bindParam(2,$marca,PDO::PARAM_STR);
$stmt->bindParam(3,$color,PDO::PARAM_STR);
$stmt->bindParam(4,$existencia,PDO::PARAM_INT);
$stmt->bindParam(5,$categoria,PDO::PARAM_INT);
//ejecutamos el procedimiento almacenado
try{
    $stmt->execute();
    //convertimos a json
    
    $data=[];

    if($stmt){
        $data=array(
            "status"=>"success"
        );
    }else{
        $data=array(
            "status"=>"fail"
        );
    }
    echo json_encode($data);
}catch(PDOException $e){
    die("error al ejecutar el procedimiento ".$e->getMessage());
}










?>