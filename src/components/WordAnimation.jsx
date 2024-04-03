"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WordAnimation = ({ word, className, marginSpace = "60px" }) => {
  const wordRef = useRef(null);
  const animateWord = () => {
    const letters = wordRef.current.children;

    gsap.from(letters, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.3,
    });
  };
  useEffect(() => {
    if (word) {
      animateWord();
    }
  }, [word]);
  return (
    <>
      <div className={className} ref={wordRef}>
        {word.split("").map((letter, index) => {
          return (
            <span
              key={index}
              style={{
                opacity: 1,
                marginLeft: letter !== " " ? "" : marginSpace,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default WordAnimation;
