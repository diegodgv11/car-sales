<?php
    require_once "../../database.php";
    $selectVehiclesWithoutOwner->execute();
    echo json_encode($selectVehiclesWithoutOwner->fetchAll());