import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return new Response("All fields are required", { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response("Email already registered", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response("Error registering user", { status: 500 });
  }
}
