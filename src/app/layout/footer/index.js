import React from "react";
import styles from "./footer.module.css"; 
import Cosmos from "./components/Cosmos";
import Footer from "./components/Footer";

export default function FooterMain() {
  return (
    <div className={styles?.footerMainContainer}>
      <Cosmos styles={styles} />
      <Footer styles={styles}/>
    </div>
  );
}
