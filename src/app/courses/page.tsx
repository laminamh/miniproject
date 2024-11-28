"use client";

import React from 'react';

// Definir el tipo de curso
interface Course {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
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

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>{course.startDate} - {course.endDate}</p>
          </div>
        ))
      ) : (
        <div>No hay cursos disponibles</div>
      )}
    </div>
  );
};

export default CoursesPage;