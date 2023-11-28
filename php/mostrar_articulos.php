<?php
require("config/database.php");

try {
    $query = "SELECT id_articulo,nombre,marca,color,existencia,Area AS categoria FROM articulo A INNER JOIN categoria C ON A.categoria_id=C.id_categoria";
    //preparar statment evita inyeccion sql
    $stmt = $connection->prepare($query);
    //la ejecutamos
    $stmt->execute();
        //guardamos los datos de la consulta
        $data = [];
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //contabilizamos los datos arrojados de result
        $rowCount=count($result);
        

        //comprobamos que sean mayores a cero
        if($rowCount>0){
            $data = $result;
        }else{
            $data=array(
                "message"=>"vacio"
            );
        }
        
       
        echo json_encode($data);
}catch(PDOException $e){
    echo "Error en la consulta ".$e->getMessage();
}







?>