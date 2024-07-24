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
        <link rel="canonical" href="https://aadyah.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aadyah.com/" />
        <meta name="robots" content="index, follow" />
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
