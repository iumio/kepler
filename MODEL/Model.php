<?php

/**
 * Created by PhpStorm.
 * User: kevinhuron
 * Date: 18/12/2015
 * Time: 09:50
 */
class Model
{
    /** Get all database
     * @return array
     */
    public function get_all_db()
    {
        // KEVIN - utilise la classe Connector comme ça pour faire des requêtes.
        // Connector::prepare($query)
        // Si c'est une requête ou il y'a des arguments alors
        // Connector::prepare("SELECT * FROM table_name WHERE id=?",array(1));
        // Ou Connector::prepare("SELECT * FROM table_name WHERE id=:id",array("id"=>1));
        // La classe Connector fait dejà la connection toute seule , y'a juste à l'appeler pour faire des requêtes
        // Donc Interdit de faire $instance = Connetor::getInstance()
        // En plus tu ne pourras pas y accéder car Connector::getInstance est une méthode privée statique !

        $list_db = Connector::prepare("SELECT create_time as crea, sum(data_length + index_length) / 1024 as memory, COUNT(*) as nb, table_schema as db FROM information_schema.tables GROUP BY table_schema;");
        return $list_db;
    }

    /** get all tables of a DB
     * @param $dbname
     * @return PDOStatement
     */
    public function get_tables($dbname)
    {
        $list_tables = Connector::prepare("SELECT table_name, data_length, table_rows FROM information_schema.tables WHERE table_schema= ? ", array($dbname));
        return $list_tables;
    }

    /** get struct of a tables
     * @param $dbname
     * @param $t_name
     * @return PDOStatement
     */
    public function get_tables_struct($dbname, $t_name)
    {
        $tables_struct = Connector::prepare("SELECT COLUMN_NAME, DATA_TYPE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema= ? AND TABLE_NAME = ?", array($dbname, $t_name));
        return $tables_struct;
    }

    public function addNewDB($newDBname)
    {
        Connector::prepare("CREATE DATABASE '?'", array($newDBname));
    }

    /** get the server
     * @return PDOStatement
     */
    public function get_server_version()
    {
        $version = Connector::prepare("select version()");
        return $version;
    }

    /** get the user connected
     * @return PDOStatement
     */
    public function get_user_co()
    {
        $version = Connector::prepare("select user()");
        return $version;
    }

    /** get the charset
     * @return PDOStatement
     */
    public function get_charset()
    {
        $version = Connector::prepare("select charset(user())");
        return $version;
    }
}