<?php
class employeur{

public $nom;
public $prenom;
public $age;
public function __construct($nom,$prenom,$age)
{
    $this->nom=$nom;
    $this->prenom=$prenom;
    $this->age=$age;
}
public function presenter(){
    echo "bonjour $this->nom $this->prenom vous avez $this->age ans";
}
}
$employer1=new employeur("zabi","ilarbahti","chi kalwa");
echo '<br>';
$employer1->presenter();
