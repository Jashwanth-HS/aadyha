"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLenis } from "@studio-freight/react-lenis";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
// import WordAnimation from "@/components/WordAnimation";
const WordAnimation = dynamic(() => import("@/components/WordAnimation"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        top: "0",
        height: "100vh",
        width: "100vw",
        background: "#01031b",
        zIndex: "9999999",
      }}
    ></div>
  ),
});
import Image from "next/image";
import { disableOverflow } from "@/helper";
import dynamic from "next/dynamic";
let isVisible = false;
const Model = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("./Aadhya_final-transformed.glb");
  const { actions } = useAnimations(animations, group);

  // Effect to pause camera animation on mount
  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].paused = true;
    }
  }, [actions["Animation"]]);

  // Effect to play camera animation
  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].play();
    }
  }, [actions["Animation"]]);

  useFrame(() => {
    if (actions["Animation"]) {
      const duration = actions["Animation"].getClip().duration;
      const targetTime = duration * ref.current;
      actions["Animation"].time = THREE.MathUtils.lerp(
        actions["Animation"].time,
        targetTime,
        0.1
      );
    }
  });

  return (
    <>
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
  const skipButtonRef = useRef(null);
  const overlayDescriptionRef = useRef(null);
  const MoonImageContainerRef = useRef(null);
  const addLineText = useRef(null);
  const [headingText, setHeadingText] = useState("FROM EARTH");
  const [opacity, setOpacity] = useState(true);
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

  const PrevWindowScroll = useRef(0);
  const scroll = useRef(0);

  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    let setTimeoutId;
    disableOverflow();
    const loader = document.getElementById("loaderMain");
    if (loader) {
      loader.style.display = "none";
    }
    setTimeoutId = setTimeout(() => {
      setHeadingText("FROM EARTH");
    }, 1000);
    addLineText.current.classList.remove(styles.addLineTextAnimation);
    addLineText.current.classList.add(styles.addLineTextAnimation);
    return () => {
      clearTimeout(setTimeoutId);
      loader.style.display = "flex";
    };
  }, []);

  useEffect(() => {
    const handleWindowScroll = async () => {
      if (window.innerWidth > 768) {
        const scrollY = window.scrollY;
        if (
          scrollY > 10 &&
          scrollY <= 750 &&
          scrollY > PrevWindowScroll.current
        ) {
          skipButtonRef.current.style.display = "flex";
          isVisible = true;
          skipButtonRef.current.click();
        } else if (
          scrollY > 10 &&
          scrollY <= 750 &&
          scrollY < PrevWindowScroll.current
        ) {
          lenis.scrollTo("body");
        }
        PrevWindowScroll.current = scrollY;
      }
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [lenis]);

  useEffect(() => {
    if (overlayDescriptionRef.current)
      overlayDescriptionRef.current.style.opacity = "0";
    if (headingText) {
      addLineText.current.classList.remove(styles.addLineTextAnimation);
    }
    let LabelSpanText1 = headingText?.includes("MOON")
        ? "[MOON]"
        : headingText?.includes("MARS")
        ? "[MARS]"
        : headingText?.includes("EARTH")
        ? "[EARTH]"
        : "",
      LabelSpanText2 = headingText?.includes("MOON")
        ? "[SPACE SYSTEM]"
        : headingText?.includes("MARS")
        ? "[FUTURE HOME]"
        : headingText?.includes("EARTH")
        ? "[HOME]"
        : "",
      Description1 = headingText?.includes("MOON")
        ? "Ascending beyond limits"
        : headingText?.includes("MARS")
        ? "Discovering the new frontier of space exploration"
        : headingText?.includes("EARTH")
        ? "The nurturing sphere we call home."
        : "",
      Description2 = headingText?.includes("MOON")
        ? `[Inspiring humaanity's quest for exploration]`
        : headingText?.includes("MARS")
        ? `[Discovering New Horizons: Journeying Beyond Earth to Mars]`
        : headingText?.includes("EARTH")
        ? `[Time to take place among the stars]`
        : "",
      spanText3 = headingText?.includes("MOON")
        ? `[MARS]`
        : headingText?.includes("MARS")
        ? `[MANGALYAAN]`
        : headingText?.includes("EARTH")
        ? `[MOON]`
        : "",
      spanText4 = headingText?.includes("MOON")
        ? `[home, AWAITING]`
        : headingText?.includes("MARS")
        ? `[SINCE 2013]`
        : headingText?.includes("EARTH")
        ? `[384,400 km]`
        : "";
    MoonImageContainerRef.current.style.display = headingText?.includes("MARS")
      ? "none"
      : "flex";

    overlayDescriptionRef.current.style.opacity = "1";
    addLineText.current.classList.add(styles.addLineTextAnimation);
    setEarthSpanText3(spanText3);
    setEarthSpanText4(spanText4);
    setEarthImageLabelSpanText1(LabelSpanText1);
    setEarthImageLabelSpanText2(LabelSpanText2);
    setEarthDescription1(Description1);
    setEarthDescription2(Description2);
  }, [headingText]);

  const handleScroll = (e) => {
    if (window.innerWidth > 768) {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      if (
        (scroll.current > 0.2 && scroll.current < 0.3) ||
        (scroll.current > 0.6 && scroll.current < 0.8)
      ) {
        overlayDescriptionRef.current.style.opacity = "1";
        addLineText.current.classList.remove(styles.addLineTextAnimation);
        setOpacity(false);
      }

      if (scroll.current > 0.3 && scroll.current < 0.6) {
        setHeadingText("TO MOON");
        setOpacity(true);
      } else if (scroll.current > 0.8 && scroll.current < 1) {
        setHeadingText("TO MARS");
        setOpacity(true);
      } else if (scroll.current < 0.2) {
        setHeadingText("FROM EARTH");
        setOpacity(true);
      }
    }
  };

  // Render
  return (
    <>
      <button
        ref={skipButtonRef}
        className={styles?.skipButton}
        style={{ display: isVisible ? "flex" : "none" }}
        onClick={() => {
          setTimeout(() => {
            lenis.scrollTo("#SpaceSystemContainer");
          }, 100);
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

      <div
        className={styles?.divContainer}
        style={{
          background: headingText?.includes("MOON")
            ? "#1F2023"
            : headingText?.includes("EARTH")
            ? "#00031B"
            : "#100302",
        }}
      >
        {/* Container for scrollable content */}
        <div
          className={styles?.overlayDiv}
          data-lenis-prevent
          ref={scrollableDivRef}
          onScroll={(e) => {
            handleScroll(e);
            // Update scroll position
          }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${styles.EarthHeading} ${
            !headingText?.includes("EARTH") ? styles?.EarthHeadingInnerTop : ""
          }`}
          style={{
            bottom: !headingText?.includes("EARTH") ? "53%" : "0",
          }}
        >
          <WordAnimation
            opacity={opacity}
            fading={true}
            stagger={0.08}
            word={headingText}
            style={{
              color: headingText?.includes("MOON")
                ? "#424242"
                : headingText?.includes("EARTH")
                ? "#ffffffb5"
                : "#C8402D",
              fontSize: !headingText?.includes("EARTH") ? "21vw" : "16vw",
            }}
            className={styles.EarthHeadingInner}
          />
        </div>
        <img
          className={styles?.startsImg}
          src="/assets/images/stars.svg"
          style={{ opacity: headingText?.includes("EARTH") ? "1" : "0" }}
        />
        <img
          className={styles.OrbitEarthImage}
          style={{
            opacity: headingText?.includes("EARTH") ? "1" : "0",
          }}
          src={"/assets/images/orbit-line.png"}
        />
        <img
          className={styles.OrbitMoonImage}
          style={{
            opacity: headingText?.includes("MOON") ? "1" : "0",
          }}
          src={"/assets/images/orbit-line-moon.png"}
        />
        <img
          className={styles.OrbitMarsImage}
          style={{
            opacity: headingText?.includes("MARS") ? "1" : "0",
          }}
          src={"/assets/images/orbit-line-mars.png"}
        />
        <div className={styles.overlayDescription} ref={overlayDescriptionRef}>
          <div className={`${styles?.EarthImageLabel} secondary-font`}>
            <p
              ref={addLineText}
              className={styles.addLineText}
              style={{ opacity: opacity ? 1 : 0 }}
            ></p>
            <WordAnimation
              opacity={opacity}
              typing={true}
              typeDelay={30}
              word={earthImageLabelSpanText1}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
            <WordAnimation
              opacity={opacity}
              opacityIntensity={0.5}
              typing={true}
              typeDelay={30}
              word={earthImageLabelSpanText2}
              className={styles.EarthImageLabelSpan}
              marginSpace={"0px"}
            />
          </div>
          <div className={styles.EarthDescription}>
            <WordAnimation
              opacity={opacity}
              fading={true}
              stagger={0.05}
              typeDelay={30}
              word={earthDescription1}
              className={"heading-3"}
              marginSpace={"0px"}
            />
            <WordAnimation
              opacity={opacity}
              opacityIntensity={0.5}
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
              width:
                earthSpanText3?.includes("MARS") ||
                earthSpanText3?.includes("MANGALYAAN")
                  ? "auto"
                  : "90px",
            }}
          >
            <WordAnimation
              opacity={opacity}
              typing={true}
              typeDelay={30}
              word={earthSpanText3}
              className={`${styles?.MoonImageLabel} secondary-font`}
              marginSpace={"0px"}
            />
            <WordAnimation
              opacity={opacity}
              opacityIntensity={0.5}
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
          <Model ref={scroll} />
        </Canvas>
      </div>
    </>
  );
};

useGLTF.preload("./Aadhya_final-transformed.glb");

export default Planets;
