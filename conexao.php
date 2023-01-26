<?php

    $dbname = "cadastro";
    $host = "localhost";
    $user ="root";
    $senha = "";

    try{
        $pdo = new PDO("mysql:dbname=".$dbname.";host=".$host,$user,$senha);
    }
    catch(PDOException $e){
        echo "Erro relacionado ao Banco de Dados ".$e->getMessage();
        exit();
    }
    catch(Exception $e){
        echo "Erro padrao ".$e->getMessage();
        exit();
    }
?>
