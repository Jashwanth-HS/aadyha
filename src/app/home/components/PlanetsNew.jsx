"use client";
import React, { useRef, useEffect, forwardRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../css/main.module.css";
import { useLenis } from "@studio-freight/react-lenis";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import withDelayedUnmount from "@/helper/DelayUnmount";
import { getScrollPoint } from "@/helper";
import PageLoad from "@/components/PageLoad";
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

const Model = forwardRef(({ progress }, ref) => {
  const group = useRef();
  const prevProgress = useRef(progress);
  const { nodes, materials, animations } = useGLTF("/latest_final_1.glb");
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
    if (actions["Animation"] && prevProgress.current !== progress) {
      const duration = actions["Animation"].getClip().duration;
      let targetTime = duration * progress;
      targetTime = targetTime + 0.85;
      actions["Animation"].time = targetTime; // Directly set the animation time
      prevProgress.current = progress; // Update the previous progress
    }
  });
  return (
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

        <pointLight
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

const PlanetsNew = ({ setPageLoaded, pageLoad }) => {
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
  const hasCompletedMarsRef = useRef(false);
  const hasCompletedMoonRef = useRef(false);
  const hasCompletedMarsBackRef = useRef(false);
  const hasCompletedMoonBackRef = useRef(false);
  const skippingScroll = useRef(false);
  const canvasTimeLineRef = useRef(false);
  const prevScroll = useRef(0);
  const scrollOut = useRef(false);
  //states
  const [word, setWord] = useState("");
  const [loaded, setLoaded] = useState(false);
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
        y: isTyping || opacity === undefined || opacity === false ? 0 : 100,
      });
      gsap.to(letters, {
        duration: 1,
        opacity: opacity ? opacityIntensity || 1 : 0,
        y: 0,
        stagger: isTyping ? 0.0001 : opacity ? stagger || 0.3 : 0.01,
      });
    }
  };

  const fadingOutAnimation = ({
    ref,
    FromOpacity,
    duration,
    to,
    ToOpacity,
    stagger,
    callback,
  }) => {
    if (callback) callback();
    const letters = ref.current ? ref.current.children : null;
    if (letters?.length > 0) {
      gsap.set(letters, {
        opacity: FromOpacity || 1,
      });

      gsap.to(letters, {
        duration: duration || 1,
        delay: 0.4,
        opacity: ToOpacity || 0,
        y: to || 0,
        stagger: stagger || 0.0001,
      });
    }
  };
  // Custom scroll handler
  const handleGSap = ({ to, duration, easing, callback, onComplete }) => {
    // Only create a new tween if one isn't already running
    if (!scrollTween.current || !scrollTween.current.isActive()) {
      if (callback) callback();
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: to },
        duration: duration,
        ease: easing || "power3.inOut",
        onComplete: onComplete,
      });
    }
  };
  useEffect(() => {
    handleGSap({
      to: 0.85,
      duration: 1,
      onComplete: () => setPageLoaded(true),
    });
  }, []);
  useEffect(() => {
    const triggerFadingAnimation = (hasCompletedRef, duration, callback) => {
      if (!hasCompletedRef.current) {
        fadingOutAnimation({
          FromOpacity: 1,
          ToOpacity: 0,
          duration,
          from: 0,
          to: 250,
          stagger: 0.06,
          ref: wordRef,
          callback,
        });
      }
    };
    const EarthPoint = 0.85,
      moonPoint = 0.465,
      marsPoint = 0.725;
    const handleScroll = (e) => {
      e.preventDefault(); // Prevent the default scroll behavior
      const currentScroll = window.scrollY;
      const isScrollingDown = currentScroll > prevScroll.current;
      const isScrollingUp = currentScroll < prevScroll.current;

      if (progress <= 1 && isScrollingUp) {
        scrollOut.current = false;
      }

      if (!skippingScroll.current) {
        if (scrollOut.current) return;

        if (isScrollingDown) {
          switch (true) {
            case progress < 0.581187127:
              hasCompletedMarsRef.current = false;
              handleGSap({
                to: getScrollPoint(progress, moonPoint),
                duration: 7.5,
              });
              if (progress > 0.000280235) {
                triggerFadingAnimation(hasCompletedMoonRef, 1, () => {
                  hasCompletedMoonRef.current = true;
                });
              }
              break;

            case progress >= 0.5 && progress < 0.9:
              hasCompletedMarsBackRef.current = false;
              handleGSap({
                to: getScrollPoint(progress, marsPoint),
                easing: "power1.inOut",
                duration: 4,
              });
              if (progress > 0.59) {
                triggerFadingAnimation(hasCompletedMarsRef, 0.5, () => {
                  hasCompletedMarsRef.current = true;
                });
              }
              break;

            case progress > 0.91 && progress !== 1:
              lenis.scrollTo("#SpaceSystemContainer0", { duration: 2 });
              setTimeout(() => {
                scrollOut.current = true;
              }, 1500);
              break;

            default:
              break;
          }
        } else if (isScrollingUp) {
          switch (true) {
            case progress > EarthPoint && progress < 1:
              handleGSap({
                to: getScrollPoint(progress, moonPoint),
                duration: 5,
                callback: () => {
                  hasCompletedMoonBackRef.current = false;
                },
              });
              if (progress < 0.9) {
                triggerFadingAnimation(hasCompletedMoonBackRef, 0.5, () => {
                  hasCompletedMoonBackRef.current = true;
                });
              }
              break;

            case progress > 0.3 && progress <= 0.581187127:
              hasCompletedMoonBackRef.current = true;
              handleGSap({ to: EarthPoint, duration: 5 });
              if (progress < 0.57) {
                triggerFadingAnimation(hasCompletedMarsBackRef, 0.5, () => {
                  hasCompletedMarsBackRef.current = true;
                });
              }
              break;
            default:
              break;
          }
        }
      }

      if (currentScroll > 5000) {
        skipButtonRef.current.style.display = "flex";
        setHideModel(true);
      } else {
        setHideModel(false);
      }

      prevScroll.current = currentScroll;
    };

    if (skipButtonRef.current) {
      skipButtonRef.current.style.display = "none";
    }
    window.addEventListener("scroll", handleScroll, { passive: false }); // Disable passive scrolling to control event.preventDefault
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skipButtonRef.current, progress]);

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
  }, []);

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
    <>
      {pageLoad != true && <PageLoad />}
      <div className="canvasContainerRefClass">
        <button
          ref={skipButtonRef}
          className={styles?.skipButton}
          onClick={() => {
            skippingScroll.current = true;
            lenis.scrollTo("#SpaceSystemContainer0", {
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
            <div
              className={"caption secondary-font"}
              ref={wordHeading2Ref}
            ></div>
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
          {!hideModel && <Model progress={progress} />}
        </Canvas>
      </div>
    </>
  );
};

useGLTF.preload("/latest_final_1.glb");

export default PlanetsNew;
