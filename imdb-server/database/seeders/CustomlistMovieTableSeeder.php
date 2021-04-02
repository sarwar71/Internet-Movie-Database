<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomlistMovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customlists_movies')->insert(array(
            array(
                'customlist_id' => '1',
                'movie_id' => '1',
                'watchlist_title'=>'Action movie 1'
            ),
            array(
                'customlist_id' => '1',
                'movie_id' => '2',
                'watchlist_title'=>'Action movie 1'
            ),
            array(
                'customlist_id' => '2',
                'movie_id' => '2',
                'watchlist_title'=>'Action movie 2'
            ),
            array(
                'customlist_id' => '2',
                'movie_id' => '3',
                'watchlist_title'=>'Action movie 2'
            ),
        array(
            'customlist_id' => '3',
            'movie_id' => '7',
            'watchlist_title'=>'Action movie 3'
        )
        ));
    }
}
