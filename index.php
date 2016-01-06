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
        new Starter();
        $controller = new Controller();
        if ($request == NULL)
            $controller->indexAction();
        else
            self::router($request);
        unset($controller);
    }

    static private function router($request)
    {
        if (isset($request["run"])) {
            $controller = new Controller();
            if ($request["run"] == "showDB")
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
            else if ($request["run"] == "edit_data")
                /// FUNCTION HAVE A LOT OF PARAMETER
                $controller->edit_data($request["name_db"],$request["table_name"],$request["id_col_name"],$request["col_name_edit"],$request["id_value"],$request["value"]);
            else {
                echo $_SESSION['twig']->render("error.html.twig", array("error" => "Mauvais paramètres !"));
            }
            unset($controller);
        } else
           echo $_SESSION['twig']->render("error.html.twig", array("error" => "Aucune action"));
    }
}

session_abort();