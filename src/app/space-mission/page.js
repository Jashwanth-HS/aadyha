"use server";

import { convertFromACF, fetchPage } from "../lib/api";
import SpaceSystemMain from "./SpaceSystemMain";

// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(718);
  const data = await convertFromACF(fetchData, "space-mission");
  // Return metadata
  return {
    title: "AADYAH Aerospace | Space mission",
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
  const fetchData = await fetchPage(718);
  const data = await convertFromACF(fetchData, "space-mission");

  return <SpaceSystemMain data={data} />;
}
