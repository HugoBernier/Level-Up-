<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Quest;
use App\Models\Theme;

class QuestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $themes = Theme::all();
        $themes->each(function ($theme) {
            Quest::factory()->count(15)->create(['theme_id' => $theme->id]);
        });
    }
}
