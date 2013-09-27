<?php

class UserController extends \BaseController 
{
    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $user = new User();
        $user->email = Input::get('email');
        $user->password = Hash::make( Input::get('password') );
        $user->save();

        Auth::login( $user );

        return array(
            "resource" => "user",
            "url" => "/users/" . $user->id,
            "error" => null,
            "data" => $user->toArray()
        );
    }
    
}
