import React from 'react'
import Banner from "../components/Banner"
import Clients from "../components/Clients"
import Blog from "../components/Blog"
import Alldata from "../untils/AllDataFatch"
import AllPost from '../untils/All PostFatch'
const page = async() => {
				  let BlogData;
          let AllpostData
	  try {
		BlogData = await Alldata("/blog");
		AllpostData = await AllPost("/posts");
	  } catch (error) {
		console.error("Error fetching data:", error);
		return <div>Error loading data.</div>;
	  }
	
	  if (!BlogData || !AllpostData) {
      return <div>No data available.</div>;
    }


  return (
    <>
      <Banner
        Heading={BlogData.hero.text}
        Banner={BlogData.hero.heroImage.url}
        BannerListdata={BlogData.hero.richText.root.children[0].children}
        BTN={BlogData.hero.link}
        container={BlogData.hero.container_Hight}
      />
      <Clients
        title={BlogData.partnerlogo.title}
        ImageArray={BlogData.partnerlogo.nestedSections}
      />
      <Blog
        title={BlogData.blog_list_title.title}
        AllPostDetails={AllpostData.docs}
      />
    </>
  );
}

export default page