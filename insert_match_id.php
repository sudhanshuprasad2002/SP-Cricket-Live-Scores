<?php
$mid=$_POST["mid"];

require "database.php";




$res=database::s("SELECT * FROM `match_id` ;");
$n=$res->num_rows;
if($n==1){
    database::iud("UPDATE `match_id` SET `match_id`='".$mid."'  ;");
}else{
    database::iud("INSERT INTO `match_id`(`match_id`,`op_team`) VALUES ('".$mid."','-')  ;");


}
echo"Sucess";
?>