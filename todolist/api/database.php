<?php
require_once "config.php";

class database
{
    private $dsn;
    private $username;
    private $pwd;
    private $options;

    public $conn;

    public function __construct()
    {
        $this->dsn=DSN;
        $this->username=USERNAME;
        $this->pwd=PWD;
        $this->options=OPTIONS;
    }
    public function connect(){
        try{
            $this->conn= new PDO($this->dsn,$this->username,$this->pwd,$this->options);

        }
        catch(PDOException $error){
            echo"error".$error->getMessage();

        }
return $this->conn;
    }


}