<?php

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $req)
    {
        $user = Employee::create([
            'email' => $req->email,
            'password' => Hash::make($req->password),
            'empname' => $req->empname,
            'role' => $req->role,
            'salary' => $req->salary,
        ]);

        return response()->json($user);
    }

    public function login(Request $req)
    {
        $user = Employee::where('email', $req->email)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return response()->json(['message' => 'Invalid'], 401);
        }

        session(['user_id' => $user->emp_id]);

        $req->session()->regenerate();

        return response()->json($user);
    }

    public function logout(Request $req)
    {
        $req->session()->invalidate();
        $req->session()->regenerateToken();

        return response()->json(['message' => 'Logged out']);
    }

    public function me()
    {
        $id = session('user_id');

        if (!$id) {
            return response()->json(['message' => 'Unauth'], 401);
        }

        return Employee::find($id);
    }
}

