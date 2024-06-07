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
import { convertFromACF, fetchPage } from "../lib/api";
import PageLoad from "@/components/PageLoad";
import { ModelTest } from "../Supercode_1";
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

  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(15);
        const data = await convertFromACF(fetchData, "home");
        setPageData(data);
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch post");
      }
    };

    getPageData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!pageData) return <PageLoad />;

  return (
    <>
      <Helmet>
        <title>Home - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <Planets />

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
