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

namespace Kepler\Runner;

use Symfony\Component\Dotenv\Dotenv;

class Starter {

    public function __construct() {

        $dotenv = new Dotenv();
        $path = realpath(__DIR__.'/../../.env');
        $dotenv->load($path);
        $this->initTwig();
    }

    /** init TWIG
     *
     */
    public function initTwig()
    {
        try {
            $_SESSION['twig'] = new \Twig\Environment(new \Twig\Loader\FilesystemLoader('../views'), array('cache' => false, 'debug' => true));
            $_SESSION['twig']->addExtension(new \Twig\Extension\DebugExtension());
            $_SESSION['twig']->addGlobal('session', $_SESSION);
        } catch (\Exception $e) {
            $error = "Twig n'est pas disponible";
            include 'views/error.html.twig';
        }
    }
}
