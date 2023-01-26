<?php
    include "conexao.php";
    
    $id = $_POST['id'];

    $query = "SELECT * FROM `lista` WHERE `id` LIKE ".$id;
    $stmt = $pdo->query($query);
    $resultado;
    
    while ($row=$stmt->fetch()){
        $resultado[]=$row;
    }
    header('Content-type: application/json'); 
    echo json_encode($resultado);

 ?>   