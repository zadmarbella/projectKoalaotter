<?php

class UsersTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        $users = array(
            array(
                'email'      => 'koalaotter@example.org',
                'password'   => Hash::make('admin'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            )
        );

        DB::table('users')->insert( $users );
    }

}