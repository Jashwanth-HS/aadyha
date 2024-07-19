import React from "react";
export default function Mars({ styles }) {
  return (
    <div className={styles.MarsContainer}>
      <div className={styles.MarsHeading}>
        <h3>to mars</h3>
      </div>
      <div className={styles?.MoonMobileContent}>
        <p className={`${styles?.EarthImageLabel} secondary-font`}>
          <span>[Mars]</span> <span>[home, AWAITING]</span>
        </p>
        <img
          className={styles.MoonImage}
          src={"/assets/images/mars-mobile-bg.png"}
          alt="mars"
        />
        <p className={styles.EarthDescription}>
          Inspiring humanity's quests for exploration
        </p>
      </div>
      <div>
        <p className={`${styles?.MangalyanImageLabel} secondary-font`}>
          <span>[Mangalyaan]</span> <span>[SINCE 2013]</span>
        </p>
      </div>
    </div>
  );
}
