import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const { pathname } = req.nextUrl;

  // Public routes
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded: any = verifyToken(token);

  if (!decoded) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Role based access
  if (pathname.startsWith("/employees")) {
    if (decoded.role !== "manager") {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/employees/:path*"],
};
