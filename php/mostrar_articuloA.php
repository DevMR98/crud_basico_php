<?php
require("config/database.php");

$id=$_GET["id"];

//declaramos la consulta
$queryM="SELECT *FROM articulo WHERE id_articulo=$id";
// la preparamos
$stmt=$connection->prepare($queryM);
// la ejecutamos
$stmt->execute();
// obtemos informacion de la consulta
$result=$stmt->fetchAll(PDO::FETCH_ASSOC);




$data=array(
    "registro"=>$result,
);

echo json_encode($data);


?>