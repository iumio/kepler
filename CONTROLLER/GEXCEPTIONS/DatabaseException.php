<?php

/**
 * Created by PhpStorm.
 * User: rafina
 * Date: 29/12/15
 * Time: 00:57
 */
class DatabaseException extends Exception
{

    public function __construct($message, $databases)
    {
        echo $_SESSION['twig']->render("error.html.twig", array("error" => $message, "alldbname" => $databases));
    }
}