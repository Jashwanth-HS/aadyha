import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WordAnimation = ({
  word,
  className,
  stagger,
  marginSpace = "60px",
  delay = 0,
  style,
}) => {
  const wordRef = useRef(null);

  const animateWord = () => {
    const letters = wordRef.current.children;
    gsap.set(letters, {
      opacity: 0,
      y: 150,
    });
    gsap.to(letters, {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: stagger || 0.3,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (word) {
        animateWord();
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [word, delay]);

  return word ? (
    <div className={className} ref={wordRef}>
      {word.split("").map((letter, index) => {
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
