<?php
// Lire le contenu du fichier JSON
$jsonData = file_get_contents('sellettes.json');
$data = json_decode($jsonData, true);

// Récupérer les données du formulaire
$name = $_POST['name'];
$weight = $_POST['weight'];
$type = $_POST['type'];
$size = $_POST['size'];

// Ajouter la nouvelle entrée au tableau
$newParaglider = array(
    'name' => $name,
    'weight' => $weight,
    'type' => $type,
    'size' => $size
);
$data[] = $newParaglider;

// Écrire le tableau mis à jour dans le fichier JSON
file_put_contents('sellettes.json', json_encode($data));

// Rediriger l'utilisateur vers la page d'accueil
header('Location: index.html');
?>
