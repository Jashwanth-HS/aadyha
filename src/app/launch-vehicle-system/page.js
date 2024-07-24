"use client";
import React, { useEffect, useState } from "react";
import styles from "../launch-vehicle-system/css/lvs.module.css";
import Avionics from "./components/Avionics";
import Gauidance from "./components/Gauidance";
import ControlSystem from "./components/ControlSystem";
import PartGridContent from "./components/PartGridContent";
import NavBar from "./components/NavBar";
import Container from "@/components/Container";
import { Helmet } from "react-helmet";
import Loading from "../loading";
import { convertFromACF, fetchPage } from "../lib/api";
import MetaData from "@/components/MetaData";

const Banner = ({ data }) => {
  const { tag, title } = data || {};
  return (
    <div className={styles?.Banner}>
      <p className="micro-large secondary-font">{tag}</p>
      <h1 className="heading-1">{title}</h1>
    </div>
  );
};
export default function Index() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(167);
        const data = await convertFromACF(fetchData, "launch-vehicle-system");
        setPageData(data);
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch post");
      }
    };

    getPageData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!pageData) return <Loading />;
  return (
    <>
      <MetaData
        description={pageData?.meta_description}
        title={pageData?.meta_title}
      />
      <Container>
        <Banner data={pageData?.banner_heading} />
      </Container>
      <NavBar
        styles={styles}
        data={Object.entries(pageData)
          .map(([key, value]) => {
            if (key !== "banner_heading") {
              return value;
            }
          })
          .filter(Boolean)}
      />
      <Container className={styles?.TVCWrapContainer}>
        <PartGridContent
          styles={styles}
          data={pageData?.tvc_trust_vector_control}
        />
      </Container>
      <Gauidance
        styles={styles}
        data={pageData?.guidance_navigation_and_control}
      />
      <Container>
        <Avionics styles={styles} data={pageData?.avioncs_content} />
        <ControlSystem styles={styles} data={pageData?.flow_control_system} />
      </Container>
      {/* </div> */}
    </>
  );
}
