<?php
require("config/database.php");

$id=$_GET["id"];
$nombre=$_POST["narticulo"];
$marca=$_POST["marca"];
$color=$_POST["color"];
$existencia=$_POST["existencia"];
$categoria=$_POST["categoria"];

// echo var_dump($nombre);
// echo var_dump($id);


// declaramos consulta
$queryA="{CALL sp_actualizar_articulo(?,?,?,?,?,?)}";
// preparamos la consulta al procedimiento almacenado
$stmt2=$connection->prepare($queryA);
// asignamos los parametros del procedimiento almacenado
$stmt2->bindParam(1,$id,PDO::PARAM_INT);
$stmt2->bindParam(2,$nombre,PDO::PARAM_STR);
$stmt2->bindParam(3,$marca,PDO::PARAM_STR);
$stmt2->bindParam(4,$color,PDO::PARAM_INT);
$stmt2->bindParam(5,$existencia,PDO::PARAM_INT);
$stmt2->bindParam(6,$categoria,PDO::PARAM_INT);
// ejecutamos 
$stmt2->execute();


if($stmt2){
    $data=array(
        "status"=>"update"
    );
}



echo json_encode($data);

?>