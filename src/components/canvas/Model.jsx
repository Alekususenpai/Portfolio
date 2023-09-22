import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model = () => {
  const gltf = useGLTF("./planet/scene.gltf"); // Load your GLTF model
  const modelRef = useRef();

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      scale={[1, 1, 1]}
      position={[0.56, -1.5, 2.8]}
      rotation={[0, Math.PI / -7, 0]}
    />
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 5], // Adjusted camera position
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
