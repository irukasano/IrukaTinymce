<?php

class IrukaTinymceAppController extends AppController {
    public $components = array(
        //'IrukaTinymce.IrukaForumSession',
    );

    public $helpers = array(
        'Html',
        'Form',
    );

    public function beforeFilter()
    {
        parent::beforeFilter();
    }

    // redirect用 --------------------------------------------------------------------------------
    public function redirect405()
    {
        throw new MethodNotAllowedException();
    }

    public function redirect405Unless($f)
    {
        if ( !$f)
        {
            $this->redirect405();
        }
    }

    public function redirect404()
    {
        throw new NotFoundException();
    }

    public function redirect404Unless($f)
    {
        if ( !$f)
        {
            $this->redirect404();
        }
    }

    public function redirect403()
    {
        throw new ForbiddenException();
    }

    public function redirect403Unless($f)
    {
        if ( !$f)
        {
            $this->redirect403();
        }
    }

    public function redirect400()
    {
        throw new BadRequestException();
    }

    public function redirect400Unless($f)
    {
        if ( !$f)
        {
            $this->redirect400();
        }
    }
}
