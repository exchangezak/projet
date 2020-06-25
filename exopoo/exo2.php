<?php
class Header{
public function __construct()
{
    echo"(header)";
    
}}

class Section{
    public function __construct(){
        echo "(section)";
}

}
class Footer{
    public function __construct(){
        echo "(footer)";
    }

}
$objetHeader    = new Header;
echo'<br>';
$objetSection   = new Section;
echo'<br>';
$objetFooter    = new Footer;
