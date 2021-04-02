<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'banner',
        'movie_description',
        'avg_rating',
        'year'
    ];

    public function directors()
    {
        return $this->belongsToMany(Director::class, 'directors_movies',
            'movie_id', 'director_id');
    }

    public function writers()
    {
        return $this->belongsToMany(Writer::class, 'movies_writers',
            'movie_id', 'writer_id');
    }

    public function users(){
        return $this->belongsToMany(User::class, 'movies_users',
        'movie_id', 'user_id')
            ->withPivot('num_of_ratings')
            ->withPivot('watchlist');
    }

    public function customlists(){
        return $this->belongsToMany(Customlist::class, 'customlists_movies',
        'movie_id', 'customlist_id')
            ->withPivot('watchlist_title');;
    }
}
