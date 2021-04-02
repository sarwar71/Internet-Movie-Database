<?php

namespace App\Http\Controllers\Api\Movie;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class WatchlistController extends Controller
{
    public function addToWatchlist(Request $request, $id)
    {

        $user_id = (int)$id;
        $movie_id = (int)$request->movie_id;
        $user = User::find($user_id);

        $movie = $user->movies()->find($movie_id);
        if ($movie == null) {
            $user->movies()->attach($movie_id, ['watchlist' => 1]);
        } else {
            if (!$movie->pivot->watchlist && $movie->pivot->user_id == $user_id
                && $movie->pivot->movie_id == $movie_id) {

                $user->movies()->updateExistingPivot($movie_id, ['watchlist' => 1]);
            } else if ($movie->pivot->watchlist && $movie->pivot->user_id == $user_id
                && $movie->pivot->movie_id == $movie_id) {

                $user->movies()->updateExistingPivot($movie_id, ['watchlist' => 0]);
            }
        }

        // get users with related movies
        $user['movies'] = $user->movies()->get();

        return response()->json($user);
    }

    public function getWatchlist()
    {

        $users = User::all();
        foreach ($users as $user){
            $movies[] = $user->movies()->get();
        }

        return response()->json($movies);
    }
}
