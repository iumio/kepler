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

use Controller\Controller;
class Index
{
    /** MAIN FUNCTION
     * @param $request
     */
    static public function main($request)
    {
        require_once "Starter.php";
        new Starter();
        $controller = new Controller();
        if ($request == NULL && self::check_login() == 0)
            echo $_SESSION['twig']->render("login.html.twig");
        else if (($request == NULL && self::check_login() == 1))
            $controller->indexAction();
        else if (isset($request["run"]) && $request["run"] == "showLogin")
            echo $_SESSION['twig']->render("login.html.twig");
        else if (isset($request["run"]) && $request["run"] == "makeLogin")
            self::on_login($request);
        else
            self::router($request);
        unset($controller);
    }

    /** when user is login
     * @param $request
     */
    static private function on_login($request)
    {
        $res = Controller::make_login($request['login'], $request['passwd']);
        if ($res != 0)
        {
            $controller = new Controller();
            $controller->indexAction();
            unset($controller);
        }

    }

    /** check if user is login
     * @return int
     */
    static private function check_login()
    {
        return (isset($_SESSION['login']) && isset($_SESSION['passwd']))? 1 : 0;
    }

    /** ROUTER
     * @param $request
     * @throws DatabaseException
     * @throws TableException
     */
    static private function router($request)
    {
        if(self::check_login() == 1)
        {
            if (isset($request["run"])) {
                $controller = new Controller();
                if ($request["run"] == "logout")
                    $controller->logout((isset($request['arg']) ? $request['arg'] : NULL));
                else if ($request["run"] == "showDB")
                    $controller->showDB($request["value"]);
                else if ($request["run"] == "showTableStruct")
                    $controller->showTableStruct($request["dbname"], $request['tName']);
                else if ($request["run"] == "indexAction")
                    $controller->indexAction();
                else if ($request["run"] == "formNewDB")
                    $controller->formNewDB();
                else if ($request["run"] == "make_query")
                    $controller->make_query($request['query']);
                else if ($request["run"] == "addDB")
                    $controller->addDB($request["nameDB"]);
                else if ($request["run"] == "renameDB")
                    $controller->renameDB($request["nameDB"], $request["newDBName"]);
                else if ($request["run"] == "deleteDB")
                    $controller->drop_db($request["nameDB"]);
                else if ($request["run"] == "delete_table")
                    $controller->delete_table($request["name_db"],$request["name_table"]);
                else if ($request["run"] == "rename_table")
                    $controller->rename_table($request["name_db"],$request["table_name"],$request["new_name_table"]);
                else if ($request["run"] == "delete_field")
                    $controller->delete_field($request["name_db"],$request["table_name"],$request["name_field"]);
                else if ($request["run"] == "content_table")
                    $controller->showTableData($request["dbname"],$request["t_name"]);
                else if ($request["run"] == "add_table")
                    $controller->add_table($request);
                else if ($request["run"] == "add_field")
                    $controller->add_field($request);
                else if ($request["run"] == "delete_data")
                    $controller->drop_data($request["name_db"],$request["table_name"],$request["id_col_name"],$request["id_field"]);
                else if ($request["run"] == "add_data")
                    $controller->add_data($request["name_db"],$request["table_name"],$request["field_name"],$request["new_data"]);
                else if ($request["run"] == "edit_field")
                    $controller->edit_field($request);
                else if ($request["run"] == "edit_data")
                    /// FUNCTION HAVE A LOT OF PARAMETERS
                    $controller->edit_data($request["name_db"],$request["table_name"],$request["id_col_name"],$request["col_name_edit"],$request["id_value"],$request["value"]);
                else {
                    echo $_SESSION['twig']->render("error.html.twig", array("error" => "Mauvais paramètres !"));
                }
                unset($controller);
            } else
                echo $_SESSION['twig']->render("error.html.twig", array("error" => "Aucune action"));
        }
        else
            echo $_SESSION['twig']->render("login.html.twig", array("error"=>"Vous n'êtes pas connecté!"));
    }
}