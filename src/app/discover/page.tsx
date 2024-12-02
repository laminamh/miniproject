"use client";

import React, { useState } from 'react';

const DiscoverPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú desplegable

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-yellow-200 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo con Courier New */}
          <a 
            href="/" 
            className="text-xl font-bold text-yellow-800 hover:text-yellow-600 transition md:text-2xl"
            style={{ fontFamily: 'Courier New, Courier, monospace' }}
          >
            My Learning Platform
          </a>

          {/* Menú en pantallas grandes */}
          <div className="hidden md:flex space-x-4">
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

          {/* Botón para menú en dispositivos pequeños */}
          <button 
            className="md:hidden text-yellow-800 hover:bg-yellow-300 p-2 rounded-md"
            onClick={handleToggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menú desplegable en dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-yellow-100">
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
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 mt-32">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-yellow-900 mb-6">What Our Students Are Saying</h1>
          <p className="text-xl text-yellow-800 mb-8">See why people love our courses and how they've benefited from them!</p>
        </div>

        {/* Reviews Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="John Doe" 
              className="w-16 h-16 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">John Doe</h3>
            <p className="text-yellow-800 mb-4">"The Spanish course helped me improve my language skills in just a few weeks. The teachers were very supportive, and the material was very engaging!"</p>
            <p className="font-semibold text-yellow-900">Rating: ★★★★☆</p>
          </div>

          {/* Review 2 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://randomuser.me/api/portraits/women/2.jpg" 
              alt="Jane Smith" 
              className="w-16 h-16 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">Jane Smith</h3>
            <p className="text-yellow-800 mb-4">"I had an amazing time with the French course! The content was well-organized, and I now feel confident traveling to France."</p>
            <p className="font-semibold text-yellow-900">Rating: ★★★★★</p>
          </div>

          {/* Review 3 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://randomuser.me/api/portraits/men/3.jpg" 
              alt="Robert Black" 
              className="w-16 h-16 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">Robert Black</h3>
            <p className="text-yellow-800 mb-4">"The Python Programming course was a game-changer for me. I was able to build my own projects by the end of it, and I felt truly prepared for a new career!"</p>
            <p className="font-semibold text-yellow-900">Rating: ★★★★☆</p>
          </div>

          {/* Review 4 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img 
              src="https://randomuser.me/api/portraits/women/4.jpg" 
              alt="Sarah White" 
              className="w-16 h-16 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">Sarah White</h3>
            <p className="text-yellow-800 mb-4">"I loved the cooking classes! The recipes were easy to follow, and I was able to impress my family with delicious meals."</p>
            <p className="font-semibold text-yellow-900">Rating: ★★★★★</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-200 py-6 mt-10">
        <div className="container mx-auto text-center text-yellow-800">
          © 2024 My Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DiscoverPage;
