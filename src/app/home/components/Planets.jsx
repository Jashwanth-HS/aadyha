"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLenis } from "@studio-freight/react-lenis";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
let targetTimeStore, scrollDirectionStore;
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
  const { nodes, materials, animations } = useGLTF("/supercode11.glb");
  // const { nodes, materials, animations } = useGLTF("/aadhya_new_1.glb");
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
      targetTimeStore = targetTime;
      actions["Animation"].time = THREE.MathUtils.lerp(
        actions["Animation"].time,
        targetTime,
        0.1
      );
    }
  });
  console.log("props: ", props?.Xvalue);
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.001}
          fov={22.895}
          position={[-0.083, 0.016, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <pointLight
          // color={0xffd3b3}
          castShadow
          color={0xc47d12}
          width={10}
          height={40}
          shadow-mapSize-width={10}
          shadow-mapSize-height={40}
          // position={[props?.Xvalue, props?.Yvalue, props?.Zvalue]}
          position={[-6.1, 0, 1.1]}
          intensity={2}
        />
        {/* <directionalLight
          castShadow
          // color={0xc47d12}
          // position={[-5.64, -0.9, 4.55]}
          position={[111, 587, 31]}
          width={props?.Xvalue}
          height={props?.Yvalue}
          // position={[-0.35, 2.43, 38.3]}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-left={-10}
          shadow-camera-bottom={-10}
          shadow-mapSize-width={10}
          shadow-mapSize-height={10}
          intensity={5}
          shadow-bias={-0.0001}
        /> */}
        {/* <directionalLight
          castShadow
          // position={[-5.64, -0.9, 4.55]}
          // position={[-0.35, 2.43, 38.3]}
          position={[-3, -2, 10]}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-left={-10}
          shadow-camera-bottom={-10}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          intensity={0.6}
          shadow-bias={-0.0001}
        /> */}
        <mesh
          name="Mars"
          geometry={nodes.Mars.geometry}
          material={materials["Material.001"]}
          position={[-10.158, -0.407, -0.001]}
          rotation={[2.355, -0.563, 2.155]}
          scale={0.046}
        />
        <mesh
          name="Earth001"
          geometry={nodes.Earth001.geometry}
          material={materials["Material.003"]}
          position={[-7.545, 0, 0]}
          rotation={[-1.125, -1.122, -1.001]}
          scale={1.079}
        />
        <mesh
          name="Moon"
          geometry={nodes.Moon.geometry}
          material={materials.Material}
          position={[-8.671, 0.541, 0.007]}
          scale={0.039}
        />
      </group>
    </group>
  );
});

const Planets = () => {
  const lenis = useLenis();
  const skipButtonRef = useRef(null);
  const divContainerRef = useRef(null);
  const overlayDescriptionRef = useRef(null);
  const MoonImageContainerRef = useRef(null);
  const addLineText = useRef(null);
  const [Xvalue, setValueX] = useState(10);
  const [Yvalue, setValueY] = useState(10);
  const [Zvalue, setValueZ] = useState(10);
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
    };
  }, []);

  useEffect(() => {
    const handleWindowScroll = async () => {
      if (window.innerWidth > 768) {
        const scrollY = window.scrollY;
        if (divContainerRef.current) {
          const divContainer = divContainerRef.current.getBoundingClientRect();
          if (
            scrollY < divContainer.height &&
            scrollY < PrevWindowScroll.current
          ) {
            lenis.scrollTo("body");
          }
        }

        // if (
        //   scrollY > 10 &&
        //   scrollY <= 750 &&
        //   scrollY > PrevWindowScroll.current
        // ) {
        //   skipButtonRef.current.style.display = "flex";
        //   isVisible = true;
        //   skipButtonRef.current.click();
        // } else if (
        //   scrollY > 10 &&
        //   scrollY <= 750 &&
        //   scrollY < PrevWindowScroll.current
        // ) {
        //   lenis.scrollTo("body");
        // }
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
        ? `[Inspiring humanity's quest for exploration]`
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
      if (targetTimeStore >= 10.41 && scrollDirectionStore < scroll.current) {
        skipButtonRef.current.style.display = "flex";
        isVisible = true;
        skipButtonRef.current.click();
      }
      scrollDirectionStore = scroll.current;
      if (
        (scroll.current > 0.2 && scroll.current < 0.5) ||
        (scroll.current > 0.75 && scroll.current < 0.84)
      ) {
        overlayDescriptionRef.current.style.opacity = "1";
        addLineText.current.classList.remove(styles.addLineTextAnimation);
        setOpacity(false);
      }

      if (scroll.current > 0.5 && scroll.current < 0.75) {
        setHeadingText("TO MOON");
        setOpacity(true);
      } else if (scroll.current > 0.84 && scroll.current < 1) {
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
        ref={divContainerRef}
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
        {/* <div
          style={{
            display: "flex",
            zIndex: "999",
            height: "30px",
            width: "100%",
            background: "white",
            position: "fixed",
            top: "0",
            left: "0",
          }}
        >
          <span style={{ width: "100px" }}>{Xvalue}:</span>
          <input
            type="range"
            value={Xvalue}
            min={-10}
            max={10}
            step={0.1}
            onChange={(e) => setValueX(e.target.value)}
          />
          <span style={{ width: "100px" }}>{Yvalue}:</span>
          <input
            type="range"
            value={Yvalue}
            min={-10}
            max={10}
            step={0.1}
            onChange={(e) => setValueY(e.target.value)}
          />
          <span style={{ width: "100px" }}>{Zvalue}:</span>
          <input
            type="range"
            value={Zvalue}
            min={-10}
            max={10}
            step={0.1}
            onChange={(e) => setValueZ(e.target.value)}
          />
        </div> */}
        <Canvas
          className={styles?.canvasContainer}
          gl={{ antialias: true, pixelRatio: devicePixelRatio }}
        >
          {/* Ambient light */}
          <ambientLight intensity={1} />
          {/* Directional light */}
          <directionalLight intensity={2} position={[26, 80, 14]} />
          <directionalLight intensity={3} position={[100, -211, -205]} />
          {/* Model component */}
          <Model ref={scroll} Xvalue={Xvalue} Yvalue={Yvalue} Zvalue={Zvalue} />
          {/* <ModelLatest ref={scroll} /> */}
        </Canvas>
      </div>
    </>
  );
};

// useGLTF.preload("./aadhya_new_1.glb");
useGLTF.preload("/supercode11.glb");

export default Planets;
