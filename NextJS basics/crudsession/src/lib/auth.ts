import { NextRequest } from "next/server";
import { verifyToken } from "./jwt";

// shape of the data we embed in the JWT
export interface UserPayload {
  id: number;
  role: "EMP" | "MANAGER";
}

export function getUserFromRequest(req: NextRequest): UserPayload | null {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;

  const decoded = verifyToken(token) as UserPayload | null;
  return decoded;
}
