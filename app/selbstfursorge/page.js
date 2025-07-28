
import React from "react"
import Banner from '../components/Banner'
import Reviews from "../ReviewData/page";
import Clients from '../components/Clients'
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import FAQ from "../components/FAQ"
import Raucherentwöhnung from '../components/Raucherentwöhnung'
import AllData from "../untils/AllDataFatch";
const page = async() => {
	let SelbstfursorgeData;
  try {
    SelbstfursorgeData = await AllData("/selbstfursorge");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!SelbstfursorgeData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Banner
        Heading={SelbstfursorgeData.hero.text}
        Banner={SelbstfursorgeData.hero.heroImage.url}
        BannerListdata={
          SelbstfursorgeData.hero.richText.root.children[0].children
        }
        BTN={SelbstfursorgeData.hero.link}
        container={SelbstfursorgeData.hero.container_Hight}
      />
      <Clients
        title={SelbstfursorgeData.partnerlogo.title}
        ImageArray={SelbstfursorgeData.partnerlogo.nestedSections}
      />
      <Raucherentwöhnung
        ImageUrl={SelbstfursorgeData.abouts.aboutsImage.url}
        Heading={SelbstfursorgeData.abouts.headding}
        description={
          SelbstfursorgeData.abouts.description.root.children[0].children[0]
            .text
        }
        title={SelbstfursorgeData.abouts.title}
        main_description={
          SelbstfursorgeData.abouts.main_description.root.children[0]
            .children[0].text
        }
        Sub_description={
          SelbstfursorgeData.abouts.Sub_description.root.children[0].children
        }
        subtitle={SelbstfursorgeData.abouts.subtitle}
        Inner_description={
          SelbstfursorgeData.abouts.Inner_description.root.children[0].children
        }
      />
      <Reference
        Main_title={SelbstfursorgeData.Meine_Referenzen.title}
        Main_description={
          SelbstfursorgeData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={SelbstfursorgeData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <Question
        title={SelbstfursorgeData.cta.title}
        description={
          SelbstfursorgeData.cta.description.root.children[0].children[0].text
        }
        cta_image={SelbstfursorgeData.cta.cta_image}
        BTN={SelbstfursorgeData.cta.link}
      />
      <Protrance
        title={SelbstfursorgeData.service.title}
        ImageArray={SelbstfursorgeData.service.nestedService}
      />
      <Reviews params={SelbstfursorgeData.Reviews.enableReviews} />
      <FAQ
        title={SelbstfursorgeData.faq.title}
        ArrayData={SelbstfursorgeData.faq.nestedfaq}
        SectionShow={SelbstfursorgeData.faq.enableFAQ}
      />
    </>
  );
}

export default page