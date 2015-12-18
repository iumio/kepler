<?php


/**
 * Created by PhpStorm.
 * User: DanyRafina
 * Date: 18/12/2015
 * Time: 09:50
 */
class Autoloader {
    
    static function register($class){
        require_once $class;
    }
}
