<?php

namespace App\Http\Controllers\Api\Movie;

use App\Http\Controllers\Controller;
use App\Models\Customlist;
use App\Models\User;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Boolean;

class CustomListController extends Controller
{
    public function getCustomLists($id)
    {

        $user = User::find($id);
        $customlists = $user->customlists()->get();

        foreach ($customlists as $customlist) {

            $customlist['movies'] = $customlist->movies()->get();

            foreach ($customlist->movies as $movie) {
                $movie['banner'] = asset($movie->banner);
            }
        }

        return response()->json($customlists);
    }

    public function addCustomList(Request $request, $id)
    {
        $user = User::find($id);

        if ($user == null) {
            Customlist::insert([
                'user_id' => $id,
                'watchlist_title' => $request->watchlist_title,
                'watchlist_description' => $request->watchlist_description
            ]);

        }
        $user = User::find($id);
        $customLists = $user->customlists()->get();

        $check = 0;
        foreach ($customLists as $customList) {
            if ($customList->watchlist_title == $request->watchlist_title) {
                $check = 1;
            }
        }
        if ($check == 0) {
            Customlist::insert([
                'user_id' => $id,
                'watchlist_title' => $request->watchlist_title,
                'watchlist_description' => $request->watchlist_description
            ]);
        }

        $customLists = $user->customlists()->get();

        if ($request->movie_id != null && $request->movie_id != "") {
            foreach ($customLists as $customList) {

                $movies = $customList->movies()->get();
                $customIdCheck = 0;

                foreach ($movies as $movie) {
                    if ($movie->pivot->movie_id == $request->movie_id) {
                        $customIdCheck = 1;
                    }
                }
                if ($customList->watchlist_title == $request->watchlist_title && $customIdCheck == 0) {
                    $customList->movies()->attach($request->movie_id, ['watchlist_title' => $request->watchlist_title]);
                }
            }
        }

        return response()->json($customLists);
    }
}
