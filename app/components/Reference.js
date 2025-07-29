import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Reference = ({Image_Data ,Main_title,Main_description}) => { 
  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col mb-6 lg:mb-10 xl:mb-20 text-center gap-4  mx-auto reference-blog">
          {Main_title && 
          <h2 dangerouslySetInnerHTML={{ __html: Main_title }}></h2>
          }
          {Main_description && (
            <p dangerouslySetInnerHTML={{ __html: Main_description }}></p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Image_Data.map((item, index) => (
            <div
              key={index}
              className="relative flex overflow-hidden rounded-[32px] h-[564px] md:h-[620px]"
            >
              <Image
                src={item.Meine_ReferenzenImage.url}
                alt={item.Meine_ReferenzenImage.filename}
                width={1000}
                height={800}
                className="object-cover h-full w-full"
              />
              <div className="block absolute bottom-0 left-0 bg-primary bg-opacity-80 *:text-white w-full p-4 md:p-6 content">
                <Link href="#" aria-label="title-link" role="link">
                  <h3
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description.root.children[0].children[0].text,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Reference