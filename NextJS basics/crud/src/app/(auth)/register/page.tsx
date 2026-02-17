"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    empid: "",
    email: "",
    password: "",
    empname: "",
    role: "emp",
    salary: 0,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Register</h1>

      <input name="empid" placeholder="Emp ID" onChange={handleChange} />
      <input name="empname" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        name="salary"
        type="number"
        placeholder="Salary"
        onChange={handleChange}
      />

      <select name="role" onChange={handleChange}>
        <option value="emp">Employee</option>
        <option value="manager">Manager</option>
      </select>

      <button onClick={register}>Register</button>
    </div>
  );
}
