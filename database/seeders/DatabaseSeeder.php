<?php

namespace Database\Seeders;

use App\Models\Level;
use App\Models\Quest;
use App\Models\Theme;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Création des rôles et de l'admin
        $this->call([
            RoleAndPermissionSeeder::class,
        ]);

        $admin = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('adminpass'),
        ]);

        $admin->assignRole('admin');

        // 2. Création des niveaux
        Level::factory()->count(10)->create();
        $levels = Level::all();

        // 3. Création des thèmes et des quêtes associées
        $themes = Theme::factory()->count(7)->create();
        $themes->each(function ($theme) {
            Quest::factory()->count(15)->create(['theme_id' => $theme->id]);
        });
        $quests = Quest::all();

        // 4. Création des utilisateurs
        User::factory()->count(20)->create([
            'level_id' => $levels->random()->id,
        ])->each(function ($user) use ($themes, $quests) {
            // 5. Attribuer des thèmes suivis à chaque utilisateur
            $user->themes()->attach(
                $themes->random(rand(1, 3))->pluck('id')->toArray()
            );

            // 6. Simuler la complétion de quelques quêtes pour chaque utilisateur
            $user->userQuests()->createMany(
                $quests->random(rand(5, 20))->map(fn ($quest) => [
                    'quest_id' => $quest->id,
                    'completed_at' => now()->subDays(rand(0, 365)),
                ])->toArray()
            );
        });
    }
}
