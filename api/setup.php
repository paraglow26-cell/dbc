<?php
require_once 'config.php';

echo "<h1>Mise à jour de la base de données...</h1>";

try {
    // 1. Convertir la catégorie ENUM en VARCHAR pour accepter libremenent les nouveaux pôles 2026.
    $pdo->exec("ALTER TABLE products MODIFY COLUMN category VARCHAR(100) DEFAULT 'arthroplastie'");
    echo "<p>✅ Colonne 'category' mise à jour en VARCHAR pour accepter les 6 nouveaux pôles.</p>";

    // 2. S'assurer que featured est bien un TINYINT(1) (booléen)
    $pdo->exec("ALTER TABLE products MODIFY COLUMN featured TINYINT(1) DEFAULT 0");
    echo "<p>✅ Colonne 'featured' mise à jour avec succès.</p>";

    // 3. Ajouter la colonne technicalSheet si elle n'existe pas
    try {
        $pdo->exec("ALTER TABLE products ADD COLUMN technicalSheet VARCHAR(255) DEFAULT ''");
        echo "<p>✅ Colonne 'technicalSheet' ajoutée avec succès.</p>";
    } catch (PDOException $e) {
        // L'erreur SQLSTATE 42S21 signifie que la colonne existe déjà (Duplicate column name)
        if ($e->getCode() == '42S21') {
            echo "<p>ℹ️ La colonne 'technicalSheet' existe déjà.</p>";
        } else {
            throw $e;
        }
    }

    echo "<h2 style='color: green;'>Mise à jour terminée avec succès ! Vous pouvez retourner à votre administration.</h2>";

} catch (PDOException $e) {
    echo "<h2 style='color: red;'>Erreur lors de la mise à jour SQL : </h2>";
    echo "<pre>" . $e->getMessage() . "</pre>";
    echo "<p>Assurez-vous que la table 'products' existe dans votre base de données.</p>";
}
?>
