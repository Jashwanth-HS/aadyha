"use client";
import React from "react";
import styles from "../satellite-system/css/satellite-system.module.css";
import NavBar from "./components/NavBar";
import Container from "@/components/Container";
import Propulsion from "./components/Propulsion"; //423
import SpaceSystems from "./components/SpaceSystems";
import Loading from "../loading";

const Banner = ({ data }) => {
  const { description, tag, title } = data || {};
  return (
    <>
      <div className={styles?.Banner}>
        <h6 className="micro-large secondary-font">{tag}</h6>
        <h1 className="heading-1">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>
    </>
  );
};

export default function SatelliteSystemMain({ data }) {
  const { satellite_system_banner, blocks } = data || {};

  if (!data) return <Loading />;

  return (
    <>
      <Container>
        <Banner data={satellite_system_banner} />
      </Container>
      <NavBar styles={styles} Blocks={blocks} />
      <Container>
        <Propulsion
          styles={styles}
          data={blocks?.find((e) => e.type === "propulsion_subsystems")}
        />
      </Container>
      <div className={styles?.SpaceSystemsContainer}>
        <Container>
          {blocks
            ?.filter((e) => e.type !== "propulsion_subsystems")
            .map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <SpaceSystems data={e} styles={styles} />
                </React.Fragment>
              );
            })}
        </Container>
      </div>
    </>
  );
}
