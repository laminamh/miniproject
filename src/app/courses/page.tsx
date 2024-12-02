"use client";

import React from 'react';

// Definir el tipo de curso
interface Course {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
}

const CoursesPage = () => {
  const [courses, setCourses] = React.useState<Course[]>([]);

  // Fetch cursos al cargar el componente
  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        
        if (!response.ok) {
          throw new Error('Error al obtener los cursos');
        }
        
        const data: Course[] = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error en la obtención de cursos:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = (courseId: number) => {
    alert(`You have successfully enrolled in course ${courseId}!`);
    // Aquí iría el código para realizar la inscripción en el backend
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-yellow-200 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <a 
            href="/" 
            className="text-xl font-bold text-yellow-800 hover:text-yellow-600 transition md:text-2xl"
            style={{ fontFamily: 'Courier New, Courier, monospace' }}
          >
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
      <main className="container mx-auto px-4 py-12 mt-32">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-yellow-900 mb-6">Explore Our New Courses</h1>
          <p className="text-lg sm:text-xl text-yellow-800 mb-8">Choose a course and start your learning journey today!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1: Spanish */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img src="https://images.pexels.com/photos/8430374/pexels-photo-8430374.jpeg" alt="Spanish Course" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 my-4">Spanish Classes</h3>
            <p className="text-lg text-yellow-800 mb-4">Learn Spanish with expert instructors. Perfect for beginners or those looking to improve their skills.</p>
            <p className="text-yellow-800 mb-4">Start date: January 10, 2025 - End date: March 10, 2025</p>
            <button onClick={() => handleEnroll(1)} className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Enroll Now
            </button>
          </div>

          {/* Course 2: French */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img src="https://images.pexels.com/photos/5781917/pexels-photo-5781917.jpeg" alt="French Course" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 my-4">French Classes</h3>
            <p className="text-lg text-yellow-800 mb-4">Master the French language with a structured course. Perfect for traveling or business needs.</p>
            <p className="text-yellow-800 mb-4">Start date: February 5, 2025 - End date: April 5, 2025</p>
            <button onClick={() => handleEnroll(2)} className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Enroll Now
            </button>
          </div>

          {/* Course 3: Python Programming */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="Python Programming" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 my-4">Learn Python</h3>
            <p className="text-lg text-yellow-800 mb-4">Get hands-on experience in Python programming. Great for beginners and those looking to expand their programming knowledge.</p>
            <p className="text-yellow-800 mb-4">Start date: March 1, 2025 - End date: May 1, 2025</p>
            <button onClick={() => handleEnroll(3)} className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Enroll Now
            </button>
          </div>

          {/* Course 4: Cooking Classes */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <img src="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg" alt="Cooking Class" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-900 my-4">Cooking Classes</h3>
            <p className="text-lg text-yellow-800 mb-4">Learn how to cook amazing dishes with expert chefs. Perfect for beginners and food enthusiasts.</p>
            <p className="text-yellow-800 mb-4">Start date: April 10, 2025 - End date: June 10, 2025</p>
            <button onClick={() => handleEnroll(4)} className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Enroll Now
            </button>
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

export default CoursesPage;
