<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Profile;
use App\Models\Publication;
use App\Policies\publicationPolicy;
use App\Policies\PublicationPolicy as PoliciesPublicationPolicy;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\GenericUser;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Publication::class => publicationPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        // Admin
        // $profile->is_Admine() ? return Response::allow("Binvenue") : return Response::deny("impossible") ;
        // Gates
        // Gate::define("update-publiaction", function (GenericUser $profile, Publication $publication) {
        //     return $profile->id === $publication->profile_id;
        // });
    }
}
