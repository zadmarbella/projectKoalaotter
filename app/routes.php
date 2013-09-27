<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


Route::get( '/', function()
    {
        return View::make('main');
    }
);


Route::group( array('prefix' => 'service'), function()
    {
        Route::resource('authenticate', 'AuthenticationController');
        Route::resource('user', 'UserController');
    }
);

Route::get( '/apitest', function()
    {
        return Response::json( array
            ( 'error' => false
            , 'message' => "api Test")
            );
    }
);

