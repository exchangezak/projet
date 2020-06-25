<?php
class Exo1{
    private $_msg;
    public function __construct($msg="coucou")
    {
       $this->_msg=$msg;
       echo $this->_msg;
    }
}
$objet = new Exo1;
