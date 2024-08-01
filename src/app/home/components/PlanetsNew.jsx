"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "../css/main.module.css";
import { useLenis } from "@studio-freight/react-lenis";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import withDelayedUnmount from "@/helper/DelayUnmount";
import { interpolateMars, interpolateMoon } from "@/helper";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// Define a reusable typing effect setup function
const setupTypingEffect = ({ word, ref, speed, callBack, opacityRef }) => {
  let setTimeoutId;
  if (ref.current) {
    if (opacityRef && !Array.isArray(opacityRef) && opacityRef.current) {
      opacityRef.current.style.opacity = "1";
    } else if (opacityRef && Array.isArray(opacityRef)) {
      opacityRef.forEach((e) => {
        if (e.current) {
          e.current.style.opacity = "1";
        }
      });
    }
    clearTimeout(setTimeoutId);
    setTimeoutId = setTimeout(() => {
      if (ref.current && ref.current.innerHTML) {
        ref.current.innerHTML = ""; // Clear the word container
      }
      callBack({
        word: word,
        ref: ref,
        speed: speed,
      });
    }, 100); // Adjust timeout delay as needed
  }
  return () => clearTimeout(setTimeoutId);
};

const Model = forwardRef(({ isModelLoaded, progress }, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/supercode15-transformed.glb"
  );
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
      if (isModelLoaded) isModelLoaded(true);
    }
  }, [actions["Animation"]]);

  useFrame(() => {
    if (actions["Animation"]) {
      const duration = actions["Animation"].getClip().duration;

      const targetTime = duration * progress;

      actions["Animation"].time = THREE.MathUtils.lerp(
        actions["Animation"].time,
        targetTime,
        0.1
      );
    }
  });
  return (
    // <group ref={group} dispose={null}>
    //   <group name="Scene">
    //     <PerspectiveCamera
    //       name="Camera"
    //       makeDefault={true}
    //       far={1000}
    //       near={0.001}
    //       fov={22.895}
    //       position={[1.601, 0.129, 0]}
    //       rotation={[-1.571, 1.557, 1.571]}
    //     />

    //     <pointLight
    //       castShadow
    //       color={0xc47d12}
    //       width={10}
    //       height={40}
    //       shadow-mapSize-width={10}
    //       shadow-mapSize-height={40}
    //       position={[-6.1, 0, 1.1]}
    //       intensity={2}
    //     />

    //     <mesh
    //       name="Mars"
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Mars.geometry}
    //       material={materials["Material.001"]}
    //       position={[-10.158, -0.407, -0.001]}
    //       rotation={[2.355, -0.563, 2.155]}
    //       scale={0.046}
    //     />
    //     <mesh
    //       name="Earth001"
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Earth001.geometry}
    //       material={materials["Material.003"]}
    //       position={[-7.545, 0, 0]}
    //       rotation={[-1.125, -1.122, -1.001]}
    //       scale={1.079}
    //     />
    //     <mesh
    //       name="Moon"
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Moon.geometry}
    //       material={materials.Material}
    //       position={[-8.671, 0.541, 0.007]}
    //       rotation={[0.263, 0.153, 0.689]}
    //       scale={0.039}
    //     />
    //   </group>
    // </group>
    <group ref={group} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={1000}
          near={0.001}
          fov={22.895}
          position={[1.623, 0.157, 0]}
          rotation={[-1.571, 1.556, 1.571]}
        />
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
          material={materials["Material.002"]}
          position={[-7.545, 0, 0]}
          rotation={[-0.788, -0.986, -0.615]}
          scale={1.079}
        />
        <mesh
          name="Moon"
          geometry={nodes.Moon.geometry}
          material={materials.Material}
          position={[-8.671, 0.541, 0.007]}
          rotation={[0.263, 0.153, 0.689]}
          scale={0.039}
        />
      </group>
    </group>
  );
});

const PlanetsNew = ({ SetIsModelLoaded, isModelLoaded }) => {
  //lenis assign
  const lenis = useLenis();

  // Refs
  const wordRef = useRef(null);
  const skipButtonRef = useRef(null);
  const wordDescription1Ref = useRef(null);
  const wordDescription2Ref = useRef(null);
  const wordContainerRef = useRef(null);
  const wordHeading1Ref = useRef(null);
  const wordHeading2Ref = useRef(null);
  const overlayDescriptionRef = useRef(null);
  const wordSubDescription1Ref = useRef(null);
  const wordSubDescription2Ref = useRef(null);
  const addLineTextRef = useRef(0);
  const divContainerRef = useRef(null);
  const scrollTween = useRef(null); // Ref to track animation state
  const hasCompletedRef = useRef(false);
  const skippingScroll = useRef(false);
  const canvasTimeLineRef = useRef(false);

  //states
  const [word, setWord] = useState("");
  const [hideOverlay, setHideOverlay] = useState("");
  const [wordDescription1, setWordDescription1] = useState("");
  const [wordDescription2, setWordDescription2] = useState("");
  const [wordHeading1, setWordHeading1] = useState("");
  const [wordHeading2, setWordHeading2] = useState("");
  const [wordSubDescription1, setWordSubDescription1] = useState("");
  const [wordSubDescription2, setWordSubDescription2] = useState("");
  const [progress, setProgress] = useState(0);
  const [hideModel, setHideModel] = useState(false);

  //component variables
  const devicePixelRatio = window?.devicePixelRatio || 1;

  let refs = [
    { ref: wordDescription1Ref, opacity: 1 },
    { ref: wordDescription2Ref, opacity: 0.5 },
    { ref: wordHeading1Ref, opacity: 1 },
    { ref: wordHeading2Ref, opacity: 0.5 },
    { ref: wordSubDescription1Ref, opacity: 1 },
    { ref: wordSubDescription2Ref, opacity: 0.5 },
  ];
  //functions

  const typingAnimation = async ({ word, ref, marginSpace, speed }) => {
    const letters = word?.split("") || [""];
    const tl = gsap.timeline();
    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.marginLeft = letter == " " ? marginSpace || "7px" : "0";
      span.style.transformOrigin = "left"; // Set transform origin to left for scaleX animation
      span.style.transform = "scaleX(0)"; // Start with scaleX of 0
      if (ref.current) ref.current.appendChild(span);
      tl.to(span, { scaleX: 1, duration: 0.01 }, index * speed); // Scale the letter from 0 to 1 to simulate typing
    });
  };
  const fadingAnimation = ({
    isTyping,
    opacity,
    stagger,
    opacityIntensity,
    ref,
  }) => {
    const letters = ref.current ? ref.current.children : null;
    if (letters?.length > 0) {
      gsap.set(letters, {
        opacity: opacity ? 0 : opacityIntensity || 1,
        y: isTyping || opacity == false ? 0 : 100,
      });
      gsap.to(letters, {
        duration: 1,
        opacity: opacity ? opacityIntensity || 1 : 0,
        y: 0,
        stagger: isTyping ? 0.0001 : opacity ? stagger || 0.3 : 0.01,
      });
    }
  };

  //useEffects

  // Calculate Z for different values of X
  const calculateZ = (X) => {
    const percentage = 21.65;
    return (percentage / 100) * X;
  };

  // Custom scroll handler

  useEffect(() => {
    let prevScroll = 0;
    const handleGsap = ({ to, duration }) => {
      setTimeout(() => {
        hasCompletedRef.current = true;
      }, 100);
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: to }, //autoKill: false
        duration: duration,
        ease: "power3.inOut",
        // ease: "power3.inOut",
        onComplete: () => {
          hasCompletedRef.current = false;
        },
      });
    };
    const handleScroll = (e) => {
      if (!hasCompletedRef.current && !skippingScroll.current) {
        if (window.scrollY > prevScroll) {
          if (window.scrollY < 1000) {
            handleGsap({
              to: interpolateMoon(document.documentElement.scrollHeight),
              duration: 6,
            });
          } else if (
            window.scrollY >=
              interpolateMoon(document.documentElement.scrollHeight) + 150 &&
            window.scrollY <=
              interpolateMars(document.documentElement.scrollHeight)
          ) {
            handleGsap({
              to: interpolateMars(document.documentElement.scrollHeight),
              duration: 5,
            });
          }
        } else if (window.scrollY < prevScroll) {
          if (
            window.scrollY <
            interpolateMoon(document.documentElement.scrollHeight) + 150
          ) {
            handleGsap({ to: 0, duration: 6 });
          } else if (
            window.scrollY <=
            interpolateMars(document.documentElement.scrollHeight)
          ) {
            handleGsap({
              to: interpolateMoon(document.documentElement.scrollHeight) + 150,
              duration: 5,
            });
          }
        }
      }
      if (window.scrollY > 5000) {
        skipButtonRef.current.style.display = "flex";
        setHideModel(true);
      } else if (window.scrollY < 5000) {
        setHideModel(false);
      }
      prevScroll = window.scrollY;
    };
    if (skipButtonRef.current) {
      skipButtonRef.current.style.display = "none";
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skipButtonRef.current]);

  useEffect(() => {
    gsap.set(`.${styles?.divContainer}`, { background: "#00031B" });
    gsap.set(`.${styles?.startsImg}, .${styles.OrbitEarthImage}`, {
      opacity: "1",
    });
    gsap.set(`.${styles.OrbitMoonImage}, .${styles.OrbitMarsImage}`, {
      opacity: "0",
    });

    const createScrollTimeline = ({
      triggerElement,
      start,
      end,
      onComplete = () => {},
      options = {},
    }) => {
      return gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: start,
          end: end,
          scrub: true,
          onUpdate: (self) => {
            setProgress(self.progress.toFixed(9));
          },
          onComplete: onComplete,
          ...options, // Additional ScrollTrigger options can be passed in
        },
      });
    };
    const canvasContainerRefClass = document.querySelector(
      ".canvasContainerRefClass"
    );
    canvasTimeLineRef.current = createScrollTimeline({
      triggerElement: ".canvasContainerRefClass",
      start: "top top",
      end: "bottom+=300%",
      options: {
        pin: true,
      },
      onComplete: () => {
        canvasTimeLineRef.current.kill();
      },
    });

    canvasTimeLineRef.current
      .to(
        `.${styles.addLineText}`,
        {
          width: "0",
          duration: 0.3,
        },
        0.8
      )
      .to(
        `.${styles?.divContainer}`,
        {
          background: "#1F2023",
          duration: 0.1,
        },
        0.8
      )
      .to(
        `.${styles?.startsImg}, .${styles.OrbitEarthImage}`,
        {
          opacity: 0,
          duration: 0,
        },
        0.8
      )
      .to(
        `.${styles.OrbitMoonImage}`,
        {
          opacity: 1,
          duration: 0,
        },
        0.8
      )
      .to(
        `.${styles.OrbitMoonImage}`,
        {
          opacity: 0,
          duration: 0,
        },
        1.3
      )
      .to(
        `.${styles?.divContainer}`,
        {
          background: "#100302",
          duration: 0.3,
        },
        1.3
      )
      .to(
        `.${styles.OrbitMarsImage}`,
        {
          opacity: 1,
          duration: 0,
        },
        1.3
      );
    return () => {
      if (canvasTimeLineRef.current) {
        canvasTimeLineRef.current.kill();
        canvasTimeLineRef.current = null;
      }
    };
  }, [isModelLoaded]);

  useEffect(() => {
    if (progress < 0.17) {
      setHideOverlay(false);
      setWord("FROM EARTH");
      setWordDescription1("[EARTH]");
      setWordDescription2("[HOME]");
      setWordHeading1("The nurturing sphere we call home.");
      setWordHeading2("[Time to take place among the stars]");
      setWordSubDescription1("[MOON]");
      setWordSubDescription2("[384,400 km]");
    } else if (progress >= 0.5 && progress < 0.7) {
      setHideOverlay(false);
      setWord("TO MOON");
      setWordDescription1("[MOON]");
      setWordDescription2("[SPACE SYSTEM]");
      setWordHeading1("Ascending beyond limits");
      setWordHeading2("[Inspiring humanity's quest for exploration]");
      setWordSubDescription1("[MARS]");
      setWordSubDescription2("[home, AWAITING]");
    } else if (progress >= 0.85 && progress <= 1) {
      setHideOverlay(false);
      setWord("TO MARS");
      setWordDescription1("[MARS]");
      setWordDescription2("[FUTURE HOME]");
      setWordHeading1("Discovering the new frontier of space exploration");
      setWordHeading2(
        "[Discovering New Horizons: Journeying Beyond Earth to Mars]"
      );
      setWordSubDescription1("[MANGALYAAN]");
      setWordSubDescription2("[SINCE 2013]");
    } else {
      setHideOverlay(true);
    }
  }, [progress]);

  useEffect(() => {
    let setTimeoutId;
    clearTimeout(setTimeoutId);
    if (hideOverlay) {
      if (addLineTextRef.current)
        addLineTextRef.current?.classList.remove(styles.addLineTextAnimation);
      if (overlayDescriptionRef.current) {
        overlayDescriptionRef.current.style.opacity = "0";
      }
      if (wordContainerRef.current) {
        wordContainerRef.current.style.opacity = "0";
      }

      refs.forEach(({ ref }) => {
        ref.current.style.transition = "opacity 0.2s ease";
        ref.current.style.opacity = "0";
        setTimeoutId = setTimeout(() => {
          ref.current.innerHTML = "";
        }, 400);
      });
    } else {
      refs.forEach(({ ref, opacity }) => {
        if (ref.current) {
          ref.current.style.opacity = opacity;
        }
      });
    }
    return () => clearTimeout(setTimeoutId);
  }, [hideOverlay]);

  useEffect(() => {
    if (word) {
      if (addLineTextRef.current) {
        addLineTextRef.current?.classList.add(styles.addLineTextAnimation);
      }
      fadingAnimation({
        opacity: 1,
        stagger: 0.08,
        ref: wordRef,
      });
    }
  }, [word]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordDescription1,
      ref: wordDescription1Ref,
      speed: 0.1,
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordDescription1, wordDescription1Ref.current]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordDescription2,
      ref: wordDescription2Ref,
      speed: 0.1,
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordDescription2, wordDescription2Ref.current]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordHeading1,
      ref: wordHeading1Ref,
      speed: 0.04,
      marginSpace: word == "TO MARS" ? "10px" : "",
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordHeading1, wordHeading1Ref.current]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordHeading2,
      ref: wordHeading2Ref,
      speed: 0.04,
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordHeading2, wordHeading2Ref.current]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordSubDescription1,
      ref: wordSubDescription1Ref,
      speed: 0.06,
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordSubDescription1, wordSubDescription1Ref.current]);

  useEffect(() => {
    return setupTypingEffect({
      word: wordSubDescription2,
      ref: wordSubDescription2Ref,
      speed: 0.06,
      opacityRef: [overlayDescriptionRef, wordContainerRef],
      callBack: typingAnimation,
    });
  }, [wordSubDescription2, wordSubDescription2Ref.current]);

  // Render
  return (
    <div className="canvasContainerRefClass">
      <button
        ref={skipButtonRef}
        className={styles?.skipButton}
        onClick={() => {
          skippingScroll.current = true;
          lenis.scrollTo("#SpaceSystemContainer", {
            duration: 2,
            onComplete: () => {
              skippingScroll.current = false;
            },
          });
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
      <div ref={divContainerRef} className={styles?.divContainer} />
      <img
        className={styles?.startsImg}
        src="/assets/images/stars.svg"
        alt="stars"
      />
      <img
        className={styles.OrbitEarthImage}
        src={"/assets/images/orbit-line.png"}
        alt="Orbit earth image"
      />
      <img
        className={styles.OrbitMoonImage}
        src={"/assets/images/orbit-line-moon.png"}
        alt="Orbit moon image"
      />
      <img
        className={styles.OrbitMarsImage}
        src={"/assets/images/orbit-line-mars.png"}
        alt="Orbit mars image"
      />
      <div className={styles.EarthHeading} ref={wordContainerRef}>
        <div
          className={styles.EarthHeadingInner}
          style={{
            fontSize: word == "FROM EARTH" ? "16vw" : "21vw",
            color:
              word == "FROM EARTH"
                ? "rgba(255, 255, 255, 0.71)"
                : word == "TO MOON"
                ? "rgb(66, 66, 66)"
                : "rgb(200, 64, 45)",
          }}
          ref={wordRef}
        >
          {word?.split("")?.map((letter, index) => {
            return (
              <span
                key={index}
                style={{
                  opacity: 0,
                  marginLeft: letter !== " " ? "" : "60px",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.overlayDescription} ref={overlayDescriptionRef}>
        <div className={`${styles?.EarthImageLabel} secondary-font`}>
          <p ref={addLineTextRef} className={styles.addLineText}></p>
          <div
            className={styles.EarthImageLabelSpan}
            ref={wordDescription1Ref}
          ></div>
          <div
            className={styles.EarthImageLabelSpan}
            ref={wordDescription2Ref}
          ></div>
        </div>
        <div
          className={styles.EarthDescription}
          style={{
            right: word == "TO MOON" || word == "TO MARS" ? "18%" : "15%",
            maxWidth:
              word == "TO MOON" ? "23%" : word == "TO MARS" ? "25%" : "26%",
          }}
        >
          <div className={"heading-3"} ref={wordHeading1Ref}></div>
          <div className={"caption secondary-font"} ref={wordHeading2Ref}></div>
        </div>
        <div
          className={styles.MoonImageContainer}
          style={{
            display: wordSubDescription1?.includes("MANGALYAAN")
              ? "none"
              : "flex",
            left: wordSubDescription1?.includes("MOON")
              ? "auto"
              : wordSubDescription1?.includes("MANGALYAAN")
              ? "26%"
              : "29.5%",
            right:
              wordSubDescription1?.includes("MARS") ||
              wordSubDescription1?.includes("MANGALYAAN")
                ? "auto"
                : "20%",
            bottom: wordSubDescription1?.includes("MARS")
              ? "23%"
              : wordSubDescription1?.includes("MANGALYAAN")
              ? "23%"
              : "0",
            top:
              wordSubDescription1?.includes("MARS") ||
              wordSubDescription1?.includes("MANGALYAAN")
                ? "auto"
                : "27%",
            width:
              wordSubDescription1?.includes("MARS") ||
              wordSubDescription1?.includes("MANGALYAAN")
                ? "auto"
                : "90px",
          }}
        >
          <div
            className={`{styles?.MoonImageLabel} secondary-font`}
            ref={wordSubDescription1Ref}
          ></div>
          <div
            className={`${styles?.MoonImageLabel} secondary-font`}
            ref={wordSubDescription2Ref}
          ></div>
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
          <Model isModelLoaded={SetIsModelLoaded} progress={progress} />
        )}
      </Canvas>
    </div>
  );
};

useGLTF.preload("/supercode15-transformed.glb");

const DelayedPlanets = withDelayedUnmount(PlanetsNew);

export default DelayedPlanets;
