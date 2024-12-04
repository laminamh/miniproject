"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Nuevo estado para el mensaje de éxito

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error registering user");
      }

      setSuccessMessage("Account created successfully!"); // Mostrar el mensaje de éxito
      setEmail(""); // Limpia los campos del formulario
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Registration error:", error);
      setSuccessMessage(""); // Asegúrate de que no se muestre un mensaje de éxito si hay un error
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex justify-center items-center">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-xl max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-yellow-800 text-center mb-6">Register</h1>
        {successMessage && ( // Renderiza el mensaje de éxito si existe
          <p className="text-green-600 text-center font-medium mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
