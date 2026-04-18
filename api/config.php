<?php
// Fichier: api/config.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Gérer les requêtes OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// Configuration de la base de données (À MODIFIER AVEC VOS INFOS CPANEL)
$host = 'localhost';
$db_name = 'abcsynthese_abc';
$username = 'abcsynthese_abc';
$password = 'CAsa@@00';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erreur de connexion : " . $e->getMessage()]);
    exit;
}
?>
