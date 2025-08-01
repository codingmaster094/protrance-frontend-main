import React from "react";
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let ImpressumData;
   let schemaJSON = null;
  try {
    ImpressumData = await Alldata("/impressum");
    schemaJSON = JSON.stringify(ImpressumData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ImpressumData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <section className="py-8 md:py-10 2xl:py-[100px] sec-page-content bg-[#0c2a35] text-white">
        <div class="py-4 md:py-6 2xl:py-[100px] bg-[#9a1a60]">
          <div class="container mx-auto px-[15px] ">
            <h1 class="text-white">Impressum</h1>
          </div>
        </div>
        <div className="py-5 md:py-10 bg-[#0c2a35] text-white">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{
                __html: ImpressumData.contents.Gutenberg_html,
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  const metadata = await Alldata("/impressum");

  const title = metadata?.seo?.meta?.title || "Default Title";
  const description = metadata?.seo?.meta?.description || "Default Description";
  const canonical =
    metadata?.seo?.meta?.canonicalUrl ||
    "https://www.heilpraktikerin-nicolli.de";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
