"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import WordAnimation from "@/components/WordAnimation";

// Model component which loads a 3D model and animations
const Model = forwardRef((props, ref) => {
  // Refs for the group and camera actions
  const group = useRef();
  const { nodes, animations } = useGLTF("./Aadhya_final-transformed.glb");
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
    let gotoValue = ref.current * 0.0005;
    gotoValue = gotoValue > 0.8 ? 1 : gotoValue;
    actions["Animation"].time = THREE.MathUtils.lerp(
      actions["Animation"].time,
      actions["Animation"].getClip().duration * gotoValue,
      0.015
    );
  });

  // Render the model components
  return (
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
          scale={0}
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
const Planets = () => {
  const devContainerRef = useRef(null);
  const orbitImageRef = useRef(null);
  const addLineText = useRef(null);
  const [headingText, setHeadingText] = useState("FROM EARTH");
  const [earthImageLabelSpanText1, setEarthImageLabelSpanText1] =
    useState("[EARTH]");
  const [earthImageLabelSpanText2, setEarthImageLabelSpanText2] =
    useState("[HOME]");
  const [earthDescription1, setEarthDescription1] = useState(
    "The nurturing sphere we call home."
  );
  const [earthDescription2, setEarthDescription2] = useState(
    "[Time to take place among the stars]"
  );
  // Ref for scroll position
  const scrolling = useRef(false);
  const scroll = useRef(0);
  const [direction, setDirection] = useState();
  // Calculate device pixel ratio
  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    let setTimeoutId;
    addLineText.current.classList.remove(styles.addLineTextAnimation);
    addLineText.current.classList.add(styles.addLineTextAnimation);
    setTimeoutId = setTimeout(() => {
      addLineText.current.classList.remove(styles.addLineTextAnimation);
    }, 5000);
    const handleWheel = (event) => {
      if (scrolling.current === false) {
        const deltaY = event.deltaY;
        const direction = deltaY >= 1 ? 1 : -1; // 1 for down, -1 for up
        setDirection(direction);

        // Prevent default scroll behavior
        event.preventDefault();
        // Calculate the target scroll position based on the direction
        const targetScroll =
          scrollableDivRef.current.scrollTop +
          (direction === 1 ? window.innerHeight : -window.innerHeight);

        // Define variables for animation
        const startScroll =
          scrollableDivRef.current && scrollableDivRef.current.scrollTop;
        let startTime;

        // Define the scroll animation function
        function animateScroll(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          // Calculate the new scroll position using a linear interpolation
          const newScroll =
            startScroll + (targetScroll - startScroll) * (elapsed / 1000);
          scrolling.current = true;
          scroll.current = newScroll;
          // Scroll to the new position
          if (scrollableDivRef.current)
            scrollableDivRef.current.scrollTop = newScroll;
          clearTimeout(setTimeoutId);
          setTimeoutId = setTimeout(() => {
            scrolling.current = false;
            setDirection(false);
          }, 4000);
          // Continue the animation until reaching the target position
          if (elapsed < 1000) {
            requestAnimationFrame(animateScroll);
          }
        }

        // Start the animation
        requestAnimationFrame(animateScroll);
      }
    };

    // Add event listener for wheel events
    if (scrollableDivRef.current)
      scrollableDivRef.current.addEventListener("wheel", handleWheel);

    // Clean up by removing the event listener
    return () => {
      clearTimeout(setTimeoutId);
      if (scrollableDivRef.current)
        scrollableDivRef.current.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    let setTimeoutId;
    if (direction) {
      addLineText.current.classList.remove(styles.addLineTextAnimation);
      addLineText.current.classList.add(styles.addLineTextAnimation);
      setTimeoutId = setTimeout(() => {
        addLineText.current.classList.remove(styles.addLineTextAnimation);
      }, 5000);
      if (headingText === "FROM EARTH") {
        orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";
        devContainerRef.current.style.backgroundImage = "none";
        devContainerRef.current.style.background = "#1F2023";
        setHeadingText("TO MOON");
        setEarthImageLabelSpanText1("[MOON]");
        setEarthImageLabelSpanText2("[SPACE SYSTEM]");
        setEarthDescription1("Ascending beyond limits");
        setEarthDescription2(`[Inspiring humaanity's quest for exploration]`);
      } else if (headingText === "TO MOON") {
        if (direction === 1) {
          devContainerRef.current.style.backgroundImage = "none";
          devContainerRef.current.style.background = "black";
          orbitImageRef.current.src = "/assets/images/orbit-line-mars.png";
          setHeadingText("TO MARS");
          setEarthImageLabelSpanText1("[MARS]");
          setEarthImageLabelSpanText2("[FUTURE HOME]");
          setEarthDescription1(
            "Discovering the new frontier of space exploration"
          );
          setEarthDescription2(
            `[Discovering New Horizons: Journeying Beyond Earth to Mars]`
          );
        } else {
          orbitImageRef.current.src = "/assets/images/orbit-line.png";
          devContainerRef.current.style.backgroundImage =
            "url('/assets/images/earth-bg.png')";
          setHeadingText("FROM EARTH");
          setEarthImageLabelSpanText1("[EARTH]");
          setEarthImageLabelSpanText2("[HOME]");
          setEarthDescription1("The nurturing sphere we call home.");
          setEarthDescription2(`[Time to take place among the stars]`);
        }
      } else if (headingText === "TO MARS" && direction === -1) {
        orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";

        devContainerRef.current.style.backgroundImage = "none";
        devContainerRef.current.style.background = "#1F2023";
        setHeadingText("TO MOON");
        setEarthImageLabelSpanText1("[MOON]");
        setEarthImageLabelSpanText2("[SPACE SYSTEM]");
        setEarthDescription1("Ascending beyond limits");
        setEarthDescription2(`[Inspiring humaanity's quest for exploration]`);
      }
    }
    return () => {
      clearTimeout(clearTimeout(setTimeoutId));
    };
  }, [direction]);
  // Render
  return (
    <>
      <div className={styles?.divContainer} ref={devContainerRef}>
        {/* Container for scrollable content */}
        <div
          className={styles?.overlayDiv}
          data-lenis-prevent
          ref={scrollableDivRef}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${styles.EarthHeading} ${
            !headingText.includes("EARTH") ? styles?.EarthHeadingInnerTop : ""
          }`}
        >
          <WordAnimation
            word={headingText}
            className={styles.EarthHeadingInner}
          />
        </div>
        <img
          className={styles.OrbitImage}
          ref={orbitImageRef}
          src={"/assets/images/orbit-line.png"}
        />
        <div className={styles.overlayDescription}>
          <div className={`${styles?.EarthImageLabel} secondary-font`}>
            <p ref={addLineText} className={styles.addLineText}></p>
            <WordAnimation
              word={earthImageLabelSpanText1}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
              delay={1000}
            />
            <WordAnimation
              word={earthImageLabelSpanText2}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
              delay={2000}
            />
          </div>
          <div className={styles.EarthDescription}>
            <WordAnimation
              stagger={0.07}
              delay={1000}
              word={earthDescription1}
              className={"heading-3"}
              marginSpace={"0px"}
            />
            <WordAnimation
              stagger={0.07}
              delay={2000}
              word={earthDescription2}
              className={"caption secondary-font"}
              marginSpace={"0px"}
            />
          </div>
          <div className={styles.MoonImageContainer}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <circle cx="9.5" cy="9.5" r="9.5" fill="#4B4B4B" />
            </svg> */}
            <p className={`${styles?.MoonImageLabel} secondary-font`}>
              <span>[moon]</span> <span>[384,400 km]</span>
            </p>
          </div>
        </div>
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
      </div>
      {/* Canvas for 3D scene */}
    </>
  );
};

useGLTF.preload("./Aadhya_final-transformed.glb");

export default Planets;
