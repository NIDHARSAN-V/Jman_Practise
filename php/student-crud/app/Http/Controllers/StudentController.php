<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{


    // READ - show list page
    public function index()
    {
        $students = Student::all();
        return view('students.main', compact('students'));
    }

    // SHOW CREATE FORM
    public function create()
    {
        return view('students.create');
    }

    // STORE DATA
    public function store(Request $request)
    {
        Student::create([
            'rollno'     => $request->rollno,
            'name'       => $request->name,
            'email'      => $request->email,
            'department' => $request->department,
        ]);

        return redirect('/students')->with('success', 'Student created successfully');
    }

    // SHOW EDIT FORM
    public function edit($rollno)
    {
        $student = Student::findOrFail($rollno);
        $students = Student::all();
        return view('students.edit', compact('student'  ,'students'));
    }

    // UPDATE DATA
    public function update(Request $request, $rollno)
    {
        $student = Student::findOrFail($rollno);

        $student->update([
            'name'       => $request->name,
            'email'      => $request->email,
            'department' => $request->department,
        ]);

        return redirect('/students')->with('success', 'Student updated successfully');
    }

    // DELETE DATA
    public function destroy($rollno)
    {
        Student::destroy($rollno);
        return redirect('/students')->with('success', 'Student deleted successfully');
    }
}
