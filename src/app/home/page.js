"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
// import Planets from "./components/Planets";
const Planets = dynamic(() => import("./components/Planets"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        top: "0",
        height: "100vh",
        width: "100vw",
        background: "#01031b",
        zIndex: "9999999",
      }}
    ></div>
  ),
});
import SpaceSystem from "./components/SpaceSystem";
import Clients from "./components/Clients";
import MobileViewPlanets from "./components/MobileViewPlanets";
import { Helmet } from "react-helmet";
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
  // const [pageLoad, setPageLoaded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Home - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <Planets />
      <Section>
        <MobileViewPlanets />
        <SpaceSystem />
        <Clients />
      </Section>
    </>
  );
}
