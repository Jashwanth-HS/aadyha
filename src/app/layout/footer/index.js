"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Cosmos from "./components/Cosmos";
import Footer from "./components/Footer";
import { convertFromACF, fetchGlobal } from "@/app/lib/api";
import Loading from "@/app/loading";
import { usePathname } from "next/navigation";

export default function FooterMain() {
  const [pageData, setPageData] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(null);
  const pathname = usePathname();
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
    setMounted(true);
    getPageData();
  }, []);
  const regex = /\/[a-z0-9]+/;

  if (
    !pageData &&
    !mounted &&
    (pathname.includes("/home") || !regex.test(window.location.pathname))
  ) {
    return <></>;
  } else if (!pageData) {
    return <Loading />;
  }
  return (
    <div className={styles?.footerMainContainer}>
      <Cosmos styles={styles} cosmosData={pageData?.cosmosData} />
      <Footer styles={styles} footerData={pageData?.footerData} />
    </div>
  );
}
