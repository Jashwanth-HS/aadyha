import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/Buttons";
import { convertFromACF, fetchGlobal } from "@/app/lib/api";
import Loading from "@/app/loading";

export default function Header() {
  const pathname = usePathname();
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);
  const pathNameRef = useRef(null);
  const navHeaderRef = useRef(null);
  const menubarRef = useRef(null);
  const lightSvgRef = useRef(null);
  const darkSvgRef = useRef(null);
  const hamburgerRef = useRef(null);
  const imageRef = useRef(null);
  const storePrevScroll = useRef(0);

  useEffect(() => {
    const getPageData = async () => {
      try {
        const fetchData = await fetchGlobal("header");
        const data = await convertFromACF(fetchData, "header");
        setPageData(data);
        console.log("data?.logos[0]: ", data?.logos);
        if (data?.logo[0]) {
          lightSvgRef.current = data?.logo[0];
        }
        if (data?.logo[1]) {
          darkSvgRef.current = data?.logo[1];
        }
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch post");
      }
    };

    getPageData();
  }, []);
  const handleScroll = (e) => {
    if (!hamburgerRef.current?.classList.contains(styles.openMenu)) {
      let isLight =
        pathNameRef.current === "/" ||
        pathNameRef.current === "/home" ||
        pathNameRef.current === "/about" ||
        pathNameRef.current === "/contact";
      if (window.scrollY > storePrevScroll.current) {
        navHeaderRef.current?.classList.add(styles?.hideNavHeader);
      } else {
        navHeaderRef.current?.classList.remove(styles?.hideNavHeader);
      }
      if (window.scrollY <= 100) {
        if (isLight) {
          navHeaderRef.current?.classList.remove(styles?.colorNavHeader);
          navHeaderRef.current?.classList.add(styles?.colorNavHeaderLight);
          if (imageRef.current) {
            imageRef.current.src = lightSvgRef.current;
          }
        } else {
          navHeaderRef.current?.classList.add(styles?.colorNavHeader);
          navHeaderRef.current?.classList.remove(styles?.colorNavHeaderLight);
          if (imageRef.current) {
            imageRef.current.src = darkSvgRef.current;
          }
        }
      } else {
        navHeaderRef.current?.classList.remove(styles?.colorNavHeaderLight);
        navHeaderRef.current?.classList.remove(styles?.colorNavHeader);
        if (imageRef.current) {
          imageRef.current.src = lightSvgRef.current;
        }
      }
      storePrevScroll.current = window.scrollY;
    }
  };

  useEffect(() => {
    let isLight =
      pathname === "/" ||
      pathname === "/home" ||
      pathname === "/about" ||
      pathname === "/contact";
    pathNameRef.current = pathname;
    navHeaderRef.current?.classList.add(styles?.colorNavHeaderLight);
    if (isLight) {
      navHeaderRef.current?.classList.remove(styles?.colorNavHeader);
      if (imageRef.current) {
        imageRef.current.src = lightSvgRef.current;
      }
    } else {
      navHeaderRef.current?.classList.add(styles?.colorNavHeader);
      if (imageRef.current) {
        imageRef.current.src = darkSvgRef.current;
      }
    }
    let NavLink = document.querySelectorAll(".navLink");
    if (NavLink?.length > 0) {
      NavLink.forEach((e) => {
        if (e.id === pathNameRef.current) {
          e.classList.add(styles.NavActive);
        } else {
          e.classList.remove(styles.NavActive);
        }
      });
    }
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    let loaderMain = document.getElementById("loaderMain");
    if (loaderMain) {
      loaderMain.style.display = "none";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuToggle = (isClose) => {
    const menu = hamburgerRef.current.classList;
    if (menu.contains(styles.openMenu)) {
      hamburgerRef.current.classList.remove(styles.openMenu);
      if (imageRef.current) {
        imageRef.current.src = darkSvgRef.current;
      }
      handleScroll();
      menubarRef.current.classList.remove(styles.openMenubar);
    } else if (!isClose) {
      hamburgerRef.current.classList.add(styles.openMenu);
      if (imageRef.current) {
        imageRef.current.src = lightSvgRef.current;
      }
      menubarRef.current.classList.add(styles.openMenubar);
    }
  };
  if (!pageData) return <Loading />;
  return (
    <>
      <header ref={navHeaderRef} className={styles?.navHeader}>
        <div className={styles?.navHeaderInner}>
          <Link
            className={styles?.navHeaderLogo}
            href={"/"}
            onClick={() => {
              if (window.innerWidth <= 768) {
                handleMenuToggle("close");
              }
            }}
          >
            <img
              ref={imageRef}
              src={pageData?.logo[0]}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <nav className={styles?.navHeaderLinksContainer}>
            <ul>
              {pageData?.navLinks?.map((link, index) => {
                const { title, url } = link;
                return (
                  <li key={index} className="navLink" id={url}>
                    <Link href={url} legacyBehavior>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <PrimaryButton
              label={pageData?.connect?.title}
              href={pageData?.connect?.url}
              className={styles?.navHeaderButton}
            />
          </nav>
          <div
            ref={hamburgerRef}
            className={styles?.hamburgerIcon}
            onClick={() => handleMenuToggle()}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <MenuBar
        links={pageData?.navLinks?.concat({
          title: "contact us",
          url: "contact",
        })}
        handleMenuToggle={handleMenuToggle}
        pathname={pathNameRef.current}
        styles={styles}
        ref={menubarRef}
      />
    </>
  );
}

const MenuBar = forwardRef(
  ({ links, pathname, handleMenuToggle, styles }, ref) => {
    return (
      <div ref={ref} className={styles?.menuContainer}>
        <nav className={styles?.navHeaderLinksContainer}>
          <ul>
            {links?.map((link, index) => {
              const { title, url } = link;
              return (
                <li key={index} className={pathname === url ? "active" : ""}>
                  <Link
                    href={url}
                    onClick={() => {
                      handleMenuToggle("close");
                    }}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
);
