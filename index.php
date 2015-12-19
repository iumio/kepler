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
    static public function main($request)
    {
        require_once "Starter.php";
        Starter::switchOnApp();
        $controller = new Controller();
        if ($request == NULL)
            $controller->indexAction();
        else
            self::router($request);
    }

    static private function router($request)
    {
        echo "request";
    }
}
session_abort();