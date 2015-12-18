<?php
/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 14:16
 */

session_start();
$request = NULL;
if (isset($_REQUEST))
{
    $request = $_REQUEST;
}

Index::main($request);

class Index
{
    public function main($request)
    {
        require_once "Starter.php";
        Starter::switchOnApp();
    }
}