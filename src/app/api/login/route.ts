import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    // Extraer los datos enviados en el cuerpo de la solicitud
    const { email, password } = await req.json();

    // Validar que ambos campos estén presentes
    if (!email || !password) {
      return new Response("Email and password are required", { status: 400 });
    }

    // Buscar al usuario por su correo electrónico
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Verificar si el usuario existe
    if (!user) {
      return new Response("Invalid email or password", { status: 401 });
    }

    // Comparar la contraseña ingresada con la contraseña almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response("Invalid email or password", { status: 401 });
    }

    // Si todo está correcto, devolver una respuesta exitosa
    // Aquí podrías generar un token JWT o establecer una cookie para la sesión
    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response("Error logging in", { status: 500 });
  }
}
