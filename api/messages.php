<?php
// Fichier: api/messages.php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $stmt = $pdo->query("SELECT * FROM messages ORDER BY created_at DESC");
    echo json_encode($stmt->fetchAll());
} 
else if ($method == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $success = $stmt->execute([
        $data['name'],
        $data['email'],
        $data['subject'],
        $data['message']
    ]);
    
    echo json_encode(["success" => $success]);
}
?>
