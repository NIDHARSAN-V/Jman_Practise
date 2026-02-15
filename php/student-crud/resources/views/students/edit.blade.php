@extends('students.main')

@section('content')
<h2>Edit Student</h2>


<form action="/students/{{ $student->rollno }}" method="POST">
    @csrf
    @method('PUT')

    Name:
    <input type="text" name="name" value="{{ $student->name }}"><br><br>

    Email:
    <input type="email" name="email" value="{{ $student->email }}"><br><br>

    Department:
    <input type="text" name="department" value="{{ $student->department }}"><br><br>

    <button type="submit">Update</button>
</form>

<a href="/students">Back</a>
@endsection
 