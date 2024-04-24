"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "@/app/layout/header/Header";
import FooterMain from "./layout/footer";
import PageLoad from "@/components/PageLoad";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>
        <PageLoad>
          <Header />
          <ReactLenis root options={{ lerp: 0.08 }}>
            {children}
          </ReactLenis>
          <FooterMain />
        </PageLoad>
      </body>
    </html>
  );
}
