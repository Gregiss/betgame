<?php
$PDO = db_connect();
 
if(isset($_COOKIE['iduser']) && isset($_COOKIE['cry'])){
$iduser = $_COOKIE['iduser'];
$cry = $_COOKIE['cry'];

$sql = "SELECT id, cry, email, username FROM users WHERE id = :iduser AND cry = :cry";
$stmt = $PDO->prepare($sql);

$stmt->bindParam(':iduser', $iduser);
$stmt->bindParam(':cry', $cry);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
if (count($users) <= 0)
{
setcookie("iduser", "");
setcookie("cry", "");
}

$user = $users[0];
}

require('vendor/autoload/template/index.php');