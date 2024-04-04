import { headerData } from "@/helper";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { use, useEffect, useRef } from "react";
import { PrimaryButton } from "@/components/Buttons";

export default function Header() {
  const pathname = usePathname();
  const pathNameRef = useRef(null);
  const navHeaderRef = useRef(null);
  const imageRef = useRef(null);
  const storePrevScroll = useRef(0);
  const { logo, links, button } = headerData || {};

  const handleScroll = (e) => {
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
    if (window.scrollY <= 500) {
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
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header ref={navHeaderRef} className={styles?.navHeader}>
      <div className={styles?.navHeaderInner}>
        <Link className={styles?.navHeaderLogo} href={"/"}>
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
                <li key={index} className={pathname === slug ? "active" : ""}>
                  <Link href={"/" + slug} legacyBehavior>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <PrimaryButton
          label={button?.label}
          href={button?.slug}
          className={styles?.navHeaderButton}
        />
      </div>
    </header>
  );
}
