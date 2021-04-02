<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Api\Movie\MovieController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/search', [MovieController::class, 'index'])->name('search');
Route::get('/autocomplete', [MovieController::class, 'autoCompleteSearch'])->name('autocomplete');

