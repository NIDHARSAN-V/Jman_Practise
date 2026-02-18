"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Role: {user.role}</p>

      <button onClick={() => router.push("/employees")}>Employees</button>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
