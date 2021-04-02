<?php

namespace App\Http\Controllers\Api\Movie;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use App\Models\User;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function ratingMovie(Request $request, $id)
    {

        $user_id = (int)$id;
        $movie_id = (int)$request->movie_id;
        $num_of_ratings = (int)$request->num_of_ratings;

        // insert data in pivot table
        $user = User::find($user_id);
        $movie = $user->movies()->find($movie_id);

        if ($movie == null) {
            $user->movies()->attach($movie_id, ['num_of_ratings' => $num_of_ratings]);
        } else if ($movie->pivot->user_id == $user_id
            && $movie->pivot->movie_id == $movie_id) {

            $user->movies()->updateExistingPivot($movie_id, ['num_of_ratings' => $num_of_ratings]);
        }

        // calculating the ratings for all movies
        $movie = Movie::find($movie_id);
        $users = $movie->users()->get();

        $total_ratings = 0;
        $users_count = $users->count();

        foreach ($users as $user) {
            $total_ratings = $total_ratings + $user->pivot->num_of_ratings;
        }

        // updating the final rating on specific movie
        Movie::find($movie->id)->update([
            'avg_rating' => $total_ratings / $users_count
        ]);

        // get movies with related users
        $movie['users'] = $users;

        return response()->json($movie);
    }

    public function getRating($id)
    {
        $movie = Movie::find($id);
        $users = $movie->users()->get();

        return response()->json($users);
    }
}
