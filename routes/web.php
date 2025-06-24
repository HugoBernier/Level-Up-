<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ClassementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard')->can('view-dashboard');

    Route::get('/explorer', function () {
        return Inertia::render('explorer');
    })->name('explorer')->can('view-explorer');

    Route::get('/classement', [ClassementController::class, 'index'])->name('classement')->can('view-explorer');

    Route::get('/options', function () {
        return Inertia::render('options');
    })->name('options')->can('view-explorer');

    Route::get('/aide', function () {
        return Inertia::render('aide');
    })->name('aide')->can('view-explorer');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
