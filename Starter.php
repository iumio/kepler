<?php
/**
 * Created by PhpStorm.
 * User: DanyRafina
 * Date: 18/12/2015
 * Time: 09:50
 */

class Starter {


    public static function switchOnApp() {
        $a = new Starter();
        $array = $a->initAutoloader();
        $a->__autoloader($array);
        $a->initTwig();
    }
    
    public function initAutoloader(){
        try {
            $array = array("CONTROLLER/Controller.php",
                "MODEL/PDO/my_PDO.php",
                "MODEL/Model.php",
                "PRIVATE/Twig/lib/Twig/Autoloader.php");
            return  $array;
        } catch (Exception $exc) {
            $error = "Erreur d'execution de l'autoloader ";
            include 'VIEWS/Error.html.twig';
        }
    }

    public function __autoloader($array) {
        include_once 'Autoloader.php';
        foreach ($array as $one) {
            Autoloader::register ($one);
        }
    }

    public function initTwig()
    {
        try {
            Twig_Autoloader::register();
            $_SESSION['twig'] = new Twig_Environment(new Twig_Loader_Filesystem('VIEWS'), array('cache' => false, 'debug' => true));
        } catch (Exception $e) {
            $error = "Twig n'est pas disponible";
            include 'VIEWS/Error.html.twig';
        }
    }
}
