import React from 'react'
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Contactform from "../components/Contactform"
import AllData from "../untils/AllDataFatch";
const page = async() => {
	let KontaktData;
	  try {
		KontaktData = await AllData("/kontakt");
	  } catch (error) {
		console.error("Error fetching data:", error);
		return <div>Error loading data.</div>;
	  }
	
	  if (!KontaktData) {
		return <div>No data available.</div>;
	  }

  return (
    <>
      <Banner
        Heading={KontaktData.hero.text}
        Banner={KontaktData.hero.heroImage.url}
        BannerListdata={KontaktData.hero.richText.root.children[0].children}
        BTN={KontaktData.hero.link}
        container={KontaktData.hero.container_Hight}
      />
      <Contact
        title={KontaktData.Kontaktmöglichkeiten.headding}
        description={
          KontaktData.Kontaktmöglichkeiten.main_description.root.children[0]
            .children[0].text
        }
        ImageArray={KontaktData.Kontaktmöglichkeiten.nestedSections}
      />
      <Contactform
        title={KontaktData.Kontaktmap.headding}
        description={
          KontaktData.Kontaktmap.description.root.children[0].children[0].text
        }
        Form_title={KontaktData.Kontaktmap.Form_title}
        MapImage={KontaktData.Kontaktmap.MapImage.url}
      />
    </>
  );
}

export default page