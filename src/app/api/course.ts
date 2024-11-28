import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const courses = await prisma.course.findMany();
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  const { title, description, startDate, endDate } = await request.json();

  const course = await prisma.course.create({
    data: {
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    },
  });

  return NextResponse.json(course);
}
