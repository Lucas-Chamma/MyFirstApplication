<?php
    include "conexao.php";
    $tipo = $_POST['tipo'];
    $valor = $_POST['valor'];

    $query = "SELECT * FROM `lista` WHERE UPPER(`".$tipo."`) LIKE UPPER('%".$valor."%')";
    $stmt = $pdo->query($query);
    $resultado;
    
    while ($row=$stmt->fetch()){
        $resultado[]=$row;
    }
    header('Content-type: application/json'); 
    echo json_encode($resultado);

 ?>   