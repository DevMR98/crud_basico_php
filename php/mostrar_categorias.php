<?php

require("config/database.php");

//declaramos nuestra consulta
$stmt="SELECT *FROM categoria";
//la preparamos para evitar inyeccion sql
$query=$connection->prepare($stmt);
//la ejecutamos
$query->execute();
//guardamos los datos mostrados de la consulta
$result=$query->fetchAll(PDO::FETCH_ASSOC);
//convertimos a json
$data=json_encode($result);

echo $data;


?>