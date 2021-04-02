<?php

namespace App\Http\Controllers\Api\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\MovieDetail;
use App\Models\MovieDirector;
use App\Models\User;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function getAllMovies()
    {

        $movies = Movie::all();

        foreach ($movies as $movie) {
            $movie['banner'] = asset($movie->banner);

            $movie['directors'] = $movie->directors()->get();
            foreach ($movie->directors as $director) {
                $director['director_image'] = asset($director->director_image);
            }

            $movie['writers'] = $movie->writers()->get();
            foreach ($movie->writers as $writer) {
                $writer['writer_image'] = asset($writer->writer_image);
            }

            $movie['users'] = $movie->users()->get();
        }

        return response()->json($movies);
    }

    public function autoCompleteSearch($title)
    {

        $movies = Movie::select("id", "title", "banner", "year")->where("title", "LIKE", "%{$title}%")->get();

        foreach ($movies as $movie) {
            $movie['banner'] = asset($movie->banner);
        }

        return response()->json($movies);
    }

    public function findById($id)
    {
        $movie = Movie::find($id);

        $movie['banner'] = asset($movie->banner);

        $movie['directors'] = $movie->directors()->get();
        foreach ($movie->directors as $director) {
            $director['director_image'] = asset($director->director_image);
        }

        $movie['writers'] = $movie->writers()->get();
        foreach ($movie->writers as $writer) {
            $writer['writer_image'] = asset($writer->writer_image);
        }

        return response()->json($movie);
    }
}
