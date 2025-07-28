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
      <h1>{DatenschutzerklarungData.title}</h1>
    </>
  );
};

export default page;
