<?php
//Created by kaway404 
$keywords = ''; //Keywords (palavras chaves)
$title = ''; //Title of site (Titutlo do site)
$theme = 'dark'; //Themes disponiveis, dark || white
$manutencao = 0; //Manuntencao , 0 - desativado, 1 - ativado
$errormessage = 'Estamos em manutenção volte mais tarde!'; //Mensangem de manuntencao

$work = 1; //Protect

//MySql Connect
if($manutencao == 0){
//Conexao com o banco de dados
require 'database.php';

//Tenta uma conexão com banco de dados
try{
  require_once('user.php');
}
catch(PDOException $ex){
  require_once('vendor/autoload/template/html/error/index.php');
}


}
else{
  require_once('vendor/autoload/template/html/error/manu.php');
}

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
