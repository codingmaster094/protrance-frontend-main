
import React from "react"
import Banner from '../components/Banner'
// import Client from '../components/Client'
import Clients from '../components/Clients'
// import Question from "../components/Question"
import Protrance from '../components/Protrance'
import Timeline from '../components/Timeline'
import Counter from '../components/Counter'
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import HowTofindMe  from "../components/HowTofindMe"
import Map from '../components/map'
import Alldata from "../untils/AllDataFatch"
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../components/SchemaInjector"));
const page = async() => {
			  let UnerMichData;
         let schemaJSON = null;
  try {
    UnerMichData = await Alldata("/uber-mich");
    schemaJSON = JSON.stringify(UnerMichData.seo.structuredData);
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!UnerMichData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <Banner
        Heading={UnerMichData.hero.text}
        Banner={UnerMichData.hero.heroImage.url}
        BannerListdata={UnerMichData.hero.richText.root.children[0].children}
        BTN={UnerMichData.hero.link}
        container={UnerMichData.hero.container_Hight}
        Image_Position={UnerMichData.hero.Image_Position}
      />

      <Clients
        title={UnerMichData.partnerlogo.title}
        ImageArray={UnerMichData.partnerlogo.nestedSections}
      />

      <Raucherentwöhnung
        ImageUrl={UnerMichData.abouts.aboutsImage.url}
        Heading={UnerMichData.abouts.headding}
        description={
          UnerMichData.abouts.description.root.children[0].children[0].text
        }
        title={UnerMichData.abouts.title}
        main_description={
          UnerMichData.abouts.main_description.root.children[0].children[0].text
        }
        Sub_description={
          UnerMichData.abouts.Sub_description.root.children[0].children
        }
        subtitle={UnerMichData.abouts.subtitle}
        Inner_description={
          UnerMichData.abouts.Inner_description.root.children[0].children
        }
      />
      <Protrance
        title={UnerMichData.service.title}
        ImageArray={UnerMichData.service.nestedService}
      />

      <Timeline
        title={UnerMichData.wichtige_meilensteine.headding}
        description={
          UnerMichData.wichtige_meilensteine.main_description.root.children[0]
            .children[0].text
        }
        YearArray={UnerMichData.wichtige_meilensteine.nestedSections}
      />
      <HowTofindMe
        ImageUrl={UnerMichData.abouts2.aboutsImage.url}
        title={UnerMichData.abouts2.title}
        description={UnerMichData.abouts2.description}
        ImageArrya={UnerMichData.abouts2.nestedSections}
      />
      <Map
        title={UnerMichData.ubermap.headding}
        description={
          UnerMichData.ubermap.description.root.children[0].children[0].text
        }
        ImageUrl={UnerMichData.ubermap.MapImage.url}
      />
      <Counter
        title={UnerMichData.protance_zahlen.title}
        ImageArray={UnerMichData.protance_zahlen.nestedSections}
      />
    </>
  );
}

export default page

export async function generateMetadata() {
  const metadata = await Alldata("/uber-mich");

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