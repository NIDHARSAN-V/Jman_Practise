"use client";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <a href="/employees">Manage Employees</a>
      <br />

      <button
        onClick={async () => {
          await fetch("/api/auth/logout");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}
