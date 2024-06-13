"use client";
import React, { useEffect, useState } from "react";
import styles from "../careers/css/careers.module.css";
import Container from "@/components/Container";
import OurValues from "./components/OurValues";
import WorkWithUs from "./components/WorkWithUs";
import AadyahImpact from "./components/AadyahImpact";
import Opportunities from "./components/Opportunities";
import { Helmet } from "react-helmet";
import Loading from "../loading";
import { convertFromACF, fetchPage } from "../lib/api";

const Banner = ({ data, team_images }) => {
  const { title, subtitle, description } = data || {};
  const { team_image, team_image_mobile } = team_images || {};
  return (
    <>
      <Helmet>
        <title>Careers - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>

      <div className={styles?.Banner}>
        <h6 className="micro-large secondary-font">{title}</h6>
        <h1 className="heading-1">{subtitle}</h1>
        <p className="paragraph">{description}</p>

        <div className={styles?.CareerBannerImg}>
          <picture>
            <source media="(min-width: 768px)" srcSet={team_image} />
            <source media="(max-width: 767px)" srcSet={team_image_mobile} />
            <img src={team_image} alt="Fallback Image" />
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
        const fetchData = await fetchPage(184);
        const data = await convertFromACF(fetchData, "careers");
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
      <Banner
        data={pageData?.banner_heading}
        team_images={pageData?.team_images}
      />
      <div className={styles?.OurValuesContainer}>
        <Container>
          <OurValues styles={styles} data={pageData?.our_values} />
        </Container>
      </div>
      <WorkWithUs styles={styles} data={pageData?.life_at_aadyah} />
      <div className={styles?.AadyahImpactContainer}>
        <Container>
          <AadyahImpact styles={styles} data={pageData?.Aadyah_Impact} />
        </Container>
      </div>
      <Container>
        <Opportunities styles={styles} data={pageData?.Opportunities} />
      </Container>
    </>
  );
}
