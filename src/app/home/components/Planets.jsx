"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLenis } from "@studio-freight/react-lenis";
import styles from "../css/main.module.css";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
let targetTimeStore, scrollDirectionStore, isModelLoaded;
// import WordAnimation from "@/components/WordAnimation";
const WordAnimation = dynamic(() => import("@/components/WordAnimation"), {
  ssr: false,
  // loading: () => <PageLoad />,
});
import Image from "next/image";
import { disableOverflow } from "@/helper";
import dynamic from "next/dynamic";

let isVisible = false;

const Model = ({ isModelLoaded, scroll }) => {
  const group = useRef();
  // const { nodes, materials, animations } = useGLTF("/Aadyah_animation.glb");
  const { nodes, materials, animations } = useGLTF(
    "/Aadyah_animation-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  // Effect to pause camera animation on mount
  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].paused = true;
    }
  }, [actions]);

  // Effect to play camera animation
  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].play();
      if (isModelLoaded) isModelLoaded(true);
    }
  }, [actions, isModelLoaded]);

  useFrame(() => {
    if (actions["Animation"]) {
      const duration = actions["Animation"].getClip().duration;
      const targetTime = duration * scroll;
      targetTimeStore = targetTime;
      actions["Animation"].time = THREE.MathUtils.lerp(
        actions["Animation"].time,
        targetTime,
        0.1
      );
    }
  });
  return (
    <group ref={group} dispose={null}>
      {console.log("jj")}
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.001}
          fov={22.895}
          position={[1.601, 0.129, 0]}
          rotation={[-1.571, 1.557, 1.571]}
        />

        <pointLight
          // color={0xffd3b3}
          castShadow
          color={0xc47d12}
          width={10}
          height={40}
          shadow-mapSize-width={10}
          shadow-mapSize-height={40}
          position={[-6.1, 0, 1.1]}
          intensity={2}
        />

        <mesh
          name="Mars"
          castShadow
          receiveShadow
          geometry={nodes.Mars.geometry}
          material={materials["Material.001"]}
          position={[-10.158, -0.407, -0.001]}
          rotation={[2.355, -0.563, 2.155]}
          scale={0.046}
        />
        <mesh
          name="Earth001"
          castShadow
          receiveShadow
          geometry={nodes.Earth001.geometry}
          material={materials["Material.003"]}
          position={[-7.545, 0, 0]}
          rotation={[-1.125, -1.122, -1.001]}
          scale={1.079}
        />
        <mesh
          name="Moon"
          castShadow
          receiveShadow
          geometry={nodes.Moon.geometry}
          material={materials.Material}
          position={[-8.671, 0.541, 0.007]}
          rotation={[0.263, 0.153, 0.689]}
          scale={0.039}
        />
      </group>
    </group>
  );
};

const Planets = ({ SetIsModelLoaded, isModelLoaded }) => {
  const lenis = useLenis();
  const skipButtonRef = useRef(null);
  const divContainerRef = useRef(null);
  const overlayDescriptionRef = useRef(null);
  const MoonImageContainerRef = useRef(null);
  const addLineText = useRef(null);
  // const [WordAnimationLoaded, setWordAnimationLoaded] = useState(false); // State to track Planets component loading
  const [headingText, setHeadingText] = useState("FROM EARTH");
  const [opacity, setOpacity] = useState(true);
  const [hideModel, setHideModel] = useState(false);
  const [scroll, setScroll] = useState(0);
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

  const devicePixelRatio =
    typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    let setTimeoutId;
    if (isModelLoaded) {
      disableOverflow();
      // const loader = document.getElementById("loaderMain");
      // if (loader) {
      //   loader.style.display = "none";
      // }
      setTimeoutId = setTimeout(() => {
        setHeadingText("FROM EARTH");
        // setWordAnimationLoaded(true);
        addLineText.current?.classList.remove(styles.addLineTextAnimation);
        addLineText.current?.classList.add(styles.addLineTextAnimation);
      }, 2500);
    }
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [isModelLoaded]);

  useEffect(() => {
    if (isModelLoaded) {
      const handleWindowScroll = async () => {
        if (window.innerWidth > 768) {
          const scrollY = window.scrollY;
          if (scrollY > 3500) {
            setHideModel(true);
          } else {
            setHideModel(false);
          }
          if (divContainerRef.current) {
            const divContainer =
              divContainerRef.current?.getBoundingClientRect();
            if (
              scrollY < divContainer.height &&
              scrollY < PrevWindowScroll.current
            ) {
              lenis.scrollTo("body");
            }
          }

          PrevWindowScroll.current = scrollY;
        }
      };
      window.addEventListener("scroll", handleWindowScroll);
      return () => {
        window.removeEventListener("scroll", handleWindowScroll);
      };
    }
  }, [lenis, isModelLoaded]);

  useEffect(() => {
    if (isModelLoaded) {
      if (overlayDescriptionRef.current)
        overlayDescriptionRef.current.style.opacity = "0";
      if (headingText) {
        addLineText.current?.classList.remove(styles.addLineTextAnimation);
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
      if (MoonImageContainerRef.current)
        MoonImageContainerRef.current.style.display = headingText?.includes(
          "MARS"
        )
          ? "none"
          : "flex";

      if (overlayDescriptionRef.current)
        overlayDescriptionRef.current.style.opacity = "1";
      if (addLineText.current)
        addLineText.current.classList.add(styles.addLineTextAnimation);
      setEarthSpanText3(spanText3);
      setEarthSpanText4(spanText4);
      setEarthImageLabelSpanText1(LabelSpanText1);
      setEarthImageLabelSpanText2(LabelSpanText2);
      setEarthDescription1(Description1);
      setEarthDescription2(Description2);
    }
  }, [headingText, isModelLoaded]);

  const handleScroll = (e) => {
    if (window.innerWidth > 768) {
      setScroll(
        e.currentTarget.scrollTop /
          (e.currentTarget.scrollHeight - window.innerHeight)
      );
      if (targetTimeStore >= 10 && scrollDirectionStore < scroll) {
        skipButtonRef.current.style.display = "flex";
        if (isNaN(Math.abs(e.deltaY))) {
          skipButtonRef.current.click();
        }
        isVisible = true;
      }
      if ((scroll > 0.2 && scroll < 0.5) || (scroll > 0.75 && scroll < 0.84)) {
        overlayDescriptionRef.current.style.opacity = "1";
        addLineText.current.classList.remove(styles.addLineTextAnimation);
        setOpacity(false);
      }

      if (scroll > 0.5 && scroll < 0.75) {
        setHeadingText("TO MOON");
        setOpacity(true);
      } else if (scroll > 0.84 && scroll < 1) {
        if (scrollDirectionStore > scroll && window.scrollY !== 0) {
          lenis.scrollTo("body");
        }
        setHeadingText("TO MARS");
        setOpacity(true);
      } else if (scroll < 0.2) {
        setHeadingText("FROM EARTH");
        setOpacity(true);
      }
      scrollDirectionStore = scroll;
    }
  };

  // Render
  return isModelLoaded ? (
    <>
      <button
        ref={skipButtonRef}
        className={styles?.skipButton}
        style={{ display: isVisible ? "flex" : "none" }}
        onClick={() => {
          setTimeout(() => {
            lenis.scrollTo("#SpaceSystemContainer", { duration: 2 });
          }, 100);
        }}
      >
        <span>skip</span>
        <div className={styles?.skipButtonImg}>
          <Image
            alt="bannerSkip"
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
          onWheel={(e) => {
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
          <directionalLight intensity={2} position={[26, 80, 14]} />
          <directionalLight intensity={3} position={[100, -211, -205]} />
          {/* Model component */}
          {!hideModel && (
            <Model isModelLoaded={SetIsModelLoaded} scroll={scroll} />
          )}
        </Canvas>
      </div>
    </>
  ) : (
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
      <Model isModelLoaded={SetIsModelLoaded} scroll={scroll} />
    </Canvas>
  );
};

// useGLTF.preload("/Aadyah_animation.glb");
useGLTF.preload("/Aadyah_animation-transformed.glb");

export default Planets;
