"use client";
import Container from "@/components/Container";
import styles from "../contact/css/contact.module.css";
import React, { useEffect, useState } from "react";
import OurCustomers from "./components/OurCustomers";
import { Helmet } from "react-helmet";
import { convertFromACF, fetchPage } from "../lib/api";
import Loading from "../loading";
import ContactForm from "./components/ContactForm";
import Address from "./components/Address";

export default function page() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchPage(803);
        const data = await convertFromACF(fetchData, "contact");
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
  console.log("pageData: ", pageData);
  return (
    <>
      <Helmet>
        <title> Contact - Aadyah Space</title>
        <meta name="description" content="Aadyah space home page" />
      </Helmet>
      <div className={styles?.ContactBanner}>
        <Container>
          <div className={styles?.ContactContainer}>
            <ContactForm style={styles} />
            <Address styles={styles} data={pageData?.address_and_contact} />
          </div>
        </Container>
      </div>
      <div className={styles?.OurCustomersWrap}>
        <Container>
          <OurCustomers styles={styles} data={pageData?.our_customer} />
        </Container>
      </div>
    </>
  );
}
