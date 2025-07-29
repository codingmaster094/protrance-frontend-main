import React from 'react'
import Banner from '../components/Banner'
import Clients from '../components/Clients'
import Counter from '../components/Counter'
import Service from '../components/Service'
import Question from '../components/Question'
import Benefits from '../components/Benefits'
import Reviews from '../ReviewData/page'
import Reference from '../components/Reference'
import Protrance from '../components/Protrance'
import FAQ from '../components/FAQ'
import AllData from "../untils/AllDataFatch"

const page = async() => {
	let HomePageData;
  try {
    HomePageData = await AllData("/home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <Banner
        Heading={HomePageData.hero.text}
        Banner={HomePageData.hero.heroImage.url}
        BannerListdata={HomePageData.hero.richText.root.children[0].children}
        BTN={HomePageData.hero.link}
        container={HomePageData.hero.container_Hight}
        Image_Position={HomePageData.hero.Image_Position}
      />
      <Clients
        title={HomePageData.partnerlogo.title}
        ImageArray={HomePageData.partnerlogo.nestedSections}
      />
      <Service
        title={HomePageData.abouts.title}
        description={
          HomePageData.abouts.description.root.children[0].children[0].text
        }
        subTitle={HomePageData.abouts.subTitle}
        subDescription={
          HomePageData.abouts.subDescription.root.children[0].children[0].text
        }
        points={HomePageData.abouts.ulLi.root.children[0].children}
        BTN={HomePageData.abouts.link}
        ImageArry={HomePageData.abouts.nestedSections}
      />
      <Counter
        title={HomePageData.protance_zahlen.title}
        ImageArray={HomePageData.protance_zahlen.nestedSections}
      />
      <Question
        title={HomePageData.cta.title}
        description={
          HomePageData.cta.description.root.children[0].children[0].text
        }
        BTN={HomePageData.cta.link}
        cta_image={HomePageData.cta.cta_image}
      />
      <Benefits
        title={HomePageData.service.title}
        description={
          HomePageData.service.description.root.children[0].children[0].text
        }
        ImageArray={HomePageData.service.nestedService}
      />
      <Reviews params={HomePageData.Reviews.enableReviews} />
      <Reference
        Main_title={HomePageData.Meine_Referenzen.title}
        Main_description={
          HomePageData.Meine_Referenzen.description.root.children[0].children[0]
            .text
        }
        Image_Data={HomePageData.Meine_Referenzen.nestedMeine_Referenzen}
      />
      <Question
        title={HomePageData.cta2.title}
        description={
          HomePageData.cta2.description.root.children[0].children[0].text
        }
        BTN={HomePageData.cta2.link}
        cta_image={HomePageData.cta2.cta_image}
      />
      <Protrance
        title={HomePageData.service2.title}
        ImageArray={HomePageData.service2.nestedService}
      />
      <FAQ
        title={HomePageData.faq.title}
        SectionShow={HomePageData.faq.enableFAQ}
        ArrayData={HomePageData.faq.nestedfaq}
      />
    </>
  );
}

export default page