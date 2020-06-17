<?php 
	require_once 'credentials.php';
	$db = new PDO('mysql:host='.DB_SERVER.';dbname='.DB_NAME.';', DB_USER, DB_PASS);

	$addBuyer = $db->prepare("INSERT INTO buyers(:Id, :DPI, :Name, :Address)");
