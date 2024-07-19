import React, { useEffect } from "react";
import styles from "./loader.module.css";
export default function PageLoad() {
  useEffect(() => {
    let html = document.querySelector("html");
    if (html) {
      html.style.overflowY = "hidden";
    }
    return () => {
      html.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className={styles?.loaderContainer} id="loaderMain">
      <svg
        className={styles?.active}
        width="62"
        height="54"
        viewBox="0 0 62 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.2082 32.6662C36.6468 31.8289 36.9807 31.0642 37.1452 30.7738C37.3098 30.4835 37.8131 29.8156 38.8149 29.8785L58.0576 31.1417L60.3904 27.1005L39.0908 25.7018C36.8016 25.5518 34.6673 26.694 33.5203 28.6782C32.3733 30.6674 32.4507 33.0824 33.7284 34.9892L45.5905 52.7365L47.9233 48.6953L37.2082 32.6662Z"
          fill="white"
          // stroke="white"
          className={styles?.loadersvg1}
        ></path>
        <path
          d="M32.4018 18.7664C31.9565 19.6714 31.129 19.7682 30.7951 19.7682C30.4611 19.7682 29.6335 19.6714 29.1882 18.7664L20.6654 1.46925H16L25.4375 20.6152C26.449 22.6721 28.5059 23.9497 30.7999 23.9497C33.0939 23.9497 35.1507 22.6721 36.1622 20.6152L45.5997 1.46925H40.9342L32.4115 18.7664H32.4018Z"
          fill="white"
          // stroke="white"
          className={styles?.loadersvg2}
        ></path>
        <path
          d="M24.3776 32.6661C24.9391 31.8288 24.6051 31.0642 24.4405 30.7738C24.276 30.4834 23.7726 29.8155 22.7708 29.8784L3.52809 31.1416L1.19531 27.1004L22.4949 25.7017C24.7841 25.5517 26.9184 26.6939 28.0655 28.6782C29.2125 30.6673 29.1351 33.0823 27.8574 34.9891L15.9952 52.7364L13.6624 48.6952L24.3776 32.6661Z"
          fill="white"
          // stroke="white"
          className={styles?.loadersvg3}
        ></path>
      </svg>
    </div>
  );
}
