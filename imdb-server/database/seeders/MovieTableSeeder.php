<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert(array(
            array(
                'title' => 'Iron Man',
                'banner' => 'images/movie_banner/iron_man.jpg',
                'movie_description'=>'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
                'avg_rating'=>'4.1',
                'year'=>'2008'
            ),
            array(
                'title' => 'Iron Man 2',
                'banner' => 'images/movie_banner/iron_man_2.jpg',
                'movie_description'=>'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.',
                'avg_rating'=>'4.5',
                'year'=>'2010'
            ),
            array(
                'title' => 'Iron Man 3',
                'banner' => 'images/movie_banner/iron_man_3.jpg',
                'movie_description'=>'When Tony Stark\'s world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.',
                'avg_rating'=>'3.8',
                'year'=>'2013'
            ),
             array(
                 'title' => 'Avengers: Age of Ultron',
                 'banner' => 'images/movie_banner/avengers _age_of_ultron.jpg',
                 'movie_description'=>'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
                 'avg_rating'=>'4.1',
                 'year'=>'2015'
             ),
            array(
                'title' => 'Captain America: The First Avenger',
                'banner' => 'images/movie_banner/captain_america_the _first_avenger.jpg',
                'movie_description'=>'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
                'avg_rating'=>'4.5',
                'year'=>'2011'
            ),
            array(
                'title' => 'Captain America: The Winter Soldier',
                'banner' => 'images/movie_banner/captain_america_the_winter_soldier.jpg',
                'movie_description'=>'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.',
                'avg_rating'=>'3.8',
                'year'=>'2014'
            ),
            array(
                'title' => 'Terminator: Dark Fate',
                'banner' => 'images/movie_banner/terminator_dark_fate.jpg',
                'movie_description'=>'An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race.',
                'avg_rating'=>'3.8',
                'year'=>'2019'
            ),
            array(
                'title' => 'The Avengers',
                'banner' => 'images/movie_banner/the_avengers.jpg',
                'movie_description'=>'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
                'avg_rating'=>'3.8',
                'year'=>'2012'
            ),
            array(
                'title' => 'Thor',
                'banner' => 'images/movie_banner/thor.jpg',
                'movie_description'=>'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
                'avg_rating'=>'3.8',
                'year'=>'2011'
            ),
            array(
                'title' => 'Thor: The Dark World',
                'banner' => 'images/movie_banner/thor_the_dark_world.jpg',
                'movie_description'=>'When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.',
                'avg_rating'=>'3.8',
                'year'=>'2013'
            )
        ));
    }
}
