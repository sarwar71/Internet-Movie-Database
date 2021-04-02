<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DirectorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('directors')->insert(array(
            array(
                'director_name' => 'Jon Favreau',
                'director_image' => 'images/director/jon_favreau.jpg',
                'director_description'=>'Initially an indie film favorite, actor Jon Favreau has progressed to strong mainstream visibility into the millennium and, after nearly two decades in the business, is still enjoying character stardom as well as earning notice as a writer/producer/director.
The amiable, husky-framed actor with the tight, crinkly hair was born in Queens, New York on October 19, 1966, the only child of Madeleine (Balkoff), an elementary school teacher, and Charles Favreau, a special education teacher. His father has French-Canadian, German, and Italian ancestry, and his mother was from a Russian Jewish family. He attended the Bronx High School of Science before furthering his studies at Queens College in 1984. Dropping out just credits away from receiving his degree, Jon moved to Chicago where he focused on comedy and performed at several Chicago improvisational theaters, including the ImprovOlympic and the Improv Institute. He also found a couple of bit parts in films.',
                'director_birth'=>'October 19, 1966'
            ),
            array(
                'director_name' => 'Shane Black',
                'director_image' => 'images/director/shane_black.jpg',
                'director_description'=>'Considered one of the pioneer screenwriters of the action genre, Black made his mark with his Lethal Weapon (1987) screenplay. He also collaborated on the story of the sequel, Lethal Weapon 2 (1989). Each successive script he turned in had a higher price attached it, from The Last Boy Scout (1991) to The Long Kiss Goodnight (1996), and in between a re-write on the McTiernan/Schwarzenegger Last Action Hero (1993) script.',
                'director_birth'=>'December 16, 1961'
            ),
            array(
                'director_name' => 'Joss Whedon',
                'director_image' => 'images/director/joss_whedon.jpg',
                'director_description'=>'Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss\' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon. Whedon was raised in New York and was educated at Riverdale Country School, where his mother also taught. He also attended Winchester College in England for two years, before graduating with a film degree from Wesleyan University.',
                'director_birth'=>'June 23, 1964'
            ),
            array(
                'director_name' => 'Joe Johnston',
                'director_image' => 'images/director/joe_johnston.jpg',
                'director_description'=>'Joe Johnston was born on May 13, 1950 in Austin, Texas, USA as Joseph Eggleston Johnston II. He is a director, known for Captain America: The First Avenger (2011), Raiders of the Lost Ark (1981) and The Rocketeer (1991).',
                'director_birth'=>'May 13, 1950'
            ),
            array(
                'director_name' => 'Alan Taylor',
                'director_image' => 'images/director/alan_taylor.jpg',
                'director_description'=>'Alan Taylor was born in 1965 as Alan Jamieson Taylor. He is a director and producer, known for Game of Thrones (2011), Thor: The Dark World (2013) and The Emperor\'s New Clothes (2001). He has been married to Nicki Ledermann since 2004. They have three children.',
                'director_birth'=>'	1965'
            ),
            array(
                'director_name' => 'Kenneth Branagh',
                'director_image' => 'images/director/kenneth_branagh.jpg',
                'director_description'=>'Kenneth Charles Branagh was born on December 10, 1960, in Belfast, Northern Ireland, to parents William Branagh, a plumber and carpenter, and Frances (Harper), both born in 1930. He has two siblings, William Branagh, Jr. (born 1955) and Joyce Branagh (born 1970). When he was nine, his family escaped The Troubles by moving to Reading, Berkshire, England. At 23, Branagh joined the Royal Shakespeare Company, where he took on starring roles in "Henry V" and "Romeo and Juliet".',
                'director_birth'=>'December 10, 1960'
            ),
            array(
                'director_name' => 'Anthony Russo',
                'director_image' => 'images/director/anthony_russo.jpg',
                'director_description'=>'Anthony Russo was born on February 3, 1970 in Cleveland, Ohio, USA as Anthony J. Russo. He is a producer and director, known for Captain America: The Winter Soldier (2014), Avengers: Endgame (2019) and Avengers: Infinity War (2018).',
                'director_birth'=>'February 3, 1970'
            ),
            array(
                'director_name' => 'Joe Russo',
                'director_image' => 'images/director/joe_russo.jpg',
                'director_description'=>'Joe Russo was born on July 8, 1971 in Cleveland, Ohio, USA as Joseph Vincent Russo. He is a producer and director, known for Avengers: Endgame (2019), Avengers: Infinity War (2018) and Captain America: The Winter Soldier (2014).',
                'director_birth'=>'July 8, 1971'
            ),
            array(
                'director_name' => 'Tim Miller',
                'director_image' => 'images/director/tim_miller.jpg',
                'director_description'=>'Tim Miller is an American animator, film director, creative director and visual effects artist. He was nominated for the Academy Award for Best Animated Short Film for the work on his short animated film Gopher Broke. He made his directing debut with Deadpool. Miller is also famous for creating opening sequences of The Girl with the Dragon Tattoo and Thor: The Dark World.',
                'director_birth'=>'October 10, 1964'
            )
        ));
    }
}
