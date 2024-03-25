import React from "react";
import styles from "../css/Moon.module.css";
export default function Moon() {
  return (
    <div className={styles.MoonContainer}>
      <div className={styles?.overlayDiv}></div>
      <div className={styles.MoonHeading}>
        <h1>to moon</h1>
      </div>

      <img
        className={styles.OrbitImage}
        src={"/assets/images/orbit-line.png"}
      />
      {/* <img className={styles.MoonImage}
        src={'/assets/images/moon.png'}
        /> */}
    </div>
  );
}
