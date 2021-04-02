<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Writer extends Model
{
    use HasFactory;

    protected $fillable = [
        'writer_name',
        'writer_image',
        'writer_description',
        'writer_birth'
    ];

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movies_writers',
            'writer_id', 'movie_id');
    }
}
