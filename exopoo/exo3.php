<?php

class Page{
    public $text="";
    public function setContenu($contenu){
         $this->text=$contenu;
    }
    public function afficher(){
        echo "header";
        echo '<br>';
        echo $this->text;
        echo '<br>';
        echo "footer";
       
    }
}


$objetPage = new Page;                              
$objetPage->setContenu("LE CONTENU DE MA PAGE");    
$objetPage->afficher();                   