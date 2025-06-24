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
        $this->call([
            RoleAndPermissionSeeder::class,
            LevelSeeder::class,
            ThemeSeeder::class,
            QuestSeeder::class,
            UserSeeder::class,
            UserQuestSeeder::class,
        ]);
    }
}
