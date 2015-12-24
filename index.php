<?php
/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 14:16
 */

session_start();
$request = NULL;
if (isset($_REQUEST)) {
    $request = $_REQUEST;
}

Index::main($request);

class Index
{
    static public function main($request)
    {
        require_once "Starter.php";
        Starter::switchOnApp();
        $controller = new Controller();
        if ($request == NULL)
            $controller->indexAction();
        else
            self::router($request);
        unset($controller);
    }

    static private function router($request)
    {
        // Voici le routeur !
        // Déjà je check si ya une action (isset $request["run"]) si ya pas d'action c'est mort , je génère une erreur
        if (isset($request["run"])) {
            $controller = new Controller();
            // Et la je check la valeur de run pour voir si ya une méthode dan sle controlleur correspondante sinon je génère une errreur aussi
            //Donc il y'aura beaucoup de else if !!!

            if ($request["run"] == "showDB")
                // J'envoie value pour cette méthode car la méthode a besoin de value
                // Mais si tu as des methodes qui ont besoin plus de paramètre alors tu envoies les autres valeurs
                // Par exemple si tu veux supprimer une table d'une base ben taura besoin le nom de la base et le nom de la table
                // Alors faudra que tu envoies les deux valeurs au contrôleur ( $request["dbname"] & $request["tablename"] )
                // Tu fais comme tu veux après ;)
                // N'oublie pas surtout , détruit tes objets !!!
                // Bien que PHP s'en fou mais c'est encore mieux d'y penser
                // C'est une meilleure manière de programmer !!!
                $controller->showDB($request["value"]);

            else if ($request["run"] == "showTableStruct")
                $controller->showTableStruct($request["dbname"], $request['tName']);
            else if ($request["run"] == "indexAction")
                $controller->indexAction();
            else if ($request["run"] == "formNewDB")
                $controller->formNewDB();
            else if ($request["run"] == "addDB")
                $controller->addDB($request["nameDB"]);
            else {
                echo $_SESSION['twig']->render("error.html.twig", array("error" => "Mauvais paramètres !"));
            }
            unset($controller);
        } else
           echo $_SESSION['twig']->render("error.html.twig", array("error" => "Aucune action"));
    }
}

session_abort();