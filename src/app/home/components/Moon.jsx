import React from "react";
import styles from "../css/Moon.module.css";
export default function Moon() {
  return (
    <div className={styles.MoonContainer}>
      <div className={styles.MoonHeading}>
        <h1>to moon</h1>
      </div>
      <img
        className={styles.OrbitImage}
        src={"/assets/images/orbit-line.png"}
      />
      <img className={styles.MoonImage} src={"/assets/images/moon.png"} />
      <p className={styles.MoonImageLabel}>
        <span>[Moon]</span> <span>[space system]</span>
      </p>
      <p className={styles.MoonDescription}>
        <span className="heading-3">
          Inspiring humanity's quests for exploration
        </span>
        <span className="caption">
          [Lorem ipsum dolor sit amet, consectetur adipiscing elit]
        </span>
      </p>

      <div className={styles.ChandrayaanContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="99"
          height="75"
          viewBox="0 0 99 75"
          fill="none"
        >
          <circle
            cx="4.53576"
            cy="37.2585"
            r="2"
            transform="rotate(-23.6877 4.53576 37.2585)"
            fill="#D9D9D9"
          />
          <rect
            opacity="0.3"
            x="2.37988"
            y="35.2529"
            width="95"
            height="3.99204"
            rx="1.99602"
            transform="rotate(0.116142 2.37988 35.2529)"
            fill="url(#paint0_linear_1329_13359)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1329_13359"
              x1="3.37988"
              y1="39.245"
              x2="72.3799"
              y2="39.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <p className={styles.ChandrayaanLabel}>
          <span>[Chandrayaan-3]</span> <span>[2023. ENROUTE MOON]</span>
        </p>
      </div>

      <div className={styles.MarsContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <circle cx="9.5" cy="9.5" r="9.5" fill="#E4572E" />
        </svg>
        <p className={styles.MarsLabel}>
          <span>[MARS]</span> <span>[home, AWAITING]</span>
        </p>
      </div>
    </div>
  );
}
