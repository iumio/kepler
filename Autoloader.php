<?php


/**
 * Created by PhpStorm.
 * User: DanyRafina
 * Date: 18/12/2015
 * Time: 09:50
 */

class Autoloader {

    static public function register($class)
    {
        /// Je donne le chemin du projet
        $path = realpath('.');
        $array2 = explode(chr(92), $class);
        $count2 = count($array2) - 1;
        $class = $array2[$count2].".php";
        foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename) {
            /// Recursive iterator iterator avec la classe RecursiveDirecotory Iterator va me donner chaque fichier dans les sous dossiers
            if (strpos($filename, '.php') !== false && !strpos($filename, 'PRIVATE') && !strpos($filename, 'ENGINE_YAML')) {
                $array = explode("/", $filename);
                $count = count($array) - 1;
                if ($array[$count] == $class)
                    require_once $filename;
            }
        }
    }
}

/// spl_autoload_register va en faite me retourer la classe appellé c-a-d si j'ai besoin d'une classe dans un fichier , alors spl_autoloader est appellé et va appelé
// Autoloader::register pour charger ma classe
spl_autoload_register('\Autoloader::register');