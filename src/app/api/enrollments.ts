import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, courseId } = await request.json();

  // Verificar si el usuario ya está inscrito en el curso
  const existingEnrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  if (existingEnrollment) {
    return NextResponse.json({ error: "Ya estás inscrito en este curso" }, { status: 400 });
  }

  // Crear la inscripción
  const enrollment = await prisma.enrollment.create({
    data: {
      userId,
      courseId,
    },
  });

  return NextResponse.json(enrollment);
}
