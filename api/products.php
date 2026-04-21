<?php
// Fichier: api/products.php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Lire tous les produits ou un seul
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
            $stmt->execute([$_GET['id']]);
            $product = $stmt->fetch();
            
            if ($product) {
                $product['images'] = json_decode($product['images']);
                $product['features'] = json_decode($product['features']);
                $product['specifications'] = json_decode($product['specifications']);
                echo json_encode($product);
            } else {
                echo json_encode(["error" => "Produit non trouvé"]);
            }
        } else {
            $stmt = $pdo->query("SELECT * FROM products ORDER BY created_at DESC");
            $products = $stmt->fetchAll();
            
            foreach ($products as &$product) {
                $product['images'] = json_decode($product['images']);
                $product['features'] = json_decode($product['features']);
                $product['specifications'] = json_decode($product['specifications']);
            }
            echo json_encode($products);
        }
        break;

    case 'POST':
        // Créer un nouveau produit
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            
            if (!isset($data['name'], $data['category'])) {
                echo json_encode(["error" => "Données manquantes (name ou category)"]);
                exit;
            }

            $stmt = $pdo->prepare("INSERT INTO products (id, name, category, subcategory, description, fullDescription, images, features, specifications, featured, technicalSheet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            
            $success = $stmt->execute([
                $data['id'],
                $data['name'],
                $data['category'],
                $data['subcategory'],
                $data['description'],
                $data['fullDescription'],
                json_encode($data['images'] ?? []),
                json_encode($data['features'] ?? []),
                json_encode($data['specifications'] ?? (object)[]),
                isset($data['featured']) && $data['featured'] ? 1 : 0,
                $data['technicalSheet'] ?? ''
            ]);

            echo json_encode(["success" => $success]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Erreur SQL POST: " . $e->getMessage()]);
        }
        break;

    case 'PUT':
        // Modifier un produit
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $id = $_GET['id'] ?? $data['id'] ?? null;

            if (!$id) {
                echo json_encode(["error" => "ID manquant pour la modification"]);
                exit;
            }

            $stmt = $pdo->prepare("UPDATE products SET name=?, category=?, subcategory=?, description=?, fullDescription=?, images=?, features=?, specifications=?, featured=?, technicalSheet=? WHERE id=?");
            
            $success = $stmt->execute([
                $data['name'],
                $data['category'],
                $data['subcategory'],
                $data['description'],
                $data['fullDescription'],
                json_encode($data['images'] ?? []),
                json_encode($data['features'] ?? []),
                json_encode($data['specifications'] ?? (object)[]),
                isset($data['featured']) && $data['featured'] ? 1 : 0,
                $data['technicalSheet'] ?? '',
                $id
            ]);

            echo json_encode(["success" => $success, "id" => $id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Erreur SQL PUT: " . $e->getMessage()]);
        }
        break;

    case 'DELETE':
        // Supprimer un produit
        try {
            $id = $_GET['id'] ?? null;
            if (!$id) {
                echo json_encode(["error" => "ID manquant pour la suppression"]);
                exit;
            }

            $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
            $success = $stmt->execute([$id]);
            echo json_encode(["success" => $success]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["error" => "Erreur SQL DELETE: " . $e->getMessage()]);
        }
        break;
}
?>
