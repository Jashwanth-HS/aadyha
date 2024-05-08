import { headerData } from "@/helper";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { forwardRef, use, useEffect, useRef } from "react";
import { PrimaryButton } from "@/components/Buttons";

export default function Header() {
  const pathname = usePathname();
  const pathNameRef = useRef(null);
  const navHeaderRef = useRef(null);
  const menubarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const imageRef = useRef(null);
  const storePrevScroll = useRef(0);
  const { logo, links, button } = headerData || {};
  const handleScroll = (e) => {
    if (!hamburgerRef.current.classList.contains(styles.openMenu)) {
      let isLight =
        pathNameRef.current === "/" ||
        pathNameRef.current === "/home" ||
        pathNameRef.current === "/about" ||
        pathNameRef.current === "/contact";
      if (window.scrollY > storePrevScroll.current) {
        navHeaderRef.current.classList.add(styles?.hideNavHeader);
      } else {
        navHeaderRef.current.classList.remove(styles?.hideNavHeader);
      }
      if (window.scrollY <= 100) {
        if (isLight) {
          navHeaderRef.current.classList.remove(styles?.colorNavHeader);
          navHeaderRef.current.classList.add(styles?.colorNavHeaderLight);
          imageRef.current.src = "/assets/images/logo.svg";
        } else {
          navHeaderRef.current.classList.add(styles?.colorNavHeader);
          navHeaderRef.current.classList.remove(styles?.colorNavHeaderLight);
          imageRef.current.src = "/assets/images/logoBlack.svg";
        }
      } else {
        navHeaderRef.current.classList.remove(styles?.colorNavHeaderLight);
        navHeaderRef.current.classList.remove(styles?.colorNavHeader);
        imageRef.current.src = "/assets/images/logo.svg";
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
    navHeaderRef.current.classList.add(styles?.colorNavHeaderLight);
    if (isLight) {
      navHeaderRef.current.classList.remove(styles?.colorNavHeader);
      imageRef.current.src = "/assets/images/logo.svg";
    } else {
      navHeaderRef.current.classList.add(styles?.colorNavHeader);
      imageRef.current.src = "/assets/images/logoBlack.svg";
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
      imageRef.current.src = "/assets/images/logoBlack.svg";
      handleScroll();
      menubarRef.current.classList.remove(styles.openMenubar);
    } else if (!isClose) {
      hamburgerRef.current.classList.add(styles.openMenu);
      imageRef.current.src = "/assets/images/logo.svg";
      menubarRef.current.classList.add(styles.openMenubar);
    }
  };
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
            <Image
              ref={imageRef}
              src={logo}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <nav className={styles?.navHeaderLinksContainer}>
            <ul>
              {links?.map((link, index) => {
                const { label, slug } = link;
                return (
                  <li key={index} className="navLink" id={"/" + slug}>
                    <Link href={"/" + slug} legacyBehavior>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <PrimaryButton
              label={button?.label}
              href={button?.slug}
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
        links={links.concat({ label: "contact us", slug: "contact" })}
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
              const { label, slug } = link;
              return (
                <li key={index} className={pathname === slug ? "active" : ""}>
                  <Link
                    href={"/" + slug}
                    onClick={() => {
                      handleMenuToggle("close");
                    }}
                  >
                    {label}
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
