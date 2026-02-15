<!DOCTYPE html>
<html>
<head>
    <title>Add Student</title>
</head>
<body>

<h2>Add Student</h2>

<form action="/students" method="POST">
    @csrf

    Roll No: <input type="text" name="rollno"><br><br>
    Name: <input type="text" name="name"><br><br>
    Email: <input type="email" name="email"><br><br>
    Department: <input type="text" name="department"><br><br>

    <button type="submit">Save</button>
</form>

<a href="/students">Back</a>

</body>
</html>
