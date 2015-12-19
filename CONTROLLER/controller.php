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
        echo $_SESSION['twig']->render("index.html.twig");
    }

    public function db_listAction()
    {
        $model = new Model();
        //$model->getDB();
        print_r($model->getDB());
        //echo $_SESSION['twig']->render("index.html.twig",$model->getDB());
    }
}