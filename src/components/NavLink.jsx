import Link from "next/link";
import styles from "./Navlink.module.css";
import React, { useEffect, useRef } from "react";

export default function NavLink({ Links, renderLink, ...rest }) {
  const MainStickyRef = useRef(null);
  const storePrevScroll = useRef(0);
  const MainRef = useRef(null);
  const handleActiveNav = (id) => {
    Links.forEach((e) => {
      const divLink = document.getElementById("navLink" + e?.slug);
      const divLink1 = document.getElementById("navLinkFixed" + e?.slug);
      if (divLink) {
        if (id === "navLink" + e.slug || id === "navLinkFixed" + e.slug) {
          divLink.classList.add(styles?.NavTabTitlesActive);
          divLink1.classList.add(styles?.NavTabTitlesActive);
          let myDiv = document.getElementById(e.slug).getBoundingClientRect();
          window.scrollTo({
            top: window.pageYOffset + myDiv.top - 150,
            behavior: "smooth",
          });
        } else {
          divLink.classList.remove(styles?.NavTabTitlesActive);
          divLink1.classList.remove(styles?.NavTabTitlesActive);
        }
      }
    });
  };
  const handleScroll = (e) => {
    if (window.scrollY > 600 && MainStickyRef.current) {
      MainStickyRef.current.classList.add(styles?.stickyClassName);
      if (window.scrollY > storePrevScroll.current) {
        MainStickyRef.current.classList.remove(styles?.moveStickyTop);
      } else {
        MainStickyRef.current.classList.add(styles?.moveStickyTop);
      }
    } else if (MainStickyRef.current) {
      MainStickyRef.current.classList.remove(styles?.moveStickyTop);
      MainStickyRef.current.classList.remove(styles?.stickyClassName);
    }
    storePrevScroll.current = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (Links) {
      let initialDiv = document.getElementById("navLink" + Links[0]?.slug);
      let initialDiv1 = document.getElementById(
        "navLinkFixed" + Links[0]?.slug
      );
      if (initialDiv) {
        initialDiv.classList.add(styles?.NavTabTitlesActive);
      }
      if (initialDiv1) {
        initialDiv1.classList.add(styles?.NavTabTitlesActive);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div ref={MainRef} className={styles?.NavTab} {...rest}>
        <div className={styles?.NavTabWrapper}>
          {Links?.map((item, index) => {
            return (
              <div
                // href={"#" + item?.slug}
                id={"navLink" + item?.slug}
                className={styles?.NavTabTitles}
                onClick={() => handleActiveNav("navLink" + item?.slug)}
                key={index}
              >
                {renderLink({ item, index })}
              </div>
            );
          })}
        </div>
      </div>
      <div ref={MainStickyRef} className={styles?.NavTabSticky} {...rest}>
        <div className={styles?.NavTabWrapper}>
          {Links?.map((item, index) => {
            return (
              <div
                // href={"#" + item?.slug}
                id={"navLinkFixed" + item?.slug}
                className={styles?.NavTabTitles}
                onClick={() => handleActiveNav("navLinkFixed" + item?.slug)}
                key={index}
              >
                {renderLink({ item, index })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
