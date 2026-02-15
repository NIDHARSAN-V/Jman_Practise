<?php

use App\Http\Controllers\StudentController;

Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/create', [StudentController::class, 'create']);
Route::post('/students', [StudentController::class, 'store']);
Route::get('/students/{rollno}/edit', [StudentController::class, 'edit']);
Route::put('/students/{rollno}', [StudentController::class, 'update']);
Route::delete('/students/{rollno}', [StudentController::class, 'destroy']);

