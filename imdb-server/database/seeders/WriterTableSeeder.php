<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WriterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('writers')->insert(array(
            array(
                'writer_name' => 'Mark Fergus',
                'writer_image' => 'images/writer/mark_fergus.jpg',
                'writer_description' => 'Mark Fergus is a writer and producer, known for Children of Men (2006), Iron Man (2008) and The Expanse (2015).',
                'writer_birth' => 'August 10, 1971'
            ),
            array(
                'writer_name' => 'Hawk Ostby',
                'writer_image' => 'images/writer/hawk_ostby.jpg',
                'writer_description' => 'awk was born in India circa 1966 but grew up in Nordstrand and Slemdal in Oslo, Norway. He moved to Malaysia and Singapore when he was 15 and has lived in the United States since he was 19. His parents met in Scotland, mother is Indian and his father is Norwegian. His sisters were born in Sweden.',
                'writer_birth' => 'August 10, 1971'
            ),
            array(
                'writer_name' => 'Justin Theroux',
                'writer_image' => 'images/writer/justin_theroux.jpg',
                'writer_description' => 'Justin was born and raised in Washington, DC, the son of Phyllis (Grissim), a writer for The Washington Post, and Eugene Theroux, a corporate lawyer. He is a nephew of writer Paul Theroux and a cousin of journalists Louis Theroux and Marcel Theroux. His father is of French-Canadian and Italian descent, and his mother has English and German.',
                'writer_birth' => 'August 10, 1971'
            ),
            array(
                'writer_name' => 'Joss Whedon',
                'writer_image' => 'images/writer/joss_whedon.jpg',
                'writer_description' => 'Joss Whedon is the middle of five brothers - his younger brothers are Jed Whedon and Zack Whedon. Both his father, Tom Whedon and his grandfather, John Whedon were successful television writers. Joss\' mother, Lee Stearns, was a history teacher and she also wrote novels as Lee Whedon. Whedon was raised in New York and was educated at Riverdale Country School, where his mother also taught. He also attended Winchester College in England for two years, before graduating with a film degree from Wesleyan University.',
                'writer_birth' => 'June 23, 1964'
            ),
            array(
                'writer_name' => 'Stan Lee',
                'writer_image' => 'images/writer/stan_lee.jpg',
                'writer_description' => 'tan was born in New York City, to Celia (Solomon) and Jack Lieber, a dress cutter. His parents were Romanian Jewish immigrants. Lee co-created Spider-Man, the Hulk, Doctor Strange, the Fantastic Four, Iron Man, Daredevil, Thor, the X-Men, and many other fictional characters, introducing a thoroughly shared universe into superhero comic books.',
                'writer_birth' => 'December 28, 1922'
            ),
            array(
                'writer_name' => 'Shane Black',
                'writer_image' => 'images/writer/shane_black.jpg',
                'writer_description' => 'Considered one of the pioneer screenwriters of the action genre, Black made his mark with his Lethal Weapon (1987) screenplay. He also collaborated on the story of the sequel, Lethal Weapon 2 (1989). Each successive script he turned in had a higher price attached it, from The Last Boy Scout (1991) to The Long Kiss Goodnight (1996), and in between a re-write on the McTiernan/Schwarzenegger Last Action Hero (1993) script.',
                'writer_birth' => 'December 16, 1961'
            ),
            array(
                'writer_name' => 'Stephen McFeely',
                'writer_image' => 'images/writer/stephen_mc_feely.jpg',
                'writer_description' => 'Stephen McFeely is a writer and producer, known for Avengers: Endgame (2019), Captain America: Civil War (2016) and Captain America: The Winter Soldier (2014).',
                'writer_birth' => 'December 16, 1961'
            ),
            array(
                'writer_name' => 'Christopher Markus',
                'writer_image' => 'images/writer/christopher_markus.jpg',
                'writer_description' => 'Christopher Markus is a writer and producer, known for Avengers: Endgame (2019), Avengers: Infinity War (2018) and Captain America: Civil War (2016). He has been married to Claire Saunders since October 22, 2011.',
                'writer_birth' => 'December 16, 1961'
            ),
            array(
                'writer_name' => 'Justin Rhodes',
                'writer_image' => 'images/writer/justin_rhodes.jpg',
                'writer_description' => 'Justin Rhodes was born on April 6, 1980 in Arlington, Texas, USA. He is a writer and editor, known for Terminator: Dark Fate (2019), RoboCop Returns and Unmanned.',
                'writer_birth' => 'April 6, 1980'
            )
        ));
    }
}
