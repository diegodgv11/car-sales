<?php
    require_once "../../database.php";
    $selectVehicles->execute();
    echo json_encode($selectVehicles->fetchAll());