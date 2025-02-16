"use client";

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      scene.position.x += (scene.position.x - center.x);
      scene.position.y += (scene.position.y - center.y);
      scene.position.z += (scene.position.z - center.z);
      
      const maxDim = Math.max(size.x, size.y, size.z);
      scene.scale.setScalar(4 / maxDim);
    }
  }, [scene]);

  return <primitive ref={ref} object={scene} />;
}

export default function ModelLoader() {
  return (
    <Canvas camera={{ position: [0, 80, 80], fov: 25 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight
          intensity={0.5}
          position={[5, 10, 7.5]}
          castShadow
        />
        <spotLight
          intensity={1}
          position={[-10, 20, -5]}
          angle={0.15}
          penumbra={1}
          castShadow
        />
        <hemisphereLight
          intensity={0.35}
          skyColor={0xffffff}
          groundColor={0x444444}
          position={[0, 50, 0]}
        />
        <rectAreaLight
          width={10}
          height={10}
          color={0xffffff}
          intensity={2}
          position={[10, 10, 0]}
          lookAt={[0, 0, 0]}
        />
        <Model url="/firstf.glb" />
        <OrbitControls enableZoom={true} maxDistance={200} minDistance={10} />
      </Suspense>
    </Canvas>
  );
}