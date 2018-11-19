<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    if (mail("info@bl.dp.ua", "Test mail", "Проверка отправки почты")) {
          echo "ok";
    } else {
           echo "error";}
?>