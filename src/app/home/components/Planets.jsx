"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLenis } from "@studio-freight/react-lenis";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import WordAnimation from "@/components/WordAnimation";
import { disableOverflow, isVisitedAnimations } from "@/helper";
import Image from "next/image";
let initialRender = true;
function cubicBezier(t, p0, p1, p2, p3) {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    p0 * (1 - t3) + 3 * p1 * t * (1 - t2) + 3 * p2 * t2 * (1 - t) + p3 * t3
  );
}
const Model = forwardRef(({ X, Y, Z }, ref) => {
  const group = useRef();
  const valueRef = useRef(0);

  const prevRef = useRef("earth");
  const directionRef = useRef(1);
  const { nodes, animations } = useGLTF("./Aadhya_final-transformed.glb");
  const { actions } = useAnimations(animations, group);
  const cameraAction = actions["Animation"];

  // Effect to pause camera animation on mount
  useEffect(() => {
    if (cameraAction) {
      cameraAction.paused = true;
    }
  }, [cameraAction]);

  // Effect to play camera animation
  useEffect(() => {
    if (cameraAction) {
      cameraAction.play();
    }
  }, [cameraAction]);

  useEffect(() => {
    if (ref.current === "moon") {
      valueRef.current = 0.375;
      directionRef.current = prevRef.current == "earth" ? 1 : -1;
      prevRef.current = "moon";
    } else if (ref.current === "mars") {
      valueRef.current = 1;
      directionRef.current = 1;
      prevRef.current = "mars";
    } else if (ref.current === "earth") {
      valueRef.current = 0;
      directionRef.current = prevRef.current == "moon" ? -1 : 1;
      prevRef.current = "earth";
    }
  }, [ref.current]);

  // Update camera action time in each frame
  useFrame((state, delta) => {
    if (cameraAction) {
      const duration = cameraAction.getClip().duration;
      const targetTime = duration * valueRef.current;

      // Calculate the progress of the animation
      let progress = cameraAction.time / duration;
      // Apply cubic Bézier transition to the progress
      let easedProgress = cubicBezier(progress, 0.9, 1, 1, 0);
      if (directionRef.current == 1) {
        // easedProgress = cubicBezier(progress, 0.9, 1, 1, 0);
        if (ref.current == "mars") {
          console.log("here");
          easedProgress = cubicBezier(progress, 0.001, 0.001, 0.05, 2);
        } else {
          easedProgress = cubicBezier(progress, 0.1, 2, 1.6, 0);
        }
      }
      if (directionRef.current == -1) {
        if (ref.current == "mars") {
          easedProgress = cubicBezier(progress, 1.0, -0.1, 0.09, 0.93);
        } else {
          easedProgress = cubicBezier(progress, 1.0, -0.19, 0.04, 0.33);
        }
      }

      // Set the new time based on the eased progress
      cameraAction.time = THREE.MathUtils.lerp(
        cameraAction.time,
        targetTime,
        delta * easedProgress
      );
    }
  });

  return (
    <>
      <group ref={group} dispose={null}>
        <group name="Scene">
          <PerspectiveCamera
            name="Camera"
            makeDefault
            far={1000}
            near={0.1}
            fov={56.106}
            scale={5.287}
          >
            <pointLight
              color={0xffd3b3}
              castShadow
              position={[1.42, 1.95, -5.29]}
              shadow-camera-right={1}
              shadow-camera-top={1}
              shadow-camera-left={-1}
              shadow-camera-bottom={-1}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              intensity={1}
              shadow-bias={-0.0001}
            />
            <directionalLight
              castShadow
              position={[-5.64, -0.9, 4.55]}
              // position={[-0.35, 2.43, 38.3]}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-left={-10}
              shadow-camera-bottom={-10}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              intensity={1.5}
              shadow-bias={-0.0001}
            />
            <directionalLight
              castShadow
              // position={[-5.64, -0.9, 4.55]}
              position={[-0.35, 2.43, 38.3]}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-left={-10}
              shadow-camera-bottom={-10}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              intensity={0.6}
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
    </>
  );
});

// Main component
const Planets = () => {
  const lenis = useLenis();
  const [X, setX] = useState(1);
  const [Y, setY] = useState(1);
  const [Z, setZ] = useState(1);
  const devContainerRef = useRef(null);
  const orbitImageRef = useRef(null);
  const skipButtonRef = useRef(null);
  const overlayDescriptionRef = useRef(null);
  const MoonImageContainerRef = useRef(null);
  const addLineText = useRef(null);
  const [headingText, setHeadingText] = useState("FROM EARTH");
  const [earthSpanText3, setEarthSpanText3] = useState("[MOON]");
  const [earthSpanText4, setEarthSpanText4] = useState("[384,400 km]");
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
    scroll.current = "earth";
    setHeadingText("FROM EARTH");
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
        }, 2500);
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
    let setTimeoutId, setTimeoutId1, setTimeoutId2;
    if (direction) {
      disableOverflow(true);
      if (skipButtonRef.current) skipButtonRef.current.style.display = "flex";
      addLineText.current.classList.remove(styles.addLineTextAnimation);
      addLineText.current.classList.add(styles.addLineTextAnimation);
      if (headingText === "FROM EARTH" && direction !== -1) {
        scroll.current = "moon";
        clearTimeout(setTimeoutId1);
        setTimeoutId1 = setTimeout(() => {
          orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";
          orbitImageRef.current.style.left = "-30px";
          orbitImageRef.current.style.top = "13px";
          orbitImageRef.current.style.scale = "0.9";
          devContainerRef.current.style.backgroundImage = "none";
          devContainerRef.current.style.background = "#1F2023";
          setHeadingText("TO MOON");
        }, 1700);
      } else if (headingText === "TO MOON") {
        if (direction === 1) {
          scroll.current = "mars";
          clearTimeout(setTimeoutId1);
          setTimeoutId1 = setTimeout(() => {
            devContainerRef.current.style.backgroundImage = "none";
            orbitImageRef.current.style.left = "-20px";
            orbitImageRef.current.style.top = "-18px";
            orbitImageRef.current.style.scale = "1.1";
            devContainerRef.current.style.background = "#100302";
            orbitImageRef.current.src = "/assets/images/orbit-line-mars.png";
            setHeadingText("TO MARS");
          }, 1700);
        } else {
          scroll.current = "earth";
          clearTimeout(setTimeoutId1);
          setTimeoutId1 = setTimeout(() => {
            orbitImageRef.current.src = "/assets/images/orbit-line.png";
            orbitImageRef.current.style.left = "0";
            orbitImageRef.current.style.top = "0";
            orbitImageRef.current.style.scale = "1";
            devContainerRef.current.style.backgroundImage =
              "url('/assets/images/earth-bg.png')";
            setHeadingText("FROM EARTH");
          }, 1700);
        }
      } else if (headingText === "TO MARS" && direction === -1) {
        scroll.current = "moon";
        clearTimeout(setTimeoutId1);
        setTimeoutId1 = setTimeout(() => {
          orbitImageRef.current.src = "/assets/images/orbit-line-moon.png";
          orbitImageRef.current.style.left = "-30px";
          orbitImageRef.current.style.top = "13px";
          orbitImageRef.current.style.scale = "0.9";
          devContainerRef.current.style.backgroundImage = "none";
          devContainerRef.current.style.background = "#1F2023";
          setHeadingText("TO MOON");
        }, 1700);
      }
      if (headingText === "TO MARS" && direction === 1) {
        disableOverflow(false);
        if (skipButtonRef.current) skipButtonRef.current.style.display = "none";
        window.scrollTo({ behavior: "smooth", top: 500 });
      }
    }
    return () => {
      clearTimeout(setTimeoutId1);
      clearTimeout(setTimeoutId2);
      clearTimeout(setTimeoutId);
    };
  }, [direction]);

  useEffect(() => {
    let setTimeoutId, setTimeoutId1;
    if (overlayDescriptionRef.current)
      overlayDescriptionRef.current.style.opacity = "0";
    if (headingText) {
      addLineText.current.classList.remove(styles.addLineTextAnimation);
      let LabelSpanText1 = headingText.includes("MOON")
          ? "[MOON]"
          : headingText.includes("MARS")
          ? "[MARS]"
          : "[EARTH]",
        LabelSpanText2 = headingText.includes("MOON")
          ? "[SPACE SYSTEM]"
          : headingText.includes("MARS")
          ? "[FUTURE HOME]"
          : "[HOME]",
        Description1 = headingText.includes("MOON")
          ? "Ascending beyond limits"
          : headingText.includes("MARS")
          ? "Discovering the new frontier of space exploration"
          : "The nurturing sphere we call home.",
        Description2 = headingText.includes("MOON")
          ? `[Inspiring humaanity's quest for exploration]`
          : headingText.includes("MARS")
          ? `[Discovering New Horizons: Journeying Beyond Earth to Mars]`
          : `[Time to take place among the stars]`,
        spanText3 = headingText.includes("MOON")
          ? `[MARS]`
          : headingText.includes("MARS")
          ? `[MANGALYAAN]`
          : `[MOON]`,
        spanText4 = headingText.includes("MOON")
          ? `[home, AWAITING]`
          : headingText.includes("MARS")
          ? `[SINCE 2013]`
          : `[384,400 km]`;
      MoonImageContainerRef.current.style.display = headingText.includes("MARS")
        ? "none"
        : "flex";
      setTimeoutId = setTimeout(
        () => {
          overlayDescriptionRef.current.style.opacity = "1";
          addLineText.current.classList.add(styles.addLineTextAnimation);

          setEarthSpanText3(spanText3);
          setEarthSpanText4(spanText4);
          setEarthImageLabelSpanText1(LabelSpanText1);
          setEarthImageLabelSpanText2(LabelSpanText2);
          setEarthDescription1(Description1);
          setEarthDescription2(Description2);
          initialRender = false;
        },
        initialRender ? 0 : 2000
      );
    }
    return () => {
      clearTimeout(setTimeoutId);
      clearTimeout(setTimeoutId1);
    };
  }, [headingText]);
  // Render
  return (
    <>
      {isVisitedAnimations() && (
        <button
          ref={skipButtonRef}
          className={styles?.skipButton}
          onClick={() => {
            disableOverflow();
            setTimeout(() => {
              lenis.scrollTo("#SpaceSystemContainer");
              if (skipButtonRef.current)
                skipButtonRef.current.style.display = "none";
            }, 300);
          }}
        >
          <span>skip</span>
          <div className={styles?.skipButtonImg}>
            <Image
              width={100}
              height={100}
              src={"/assets/images/bannerSkip.svg"}
            />
          </div>
        </button>
      )}
      {/* <div
        style={{
          position: "fixed",
          zIndex: "999",
          top: "0",
          width: "100%",
          background: "white",
        }}
      >
        <input
          type="range"
          min={-10}
          max={10}
          value={X}
          step={0.01}
          style={{ width: "400px" }}
          onChange={(e) => setX(e.target.value)}
        />
        {X}
        <input
          type="range"
          min={-10}
          max={10}
          step={0.01}
          style={{ width: "400px" }}
          value={Y}
          onChange={(e) => setY(e.target.value)}
        />
        {Y}
        <input
          type="range"
          min={-10}
          max={10}
          step={0.01}
          value={Z}
          style={{ width: "400px" }}
          onChange={(e) => setZ(e.target.value)}
        />
        {Z}
      </div> */}
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
          style={{ bottom: !headingText.includes("EARTH") ? "53%" : "0" }}
        >
          <WordAnimation
            fading={true}
            stagger={0.08}
            word={headingText}
            style={{
              color: headingText.includes("MOON")
                ? "#424242"
                : headingText.includes("EARTH")
                ? "#ffffffb5"
                : "#C8402D",
              fontSize: !headingText.includes("EARTH") ? "21vw" : "16vw",
            }}
            className={styles.EarthHeadingInner}
          />
        </div>
        <img
          className={styles.OrbitImage}
          ref={orbitImageRef}
          src={"/assets/images/orbit-line.png"}
        />
        <div className={styles.overlayDescription} ref={overlayDescriptionRef}>
          <div className={`${styles?.EarthImageLabel} secondary-font`}>
            <p ref={addLineText} className={styles.addLineText}></p>
            <WordAnimation
              typing={true}
              typeDelay={30}
              word={earthImageLabelSpanText1}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
            <WordAnimation
              typing={true}
              typeDelay={30}
              word={earthImageLabelSpanText2}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
          </div>
          <div className={styles.EarthDescription}>
            <WordAnimation
              fading={true}
              stagger={0.05}
              typeDelay={30}
              word={earthDescription1}
              className={"heading-3"}
              marginSpace={"0px"}
            />
            <WordAnimation
              typing={true}
              typeDelay={30}
              word={earthDescription2}
              className={"caption secondary-font"}
              marginSpace={"0px"}
            />
          </div>
          <div
            ref={MoonImageContainerRef}
            className={styles.MoonImageContainer}
            style={{
              left: earthSpanText3?.includes("MOON")
                ? "auto"
                : earthSpanText3?.includes("MANGALYAAN")
                ? "26%"
                : "29.5%",
              right:
                earthSpanText3?.includes("MARS") ||
                earthSpanText3?.includes("MANGALYAAN")
                  ? "auto"
                  : "20%",
              bottom: earthSpanText3?.includes("MARS")
                ? "23%"
                : earthSpanText3?.includes("MANGALYAAN")
                ? "23%"
                : "0",
              top:
                earthSpanText3?.includes("MARS") ||
                earthSpanText3?.includes("MANGALYAAN")
                  ? "auto"
                  : "27%",
            }}
          >
            <WordAnimation
              typing={true}
              typeDelay={30}
              word={earthSpanText3}
              className={`${styles?.MoonImageLabel} secondary-font`}
              marginSpace={"0px"}
            />
            <WordAnimation
              typing={true}
              typeDelay={30}
              word={earthSpanText4}
              className={`${styles?.MoonImageLabel} secondary-font`}
              marginSpace={"0px"}
            />
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
          <Model ref={scroll} X={X} Y={Y} Z={Z} />
        </Canvas>
      </div>
      {/* Canvas for 3D scene */}
    </>
  );
};

useGLTF.preload("./Aadhya_final-transformed.glb");

export default Planets;
