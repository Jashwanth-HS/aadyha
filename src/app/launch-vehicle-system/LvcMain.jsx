"use client";
import React from "react";
import styles from "../launch-vehicle-system/css/lvs.module.css";
import Avionics from "./components/Avionics";
import Gauidance from "./components/Gauidance";
import ControlSystem from "./components/ControlSystem";
import PartGridContent from "./components/PartGridContent";
import NavBar from "./components/NavBar";
import Container from "@/components/Container";
import Loading from "../loading";

const Banner = ({ data }) => {
  const { tag, title } = data || {};
  return (
    <div className={styles?.Banner}>
      <p className="micro-large secondary-font">{tag}</p>
      <h1 className="heading-1">{title}</h1>
    </div>
  );
};
export default function LvcMain({ data }) {
  const {
    banner_heading,
    tvc_trust_vector_control,
    guidance_navigation_and_control,
    avioncs_content,
    flow_control_system,
  } = data || {};
  if (!data) return <Loading />;
  return (
    <>
      <Container>
        <Banner data={banner_heading} />
      </Container>
      <NavBar
        styles={styles}
        data={Object.entries(data)
          .map(([key, value]) => {
            if (key !== "banner_heading") {
              return value;
            }
          })
          .filter(Boolean)}
      />
      <Container className={styles?.TVCWrapContainer}>
        <PartGridContent styles={styles} data={tvc_trust_vector_control} />
      </Container>
      <Gauidance styles={styles} data={guidance_navigation_and_control} />
      <Container>
        <Avionics styles={styles} data={avioncs_content} />
        <ControlSystem styles={styles} data={flow_control_system} />
      </Container>
      {/* </div> */}
    </>
  );
}
