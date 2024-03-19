<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Relationships :
        /**
         * One to one 1-1
         * One to many 1-*
         * One to many inversed / belongs to
         * Many to Many *-*
         */
        Schema::table('publications', function (Blueprint $table) {
            $table->unsignedBigInteger("profile_id");
            $table->foreign("profile_id")->references("id")->on("profiles")->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('publications', function (Blueprint $table) {
            $table->dropColumn("profile_id");
        });
    }
};
