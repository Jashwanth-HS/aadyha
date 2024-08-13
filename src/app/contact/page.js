"use server";

import { convertFromACF, fetchPage } from "../lib/api";
import Contact from "./Contact";

// Metadata Generation Function
export async function generateMetadata() {
  // Fetch and process data for metadata purposes
  const fetchData = await fetchPage(803);
  const data = await convertFromACF(fetchData, "contact");

  // Return metadata
  return {
    title: "AADYAH Aerospace | Contact Us ",
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
  const fetchData = await fetchPage(803);
  const data = await convertFromACF(fetchData, "contact");

  return <Contact data={data} />;
}
