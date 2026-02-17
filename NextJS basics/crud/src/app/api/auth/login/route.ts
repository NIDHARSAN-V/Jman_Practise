import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.employee.findUnique({
    where: { email: body.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  const valid = await bcrypt.compare(body.password, user.password);

  if (!valid) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = signToken({
    empid: user.empid,
    role: user.role,
  });

  const res = NextResponse.json({ message: "Login success" });

  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
