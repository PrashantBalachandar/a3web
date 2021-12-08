<?php
if(isset($_POST['submit']))
{
$name = "name:".$_POST['name']"";
$file=fopen("saved.txt", "a");
fwrite($file, $name);
fclose($file);
}
?>