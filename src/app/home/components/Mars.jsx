import React from "react";
import styles from "../css/Mars.module.css";
export default function Mars() {
  return (
    <div className={styles.MarsContainer}>
      <div className={styles?.overlayDiv}></div>
      <div className={styles.MarsHeading}>
        <h1>to mars</h1>
      </div>
      <img
        className={styles.OrbitImage}
        src={"/assets/images/orbit-line.png"}
      />
      <img className={styles.MarsImage} src={"/assets/images/mars.png"} />
      <p className={styles.MarsImageLabel}>
        <span>[MARS]</span> <span>[Future home]</span>
      </p>
      <p className={styles.MarsDescription}>
        <span className="heading-3">prospective red frontier settlement</span>
        <span className="caption">
          [Lorem ipsum dolor sit amet, consectetur adipiscing elit]
        </span>
      </p>

      <div className={styles.MangalyaanContainer}>
        <p className={styles.MangalyaanLabel}>
          <span>[Mangalyaan]</span> <span>[SINCE 2013]</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <rect
            x="4.19067"
            y="1.85457"
            width="23.783"
            height="4.92637"
            transform="rotate(45 4.19067 1.85457)"
            stroke="#C8402D"
          />
          <path
            d="M1.71558 15.1841L7.64063 21.1091L14.1879 14.5619L15.2585 13.4912L19.4907 9.25903L16.9514 6.71973L13.5657 3.33398L8.24554 8.65412L1.71558 15.1841Z"
            stroke="#C8402D"
          />
          <circle cx="19.3085" cy="3.24995" r="2.74995" stroke="#C8402D" />
        </svg>
      </div>
    </div>
  );
}
