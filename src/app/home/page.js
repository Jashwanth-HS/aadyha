"use client";
import React, { useEffect, useState } from "react";
import SpaceSystem from "./components/SpaceSystem";
import Clients from "./components/Clients";
import MobileViewPlanets from "./components/MobileViewPlanets";
import { Helmet } from "react-helmet";
import { convertFromACF, fetchPage } from "../lib/api";
import PageLoad from "@/components/PageLoad";
import PlanetsNew from "./components/PlanetsNew";
import Head from "next/head";
import MetaData from "@/components/MetaData";
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
  const [pageLoad, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);
  const [planetsLoaded, setPlanetsLoaded] = useState(false); // State to track Planets component loading
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

  // Use useEffect to track when Planets component is loaded
  useEffect(() => {
    const simulatePlanetsLoaded = () => {
      setTimeout(() => {
        setPlanetsLoaded(true); // Simulate Planets component loaded after 2 seconds
      }, 2000); // Adjust timeout as needed
    };
    simulatePlanetsLoaded();
  }, []);

  if (error) return <div>{error}</div>;
  if (!pageData || !planetsLoaded) {
    return <PageLoad />;
  }

  return (
    <>
      <MetaData
        description={pageData?.meta_description}
        title={pageData?.meta_title}
      />
      <PlanetsNew />
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
