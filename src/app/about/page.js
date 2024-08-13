"use server";

import { convertFromACF, fetchPage } from "../lib/api";
import About from "./About";
// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(272);
  const data = await convertFromACF(fetchData, "about");

  // Return metadata
  return {
    title: "AADYAH Aerospace | About Us",
    description:
      data?.meta_description ||
      "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH",
    openGraph: {
      title: data?.meta_title || "Default OG Title",
      description:
        data?.meta_description ||
        "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH",
      images: data?.openGraphImages || [], // Assuming your API provides OG images
    },
  };
}

// Server Component with Data Fetching
export default async function AboutPage() {
  // Fetch and process data
  const fetchData = await fetchPage(272);
  const data = await convertFromACF(fetchData, "about");

  return <About data={data} />;
}
