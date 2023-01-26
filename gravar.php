<?php
    //echo 'oi';
    //$resultado = $_POST['nome'];
    include "conexao.php";

    echo $dados;

    $dados=array($_POST['nome'],$_POST['email'],$_POST['cpf'],$_POST['celular'],$_POST['nascimento'],$_POST['endereco'],$_POST['observacao']);
    //$dados=['camile','lucassouza@hotmai.com','4124124122','958414515','14102004','rua lucas 2 ','SIM'];
    
    $sql = "INSERT INTO $dbname.`lista` (nome, email, cpf, celular, nascimento, endereco, observacao) VALUES (?,?,?,?,?,?,?)";
    $stmt= $pdo->prepare($sql);
    $stmt->execute($dados);

    //header('Content-type: application/json'); 
    //echo 'oi';
?>