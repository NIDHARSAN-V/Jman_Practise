import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./src/lib/jwt";



export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

  if (!isProtected) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = verifyToken(token) as { role?: string } | null;

  if (!decoded) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // manager-only section of dashboard
  if (
    req.nextUrl.pathname.startsWith("/dashboard/employees") &&
    decoded.role !== "MANAGER"
  ) {
    // non‑managers get bounced back to main dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*"],
};

