<?php

/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 30/12/2015
 * Time: 20:08
 */
class TableException extends Exception
{

    /**
     * TableException constructor.
     * Create an instance of TableException
     * @param string $message The exception message
     * @param string Table
     * @param int $databases List of database
     */
    public function __construct($message, $table, $databases)
    {
        echo $_SESSION['twig']->render("error.html.twig", array("error" => $message, "alldbname" => $databases));
    }
}