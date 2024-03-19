<?php

namespace Database\Seeders;

use App\Models\stagiare;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StagiairesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        stagiare::factory(5)->create();
    }
}
