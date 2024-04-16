"use client";
import React, { useEffect } from "react";
import styles from "../careers/css/careers.module.css";
import Container from "@/components/Container";
import OurValues from "./components/OurValues";
import WorkWithUs from "./components/WorkWithUs";
import AadyahImpact from "./components/AadyahImpact";
import Testimonial from "./components/Testimonial";
import Opportunities from "./components/Opportunities";
import { disableOverflow } from "@/helper";
import { Helmet } from "react-helmet";
import { PrimaryButton } from "@/components/Buttons";

const Banner = () => {
  useEffect(() => {
    disableOverflow(false);
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <div className={styles?.Banner}>
        <h6 className="micro-large secondary-font">work with us</h6>
        <h1 className="heading-1">Build the Future With Us</h1>
        <p className="paragraph">
          We are dedicated to aspiring for the stars and continually advancing
          the frontiers of aerospace technology
        </p>
        {/* <PrimaryButton
          label={"view current openings"}
          href={"#jobs"}
          style={{ marginTop: "4vh", border: "1px solid black" }}
        /> */}
        <div className={styles?.CareerBannerImg}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={"/assets/images/career-banner-img.png"}
            />
            <source
              media="(max-width: 767px)"
              srcSet={"/assets/images/career-banner-mob-img.png"}
            />
            <img
              src="/assets/images/career-banner-img.png"
              alt="Fallback Image"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default function page() {
  return (
    <>
      <Banner />
      <div className={styles?.OurValuesContainer}>
        <Container>
          <OurValues styles={styles} />
        </Container>
      </div>
      <WorkWithUs styles={styles} />
      <div className={styles?.AadyahImpactContainer}>
        <Container>
          <AadyahImpact styles={styles} />
        </Container>
      </div>
      {/* <div className={styles?.TestimonialContainer}>
        <Container>
          <Testimonial styles={styles} />
        </Container>
      </div> */}
      <Container>
        <Opportunities styles={styles} />
      </Container>
    </>
  );
}
