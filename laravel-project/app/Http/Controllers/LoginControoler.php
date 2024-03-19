<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginControoler extends Controller
{
    public function show()
    {
        return view("login.show");
    }
    public function login(Request $request)
    {
        $login = $request->login;
        $password = $request->password;
        $credentials  = [
            "email" => $login,
            "password" => $password
        ];
        if (Auth::attempt($credentials)) {
            // corect
            $request->session()->regenerate();
            return to_route("homepage")->with("success", "vous est bien connescter " . $login . " . ");
        } else {
            // not corect
            return back()->withErrors([
                "login" => "email ou mote de pass incorrect"
            ])->onlyInput("login");
        }
    }
    public function logout()
    {
        Session::flush();
        Auth::logout();
        // return $this->show();
        return to_route("show.login")->with("success", "vous est bien deconecter");;
    }
}
