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
        $list_db = Connector::prepare("SELECT create_time as crea, sum(data_length + index_length) / 1024 as memory, COUNT(*) as nb, table_schema as db FROM information_schema.tables GROUP BY table_schema;");
        return $list_db;
    }

    /** Get all database by name
     * @return array
     */
    public function get_all_db_name()
    {
        $list_db = Connector::prepare("SELECT SCHEMA_NAME AS `Database` FROM INFORMATION_SCHEMA.SCHEMATA");
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
        $tables_struct = Connector::prepare("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema= ? AND TABLE_NAME = ?", array($dbname, $t_name));
        return $tables_struct;
    }

    /** request add new db
     * @param $newDBname
     * @return PDOStatement|string
     */
    public function add_new_db($newDBname)
    {
        try {
            $result = Connector::prepare("CREATE DATABASE $newDBname", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    public function use_and_source($dbname, $filepath)
    {
        try {
            $result = Connector::prepare("use $dbname", NULL);
            $result = Connector::prepare("SOURCE $filepath", NULL);
            echo $result->queryString;
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    /** request delete DB
     * @param $db
     * @return PDOStatement|string
     */
    public function drop_db($db)
    {
        try {
            $result = Connector::prepare("drop database $db", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    public function delete_data($db, $table, $id_col_name, $id_field)
    {
        try {
            $result = Connector::prepare("DELETE FROM $db.$table WHERE $table.$id_col_name = ?", array($id_field));
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    public function edit_data($db, $table, $id_col_name, $col_name_edit, $id_value, $value)
    {
        try {
            $result = Connector::prepare("UPDATE $db.$table SET $col_name_edit = ? WHERE $table.$id_col_name = ?;", array($value, $id_value));
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    /** request delete table
     * @param $dbname
     * @param $table
     * @return PDOStatement|string
     */
    public function drop_table($dbname, $table)
    {
        try {
            $result = Connector::prepare("use $dbname", NULL);
            $result = Connector::prepare("drop table $table", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    /** request rename table
     * @param $dbname
     * @param $table
     * @param $new_name_table
     * @return PDOStatement|string
     */
    public function rename_the_table($dbname, $table, $new_name_table)
    {
        try {
            $result = Connector::prepare("RENAME TABLE $dbname.$table TO $dbname.$new_name_table", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    /** get data of a table
     * @param $dbname
     * @param $table
     * @return PDOStatement|string
     */
    public function get_content_table($dbname, $table)
    {
        try {
            $result = Connector::prepare("SELECT * FROM $dbname.$table", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
    }

    /** check if table exist
     * @param $dbname
     * @param $table
     * @return PDOStatement|string
     *
     */
    public function check_table_exist($dbname, $table)
    {
        try {
            $result = Connector::prepare("SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = ? AND TABLE_SCHEMA= ?", array($table, $dbname));
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
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

    /** check if db exist
     * @param $dbname
     * @return PDOStatement|string
     */
    public function check_database_exist($dbname)
    {
        try {
            $result = Connector::prepare("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$dbname'", NULL);
            return $result;
        } catch (PDOException $e) {
            return ($e->getMessage());
        }
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