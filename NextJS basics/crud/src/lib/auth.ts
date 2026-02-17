import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export function getUserFromRequest() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const user: any = verifyToken(token);

  return user;
}
