
import React from "react"
import Banner from '../components/Banner'
import Reviews from "../ReviewData/page";
import Clients from '../components/Clients'
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import FAQ from "../components/FAQ"
import LampenfieberPrüfungsangst from "../components/LampenfieberPrüfungsangst"
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async() => {
	let lampenfieber_prufungsangstData;
   let schemaJSON = null;
		  try {
			lampenfieber_prufungsangstData = await Alldata(
        "/lampenfieber_Prufungsangst"
      );
      schemaJSON = JSON.stringify(
        lampenfieber_prufungsangstData.seo.structuredData
      );
		  } catch (error) {
			console.error("Error fetching data:", error);
			return <div>Error loading data.</div>;
		  }
		
		  if (!lampenfieber_prufungsangstData) {
			return <div>No data available.</div>;
		  }

		  
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={lampenfieber_prufungsangstData.hero.text}
        Banner={lampenfieber_prufungsangstData.hero.heroImage.url}
        BannerListdata={
          lampenfieber_prufungsangstData.hero.richText.root.children[0].children
        }
        BTN={lampenfieber_prufungsangstData.hero.link}
        container={lampenfieber_prufungsangstData.hero.container_Hight}
        Image_Position={lampenfieber_prufungsangstData.hero.Image_Position}
      />
      <Clients
        title={lampenfieber_prufungsangstData.partnerlogo.title}
        ImageArray={lampenfieber_prufungsangstData.partnerlogo.nestedSections}
      />
      <LampenfieberPrüfungsangst
        headding={lampenfieber_prufungsangstData.abouts.headding}
        ImageUrl={lampenfieber_prufungsangstData.abouts.aboutsImage.url}
        title={lampenfieber_prufungsangstData.abouts.title}
        description1={
          lampenfieber_prufungsangstData.abouts.description1.root.children[0]
            .children[0].text
        }
        description2={
          lampenfieber_prufungsangstData.abouts.description2.root.children
        }
        subdescription={
          lampenfieber_prufungsangstData.abouts.subdescription.root.children[0]
            .children
        }
      />
      <Reference
        Main_title={lampenfieber_prufungsangstData.Meine_Referenzen.title}
        Main_description={
          lampenfieber_prufungsangstData.Meine_Referenzen.description.root
            .children[0].children[0].text
        }
        Image_Data={
          lampenfieber_prufungsangstData.Meine_Referenzen.nestedMeine_Referenzen
        }
      />
      <Question
        title={lampenfieber_prufungsangstData.cta.title}
        description={
          lampenfieber_prufungsangstData.cta.description.root.children[0]
            .children[0].text
        }
        cta_image={lampenfieber_prufungsangstData.cta.cta_image}
        BTN={lampenfieber_prufungsangstData.cta.link}
      />
      <Protrance
        title={lampenfieber_prufungsangstData.service.title}
        ImageArray={lampenfieber_prufungsangstData.service.nestedService}
      />
      <Reviews params={lampenfieber_prufungsangstData.Reviews.enableReviews} />
      <FAQ
        title={lampenfieber_prufungsangstData.faq.title}
        ArrayData={lampenfieber_prufungsangstData.faq.nestedfaq}
        SectionShow={lampenfieber_prufungsangstData.faq.enableFAQ}
      />
    </>
  );
}

export default page 
export async function generateMetadata() {
  const metadata = await Alldata("/lampenfieber_Prufungsangst");

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