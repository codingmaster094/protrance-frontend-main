import React from "react";
import AllData from "../untils/AllDataFatch";

const page = async () => {
  let ImpressumData;
  try {
    ImpressumData = await AllData("/impressum");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ImpressumData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <section className="py-5 md:py-10 2xl:py-[100px] sec-page-content bg-[#0c2a35] text-white">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: ImpressumData.contents.Gutenberg_html,
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default page;
