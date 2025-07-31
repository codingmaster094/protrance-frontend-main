import React from "react";
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async () => {
  let DatenschutzerklarungData;
   let schemaJSON = null;

  try {
    DatenschutzerklarungData = await Alldata("/datenschutzerklarung");
     schemaJSON = JSON.stringify(DatenschutzerklarungData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!DatenschutzerklarungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <section className="py-5 md:py-10 2xl:py-[100px] sec-page-content bg-[#0c2a35] text-white">
        <div className="container text-white">
          <div
            dangerouslySetInnerHTML={{
              __html: DatenschutzerklarungData.contents.Gutenberg_html,
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  const metadata = await Alldata("/datenschutzerklarung");

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
