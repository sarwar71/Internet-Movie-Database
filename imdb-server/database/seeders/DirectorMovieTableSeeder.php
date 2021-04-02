<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DirectorMovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('directors_movies')->insert(array(
            array(
                'movie_id' => '1',
                'director_id' => '1'
            ),
            array(
                'movie_id' => '2',
                'director_id' => '1'
            ),
            array(
                'movie_id' => '3',
                'director_id' => '2'
            ),
            array(
                'movie_id' => '4',
                'director_id' => '3'
            ),
            array(
                'movie_id' => '5',
                'director_id' => '4'
            ),
            array(
                'movie_id' => '6',
                'director_id' => '7'
            ),
            array(
                'movie_id' => '6',
                'director_id' => '8'
            ),
            array(
                'movie_id' => '7',
                'director_id' => '9'
            ),
            array(
                'movie_id' => '8',
                'director_id' => '3'
            ),
            array(
                'movie_id' => '9',
                'director_id' => '6'
            ),
            array(
                'movie_id' => '10',
                'director_id' => '5'
            )
        ));
    }
}
