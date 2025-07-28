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
      <h1>{ImpressumData.title}</h1>
    </>
  );
};

export default page;
