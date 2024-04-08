"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import WordAnimation from "@/components/WordAnimation";
import { disableOverflow } from "@/helper";
// Model component which loads a 3D model and animations
const Model = forwardRef((props, ref) => {
  // Refs for the group and camera actions
  const group = useRef();
  const valueRef = useRef(0);
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

  useEffect(() => {
    if (ref.current == "moon") {
      valueRef.current = 0.4;
    } else if (ref.current == "mars") {
      valueRef.current = 1;
      actions["Animation"];
    } else if (ref.current == "earth") {
      valueRef.current = 0;
    }
  }, [ref.current]);
  // Update camera action time in each frame
  useFrame((state) => {
    actions["Animation"].time = THREE.MathUtils.lerp(
      actions["Animation"].time,
      actions["Animation"].getClip().duration * valueRef.current,
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
  // const touchY = useRef(0);
  const [direction, setDirection] = useState();
  // Calculate device pixel ratio
  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    disableOverflow(true);
    let setTimeoutId;
    addLineText.current.classList.remove(styles.addLineTextAnimation);
    addLineText.current.classList.add(styles.addLineTextAnimation);
    setTimeoutId = setTimeout(() => {
      addLineText.current.classList.remove(styles.addLineTextAnimation);
    }, 5000);

    const handleWheel = (event) => {
      if (scrolling.current === false) {
        scrolling.current = true;
        const deltaY = event.deltaY;
        const direction = deltaY >= 1 ? 1 : -1; // 1 for down, -1 for up
        setDirection(direction);
        // Prevent default scroll behavior
        event.preventDefault();
        clearTimeout(setTimeoutId);
        setTimeoutId = setTimeout(() => {
          scrolling.current = false;
          setDirection(false);
        }, 2000);
      }
    };

    // Add event listener for wheel events
    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener("wheel", handleWheel);
    }

    // Clean up by removing the event listener
    return () => {
      clearTimeout(setTimeoutId);
      if (scrollableDivRef.current) {
        scrollableDivRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  useEffect(() => {
    let setTimeoutId, setTimeoutId1;
    if (direction) {
      disableOverflow(true);
      addLineText.current.classList.remove(styles.addLineTextAnimation);
      addLineText.current.classList.add(styles.addLineTextAnimation);
      setTimeoutId = setTimeout(() => {
        addLineText.current.classList.remove(styles.addLineTextAnimation);
      }, 3500);
      if (headingText === "FROM EARTH" && direction !== -1) {
        scroll.current = "moon";
        clearTimeout(setTimeoutId1);
        setTimeoutId1 = setTimeout(() => {
          orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";
          devContainerRef.current.style.backgroundImage = "none";
          devContainerRef.current.style.background = "#1F2023";
          setHeadingText("TO MOON");
          setEarthImageLabelSpanText1("[MOON]");
          setEarthImageLabelSpanText2("[SPACE SYSTEM]");
          setEarthDescription1("Ascending beyond limits");
          setEarthDescription2(`[Inspiring humaanity's quest for exploration]`);
        }, 1700);
      } else if (headingText === "TO MOON") {
        if (direction === 1) {
          scroll.current = "mars";
          clearTimeout(setTimeoutId1);
          setTimeoutId1 = setTimeout(() => {
            devContainerRef.current.style.backgroundImage = "none";
            devContainerRef.current.style.background = "#100302";
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
          }, 1700);
        } else {
          scroll.current = "earth";
          clearTimeout(setTimeoutId1);
          setTimeoutId1 = setTimeout(() => {
            orbitImageRef.current.src = "/assets/images/orbit-line.png";
            devContainerRef.current.style.backgroundImage =
              "url('/assets/images/earth-bg.png')";
            setHeadingText("FROM EARTH");
            setEarthImageLabelSpanText1("[EARTH]");
            setEarthImageLabelSpanText2("[HOME]");
            setEarthDescription1("The nurturing sphere we call home.");
            setEarthDescription2(`[Time to take place among the stars]`);
          }, 1700);
        }
      } else if (headingText === "TO MARS" && direction === -1) {
        scroll.current = "moon";
        clearTimeout(setTimeoutId1);
        setTimeoutId1 = setTimeout(() => {
          orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";

          devContainerRef.current.style.backgroundImage = "none";
          devContainerRef.current.style.background = "#1F2023";
          setHeadingText("TO MOON");
          setEarthImageLabelSpanText1("[MOON]");
          setEarthImageLabelSpanText2("[SPACE SYSTEM]");
          setEarthDescription1("Ascending beyond limits");
          setEarthDescription2(`[Inspiring humaanity's quest for exploration]`);
        }, 1700);
      }
      if (headingText === "TO MARS" && direction === 1) {
        disableOverflow(false);
        window.scrollTo({ behavior: "smooth", top: 500 });
      }
    }
    return () => {
      clearTimeout(setTimeoutId1);
      clearTimeout(setTimeoutId);
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
            stagger={0.1}
            word={headingText}
            style={{
              color: headingText.includes("MOON")
                ? "#424242"
                : headingText.includes("EARTH")
                ? "#ffffff"
                : "#C8402D",
            }}
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
              stagger={0.07}
              word={earthImageLabelSpanText1}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
            <WordAnimation
              stagger={0.07}
              word={earthImageLabelSpanText2}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
          </div>
          <div className={styles.EarthDescription}>
            <WordAnimation
              stagger={0.07}
              word={earthDescription1}
              className={"heading-3"}
              marginSpace={"0px"}
            />
            <WordAnimation
              stagger={0.07}
              word={earthDescription2}
              className={"caption secondary-font"}
              marginSpace={"0px"}
            />
          </div>
          <div className={styles.MoonImageContainer}>
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
