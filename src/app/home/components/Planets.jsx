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
  const { nodes, animations } = useGLTF("./AadhyaPlanets.glb");
  const { actions } = useAnimations(animations, group);

  // Get reference to the camera action
  const cameraAction = actions["CameraAction.002"];

  // Effect to pause camera animation on mount
  useEffect(() => void (actions["CameraAction.002"].play().paused = true), []);

  // Effect to play camera animation
  useEffect(() => {
    if (cameraAction) {
      cameraAction.play();
    }
  }, [cameraAction]);

  // Update camera action time in each frame
  useFrame((state) => {
    actions["CameraAction.002"].time = THREE.MathUtils.lerp(
      actions["CameraAction.002"].time,
      actions["CameraAction.002"].getClip().duration * ref.current,
      0.05
    );
  });

  // Render the model components
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        {/* Camera */}
        <PerspectiveCamera
          name="Camera"
          makeDefault
          far={1000}
          near={0.1}
          fov={22.895}
          scale={12.49}
        >
          {/* Directional light */}
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
        {/* Earth */}
        <mesh
          name="Earth_"
          geometry={nodes.Earth_.geometry}
          material={nodes.Earth_.material}
          rotation={[-2.564, -0.183, -3.11]}
          scale={-12.56}
        />
        {/* Moon */}
        <mesh
          name="Moon"
          geometry={nodes.Moon.geometry}
          material={nodes.Moon.material}
          scale={-22.0}
        />
        {/* Mars */}
        <mesh
          name="Mars"
          geometry={nodes.Mars.geometry}
          material={nodes.Mars.material}
          scale={-61.801}
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
