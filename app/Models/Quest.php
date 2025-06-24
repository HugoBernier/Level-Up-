<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Quest extends Model
{
    use HasFactory;

    /**
     * Le thème auquel appartient cette quête.
     */
    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }

    /**
     * Les complétions utilisateur de cette quête.
     */
    public function userQuests()
    {
        return $this->hasMany(UserQuest::class);
    }
}
