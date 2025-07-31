import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import Reviews from "../ReviewData/page";
import FAQ from "../components/FAQ"
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import Alldata from "../untils/AllDataFatch";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async() => {
	let raucherentwohnungData;
   let schemaJSON = null;
  try {
    raucherentwohnungData = await Alldata("/raucherentwohnung");
    schemaJSON = JSON.stringify(raucherentwohnungData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!raucherentwohnungData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={raucherentwohnungData.hero.text}
        Banner={raucherentwohnungData.hero.heroImage.url}
        BannerListdata={
          raucherentwohnungData.hero.richText.root.children[0].children
        }
        BTN={raucherentwohnungData.hero.link}
        container={raucherentwohnungData.hero.container_Hight}
        Image_Position={raucherentwohnungData.hero.Image_Position}
      />
      <Clients
        title={raucherentwohnungData.partnerlogo.title}
        ImageArray={raucherentwohnungData.partnerlogo.nestedSections}
      />
      <Raucherentwöhnung
        ImageUrl={raucherentwohnungData.abouts.aboutsImage.url}
        Heading={raucherentwohnungData.abouts.headding}
        description={
          raucherentwohnungData.abouts.description.root.children[0].children[0]
            .text
        }
        title={raucherentwohnungData.abouts.title}
        main_description={
          raucherentwohnungData.abouts.main_description.root.children[0]
            .children[0].text
        }
        Sub_description={
          raucherentwohnungData.abouts.Sub_description.root.children[0].children
        }
        subtitle={raucherentwohnungData.abouts.subtitle}
        Inner_description={
          raucherentwohnungData.abouts.Inner_description.root.children[0]
            .children
        }
      />
      <Reference
        Main_title={raucherentwohnungData.Meine_Referenzen.title}
        Main_description={
          raucherentwohnungData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={
          raucherentwohnungData.Meine_Referenzen.nestedMeine_Referenzen
        }
      />
      <Question
        title={raucherentwohnungData.cta.title}
        description={
          raucherentwohnungData.cta.description.root.children[0].children[0]
            .text
        }
        cta_image={raucherentwohnungData.cta.cta_image}
        BTN={raucherentwohnungData.cta.link}
      />
      <Protrance
        title={raucherentwohnungData.service.title}
        ImageArray={raucherentwohnungData.service.nestedService}
      />
      <Reviews params={raucherentwohnungData.Reviews.enableReviews} />
      <FAQ
        title={raucherentwohnungData.faq.title}
        ArrayData={raucherentwohnungData.faq.nestedfaq}
        SectionShow={raucherentwohnungData.faq.enableFAQ}
      />
    </>
  );
}

export default page

export async function generateMetadata() {
  const metadata = await Alldata("/raucherentwohnung");

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