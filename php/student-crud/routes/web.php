<?php

use App\Http\Controllers\StudentController;
use App\Models\Student;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/create', [StudentController::class, 'create']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/{rollno}/edit', [StudentController::class, 'edit']);
Route::put('/students/{rollno}', [StudentController::class, 'update']);
Route::delete('/students/{rollno}', [StudentController::class, 'destroy']);




// ❗ React + Blade together (Hybrid app)

// You can use BOTH.

// Example:

// web.php → serves the React entry page

// api.php → handles backend APIs