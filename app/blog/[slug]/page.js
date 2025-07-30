import React from 'react'
import AllPost from '../../untils/All PostFatch';
import Blogdetails from '../../components/Blogdetails';
import Blogbanner from '../../components/Blogbanner';
import BlogClients from '../../components/BlogClients';

const page = async({params}) => {
    const {slug} = await params
    let SingleBlogData;
          try {
            SingleBlogData = await AllPost(`/posts?where[slug][equals]=${slug}`);
          } catch (error) {
            console.error("Error fetching data:", error);
            return <div>Error loading data.</div>;
          }
        
          if (!SingleBlogData) {
          return <div>No data available.</div>;
        }
        console.log('SingleBlogData', SingleBlogData)

  return (
    <>
      <Blogbanner
        Heading={SingleBlogData.docs[0].hero.text}
        Banner={SingleBlogData.docs[0].hero.heroImage.url}
        BannerListdata={
          SingleBlogData.docs[0].hero.richText.root.children[0].children
        }
        container={SingleBlogData.docs[0].hero.container_Hight}
        Image_Position={SingleBlogData.docs[0].hero.Image_Position}
      />
      <BlogClients
        title={SingleBlogData.docs[0].partnerlogo.title}
        ImageArray={SingleBlogData.docs[0].partnerlogo.nestedSections}
      />
      <Blogdetails
        bloAboutTitle={SingleBlogData.docs[0].Blog_About.headding}
        blogContent={
          SingleBlogData.docs[0].Blog_About.description.root.children[0]
            .children
        }
        cta_title={SingleBlogData.docs[0].cta.title}
        cta_description={
          SingleBlogData.docs[0].cta.description.root.children[0].children[0]
            .text
        }
        cta_BTN={SingleBlogData.docs[0].cta.link}
        cta_image={SingleBlogData.docs[0].cta.cta_image}
        blogcreatedAt={SingleBlogData.docs[0].createdAt}
        blogupdatedAt={SingleBlogData.docs[0].updatedAt}
        gutenbergData={SingleBlogData.docs[0].contents.Gutenberg_html}
        FAQ={SingleBlogData.docs[0].faq}
      />
    </>
  );
}

export default page