<?php
    require_once "../../database.php";
    $id = $_GET["id"];
    $chooseBuyer->execute([
        'ID' => $id
    ]);
    echo json_encode($chooseBuyer->fetchAll());