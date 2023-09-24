import React, { useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { LOD } from "three";

import CanvasLoader from "../Loader";

const Model = () => {
  const gltf = useGLTF("./cyberGirl/scene.gltf");
  const modelRef = useRef();

  const lod = new LOD();
  const lowDetail = gltf.scene.clone();
  const mediumDetail = gltf.scene.clone();
  const highDetail = gltf.scene.clone();
  const ultraDetail = gltf.scene.clone();

  useEffect(() => {
    lod.addLevel(lowDetail, 0);
    lod.addLevel(mediumDetail, 20);
    lod.addLevel(highDetail, 40);
    lod.addLevel(ultraDetail, 60);
    modelRef.current.add(lod);
  }, [gltf.scene]);

  return (
    <primitive
      object={gltf.scene}
      ref={modelRef}
      scale={1.55}
      position={[0.4, -2, 3]}
      rotation={[0.3, -0.4, 0]}
    />
  );
};

const CyberGirl = () => {
  return (
    <section className="absolute bottom-0 w-full h-[75%]">
      <Canvas shadows frameloop="demand" dpr={[1, 2]}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
          <Model />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default CyberGirl;
