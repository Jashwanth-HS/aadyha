"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";

// Model component which loads a 3D model and animations
const Model = forwardRef((props, ref) => {
  // Refs for the group and camera actions
  const group = useRef();
  const { nodes, animations } = useGLTF("./Aadhya_latest-transformed.glb");
  const { actions } = useAnimations(animations, group);

  // Get reference to the camera action
  const cameraAction = actions["Animation"];

  // Effect to pause camera animation on mount
  useEffect(() => void (actions["Animation"].play().paused = true), []);

  // Effect to play camera animation
  useEffect(() => {
    if (cameraAction) {
      cameraAction.play();
    }
  }, [cameraAction]);

  // Update camera action time in each frame
  useFrame((state) => {
    actions["Animation"].time = THREE.MathUtils.lerp(
      actions["Animation"].time,
      actions["Animation"].getClip().duration * ref.current,
      0.05
    );
  });

  // Render the model components
  return (
    // <group ref={group} dispose={null}>
    //   <group name="Scene">
    //     {/* Camera */}
    //     <PerspectiveCamera
    //       name="Camera"
    //       makeDefault
    //       far={1000}
    //       near={0.1}
    //       fov={22.895}
    //       scale={12.49}
    //     >
    //       {/* Directional light */}
    //       <directionalLight
    //         castShadow
    //         position={[-0.35, 2.43, 38.3]}
    //         shadow-camera-right={8}
    //         shadow-camera-top={8}
    //         shadow-camera-left={-8}
    //         shadow-camera-bottom={-8}
    //         shadow-mapSize-width={1024}
    //         shadow-mapSize-height={1024}
    //         intensity={2}
    //         shadow-bias={-0.0001}
    //       />
    //     </PerspectiveCamera>
    //     {/* Earth */}
    //     <mesh
    //       name="Earth_"
    //       geometry={nodes.Earth_.geometry}
    //       material={nodes.Earth_.material}
    //       rotation={[-2.564, -0.183, -3.11]}
    //       scale={-12.56}
    //     />
    //     {/* Moon */}
    //     <mesh
    //       name="Moon"
    //       geometry={nodes.Moon.geometry}
    //       material={nodes.Moon.material}
    //       scale={-22.0}
    //     />
    //     {/* Mars */}
    //     <mesh
    //       name="Mars"
    //       geometry={nodes.Mars.geometry}
    //       material={nodes.Mars.material}
    //       scale={-61.801}
    //     />
    //   </group>
    // </group>
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault
          far={1000}
          near={0.1}
          fov={56.106}
          scale={5.287}
        >
          <directionalLight
            castShadow
            position={[-0.35, 2.43, 38.3]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <mesh
          name="Earth_"
          geometry={nodes.Earth_.geometry}
          material={nodes.Earth_.material}
          position={[0.234, 0.25, -42.94]}
          rotation={[0.389, -0.245, 3.054]}
          scale={-12.921}
        />
        <mesh
          name="Moon"
          geometry={nodes.Moon.geometry}
          material={nodes.Moon.material}
          position={[33.679, 17.157, -51.773]}
          rotation={[1.205, 0.203, 0.067]}
          scale={-1.763}
        />
        <mesh
          name="Mars"
          geometry={nodes.Mars.geometry}
          material={nodes.Mars.material}
          position={[-34.067, 1.245, 56.371]}
          rotation={[-0.016, -1.146, -0.306]}
          scale={-6.037}
        />
      </group>
    </group>
  );
});

// Main component
const Planets = ({ children }) => {
  // Ref for scroll position
  const scroll = useRef(0);
  // Calculate device pixel ratio
  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;
  // Render
  return (
    <>
      {/* Container for scrollable content */}
      <div
        className={styles?.divContainer}
        onScroll={(e) => {
          // Update scroll position
          scroll.current =
            e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        }}
      >
        {children}
      </div>
      {/* Canvas for 3D scene */}
      <Canvas
        className={styles?.canvasContainer}
        gl={{ antialias: true, pixelRatio: devicePixelRatio }}
      >
        {/* Ambient light */}
        <ambientLight intensity={1} />
        {/* Directional light */}
        <directionalLight intensity={1} position={[10, 10, 0]} />
        {/* Model component */}
        <Model ref={scroll} />
      </Canvas>
    </>
  );
};

export default Planets;
