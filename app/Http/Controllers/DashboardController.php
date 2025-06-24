<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Quest;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {   
        $quests = Quest::all();

        return Inertia::render('dashboard', [
            'quests' => $quests,
        ]);
    }
}
