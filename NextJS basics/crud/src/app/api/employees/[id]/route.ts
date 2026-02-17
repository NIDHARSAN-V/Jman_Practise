import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";

export async function PUT(req: Request, { params }: any) {
  const user = getUserFromRequest();

  if (!user || user.role !== "manager") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  const emp = await prisma.employee.update({
    where: { empid: params.id },
    data: body,
  });

  return NextResponse.json(emp);
}

export async function DELETE(_: Request, { params }: any) {
  const user = getUserFromRequest();

  if (!user || user.role !== "manager") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.employee.delete({
    where: { empid: params.id },
  });

  return NextResponse.json({ message: "Deleted" });
}
