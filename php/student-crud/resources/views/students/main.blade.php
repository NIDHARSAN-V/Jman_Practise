<!DOCTYPE html>
<html>
<head>
    <title>Students</title>
</head>
<body>

<h2>Student List</h2>

<a href="/students/create">Add Student</a>

@if(session('success'))
<p>{{ session('success') }}</p>
@endif

<table border="1">
    <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Action</th>
    </tr>

    @foreach($students as $student)
    <tr>
        <td>{{ $student->rollno }}</td>
        <td>{{ $student->name }}</td>
        <td>{{ $student->email }}</td>
        <td>{{ $student->department }}</td>

        <td>
            <form action="/students/{{ $student->rollno }}/edit">
            <a href="/students/{{ $student->rollno }}/edit">Edit</a>
            </form>

            <form action="/students/{{ $student->rollno }}" method="POST" style="display:inline;">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </td>
    </tr>
    @endforeach
</table>
@yield('content')




</body>
</html>
