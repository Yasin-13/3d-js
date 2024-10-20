"use client";

import React, { useState } from 'react';
import { College } from '../components/college'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const page = () => {
  return (
    <div className="relative h-[100vh] w-[100vw] bg-white">
      
      <Canvas camera={{ position: [0, 80, 80], fov: 50 }}>
        <Environment preset="studio" />
        <OrbitControls 
          enableZoom={true} 
          minDistance={20} // Adjusted for better mobile control
          maxDistance={100} // Adjusted for better mobile control
          enablePan={true} 
          target={[0, 0, 0]} 
        />
        <College  />
      </Canvas>
    </div>
  )
}

export default page