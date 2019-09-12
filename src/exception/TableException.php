<?php

/**
 * This is an kepler component
 *
 * (c) RAFINA DANY <dany.rafina@iumio.com>
 *
 * Kepler - Your Database Manager
 *
 * To get more information about licence, please check the licence file
 */

namespace Kepler\Exception;

class TableException extends \Exception
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