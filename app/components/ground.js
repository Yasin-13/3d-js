"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Center the model properly
      scene.position.set(-center.x, -center.y, -center.z);

      // Increase scale to make it appear bigger
      const maxDim = Math.max(size.x, size.y, size.z);
      scene.scale.setScalar(12 / maxDim);
    }
  }, [scene]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelLoader() {
  return (
    <Canvas camera={{ position: [0, 80,100], fov: 10 }}>
      <Suspense fallback={null}>
        {/* Improved Lighting */}
        <ambientLight intensity={1} />
        <pointLight position={[20, 40, 20]} intensity={2} />
        <directionalLight intensity={1} position={[5, 15, 10]} castShadow />
        <spotLight intensity={1.5} position={[-20, 40, -10]} angle={0.3} penumbra={1} castShadow />
        <hemisphereLight intensity={0.5} skyColor={0xffffff} groundColor={0x444444} position={[0, 50, 0]} />

        {/* Load the 3D Model */}
        <Model url="/groundf.glb" />

        {/* Improved Orbit Controls */}
        <OrbitControls enableZoom={true} maxDistance={300} minDistance={30} />
      </Suspense>
    </Canvas>
  );
}
