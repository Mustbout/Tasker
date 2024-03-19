<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $users = [
            ["id"=>1,"nom"=>"Ahmed","age"=>19],
            ["id"=>2,"nom"=>"Halima","age"=>50],
            ["id"=>3,"nom"=>"Rahim","age"=>30]
        ];
        return view("Hello",compact("users"));
    }
}
