<?php
    require_once "../../database.php";

    $IDBuyer = $_POST["buyer"];
    $IDVehicle = $_POST["vehicle"];

    $makeBuy->execute([
        'ID' => $IDVehicle,
        'IDBuyer' => $IDBuyer,
    ]);

    if($makeBuy->rowCount() > 0){
        echo "1";
    }
    else{
        echo "0";
    }