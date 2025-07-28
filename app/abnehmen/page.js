import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Question from "../components/Question"
import Reference from "../components/Reference"
import Protrance from '../components/Protrance'
import Reviews from "../ReviewData/page";
import FAQ from "../components/FAQ"
import Hypnosisweightloss from '../components/hypnosisweightloss'
import AllData from "../untils/AllDataFatch";
const Page = async() => {
	let AbnehmenPageData;
  try {
    AbnehmenPageData = await AllData("/abnehmen");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!AbnehmenPageData) {
    return <div>No data available.</div>;
  }
	
  return (
    <>
      <Banner
        Heading={AbnehmenPageData.hero.text}
        Banner={AbnehmenPageData.hero.heroImage.url}
        BannerListdata={
          AbnehmenPageData.hero.richText.root.children[0].children
        }
        BTN={AbnehmenPageData.hero.link}
        container={AbnehmenPageData.hero.container_Hight}
        Image_Position={AbnehmenPageData.hero.Image_Position}
      />
      <Clients
        title={AbnehmenPageData.partnerlogo.title}
        ImageArray={AbnehmenPageData.partnerlogo.nestedSections}
      />
      <Hypnosisweightloss
        ImageUrl={AbnehmenPageData.abouts.aboutsImage.url}
        title={AbnehmenPageData.abouts.title}
        description={
          AbnehmenPageData.abouts.description.root.children[0].children[0].text
        }
        ImageArry={AbnehmenPageData.abouts.nestedSections}
      />
      <Reference
        Main_title={AbnehmenPageData.Meine_Referenzen.title}
        Main_description={
          AbnehmenPageData.Meine_Referenzen.description.root.children[0]
            .children[0].text
        }
        Image_Data={AbnehmenPageData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <Question
        title={AbnehmenPageData.cta.title}
        description={
          AbnehmenPageData.cta.description.root.children[0].children[0].text
        }
        BTN={AbnehmenPageData.cta.link}
        cta_image={AbnehmenPageData.cta.cta_image}
      />
      <Protrance
        title={AbnehmenPageData.service.title}
        ImageArray={AbnehmenPageData.service.nestedService}
      />
      <Reviews params={AbnehmenPageData.Reviews.enableReviews} />
      <FAQ
        title={AbnehmenPageData.faq.title}
        ArrayData={AbnehmenPageData.faq.nestedfaq}
        SectionShow={AbnehmenPageData.faq.enableFAQ}
      />
    </>
  );
}

export default Page