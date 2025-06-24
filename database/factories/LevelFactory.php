<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Level>
 */
class LevelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $level = 1;
        static $xp = 0;
        $xp += 100 * $level;
        return [
            'level_number' => $level++,
            'xp_required' => $xp,
        ];
    }
}
