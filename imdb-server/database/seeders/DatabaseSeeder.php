<?php

namespace Database\Seeders;

use App\Models\Customlist;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $this->call([
            DirectorMovieTableSeeder::class,
            MovieTableSeeder::class,
            DirectorTableSeeder::class,
            WriterTableSeeder::class,
            MovieUserTableSeeder::class,
            MovieWriterTableSeeder::class,
            UserTableSeeder::class,
            CustomlistTableSeeder::class,
            CustomlistMovieTableSeeder::class
        ]);
    }
}
