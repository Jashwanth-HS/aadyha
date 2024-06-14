"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Cosmos from "./components/Cosmos";
import Footer from "./components/Footer";
import { convertFromACF, fetchGlobal } from "@/app/lib/api";
import Loading from "@/app/loading";

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

  if (
    !pageData &&
    (window?.location.href.includes("/about") ||
      window?.location.href.includes("/contact") ||
      window?.location.href.includes("/careers") ||
      window?.location.href.includes("/satellite-system") ||
      window?.location.href.includes("/space-mission") ||
      window?.location.href.includes("/launch-vehicle-system") ||
      window?.location.href.includes("/contact"))
  ) {
    return <Loading />;
  }
  return (
    <div className={styles?.footerMainContainer}>
      <Cosmos styles={styles} cosmosData={pageData?.cosmosData} />
      <Footer styles={styles} footerData={pageData?.footerData} />
    </div>
  );
}
