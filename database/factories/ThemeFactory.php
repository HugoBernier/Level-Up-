<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Theme>
 */
class ThemeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $themes = [
            'Langues',
            'Sport',
            'Développement personnel',
            'Programmation',
            'Lecture',
            'Musique',
            'Santé',
        ];
        return [
            'name' => $this->faker->unique()->randomElement($themes),
            'description' => $this->faker->sentence(8),
        ];
    }
}
