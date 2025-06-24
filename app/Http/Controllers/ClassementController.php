<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class ClassementController extends Controller
{
    public function index(Request $request)
    {
        $users = User::with('level')
            ->join('levels', 'users.level_id', '=', 'levels.id')
            ->orderByDesc('levels.level_number')
            ->orderBy('users.name')
            ->select('users.*')
            ->paginate(15);

        return Inertia::render('classement', [
            'users' => $users,
        ]);
    }
}
