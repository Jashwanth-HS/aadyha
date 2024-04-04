import { headerData } from "@/helper";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import RenderButton from "@/components/RenderButton";

export default function Header() {
  const router = useRouter();
  const { logo, links, button } = headerData || {};
  return (
    <header className={styles?.navHeader}>
      <div className={styles?.navHeaderInner}>
        <div className={styles?.navHeaderLogo}>
          <Image src={logo} width={100} height={100} />
        </div>
        <nav className={styles?.navHeaderLinksContainer}>
          <ul>
            {links?.map((link, index) => {
              const { label, slug } = link;
              return (
                <li className={router.pathname === slug ? "active" : ""}>
                  <Link href={"/" + slug} legacyBehavior>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles?.navHeaderButton}>
          <RenderButton href={button?.slug}>
            {button?.label}
            <span></span>
          </RenderButton>
        </div>
      </div>
    </header>
  );
}
