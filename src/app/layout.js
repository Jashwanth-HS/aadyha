"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "@/app/layout/header/Header";
import FooterMain from "./layout/footer";
import { useEffect } from "react";
import PageLoad from "@/components/PageLoad";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    let loaderMain = document.getElementById("loaderMain");
    if (loaderMain) {
      loaderMain.style.display = "none";
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>
          AADYAH Aerospace Trusted by the ones who push the boundaries
        </title>
        <meta
          name="description"
          content="Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
        ></meta>
        <meta
          property="og:title"
          content="AADYAH Aerospace Trusted by the ones who push the boundaries"
        ></meta>
        <meta
          property="og:description"
          content="Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
        ></meta>
      </head>
      <body className={inter.className}>
        <PageLoad />
        <Header />
        <ReactLenis root options={{ lerp: 0.08 }}>
          {children}
        </ReactLenis>
        <FooterMain />
      </body>
    </html>
  );
}
