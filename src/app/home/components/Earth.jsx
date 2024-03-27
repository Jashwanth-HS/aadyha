import React from "react";
import styles from "../css/Earth.module.css";
import Image from "next/image";
export default function Earth() {
  return (
    <div className={styles.EarthContainer}>
      <div className={styles?.overlayDiv}></div>
      <div className={styles.EarthHeading}>
        <h1>from earth</h1>
      </div>
      <img
        className={styles.OrbitImage}
        src={"/assets/images/orbit-line.png"}
      />
      {/* <img className={styles.EarthImage}
      src={'/assets/images/earth-img.png'}
  /> */}
      <div className={styles.overlayDescription}>
        <p className={`${styles?.EarthImageLabel} secondary-font`}>
          <span>[Earth]</span> <span>[home]</span>
        </p>
        <p className={styles.EarthDescription}>
          <span className="heading-3">The nurturing sphere we call home.</span>
          <span className="caption secondary-font">
            [Lorem ipsum dolor sit amet, consectetur adipiscing elit]
          </span>
        </p>
        <div className={styles.MoonImageContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#4B4B4B" />
          </svg>
          <p className={`${styles?.MoonImageLabel} secondary-font`}>
            <span>[moon]</span> <span>[384,400 km]</span>
          </p>
        </div>
      </div>
    </div>
  );
}
