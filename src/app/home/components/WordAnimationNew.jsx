import React, { forwardRef } from "react";

const WordAnimationNew = forwardRef(
  ({ className, opacity = 0, word, marginSpace = "60px", style }, ref) => {
    return (
      <div className={className} style={style} ref={ref}>
        {word?.split("")?.map((letter, index) => {
          return (
            <span
              key={index}
              style={{
                opacity: opacity,
                marginLeft: letter !== " " ? "" : marginSpace,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    );
  }
);

export default WordAnimationNew;
