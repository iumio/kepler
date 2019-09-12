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

namespace Kepler\Controller;
use Kepler\Model\Model;

abstract class AbstractController
{
    protected $model_instance = NULL;


    /** This is a Singleton
     * Get an instance of model
     * @return Model Instance of Model Class
     */
    protected function getModel()
    {
        return ($this->model_instance == NULL) ? $this->model_instance = new Model() : $this->model_instance;
    }
}