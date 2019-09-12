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

namespace Kepler\Model\Entity;
class Database
{
    private $name;
    private $table = array();
    private $nb_table;
    private $creation_date;
    private $memory;

    public function __construct($arg = NULL)
    {
        if ($arg == NULL)
            $this->name = $arg['name'];
    }

    public function getItem()
    {
        $model = new Model();

    }
    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return array
     */
    public function getTable()
    {
        return $this->table;
    }

    /**
     * @param array $table
     */
    public function setTable($table)
    {
        $this->table = $table;
    }

    /**
     * @return mixed
     */
    public function getCreationDate()
    {
        return $this->creation_date;
    }

    /**
     * @param mixed $creation_date
     */
    public function setCreationDate($creation_date)
    {
        $this->creation_date = $creation_date;
    }

    /**
     * @return mixed
     */
    public function getNbTable()
    {
        return $this->nb_table;
    }

    /**
     * @param mixed $nb_table
     */
    public function setNbTable($nb_table)
    {
        $this->nb_table = $nb_table;
    }

    /**
     * @return mixed
     */
    public function getMemory()
    {
        return $this->memory;
    }

    /**
     * @param mixed $memory
     */
    public function setMemory($memory)
    {
        $this->memory = $memory;
    }


}