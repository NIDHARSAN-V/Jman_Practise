"use client";

import { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/axios";

interface User {
  id: number;
  email: string;
  name?: string;
  role: "EMP" | "MANAGER";
}

interface AuthContextType {
  user: User | null;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  // try to restore session on mount
  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    }

    load();
  }, []);

  const login = async (data: { email: string; password: string }) => {
    const res = await api.post("/auth/login", data);
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
