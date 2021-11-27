<?php
class database{

        public static $dbms;

        public static function connection(){
            if(isset($dbms)){

            }else{
                database::$dbms=new mysqli("localhost","root","0724886404Was","cricket","3306");

            }
        }
        public static function iud($q){
            database::connection();
            database::$dbms->query($q);

        }
        public static function s($q){
            database::connection();
            $res=database::$dbms->query($q);
            return $res;
        }







}


?>