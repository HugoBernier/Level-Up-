<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserQuest extends Model
{
    use HasFactory;

    /**
     * L'utilisateur qui a complété cette quête.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * La quête associée à cette complétion.
     */
    public function quest()
    {
        return $this->belongsTo(Quest::class);
    }
}
