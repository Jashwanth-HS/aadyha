"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./loading.module.css";
import { useEffect } from "react";

export default function Loading({
  baseColor = "#F6F6F6",
  highlightColor = "#EFEFEF",
}) {
  useEffect(() => {
    let html = document.querySelector("html");
    if (html) {
      html.style.overflowY = "hidden";
    }
    return () => {
      html.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className={styles?.LoaderContainer}>
      <div className={styles?.firstTextContainer}>
        <Skeleton
          containerClassName={styles?.firstText}
          borderRadius={0}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <Skeleton
        containerClassName={styles?.BlockContainerText1}
        borderRadius={0}
        height={40}
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
      <div className={styles?.BlockContainer}>
        <Skeleton
          containerClassName={styles?.BlockContainerText2}
          borderRadius={0}
          height={8}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          containerClassName={styles?.BlockContainerText3}
          borderRadius={0}
          height={8}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </div>
      <Skeleton
        containerClassName={styles?.BlockContainerText4}
        borderRadius={0}
        height={600}
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
    </div>
  );
}
