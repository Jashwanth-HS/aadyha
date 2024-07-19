import React from "react";
import Image from "next/image";
export default function Earth({ styles }) {
  return (
    <div className={styles.EarthContainer}>
      <div className={styles.EarthHeading}>
        <h3>from earth</h3>
      </div>
      <div className={styles?.EarthMobileContent}>
        <p className={`${styles?.EarthImageLabel} secondary-font`}>
          <span>[Earth]</span> <span>[home]</span>
        </p>
        <img
          className={styles.EarthImage}
          src={"/assets/images/earth-mobile-bg.png"}
          alt="earth"
        />
        <p className={`${styles?.MoonImageLabel} secondary-font`}>
          <span>[moon]</span> <span>[384,400 km]</span>
        </p>
      </div>
    </div>
  );
}
