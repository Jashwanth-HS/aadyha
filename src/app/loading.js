"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./loading.module.css";
import { useEffect, useState } from "react";
export default function Loading({ children }) {
  const [pageLoad, setPageLoad] = useState(false);
  useEffect(() => {
    // let setTimeoutId;
    // setTimeoutId = setTimeout(() => {
    setPageLoad(true);
    // }, 200);
    // return () => {
    //   clearTimeout(setTimeoutId);
    // };
  }, []);
  // You can add any UI inside Loading, including a Skeleton.
  return <>{pageLoad ? children : <LoadingSkeleton />}</>;
}

export const LoadingSkeleton = ({
  componentLoad,
  baseColor = "#F6F6F6",
  highlightColor = "#EFEFEF",
}) => {
  const props = componentLoad ? { id: "loaderMain" } : {};
  useEffect(() => {
    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    return () => {
      document.querySelector("html").style.overflowY = "auto";
      document.querySelector("body").style.overflowY = "auto";
    };
  }, []);
  return (
    <div className={styles?.LoaderContainer} {...props}>
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
};
