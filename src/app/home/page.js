"use server";
import { convertFromACF, fetchPage } from "../lib/api";
import Home from "./Home";

// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(15);
  const data = await convertFromACF(fetchData, "home");

  // Return metadata
  return {
    title: "AADYAH Aerospace | homePage",
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
// Home Page Component with Data Fetching
export default async function HomePage() {
  // Fetch and process data
  const fetchData = await fetchPage(15);
  const data = await convertFromACF(fetchData, "home");

  return <Home data={data} />;
}
