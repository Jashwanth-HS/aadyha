"use client";
import React from "react";
import * as styles from "./css/careers.module.css";
import Container from "@/components/Container";
import OurValues from "./components/OurValues";
import WorkWithUs from "./components/WorkWithUs";
import AadyahImpact from "./components/AadyahImpact";
import Loading from "../loading";
import CareersBanner from "./components/Banner";
import Opportunities from "./components/Opportunities";

const Careers = ({ data }) => {
  const {
    banner_heading,
    team_images,
    our_values,
    life_at_aadyah,
    Aadyah_Impact,
    Opportunities: opportunities,
  } = data || {};
  if (!data) return <Loading />;
  return (
    <>
      <CareersBanner
        data={banner_heading}
        team_images={team_images}
        styles={styles}
      />
      <div className={styles?.OurValuesContainer}>
        <Container>
          <OurValues styles={styles} data={our_values} />
        </Container>
      </div>
      <WorkWithUs styles={styles} data={life_at_aadyah} />
      <div className={styles?.AadyahImpactContainer}>
        <Container>
          <AadyahImpact styles={styles} data={Aadyah_Impact} />
        </Container>
      </div>
      <Container>
        <Opportunities styles={styles} data={opportunities} />
      </Container>
    </>
  );
};

export default Careers;
