import React from "react";
export default function Moon({ styles }) {
  return (
    <div className={styles.MoonContainer}>
      <div className={styles.MoonHeading}>
        <h3>to moon</h3>
      </div>
      <div className={styles?.MoonMobileContent}>
        <p className={`${styles?.EarthImageLabel} secondary-font`}>
          <span>[Moon]</span> <span>[space system]</span>
        </p>
        <img
          className={styles.MoonImage}
          src={"/assets/images/moon-mobile-bg.png"}
          alt="moon"
        />
        <p className={styles.EarthDescription}>
          Inspiring humanity's quests for exploration
        </p>
      </div>
      <div>
        <p className={`${styles?.MarsImageLabel} secondary-font`}>
          <span>[MARS]</span> <span>[home, AWAITING]</span>
        </p>
      </div>
    </div>
  );
}
