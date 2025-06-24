<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Level extends Model
{
    use HasFactory;

    /**
     * Les utilisateurs qui sont à ce niveau.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
