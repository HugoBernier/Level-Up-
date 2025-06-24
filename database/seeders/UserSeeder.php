<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Level;
use App\Models\Theme;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $levels = Level::all();
        $themes = Theme::all();

        // Création d'un admin
        $admin = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('adminpass'),
            'level_id' => $levels->random()->id,
        ]);
        $admin->assignRole('admin');
        $admin->themes()->attach($themes->random(rand(1, 3))->pluck('id')->toArray());

        // Création d'utilisateurs classiques
        User::factory()->count(20)->create([
            'level_id' => $levels->random()->id,
        ])->each(function ($user) use ($themes) {
            $user->themes()->attach($themes->random(rand(1, 3))->pluck('id')->toArray());
        });
    }
}
