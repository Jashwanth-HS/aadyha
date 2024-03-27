"use client";
import React, { useEffect } from "react";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Planets from "./components/Planets";
import Mars from "./components/Mars";
// import SpaceSystemWrap from "./components/SpaceSystem";

import SpaceSystem from "./components/SpaceSystem";
import Clients from "./components/Clients";
const Section = ({ children }) => {
  const styles = {
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: "2",
  };
  return <div style={styles}>{children}</div>;
};
export default function Home() {
  return (
    <>
      <Planets>
        <Earth />
        <Moon />
        <Mars />
      </Planets>
      {/* <SpaceSystemWrap /> */}
      <Section>
        <SpaceSystem />
        <Clients />
      </Section>
    </>
  );
}
