import React from "react";
import styles from "../css/mobileViewPlanets.module.css";
import Earth from "./Earth";
import Moon from "./Moon";
import Mars from "./Mars";

export default function MobileViewPlanets() {
  return (
    <div className={styles?.mobilePlanetsContainer}>
      <Earth styles={styles}/>
      <Moon styles={styles}/>
      <Mars styles={styles}/>
    </div>
  );
}
