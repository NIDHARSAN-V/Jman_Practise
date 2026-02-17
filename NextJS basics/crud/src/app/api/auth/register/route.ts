import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();

  const hashed = await bcrypt.hash(body.password, 10);

  const user = await prisma.employee.create({
    data: {
      empid: body.empid,
      email: body.email,
      password: hashed,
      empname: body.empname,
      role: body.role,
      salary: body.salary,
    },
  });

  return NextResponse.json(user);
}
