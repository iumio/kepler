<?php

/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 09:46
 */
class Controller
{
    public function indexAction()
    {
        return $_SESSION['twig']->render("index.html.twig");
    }
}