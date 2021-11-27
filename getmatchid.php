<?php

require "database.php";

$match_id=database::s("SELECT * FROM `match_id`");
$mi=$match_id->fetch_assoc();

$ar["mid"]=$mi["match_id"];
$ar["oc"]=$mi["op_team"];

echo json_encode($ar);












?>