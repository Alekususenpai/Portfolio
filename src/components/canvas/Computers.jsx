import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Computers() {
  // const sceneRef = useRef(null);

  // useEffect(() => {
  //   // Set up the scene
  //   const scene = new THREE.Scene();

  //   // Set up the camera
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.z = 5;

  //   // Set up the renderer
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   sceneRef.current.appendChild(renderer.domElement);

  //   // Create a cube
  //   const geometry = new THREE.BoxGeometry();
  //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //   const cube = new THREE.Mesh(geometry, material);

  //   // Position the cube in the left-upper corner
  //   cube.position.set(-2, 1, 0); // Adjust the values to position the cube

  //   scene.add(cube);

  //   // Set up rotation animation
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;

  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   // Clean up the scene when the component unmounts
  //   return () => {
  //     scene.remove(cube);
  //     renderer.dispose();
  //   };
  // }, []);

  // return <div ref={sceneRef}></div>;
}
