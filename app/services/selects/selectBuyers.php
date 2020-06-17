<?php
    require_once "../../database.php";
    $selectBuyers->execute();
    echo json_encode($selectBuyers->fetchAll());