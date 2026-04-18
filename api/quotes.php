<?php
// Fichier: api/quotes.php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    // Lister les devis (Admin)
    $stmt = $pdo->query("SELECT * FROM quotes ORDER BY created_at DESC");
    echo json_encode($stmt->fetchAll());
} 
else if ($method == 'POST') {
    // Soumettre un devis
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("INSERT INTO quotes (name, email, phone, company, productId, productName, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $success = $stmt->execute([
        $data['name'],
        $data['email'],
        $data['phone'],
        $data['company'],
        $data['productId'],
        $data['productName'],
        $data['message']
    ]);
    
    echo json_encode(["success" => $success]);
}
?>
