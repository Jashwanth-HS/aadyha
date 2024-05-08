"use client";
import styles from "../space-mission/css/ space-mission.module.css";
import Container from "@/components/Container";
import React, { Suspense, useEffect, useState } from "react";
import SatelliteRoadmap from "./components/satelliteRoadmap";
import PlanetaryMissions from "./components/PlanetaryMissions";
import SpaceDebrisMission from "./components/SpaceDebrisMission";
import { Helmet } from "react-helmet";
import Loading from "../loading";
const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Space mission - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <div className={styles?.Banner}>
        <div className={styles?.BannerTitle}>
          <h6 className="micro-large secondary-font">
            Mission critical solutions
          </h6>
          <h1 className="heading-1">Space mission</h1>
          <p className="paragraph">
            Embark on a journey beyond Earth's boundaries as we pioneer the next
            era of space exploration.
          </p>
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
  return (
    <Loading>
      <Container>
        <Banner />
      </Container>
      <div className={styles?.SpaceMissionContent}>
        <Container>
          <SatelliteRoadmap styles={styles} />
        </Container>
        <PlanetaryMissions styles={styles} />
        <Container>
          <SpaceDebrisMission styles={styles} />
        </Container>
      </div>
    </Loading>
  );
}
