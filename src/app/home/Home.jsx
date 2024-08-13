"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Planets = dynamic(() => import("./components/Planets"), {
  ssr: false,
});
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
export default function Home({ data }) {
  const [isModelLoaded, SetIsModelLoaded] = useState(false); // State to track Planets component loading
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, []);

  return (
    <>
      {(!isModelLoaded || !pageData) && (
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
      )}
      <Planets
        SetIsModelLoaded={SetIsModelLoaded}
        isModelLoaded={isModelLoaded}
      />

      <Section>
        <MobileViewPlanets />
        <SpaceSystem pageData={pageData} />
        <Clients
          clientsSection={pageData?.clientsSection}
          contentBlock={pageData?.contentBlock}
        />
      </Section>
    </>
  );
}
