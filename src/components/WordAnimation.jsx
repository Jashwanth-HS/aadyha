import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { createDelay } from "@/helper";

const WordAnimation = ({
  word,
  className,
  stagger,
  typing,
  fading,
  typeDelay = 100,
  marginSpace = "60px",
  delay = 0,
  style,
}) => {
  const wordRef = useRef(null);
  const typingAnimation = async () => {
    const letters = word.split("");
    if (wordRef.current) wordRef.current.innerHTML = "";
    for (let index = 0; index < letters.length; index++) {
      const letter = letters[index];
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      span.style.marginLeft = letter == " " ? "7px" : "0";
      await createDelay(typeDelay);
      wordRef.current.appendChild(span);
    }
  };
  const fadingAnimation = () => {
    const letters = wordRef.current ? wordRef.current.children : null;
    if (letters) {
      gsap.set(letters, {
        opacity: 0,
        y: 100,
      });
      gsap.to(letters, {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: stagger || 0.3,
      });
    }
  };

  const animateWord = typing ? typingAnimation : fadingAnimation;
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (word) {
        animateWord();
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [word, delay]);

  return word ? (
    <div className={className} ref={wordRef} style={style}>
      {typing && <></>}
      {fading &&
        word.split("").map((letter, index) => {
          return (
            <span
              key={index}
              style={{
                opacity: 0,
                marginLeft: letter !== " " ? "" : marginSpace,
              }}
            >
              {letter}
            </span>
          );
        })}
    </div>
  ) : (
    <></>
  );
};

export default WordAnimation;
