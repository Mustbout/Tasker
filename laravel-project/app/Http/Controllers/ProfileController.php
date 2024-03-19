<?php

// namespace App\Http\Controllers;

// use App\Models\Profile;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Psy\Readline\Hoa\ConsoleWindow;

// use function Laravel\Prompts\password;

// class ProfileController extends Controller
// {
//     public function index()
//     {
//         // $profiles = Profile::all();
//         $profiles = Profile::paginate(9);
//         return view("Profiles.Profiles", compact("profiles"));
//     }
//     // public function show(Request $request)
//     // {
//     //     // $profile = Profile::find((int)$request->id);
//     //     $profile = Profile::findOrFail((int)$request->id);
//     //     // dd($profile);
//     //     return view("Profiles.Show", compact("profile"));
//     // }
//     public function show(Profile $profile)
//     {
//         // route model vindin
//         return view("Profiles.Show", compact("profile"));
//     }
//     public function create()
//     {
//         return view("Profiles.createProfle");
//     }
//     public function store(Request $request)
//     {
//         // TODO: methode 1
//         // dd($request);
//         // recuperer les donnes
//         // $name = $request->name;
//         // $email = $request->email;
//         // $password = Hash::make("password");
//         // $description = $request->description;

//         // Validation 
//         $formFields = $request->validate([
//             "name" => "required|min:3|max:20",
//             "email" => "required|unique:profiles|email",
//             "password" => "required|min:9|max:50|confirmed",
//             "description" => "required"
//         ]);

//         // Hash
//         $formFields["password"] = Hash::make($request->password);
//         // Insertion
//         // Profile::create(compact('name', 'email', 'password', 'description'));
//         Profile::create($formFields);
//         // redirections 
//         // redirect(....);
//         // redirect()->route() => to_route() ;
//         // redirect()->action() ;
//         // back()->withInput();
//         return redirect()->route('profiles.index')->with('success', "votre compte est bien créé .");

//         // // TODO: methode 2
//         // // dd($request);

//         // // Validation 
//         // $request->validate([
//         //     "name" => "required"
//         // ]);
//         // // Insertion
//         // Profile::create($request->post());
//         // return redirect()->route('profiles.index');
//     }
// }


namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\password;

class ProfileController extends Controller
{
    public function __construct()
    {
        // $this->middleware("auth")->except("show");
    }
    public function index()
    {
        var_dump('hello');
        $profiles = Profile::paginate(9);
        return view("Profiles.Profiles", compact("profiles"));
    }
    public function show(Profile $profile)
    {
        return view("Profiles.Show", compact("profile"));
    }
    public function create()
    {
        return view("Profiles.createProfle");
    }
    public function store(ProfileRequest $request)
    {
        $formFields = $request->validated();
        $formFields["password"] = Hash::make($request->password);
        // recuperer et storer le fichier avec un nome creé par laravel
        // $formFields["image"] = $request->file("image")->store("image", "public");
        // // recuperer et storer le fichier avec un nome creé par moi
        // $fileName = $request->file("image")->getClientOriginalName();
        // $formFields["image"] = $request->file("image")->storeAs("image", $fileName, "public");
        if ($request->hasFile("image")) {
            $formFields["image"] =  $this->uploadeImag($request);
        } else {
            $formFields["image"] = "";
        }
        Profile::create($formFields);
        return redirect()->route('profiles.index')->with('success', "votre compte est bien créé .");
    }
    public function destroy(Profile $profile)
    {
        $profile->delete();
        return to_route("profiles.index")->with("success", "le profile $profile->name a été bien supprimé .");
    }
    public function edit(Profile $profile)
    {
        return view("Profiles.editProfle", compact("profile"));
    }
    public function update(Profile $profile, ProfileRequest $request)
    {
        $formFields = $request->validated();
        $formFields["password"] = Hash::make($request->password);
        // recuperer et storer le fichier avec un nome creé par moi
        // if ($request->hasFile("image")) {
        //     $fileName = $request->file("image")->getClientOriginalName();
        //     $formFields["image"] =  $request->file("image")->store("image", "public");
        // }
        if ($request->hasFile("image")) {
            $formFields["image"] =  $this->uploadeImag($request);
        }
        $profile
            ->fill($formFields)
            ->save();
        return to_route("profiles.show", $profile->id)->with("success", "le profile $profile->name a été bien Modifier .");
    }
    private function uploadeImag($request)
    {
        if ($request->hasFile("image")) {
            return $request->file("image")->store("image", "public");
        }
    }
}



// namespace App\Http\Controllers;

// use App\Http\Requests\ProfileRequest;
// use App\Models\Profile;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;

// use function Laravel\Prompts\password;

// class ProfileController extends Controller
// {
//     public function index()
//     {
//         $profiles = Profile::paginate(9);
//         return view("Profiles.Profiles", compact("profiles"));
//     }
//     public function show(Profile $profile)
//     {
//         return view("Profiles.Show", compact("profile"));
//     }
//     public function create()
//     {
//         return view("Profiles.createProfle");
//     }
//     public function store(ProfileRequest $request)
//     {
//         $formFields = $request->validated();
//         $formFields["password"] = Hash::make($request->password);
//         // recuperer et storer le fichier avec un nome creé par laravel
//         $formFields["image"] = $request->file("image")->store("image", "public");
//         // recuperer et storer le fichier avec un nome creé par moi
//         $fileName["image"] = $this->uploadeImage($request);
//         Profile::create($formFields);
//         return redirect()->route('profiles.index')->with('success', "votre compte est bien créé .");
//     }
//     public function destroy(Profile $profile)
//     {
//         $profile->delete();
//         return to_route("profiles.index")->with("success", "le profile $profile->name a été bien supprimé .");
//     }
//     public function edit(Profile $profile)
//     {
//         return view("Profiles.editProfle", compact("profile"));
//     }
//     public function update(Profile $profile, ProfileRequest $request)
//     {
//         $formFields = $request->validated();
//         $formFields["password"] = Hash::make($request->password);
//         // recuperer et storer le fichier avec un nome creé par moi
//         if ($request->hasFile("image")) {
//             $fileName = $request->file("image")->getClientOriginalName();
//             $fileName["image"] = $request->file("image")->store("image", "public");
//         }
//         // $fileName["image"] = $this->uploadeImage($request);
//         $profile
//             ->fill($formFields)
//             ->save();
//         return to_route("profiles.show", $profile->id)->with("success", "le profile $profile->name a été bien Modifier .");
//     }
//     private function uploadeImage($request)
//     {
//         if ($request->hasFile("image")) {
//             $fileName = $request->file("image")->getClientOriginalName();
//             return $request->file("image")->store("image", "public");
//         }
//     }
// }
