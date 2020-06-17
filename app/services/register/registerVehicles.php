<?php
    require_once "../../database.php";

    $brand = $_POST["brand"];
    $model = $_POST["model"];
    $price = $_POST["price"];

    $addVehicle->execute([
        'Brand' => $brand,
        'Model' => $model,
        'Price' => $price
    ]);

    if($addVehicle->rowCount() > 0){
        echo "1";
    }
    else{
        echo "0";
    }