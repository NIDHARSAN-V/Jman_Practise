<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $primaryKey = 'emp_id';

    protected $fillable = [
        'email',
        'password',
        'empname',
        'role',
        'salary'
    ];

    protected $hidden = ['password'];
}

