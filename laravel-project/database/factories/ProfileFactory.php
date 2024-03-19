<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name"=> fake()->name(),
            "email"=> fake()->unique()->safeEmail(),
            "password"=> Hash::make("password"),
            "description"=> fake()->text(),
            "image" => fake()->image("public",640,480,"user",true,true,null,false,"png")
        ];
    }
}
