"use client";
import React, { useEffect } from "react";
import styles from "../launch-vehicle-system/css/lvs.module.css";
import Avionics from "./components/Avionics";
import Gauidance from "./components/Gauidance";
import ControlSystem from "./components/ControlSystem";
import PartGridContent from "./components/PartGridContent";
import NavBar from "./components/NavBar";
import Container from "@/components/Container";
import { disableOverflow } from "@/helper";
import { Helmet } from "react-helmet";

const Banner = () => {
  return (
    <div className={styles?.Banner}>
      <p className="micro-large secondary-font">Space system</p>
      <h1 className="heading-1">Launch Vehicle System</h1>
    </div>
  );
};
export default function Index() {
  useEffect(() => {
    disableOverflow(false);
  }, []);
  return (
    <>
      <Helmet>
        <title> Launch Vehicle System - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <Container>
        <Banner />
      </Container>
      <NavBar styles={styles} />
      <Container className={styles?.TVCWrapContainer}>
        <PartGridContent styles={styles} />
      </Container>
      <Gauidance styles={styles} />
      <Container>
        <Avionics styles={styles} />
        <ControlSystem styles={styles} />
      </Container>
      {/* </div> */}
    </>
  );
}
