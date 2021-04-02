<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies_users')->insert(array(
            array(
                'movie_id' => '1',
                'user_id' => '1',
                'num_of_ratings' => '4',
                'watchlist'=>true
            ),
            array(
                'movie_id' => '1',
                'user_id' => '2',
                'num_of_ratings' => '3',
                'watchlist'=>false
            ),
            array(
                'movie_id' => '1',
                'user_id' => '3',
                'num_of_ratings' => '5',
                'watchlist'=>false
            ),
            array(
                'movie_id' => '2',
                'user_id' => '1',
                'num_of_ratings' => '2',
                'watchlist'=>true
            ),
            array(
                'movie_id' => '3',
                'user_id' => '1',
                'num_of_ratings' => '3',
                'watchlist'=>false
            ),
            array(
                'movie_id' => '5',
                'user_id' => '3',
                'num_of_ratings' => '5',
                'watchlist'=>false
            ),
            array(
                'movie_id' => '4',
                'user_id' => '1',
                'num_of_ratings' => '2',
                'watchlist'=>true
            ),
            array(
                'movie_id' => '6',
                'user_id' => '1',
                'num_of_ratings' => '3',
                'watchlist'=>false
            )
        ));
    }
}
