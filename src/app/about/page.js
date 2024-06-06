"use client";
import React, { useEffect, useState } from "react";
import styles from "../about/css/about.module.css";
import { Helmet } from "react-helmet";
import { PrimaryButton } from "@/components/Buttons";
import Loading from "../loading";
import { convertFromACF, fetchPage } from "../lib/api";
import Banner from "./components/Banner";
import VisionMission from "./components/VisionMission";
import ChooseAadyah from "./components/ChooseAadyah";
import TeamImage from "./components/TeamImage";
import JoinUs from "./components/JoinUs";
import LeadershipTeam from "./components/LeadershipTeam";

export default function About() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(272);
        const data = await convertFromACF(fetchData, "about");
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
      <Helmet>
        <title>About - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <div className={styles?.AboutBg}>
        <Banner styles={styles} data={pageData?.about_banner} />
        <VisionMission styles={styles} data={pageData?.vision_and_mission} />
        <ChooseAadyah styles={styles} data={pageData?.why_choose_aadyah} />
        <TeamImage styles={styles} data={pageData?.team_image} />
        <JoinUs styles={styles} data={pageData?.join_us} />
      </div>
      <LeadershipTeam styles={styles} data={pageData?.our_visionaries} />
    </>
  );
}
