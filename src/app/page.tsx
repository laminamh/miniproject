"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-yellow-200 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-yellow-800 hover:text-yellow-600 transition">
            My Learning Platform
          </a>
          <div className="space-x-4">
            <a 
              href="/courses" 
              className="text-yellow-800 hover:bg-yellow-300 px-3 py-2 rounded-md transition"
            >
              Courses
            </a>
            <a 
              href="/login" 
              className="text-yellow-800 hover:bg-yellow-300 px-3 py-2 rounded-md transition"
            >
              Log In
            </a>
            <a 
              href="/discover" 
              className="text-yellow-800 hover:bg-yellow-300 px-3 py-2 rounded-md transition"
            >
              Discover
            </a>
            <a 
              href="/register" 
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mt-16">
        <div className="text-center">
          {/* Textos */}
          <h1 className="text-5xl font-extrabold text-yellow-900 mb-6">
            Welcome to Your Learning Platform
          </h1>
          <p className="text-xl text-yellow-800 mb-8">
            Discover, Learn, and Grow with Our Innovative Courses
          </p>

          {/* Grid de imágenes */}
          <div className="flex justify-center gap-6 mb-6">
            {/* Imagen 1 */}
            <img 
              src="https://images.pexels.com/photos/6517132/pexels-photo-6517132.jpeg" 
              alt="Woman working with computer" 
              className="rounded-xl shadow-lg w-1/2 md:w-1/3" 
            />
            {/* Imagen 2 */}
            <img 
              src="https://images.pexels.com/photos/4261788/pexels-photo-4261788.jpeg" 
              alt="Little girl taking online classes" 
              className="rounded-xl shadow-lg w-1/2 md:w-1/3" 
            />
            {/* Imagen 3 */}
            <img 
              src="https://images.pexels.com/photos/8055848/pexels-photo-8055848.jpeg" 
              alt="Girl attending an online class" 
              className="rounded-xl shadow-lg w-1/2 md:w-1/3" 
            />
          </div>

          {/* Texto debajo de las imágenes */}
          <p className="text-xl text-yellow-800 mb-8">
            Learn from the best. Our platform offers cutting-edge courses that help you excel in any field. Start your learning journey now!
          </p>

          {/* Button */}
          <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-9">
            <a 
              href="/courses" 
              className="bg-yellow-600 text-white text-2xl px-9 py-5 rounded-lg hover:bg-yellow-700 transition inline-block w-full sm:w-auto"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-200 py-6 mt-10 fixed bottom-0 w-full">
        <div className="container mx-auto text-center text-yellow-800">
          © 2024 My Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
