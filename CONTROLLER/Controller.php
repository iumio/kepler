<?php

/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 09:46
 */
class Controller
{

    //KEVIN - La méthode getModel est en faite un Singleton
    //C'est à dire que cette méthode va s'assurer que il y'a une seule instance de Model!
    // Donc quand tu dois accéder à la couche Model pour faire des requêtes
    // Toujours utiliser cette méthode !!!
    static private $modal_instance = NULL;

    /**
     * First Page of App
     */
    public function indexAction()
    {
        $model = $this->getModel();
        $databases = $model->get_all_db()->fetchAll();
        $version = $model->get_server_version()->fetchColumn();
        $us = $model->get_user_co()->fetchColumn();
        $charset = $model->get_charset()->fetchColumn();
        $log = $this->getLogs();
        echo $_SESSION['twig']->render("index.html.twig",
            array("databases"=>$databases, "ip"=>$_SERVER['SERVER_NAME'],
                "version"=>$version,"user"=>$us,
                "charset"=>$charset,
                "os"=>php_uname(),
                "server_type"=>$_SERVER["SERVER_SOFTWARE"],
                "phpv"=>phpversion(),
                "logs"=>$log));
        unset($model);
    }

    /** Get log informations
     * @return array Log info
     */
    public function getLogs()
    {
        $file = fopen("CONTROLLER/LOG/log.txt","r");
        $log = array();
        while ($read = fgets($file, 8192))
            array_push($log, $read);
        fclose($file);
        return $log;
    }

    /** This is a Singleton
     * Get an instance of model
     * @return Model Instance of Model Class
     */
    private function getModel()
    {
        return (self::$modal_instance == NULL)? self::$modal_instance = new Model(): self::$modal_instance;
    }

    /**
     * show tables of a DB
     */
    public function showDB($dbname)
    {
        $model = $this->getModel();
        $databases = $model->get_all_db()->fetchAll();
        $tables = $model->get_tables($dbname)->fetchAll();
        echo $_SESSION['twig']->render("db_info.html.twig",
            array("databases"=>$databases,"tables"=>$tables,"dbname"=>$dbname));
        unset($model);
    }

    /**
     * show struct of a table
     */
    public function showTableStruct($dbname, $t_name)
    {
        $model = $this->getModel();
        $databases = $model->get_all_db()->fetchAll();
        $tables_struct = $model->get_tables_struct($dbname, $t_name)->fetchAll();
        echo $_SESSION['twig']->render("table_struct.html.twig",
            array("databases"=>$databases,"tables_struct"=>$tables_struct, "t_name"=>$t_name));
        unset($model);
    }

    public function formNewDB()
    {
        $model = $this->getModel();
        $databases = $model->get_all_db()->fetchAll();
        echo $_SESSION['twig']->render('addDB.html.twig',array("databases"=>$databases));
        unset($model);
    }

    public function addDB($newDBname)
    {
        $model = $this->getModel();
        $databases = $model->get_all_db()->fetchAll();
        $model->addNewDB($newDBname);
        echo $_SESSION['twig']->render('addDB.html.twig',array("databases"=>$databases));
        unset($model);
    }
}