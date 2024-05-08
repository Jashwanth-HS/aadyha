"use client";
import Container from "@/components/Container";
import styles from "../contact/css/contact.module.css";
import React, { useEffect } from "react";
import Contact from "./components/Contact";
import OurCustomers from "./components/OurCustomers";
import { Helmet } from "react-helmet";
import Loading from "../loading";

export default function page() {
  return (
    <>
      <Helmet>
        <title> Contact - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <Loading>
        <div className={styles?.ContactBanner}>
          <Container>
            <Contact styles={styles} />
          </Container>
        </div>
        <div className={styles?.OurCustomersWrap}>
          <Container>
            <OurCustomers styles={styles} />
          </Container>
        </div>
      </Loading>
    </>
  );
}
