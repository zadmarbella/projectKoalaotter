<?php namespace AppResponse;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Request;

class AppResponse extends Response 
{

    /**
     * The type of resource. For example: card, trasaction, user, grant, etc ....
     *
     * @var string
     */
    public $resource; 

    /**
     * The url at which the resources is available. For example: /services/transactions/234
     *
     * @var string
     */
    public $url; 

    /**
     * Error code object with error details. 
     *
     * @var array
     */
    public $error; 

    /**
     * Data returning back to the users. Most of the time, it will be the resource returning back.
     *
     * @var string
     */
    public $data;

    public function __construct()
    {
        $this->resource = NULL ; // TODO: Really default is a message?
        $this->url = Request::url();
        $this->error = 0;
        $this->data = NULL;
    }

    public function json_ok()
    {
        $body = $this->toArray();
        return Response::json( $body, 200 );
    }

    public function json_401( $message = 'Authentication Failure' )
    {
        $this->error = array();
        $this->error['code'] = '401';
        $this->error['message'] = $message;

        $body = $this->toArray();
        return Response::json( $body, 200 );
    }

    public function toArray()
    {
        $arr = array();

        foreach( $this as $key => $val) 
        {
            $arr[$key] = $val;
        }

        return $arr;
    }
}
