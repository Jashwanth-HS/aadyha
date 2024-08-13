"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Cosmos from "./components/Cosmos";
import Footer from "./components/Footer";
import { convertFromACF, fetchGlobal } from "@/app/lib/api";
import Loading from "@/app/loading";
import PageLoad from "@/components/PageLoad";

export default function FooterMain() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchGlobal("header");
        const data = await convertFromACF(fetchData, "footer");
        setPageData(data);
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch post");
      }
    };

    getPageData();
  }, []);

  if (!pageData) {
    return <PageLoad />;
  }
  const { cosmosData, footerData } = pageData || {};
  return (
    <div className={styles?.footerMainContainer}>
      {cosmosData && <Cosmos styles={styles} cosmosData={cosmosData} />}
      {footerData && <Footer styles={styles} footerData={footerData} />}
    </div>
  );
}
