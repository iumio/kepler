<?php

/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 09:50
 */
class Model
{
    public function getDB()
    {
        $pdo = my_PDO::getInstance();
        $list_db = $pdo->query("show databases");
        return $list_db;
    }
}