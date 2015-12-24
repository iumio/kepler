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
        $alldbname = $model->get_all_db_name()->fetchAll();
        $log = $this->getLogs();
        echo $_SESSION['twig']->render("index.html.twig",
            array("databases"=>$this->merge_databases($databases, $alldbname),
                "ip"=>$_SERVER['SERVER_NAME'],
                "version"=>$version,"user"=>$us,
                "charset"=>$charset,
                "os"=>php_uname(),
                "server_type"=>$_SERVER["SERVER_SOFTWARE"],
                "phpv"=>phpversion(),
                "logs"=>$log,
                "alldbname"=>$alldbname));
        unset($model);
    }

    // KEVIN ça c'est la méthode qui va fusionner les deux listes ( Show DATABASES et la putin de requêtes)
    /** Merge the two list of databases
     * @param $dbs1
     * @param $dbs2
     * @return mixed
     */
    private function merge_databases($dbs1, $dbs2)
    {
        for ($k = 0; $k < count($dbs2); $k++)
        {
            if ($this->list_db($dbs1, $dbs2[$k]['Database']) == 0)
                array_push($dbs1, array("db"=>$dbs2[$k]['Database'], "nb"=>0, "crea"=>NULL, "memory"=>0));
        }
        return ($dbs1);
    }

    private function list_db($list, $arg)
    {
        for ($i = 0; $i < count($list); $i++) {
            if ($arg == $list[$i]["db"])
                 return (1);
        }
        return (0);
    }



    public function getLogs()
    {
        $file = fopen("CONTROLLER/LOG/log.txt","r");
        $log = array();
        while ($read = fgets($file, 8192))
            array_push($log, $read);
        fclose($file);
        return array_reverse($log);
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
        $databases = $model->get_all_db_name()->fetchAll();
        $tables = $model->get_tables($dbname)->fetchAll();
        echo $_SESSION['twig']->render("db_info.html.twig",
            array("alldbname"=>$databases, "tables"=>$tables, "dbname"=>$dbname));
        unset($model);
    }

    /**
     * show struct of a table
     */
    public function showTableStruct($dbname, $t_name)
    {
        $model = $this->getModel();
        $databases = $model->get_all_db_name()->fetchAll();
        $tables_struct = $model->get_tables_struct($dbname, $t_name)->fetchAll();
        echo $_SESSION['twig']->render("table_struct.html.twig",
            array("alldbname"=>$databases, "tables_struct"=>$tables_struct, "t_name"=>$t_name));
        unset($model);
    }

    public function formNewDB()
    {
        $model = $this->getModel();
        $databases = $model->get_all_db_name()->fetchAll();
        echo $_SESSION['twig']->render('addDB.html.twig',array("alldbname"=>$databases));
        unset($model);
    }

    /// KEVIN la méthode
    public function addDB($newDBname)
    {
        $model = $this->getModel();
        $result = $model->add_new_db($newDBname);
        $c = $result->rowCount();

        if ($c)
        {
            $this->writeFile("La base de données $newDBname a été créé");
            echo 1;
        }
        else
        {
            $error = $result->errorInfo();
            $error = $error[0]." ".$error[1]."  ".$error[2];
            echo $error;
        }

        unset($model);
    }

    public function writeFile($message)
    {
        $file = fopen("CONTROLLER/LOG/log.txt","a");
        fwrite($file, $message."\n");
        fclose($file);
    }
}