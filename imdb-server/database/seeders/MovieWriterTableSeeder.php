<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieWriterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies_writers')->insert(array(
            array(
                'movie_id' => '1',
                'writer_id' => '1'
            ),
            array(
                'movie_id' => '1',
                'writer_id' => '2'
            ),
            array(
                'movie_id' => '1',
                'writer_id' => '5'
            ),
            array(
                'movie_id' => '2',
                'writer_id' => '3'
            ),
            array(
                'movie_id' => '2',
                'writer_id' => '5'
            ),
            array(
                'movie_id' => '3',
                'writer_id' => '6'
            ),
            array(
                'movie_id' => '3',
                'writer_id' => '5'
            ),
            array(
                'movie_id' => '4',
                'writer_id' => '4'
            ),
            array(
                'movie_id' => '4',
                'writer_id' => '5'
            ),
            array(
                'movie_id' => '5',
                'writer_id' => '7'
            ),
            array(
                'movie_id' => '5',
                'writer_id' => '8'
            ),
            array(
                'movie_id' => '6',
                'writer_id' => '7'
            ),
            array(
                'movie_id' => '6',
                'writer_id' => '8'
            ),
            array(
                'movie_id' => '7',
                'writer_id' => '9'
            ),
            array(
                'movie_id' => '8',
                'writer_id' => '4'
            ),
            array(
                'movie_id' => '9',
                'writer_id' => '5'
            ),
            array(
                'movie_id' => '9',
                'writer_id' => '7'
            ),
            array(
                'movie_id' => '10',
                'writer_id' => '7'
            ),
            array(
                'movie_id' => '10',
                'writer_id' => '8'
            )
        ));
    }
}
