import React from 'react'
import styles from "../css/Earth.module.css";
export default function EarthMobie() {
  return (
    <div className={styles.EarthContainer}>
      <div className={styles.EarthHeading}><h1>from earth</h1></div>
      <img className={styles.OrbitImage}
      src={'/assets/images/orbit-line.png'}
      />
      <img className={styles.EarthImage}
      src={'/assets/images/earth-img.png'}
      />
      <p className={styles.EarthDescription}>
        <span className="heading-3">The nurturing sphere we call home.</span>
        <span className="caption">[Lorem ipsum dolor sit amet, consectetur adipiscing elit]</span>
      </p>
      <p className={styles.EarthImageLabel}>
        <span>[Earth]</span> <span>[home]</span>
      </p>
      <p className={styles.MoonImageLabel}>
        <span>[moon]</span> <span>[384,400 km]</span>
      </p>
    </div>
  )
}
