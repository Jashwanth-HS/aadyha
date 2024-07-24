"use client";
import styles from "../space-mission/css/ space-mission.module.css";
import Container from "@/components/Container";
import React, { Suspense, useEffect, useState } from "react";
import SatelliteRoadmap from "./components/satelliteRoadmap";
import PlanetaryMissions from "./components/PlanetaryMissions";
import SpaceDebrisMission from "./components/SpaceDebrisMission";
import { Helmet } from "react-helmet";
import Loading from "../loading";
import { convertFromACF, fetchPage } from "../lib/api";
import MetaData from "@/components/MetaData";
const Banner = ({ data }) => {
  const { tag, title, description } = data || {};
  return (
    <>
      <Helmet>
        <title>Space mission - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <div className={styles?.Banner}>
        <div className={styles?.BannerTitle}>
          <h6 className="micro-large secondary-font">{tag}</h6>
          <h1 className="heading-1">{title}</h1>
          <p className="paragraph">{description}</p>
        </div>
        <div className={styles?.BannerImg}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={"/assets/images/space-mission-banner.png"}
            />
            <source
              media="(max-width: 767px)"
              srcSet={"/assets/images/space-mission-banner-mobile.png"}
            />
            <img
              src="/assets/images/space-mission-banner.png"
              alt="Fallback Image"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(718);
        const data = await convertFromACF(fetchData, "space-mission");
        setPageData(data);
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch post");
      }
    };

    getPageData();
  }, []);
  // if (error) return <div>{error}</div>;
  if (!pageData) return <Loading />;
  return (
    <>
      <MetaData
        description={pageData?.meta_description}
        title={pageData?.meta_title}
      />
      <Container>
        <Banner data={pageData?.find((e) => e.type == "banner_heading")} />
      </Container>
      <div className={styles?.SpaceMissionContent}>
        <Container>
          <SatelliteRoadmap
            styles={styles}
            data={pageData?.find((e) => e.type == "satellite_roadmap")}
          />
        </Container>
        <PlanetaryMissions
          styles={styles}
          data={pageData?.find((e) => e.type == "space_and_planetary_missions")}
        />
        <Container>
          <SpaceDebrisMission
            styles={styles}
            data={pageData?.find((e) => e.type == "space_debris_mission")}
          />
        </Container>
      </div>
    </>
  );
}
