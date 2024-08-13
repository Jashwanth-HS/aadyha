"use client";
import React from "react";
import styles from "../about/css/about.module.css";
import Loading from "../loading";
import Banner from "./components/Banner";
import VisionMission from "./components/VisionMission";
import ChooseAadyah from "./components/ChooseAadyah";
import TeamImage from "./components/TeamImage";
import JoinUs from "./components/JoinUs";
import LeadershipTeam from "./components/LeadershipTeam";

export default function About({ data }) {
  const {
    about_banner,
    vision_and_mission,
    why_choose_aadyah,
    team_image,
    join_us,
    our_visionaries,
  } = data || {};
  if (!data) return <Loading />;
  return (
    <>
      <div className={styles?.AboutBg}>
        <Banner styles={styles} data={about_banner} />
        <VisionMission styles={styles} data={vision_and_mission} />
        <ChooseAadyah styles={styles} data={why_choose_aadyah} />
        <TeamImage styles={styles} data={team_image} />
        <JoinUs styles={styles} data={join_us} />
      </div>
      <LeadershipTeam styles={styles} data={our_visionaries} />
    </>
  );
}
