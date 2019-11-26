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

class LoginException extends \Exception
{
    /**
    * DatabaseException constructor.
    * Create an instance of DatabaseException
    * @param string $event The exception message
    */
    public function __construct(\PDOException $event)
    {
        unset($_SESSION['login']);
        unset($_SESSION['passwd']);
        echo $_SESSION['twig']->render("login.html.twig", array("error" => $event->getMessage()));
        exit(1);
    }
}