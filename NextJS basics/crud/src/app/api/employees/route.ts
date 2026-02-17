import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

export async function GET() {
  const user = getUserFromRequest();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await prisma.employee.findMany());
}

export async function POST(req: Request) {
  const user = getUserFromRequest();

  if (!user || user.role !== "manager") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  const emp = await prisma.employee.create({
    data: body,
  });

  return NextResponse.json(emp);
}
