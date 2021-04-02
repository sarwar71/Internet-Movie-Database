<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CustomlistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customlists')->insert(array(
            array(
                'user_id' => '1',
                'watchlist_title' => 'Action movie 1',
                'watchlist_description'=>'action movie 1, fav 1'
            ),
            array(
                'user_id' => '1',
                'watchlist_title' => 'Action movie 2',
                'watchlist_description'=>'action movie 1, fav 2'
            ),
            array(
                'user_id' => '2',
                'watchlist_title' => 'Action movie 3',
                'watchlist_description'=>'Horror movie fav'
            )
        ));
    }
}
