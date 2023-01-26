<?php
    include 'conexao.php';
    $id = $_POST["id"];
    $sql = 'DELETE FROM `lista` WHERE id = :id';
    $stm = $pdo->prepare($sql);
    $stm->bindValue(':id', $id);
    $retorno = $stm->execute();
    echo $retorno;
    echo json_encode($_POST);
                  
?>  