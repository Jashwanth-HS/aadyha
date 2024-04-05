"use client";
import styles from "../space-mission/css/ space-mission.module.css";
import Container from "@/components/Container";
import React from "react";
import SatelliteRoadmap from "./components/satelliteRoadmap";
import PlanetaryMissions from "./components/PlanetaryMissions";
import SpaceDebrisMission from "./components/SpaceDebrisMission";
const Banner = () => {
  return (
    <div className={styles?.Banner}>
      <div>
        <h6 className="micro-large secondary-font">
          Mission critical solutions
        </h6>
        <h1 className="heading-1">Space mission</h1>
        <p className="paragraph">
          Embark on a journey beyond Earth's boundaries as we pioneer the next
          era of space exploration.
        </p>
      </div>
      <div>
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
  );
};

export default function page() {
  return (
    <>
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
    </>
  );
}
