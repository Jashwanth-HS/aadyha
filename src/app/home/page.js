"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import Planets from "./components/Planets";
import SpaceSystem from "./components/SpaceSystem";
import Clients from "./components/Clients";
import MobileViewPlanets from "./components/MobileViewPlanets";
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
      <Head key={"homepage"}>
        <title>Home page</title>
        <meta name="description" content="Aadyah space home page" />
      </Head>

      <Planets />
      <Section>
        <MobileViewPlanets/>
        <SpaceSystem />
        <Clients />
      </Section>
    </>
  );
}
