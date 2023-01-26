<?php
    include "conexao.php";

    $dados = $_POST;

    

    $query = "UPDATE `lista` SET `nome` = '".$dados['nome']."',`email` = '".$dados['email']."',`cpf` = '".$dados['cpf']."',`celular` = '".$dados['celular']."',`nascimento` = '".$dados['nascimento']."',`endereco` = '".$dados['endereco']."' ,`observacao` = '".$dados['observacao']."'WHERE `lista`.`id` = ".$dados['id']."";
    
    $stmt = $pdo->query($query);


 ?>   
