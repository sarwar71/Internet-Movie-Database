<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        $register = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed'
        ]);

        $register['password'] = bcrypt($request->password);

        $user = User::create($register);
        $access_token = $user->createToken('authToken')->accessToken;

        return response(['user' => $user, 'access_token' => $access_token]);

    }
}
