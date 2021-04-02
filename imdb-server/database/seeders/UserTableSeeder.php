<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(array(
            array(
                'first_name' => 'kamal',
                'last_name' => 'hossen',
                'email'=>'kamal@gmail.com',
                'password'=>Hash::make('11111111')
            ),
            array(
                'first_name' => 'jamal',
                'last_name' => 'hossen',
                'email'=>'jamal@gmail.com',
                'password'=> Hash::make('11111111')
            ),
            array(
                'first_name' => 'sarwar',
                'last_name' => 'hossen',
                'email'=>'sarwar@gmail.com',
                'password'=>Hash::make('11111111')
            )
        ));
    }
}
