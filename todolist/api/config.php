<?php
const DSN = "mysql:host=localhost;dbname=todolist;charset=utf8";
const USERNAME = "root";
const PWD = "";
const OPTIONS = [
    // on définit l'option d'affichage des résultats PDO sous la forme de tableau associatif
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // on spécifie qu'on veut récupérer les exceptions éventuelles
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
];
