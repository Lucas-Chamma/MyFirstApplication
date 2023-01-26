<?php

    include "conexao.php";

    $query = "SELECT * FROM $dbname.`lista`";
    $stmt = $pdo->query($query);
    $resultado;
    
    while ($row=$stmt->fetch()){
        $resultado[]=$row;
    }
    header('Content-type: application/json'); 
    echo json_encode($resultado);
    

?>