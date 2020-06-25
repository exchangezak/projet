<?php
class Page{
    public $contenu;
    public function ajouterContenu($section){
        $this->contenu.="<br>".$section;

    }
    public function afficherListe(){
echo "header";
echo $this->contenu;
echo '<br>';
echo 'footer';
    }
}


$objetPage = new Page;                     
$objetPage->ajouterContenu("SECTION1");
$objetPage->ajouterContenu("SECTION2");
$objetPage->ajouterContenu("SECTION3");
$objetPage->afficherListe();