"use client";

import { useEffect, useState } from "react";

interface Employee {
  empid: string;
  empname: string;
  email: string;
  role: string;
  salary: number;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [form, setForm] = useState<any>({
    empid: "",
    empname: "",
    email: "",
    role: "emp",
    salary: 0,
  });

  const fetchEmployees = async () => {
    const res = await fetch("/api/employees");
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createEmployee = async () => {
    await fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify(form),
    });

    fetchEmployees();
  };

  const deleteEmployee = async (id: string) => {
    await fetch(`/api/employees/${id}`, {
      method: "DELETE",
    });

    fetchEmployees();
  };

  return (
    <div>
      <h1>Employees</h1>

      {/* CREATE FORM */}
      <div>
        <input name="empid" placeholder="EmpID" onChange={handleChange} />
        <input name="empname" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="salary" type="number" onChange={handleChange} />

        <select name="role" onChange={handleChange}>
          <option value="emp">emp</option>
          <option value="manager">manager</option>
        </select>

        <button onClick={createEmployee}>Add</button>
      </div>

      {/* TABLE */}
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr key={e.empid}>
              <td>{e.empid}</td>
              <td>{e.empname}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.salary}</td>
              <td>
                <a href={`/employees/${e.empid}`}>Edit</a>
                <button onClick={() => deleteEmployee(e.empid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
