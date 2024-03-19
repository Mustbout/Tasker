<?php

namespace App\Http\Controllers;

use App\Http\Requests\PublicationRequest;
use App\Models\Publication;
use App\Services\UploadeImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class PublicationController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth")->except("index");
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publications = Publication::latest()->get();
        return view("publication.index", compact("publications"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("publication.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PublicationRequest $request, UploadeImage $upl)
    {
        $formFilds = $request->validated();
        if ($request->hasFile("image")) {
            $formFilds["image"] = $upl->uploadeImag($request, "image/publication");
        }
        $formFilds["profile_id"] = Auth::id();
        Publication::create($formFilds);
        return redirect()->route("publication.index")->with('success', "votre publication est bien créé .");
    }

    /**
     * Display the specified resource.
     */
    public function show(Publication $publication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publication $publication)
    {

        // Gate::authorize("update-publiaction", $publication);
        // if (!Gate::allows("update-publiaction", $publication)) {
        //     abort(403, "user not valide");
        // }
        Gate::authorize("update", $publication);
        return view("publication.edite", compact("publication"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PublicationRequest $request, Publication $publication, UploadeImage $upl)
    {
        /**
         * // Authrisation   :
         * 
         * Getes (Routes) 
         * Policies (Controllers)
         */

        // Getes (Routes) 
        // Gate::authorize("update-publiaction", $publication);

        // Policies (Controllers)
        Gate::authorize("update", $publication);
        $formFilds = $request->validated();
        if ($request->hasFile("image")) {
            $formFilds["image"] = $upl->uploadeImag($request, "image/publication");
        }
        $publication->fill($formFilds)->save();
        return to_route("publication.index")->with('success', "votre publication est bien modifier .");;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publication $publication)
    {
        $publication->delete();
        return to_route("publication.index")->with('success', "votre publication est bien supprimer .");
    }
}
