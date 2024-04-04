"use client";
import React, { useEffect } from "react";

import Planets from "./components/Planets";
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
      <Planets />
      <Section>
        <SpaceSystem />
        <Clients />
      </Section>
    </>
  );
}
