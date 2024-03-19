<?php

namespace App\Models;

use App\Models\Publication;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ["created_at"];
    protected $fillable = [
        'name',
        'email',
        'password',
        'description',
        'image'
    ];

    public function getImageAttribute($value)
    {
        return $value ? $value : "image/Anime.jpg"  ;
    }
    // public function getRouteKeyName()
    // {
    // // return email par defaut in function show in controller
    // return "email";
    // }

    public function post()
    {
        return $this->hasMany(Publication::class);
    }
}
