<?php
try{
    $dsn="sqlsrv:server=Miguel;Database=store;TrustServerCertificate=true";
$user="sa";
$pass= "981029";

$connection=new PDO($dsn,$user,$pass);
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    die("Error en la conexión".$e->getMessage());
}


// if($connection){
//     echo "conexion estabilizada correctamente";
// }else{
//     echo "error";
// }
?>