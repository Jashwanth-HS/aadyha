import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { createDelay } from "@/helper";
const WordAnimation = React.memo(
  ({
    opacity,
    word,
    className,
    stagger,
    opacityIntensity,
    typing,
    fading,
    typeDelay = 100,
    marginSpace = "60px",
    delay = 0,
    style,
  }) => {
    const wordRef = useRef(null);
    const typingAnimation = async () => {
      const letters = word.split("") || [""];
      if (wordRef.current) {
        wordRef.current.innerHTML = "";
        wordRef.current.style.opacity = opacityIntensity || "1";
      }
      for (let index = 0; index < letters.length; index++) {
        const letter = letters[index];
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.marginLeft = letter == " " ? "7px" : "0";
        await createDelay(typeDelay);
        if (wordRef.current) wordRef.current.appendChild(span);
      }
    };

    const undoTypingAnimation = async () => {
      const spans = wordRef.current;
      spans.style.opacity = "0";
      spans.innerHTML = "";
    };

    const fadingAnimation = (isTyping) => {
      const letters = wordRef.current ? wordRef.current.children : null;
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

    const animateWord = typing
      ? opacity
        ? typingAnimation
        : undoTypingAnimation
      : fadingAnimation;

    useEffect(() => {
      let setTimeoutId;
      clearTimeout(setTimeoutId);
      if (word) {
        setTimeout(() => {
          animateWord();
        }, 200);
      }
      return () => {
        clearTimeout(setTimeoutId);
      };
    }, [word, stagger, typeDelay]);

    useEffect(() => {
      if (word) {
        fadingAnimation(typing);
      }
    }, [opacity]);
    return (
      <div className={className} ref={wordRef} style={style}>
        {word &&
          fading &&
          word?.split("")?.map((letter, index) => {
            return (
              <span
                key={index}
                style={{
                  opacity: opacity ? 0 : opacityIntensity || 1,
                  marginLeft: letter !== " " ? "" : marginSpace,
                }}
              >
                {letter}
              </span>
            );
          })}
      </div>
    );
  },
  (prev, next) => {
    const isEqual =
      prev?.opacity === next?.opacity &&
      prev?.word === next?.word &&
      prev?.className === next?.className &&
      prev?.stagger === next?.stagger &&
      prev?.typing === next?.typing &&
      prev?.fading === next?.fading &&
      prev?.typeDelay === next?.typeDelay &&
      prev?.marginSpace === next?.marginSpace &&
      prev?.delay === next?.delay &&
      JSON.stringify(prev?.style) === JSON.stringify(next?.style);
    return isEqual;
  }
);

export default WordAnimation;
