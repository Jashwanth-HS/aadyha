"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Header from "@/app/layout/header/Header";
import FooterMain from "./layout/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ReactLenis root options={{ lerp: 0.08 }}>
          {children}
        </ReactLenis>
        <FooterMain />
      </body>
    </html>
  );
}
