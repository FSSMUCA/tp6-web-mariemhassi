<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Page PHP</title>
</head>
<body>

<h1>Informations PHP</h1>

<?php
$etablissement = "Université XYZ";
$module = "Développement Web";
$annee = 2025;

$a = 5;
$b = 3;
$addition = $a + $b;
$mult = $a * $b;

echo "<p>Établissement : $etablissement</p>";
echo "<p>Module : $module</p>";
echo "<p>Année : $annee</p>";

echo "<p>Exemple d'addition : $a + $b = $addition</p>";
echo "<p>Exemple de multiplication : $a × $b = $mult</p>";
?>

<a href="index.html">Retour à la calculatrice</a>

</body>
</html>
