"use server";

import { convertFromACF, fetchPage } from "../lib/api";
import LvcMain from "./LvcMain";

// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(167);
  const data = await convertFromACF(fetchData, "launch-vehicle-system");

  // Return metadata
  return {
    title: "AADYAH Aerospace | Launch vehicle system ",
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
export default async function ContactPage() {
  // Fetch and process data
  const fetchData = await fetchPage(167);
  const data = await convertFromACF(fetchData, "launch-vehicle-system");

  return <LvcMain data={data} />;
}
