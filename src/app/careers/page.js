"use server";

import { convertFromACF, fetchPage } from "../lib/api";
import Careers from "./Careers";

// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(184);
  const data = await convertFromACF(fetchData, "careers");

  // Return metadata
  return {
    title: "AADYAH Aerospace | Careers ",
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
export default async function CareersPage() {
  // Fetch and process data
  const fetchData = await fetchPage(184);
  const data = await convertFromACF(fetchData, "careers");

  return <Careers data={data} />;
}
