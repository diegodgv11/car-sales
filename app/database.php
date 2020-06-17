<?php 
	require_once 'credentials.php';
	$db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';', DB_USER, DB_PASS);

	$addBuyer = $db->prepare("INSERT INTO buyers(PID, Name, Address) VALUES(:PID, :Name, :Address)");
	$selectBuyers = $db->prepare("SELECT * FROM buyers");

	$addVehicle = $db->prepare("INSERT INTO vehicles(Brand, Model, Price) VALUES(:Brand, :Model, :Price)");
	$selectVehicles = $db->prepare("SELECT * FROM vehicles");
	$selectVehiclesWithoutOwner = $db->prepare("SELECT * FROM vehicles WHERE IDBuyer IS NULL");

	$chooseBuyer = $db->prepare("SELECT * FROM buyers WHERE ID = :ID");

	$makeBuy = $db->prepare("UPDATE vehicles SET IDBuyer = :IDBuyer WHERE ID = :ID");