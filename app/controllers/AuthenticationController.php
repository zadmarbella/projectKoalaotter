<?php

class AuthenticationController extends \BaseController
{

    protected $resource = "Auth";

    /**
    * Constructor to initialize the response.
    */
    public function __construct()
    {
        $this->response = new AppResponse();
        $this->response->resource = $this->resource;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {

        $credentials = array
            ( 'email' => Input::get('email')
            , 'password' => Input::get('password')
            );

        if ( Auth::attempt( $credentials ) ) 
        {
            return $this->response->json_ok();
        }
        else
        {
            return $this->response->json_401();
        }
    }

    public function index()
    {
        Auth::logout();
        $rep = array( 'flash' => "You have been disconnected" );
        return Response::json( $rep, 200 );
    }

}
