"use client";
import styles from "../space-mission/css/ space-mission.module.css";
import Container from "@/components/Container";
import React from "react";
import SatelliteRoadmap from "./components/satelliteRoadmap";
import PlanetaryMissions from "./components/PlanetaryMissions";
import SpaceDebrisMission from "./components/SpaceDebrisMission";
import Loading from "../loading";

const Banner = ({ data }) => {
  const { tag, title, description } = data || {};
  return (
    <>
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

export default function SpaceSystemMain({ data }) {
  if (!data) return <Loading />;
  return (
    <>
      <Container>
        <Banner data={data?.find((e) => e.type == "banner_heading")} />
      </Container>
      <div className={styles?.SpaceMissionContent}>
        <Container>
          <SatelliteRoadmap
            styles={styles}
            data={data?.find((e) => e.type == "satellite_roadmap")}
          />
        </Container>
        <PlanetaryMissions
          styles={styles}
          data={data?.find((e) => e.type == "space_and_planetary_missions")}
        />
        <Container>
          <SpaceDebrisMission
            styles={styles}
            data={data?.find((e) => e.type == "space_debris_mission")}
          />
        </Container>
      </div>
    </>
  );
}
