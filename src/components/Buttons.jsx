import Link from "next/link";
import styles from "./buttons.module.css";
import React from "react";
import { useLenis } from "@studio-freight/react-lenis";
export const PrimaryButton = ({ label, isDark, className, ...rest }) => {
  const lenis = useLenis();
  const RenderDiv = rest?.href ? Link : "button";
  if (rest?.href?.includes("#")) {
    rest = { ...rest, onClick: () => lenis.scrollTo(rest?.href) };
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
