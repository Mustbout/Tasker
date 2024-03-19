<?php

namespace App\Http\Controllers;

use App\Models\stagiare;
use Faker\Provider\Image;
use Illuminate\Http\Request;

class stagiairesController extends Controller
{
    public function index()
    {
        $stagiaires = stagiare::all();
        return view("Stagiaires.Stagieires", compact("stagiaires"));
    }
    public function create()
    {
        return view("Stagiaires.createStagieires");
    }
    public function store(Request $request)
    {

        // $name  = $request->name;
        // $age = $request->age;
        $image = $request->file("data");
        // $data = $request->input("data");
        $data = base64_decode($image);
        // dd($data);
        $request->validate([
            "name" => "required"
        ]);
        $stagiaire = new  stagiare();
        $stagiaire->name = $request->name;
        $stagiaire->age = $request->age;
        $stagiaire->date = $data;
        $stagiaire->save();
        // stagiare::create(compact("name", "age", "data"));
        return to_route("index.stagieires");
    }
}
