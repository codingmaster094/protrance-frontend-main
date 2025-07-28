import React from 'react'
import Image from 'next/image'
const LongTermEffects = (
	{
		ImageUrl,
title,
description,
ImageArray
	}
) => {

  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-6  mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="flex gap-8 2xl:gap-20 flex-col lg:flex-row">
          <div className="flex flex-col w-full sm:w-[65%] lg:w-[40%] rounded-[32px] overflow-hidden h-[400px] xl:h-[610px]">
            <Image
              src={ImageUrl}
              width={678}
              height={532}
              alt="aboutimage"
              className="object-cover w-full h-full"
            ></Image>
          </div>
          {ImageArray.map((item , i) => {
			return (
        <div
          key={i}
          className="flex flex-col w-full lg:w-1/2 p-6 lg:p-16 gap-4 lg:gap-8 rounded-[24px] h-full bg-background"
        >
          <div className="flex flex-col gap-4">
            <h3
              className="text-lg lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></h3>
            <ul className="list-disc marker:text-primary list-inside">
              {item.description.root.children[0].children.map((val, i) => {
                return <li key={i}>{val.children[0].text}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4
              className="h3"
              dangerouslySetInnerHTML={{ __html: item.subTitle }}
            ></h4>
            <div
              dangerouslySetInnerHTML={{
                __html: item.subdescription.root.children[0].children[0].text,
              }}
            ></div>
          </div>
          <div className="svg-Image ">
            <Image
              src={item.aboutsImage.url}
              alt="stamp.svg"
              width={350}
              height={200}
            />
          </div>
        </div>
      );
		  })}
          
        </div>
      </div>
    </section>
  );
}

export default LongTermEffects