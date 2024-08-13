import "./typography.css";
import Home from "./home/Home";
import { convertFromACF, fetchPage } from "./lib/api";
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
export default async function App() {
  // Fetch and process data
  const fetchData = await fetchPage(15);
  const data = await convertFromACF(fetchData, "home");
  return <Home data={data} />;
}
