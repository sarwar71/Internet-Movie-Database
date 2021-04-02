<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Movie\MovieController;
use App\Http\Controllers\Api\Movie\RatingController;
use App\Http\Controllers\Api\Movie\WatchlistController;
use App\Http\Controllers\Api\Movie\CustomListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::prefix('/user')->group(function () {

    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);
});

Route::prefix('/movies')->group(function () {

    Route::get('/get/all', [MovieController::class, 'getAllMovies']);
    Route::get('/search/{title}', [MovieController::class, 'autoCompleteSearch']);
});

Route::prefix('/movie')->group(function () {

    Route::post('/rating/{id}', [RatingController::class, 'ratingMovie']);
    Route::get('/get/rating/{id}', [RatingController::class, 'getRating']);
    Route::post('/add/watchlist/{id}', [WatchlistController::class, 'addToWatchlist']);
    Route::get('/get/watchlists', [WatchlistController::class, 'getWatchlist']);
});

Route::get('/get/custom/watchlist/{id}', [CustomListController::class, 'getCustomLists']);
Route::post('/add/custom/watchlist/{id}', [CustomListController::class, 'addCustomList']);




