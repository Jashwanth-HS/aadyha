import Link from "next/link";
import styles from "./buttons.module.css";
import React from "react";
export const PrimaryButton = ({ label, isDark, className, ...rest }) => {
  const RenderDiv = rest?.href ? Link : "button";
  if (rest?.href?.includes("#")) {
    rest = { ...rest, onclick: `lenis.scrollTo('${rest?.href}')` };
  }
  return (
    <RenderDiv
      className={`${styles?.PrimaryButton} ${className} ${
        isDark && styles?.PrimaryButtonDark
      }`}
      {...rest}
    >
      {label} <span></span>
    </RenderDiv>
  );
};
