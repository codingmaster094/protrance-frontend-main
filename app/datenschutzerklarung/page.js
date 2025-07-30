import React from "react";
import AllData from "../untils/AllDataFatch";

const page = async () => {
  let DatenschutzerklarungData;
  try {
    DatenschutzerklarungData = await AllData("/datenschutzerklarung");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!DatenschutzerklarungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
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
