<?php
require ("config/database.php");

$id=$_GET["id"];
// echo var_dump($id);

//realizamos la consulta
$query="DELETE FROM articulo WHERE id_articulo=$id";
//preparamos la consulta
$stmt=$connection->prepare($query);
//ejecutamos
$stmt->execute();

if($stmt){
    $data=array(
        "status"=>"eliminado"
    );
}

echo json_encode($data);

?>