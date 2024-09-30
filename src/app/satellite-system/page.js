"use client";
import React, { useEffect, useState } from "react";
import styles from "../satellite-system/css/satellite-system.module.css";
import NavBar from "./components/NavBar";
import Container from "@/components/Container";
import Propulsion from "./components/Propulsion"; //423
import SpaceSystems from "./components/SpaceSystems";
import Loading from "../loading";
import { convertFromACF, fetchPage } from "../lib/api";
import MetaData from "@/components/MetaData";
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

export default function page() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(423);
        const data = await convertFromACF(fetchData, "satellite-system");
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
        <Banner data={pageData?.satellite_system_banner} />
      </Container>
      <NavBar styles={styles} Blocks={pageData?.blocks} />
      <Container>
        <Propulsion
          styles={styles}
          data={pageData?.blocks?.find(
            (e) => e.type === "propulsion_subsystems"
          )}
        />
      </Container>
      <div className={styles?.SpaceSystemsContainer}>
        <Container>
          {pageData?.blocks
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
