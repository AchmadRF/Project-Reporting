<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return Inertia::render('User/user',[
            'users' => $users
        ]);
    }

    public function create(){
        return Inertia::render('User/Create');
    }

    public function edit(){
        return Inertia::render('User/Edit');
        
    }
    public function store(Request $request){
        $request->validate([
            'name'=> 'required',
            'email' =>'required|email|unique:users,email',
            'password' => 'required|min:8',
            'password_confirmation' => 'required|same:password',
        ]);

        User::create($request->all());
        return redirect()->route('users');

    }
}
