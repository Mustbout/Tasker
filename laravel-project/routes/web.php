<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\InformationsController;
use App\Http\Controllers\LoginControoler;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicationController;
use App\Http\Controllers\stagiairesController;
use App\Services\Calcul;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route, Illuminate\Http\Request;
use Psr\Container\ContainerInterface;
use Symfony\Component\Console\Input\Input;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// TODO:FIXME:TODO:FIXME:
// Route::get("Stagieires", [stagiairesController::class, "index"])
//     ->name("index.stagieires");
// Route::get("Stagieires/create", [stagiairesController::class, "create"])
//     ->name("create.stagieires");
// Route::post("Sagiaires/store", [stagiairesController::class, "store"])
//     ->name("store.stagieires");
// Route::get("/Hello/{nom?}/{prenom?}", function (Request $request) {
//     return view("Hello", [
//         "nom" => $request->nom,
//         "prenom" => $request->prenom
//     ]);
// });


// TODO:FIXME:TODO:FIXME:

// Route::name("profiles.")->prefix("/profiles")->group(function () {
//     Route::controller(ProfileController::class)->group(function () {
//         Route::get("/", "index")->name("index");
//         Route::get("/create", "create")->name("create");
//         Route::post("/", "store")->name("store");
//         Route::delete("/{profile}", "destroy")->name("destroy");
//         Route::get("/{profile}/edit", "edit")->name("edit");
//         Route::put("/{profile}", "update")->name("update");
//         Route::get("/{profile}", "show")->name("show")->where("profile", '\d+');
//     });
// });

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

Route::resource('profiles', ProfileController::class);
Route::resource('publication', PublicationController::class);

Route::get('/', [HomeController::class, "index"])->name("homepage");

Route::middleware("guest")->group(function () {
    Route::get("/login", [LoginControoler::class, "show"])->name("login.show");
    Route::post("/login", [LoginControoler::class, "login"])->name("login");
});
Route::get("/logout", [LoginControoler::class, "logout"])->name("logout.login")->middleware('auth');




// Route::get("/profiles/{profile:email}", [ProfileController::class, "show"])->name("profiles.show")->where("id", '\d+');
Route::get("/setting", [InformationsController::class, "index"])
    ->name("setting.index");

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

Route::get("/google", function () {
    // dd(Route::current());
    // dd(Route::currentRouteName());
    // dd(Route::currentRouteAction());

    // redirect user to away our site
    return redirect()->away("https://www.google.com");
})->name("route");

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

/// TODO:FIXME: l'injectipon de depandance : use Class without 

// Route::get("somme/{a}/{b}", function ($a, $b, Calcul $calcule) {
//     return $calcule->sum($a, $b);
// });


// Route::get("somme/{a}/{b}", function ($a, $b,ContainerInterface $containerInterface) {
//     $calcule = $containerInterface->get(Calcul::class);
//     return $calcule->sum($a, $b);
// });

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

// Route::view("/form", "profiles.form");
// Route::post("/form", function (Request $request) {
//     // dd($request->date("input_field")->addDay());
//     // only / exepte
//     // dd($request->input());
//     $request->mergeIfMissing(["input_field" => date("Y-M-D")]);
//     // dd($request->input("input_field", "inconne"));
//     $request->whenFilled(["input1", "Input2"], function () {
//         // ila xi whda 3amra
//     });
//     $request->whenHas(["input1", "Input2"], function () {
//         // iala kant xi whda
//     });
//     dump($request->hasAny("mm", "input_field"));
// })->name("form");

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

Route::get("salam", function () {
    // donload file and reade(use inline in diisposition )
    // download
    // return Response()->download('storage/image/Anime.jpg');
    // reade
    // return Response()->download('storage/image/Anime.jpg', disposition: "inline");
    // reade file
    // return Response()->file('storage/image/Anime.jpg');
});

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

Route::get("/cookie/get", function (Request $request) {
    // dd($request->cookie("age"));
});

Route::get("/cookie/set/{cookie}", function ($cookie) {
    // $responce = new Response();
    // create cookies with name and value and delé in minutes
    // $cookieObject = cookie("age", $cookie, 5);

    // create cookies with name and value and delé in more 400 day
    // $cookieObject = cookie()->forever("age", $cookie);
    // return $responce->withCookie($cookieObject);
});

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 

// Header + Request 
// Content-Type : text/plain image/png application/json
// Cache
// ...
// we can create header withe name i give it
// X-SMITE-SAHIBONA = "Ahmed"
// server -> navigateur

Route::get("/headers", function (Request $request) {
    // rj3 LHAD LPARTYA
    $responce = new Response(["data" => "ok"]);
    // pare default
    // return $responce->withHeaders([
    //     "Content-Type" => "text/html; charset=UTF-8",
    // ]);
    // dd($request->header());
    // dd($request->header("abc", "xyz"));
    dd($request->header("X-Mustapha", "xyz"));
    return $responce->withHeaders([
        "Content-Type" => "Application/json",
        "X-Mustapha" => true
    ]);
});
Route::get("/request", function (Request $request) {
    // url
    // $request->url() => requperer sulmon le url
    // $request->fullUrl() => requperer url with parametre et les valure
    // dd($request->url(), $request->fullUrl());

    // path
    // dd($request->path());

    // fin hna f site
    // dd($request->is("request"));

    // host
    // dd($request->host());

    // Methode
    // dd($request->method());
    // dd($request->isMethod("GET"));
    dd($request->ip());
});

// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 





// TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: FIXME: // TODO: 