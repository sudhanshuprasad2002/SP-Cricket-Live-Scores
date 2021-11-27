<?php
$opteam=$_POST["mark"];

require "database.php";




$res=database::s("SELECT * FROM `match_id` ;");
$n=$res->num_rows;
if($n==1){
    database::iud("UPDATE `match_id` SET `op_team`='".$opteam."'  ;");
}

echo "Sucess";
?>