"use client";
import React from "react";
import Container from "@/components/Container";
import styles from "../contact/css/contact.module.css";
import OurCustomers from "./components/OurCustomers";
import Loading from "../loading";
import ContactForm from "./components/ContactForm";
import Address from "./components/Address";

export default function Contact({ data }) {
  const { address_and_contact, our_customer } = data || {};
  if (!data) return <Loading />;
  return (
    <>
      <div className={styles?.ContactBanner}>
        <Container>
          <div className={styles?.ContactContainer}>
            <ContactForm style={styles} />
            <Address styles={styles} data={address_and_contact} />
          </div>
        </Container>
      </div>
      <div className={styles?.OurCustomersWrap}>
        <Container>
          <OurCustomers styles={styles} data={our_customer} />
        </Container>
      </div>
    </>
  );
}
