<?php
class PageV2{


public function ajouter($cle,$valeur)
{
$tableau[$cle]=$valeur;
}
public function afficherTab($tab)
{
  
}






  }
      
$objet1 = new PageV2;
$objet1->ajouter("header", "(CODE DU HEADER)");
$objet2 = new PageV2;
$objet2->ajouter("footer", "(CODE DU FOOTER)");
$objet3 = new PageV2;
$objet3->ajouter("section1", "(CODE DU section1)");
$objet4 = new PageV2;
$objet4->ajouter("section2", "(CODE DU section2");
$objet5 = new PageV2;
$objet5->afficherTab(["header","footer","section1","section2"]);





