<?php
    require_once "../../database.php";

    $PID = $_POST["pid"];
    $name = $_POST["name"];
    $address = $_POST["address"];

    $addBuyer->execute([
        'PID' => $PID,
        'Name' => $name,
        'Address' => $address
    ]);

    if($addBuyer->rowCount() > 0){
        echo "1";
    }
    else{
        echo "0";
    }