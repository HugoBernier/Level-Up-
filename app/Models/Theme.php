<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Theme extends Model
{
    use HasFactory;

    /**
     * Les utilisateurs qui suivent ce thème.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * Les quêtes associées à ce thème.
     */
    public function quests()
    {
        return $this->hasMany(Quest::class);
    }
}
