<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'watchlist_title',
        'watchlist_description'
    ];

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'customlists_movies',
            'customlist_id', 'movie_id')
            ->withPivot('watchlist_title');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
