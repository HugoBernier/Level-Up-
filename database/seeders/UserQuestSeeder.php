<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Quest;

class UserQuestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $quests = Quest::all();

        $users->each(function ($user) use ($quests) {
            $user->userQuests()->createMany(
                $quests->random(rand(5, 20))->map(fn ($quest) => [
                    'quest_id' => $quest->id,
                    'completed_at' => now()->subDays(rand(0, 365)),
                ])->toArray()
            );
        });
    }
}
