"use client";

import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { College } from './components/college';

export default function Home() {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  const renderTimetable = () => {
    if (!selectedClass) return null;

    // Mock timetables for the example, replace with your actual timetable data
    const timetables = {
      Class1: ['Math', 'English', 'History'],
      Class2: ['Science', 'Art', 'Physical Education'],
    };

    return (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
        <div className="bg-black p-4 rounded">
          <h2 className="text-xl font-bold mb-4">{selectedClass} Timetable</h2>
          <ul>
            {timetables[selectedClass].map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <button onClick={() => setSelectedClass(null)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative h-[100vh] w-[100vw] bg-white">
<Canvas camera={{ position: [0, 80, 80], fov: 50 }}>
  <Environment preset="studio" />
  <OrbitControls 
    enableZoom={true} 
    minDistance={30} // Set this lower to allow zooming out more
    maxDistance={20} // Increase this to allow more distance
    enablePan={true} 
    target={[0, 0, 0]} 
  />
  <College onClassClick={handleClassClick} />
</Canvas>

      {renderTimetable()}
    </div>
  );
}
