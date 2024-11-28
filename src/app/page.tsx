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
              href="/register" 
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

{/* Main Content */}
<main className="container mx-auto px-4 py-12 mt-32"> {/* Añadí mt-24 para empujar el contenido hacia abajo */}
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-yellow-900 mb-6">
      Welcome to Your Learning Platform
    </h1>
    <p className="text-xl text-yellow-800 mb-8">
      Discover, Learn, and Grow with Our Innovative Courses
    </p>

    {/* Grid of Boxes */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {/* Box 1 */}
      <div className="bg-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">Diverse Courses</h2>
        <p className="text-lg text-yellow-800 mb-6">
          Explore a wide range of courses designed to boost your career. Whether you're
          looking to advance your skills or explore new interests, our courses offer something
          for everyone. From programming to creative writing, discover a world of learning 
          opportunities at your fingertips.
        </p>
        <p className="text-yellow-800">
          Our courses cover a variety of topics, with flexible schedules and expert instructors
          guiding you every step of the way.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">Learn at Your Pace</h2>
        <p className="text-lg text-yellow-800 mb-6">
          Flexible content that adapts to your lifestyle and schedule. Study whenever and
          wherever you are, and take control of your learning journey. Whether you're a busy
          professional or a full-time student, our platform makes learning easy.
        </p>
        <p className="text-yellow-800">
          With on-demand lessons and no deadlines, you can learn at your own pace and never
          feel rushed. Progress when it works best for you!
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-yellow-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">Certifications</h2>
        <p className="text-lg text-yellow-800 mb-6">
          Obtain recognized certificates to enhance your professional profile. Stand out in your
          career with certificates from top institutions. Our certifications are recognized by
          leading companies and educational organizations.
        </p>
        <p className="text-yellow-800">
          Whether you're looking to make a career change or advance in your current role, our
          certifications can help you open new doors and enhance your skill set.
        </p>
      </div>
    </div>

    {/* Button */}
    <div className="mt-3 sm:mt-13 md:mt-22 lg:mt-28">
      <a 
        href="/courses" 
        className="bg-yellow-600 text-white text-2xl px-9 py-5 rounded-lg hover:bg-yellow-700 transition inline-block w-full sm:w-auto hidden md:block"
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