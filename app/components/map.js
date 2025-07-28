import Image from 'next/image'
import React from 'react'
const map = (
	{
		title,
description,
ImageUrl
	}
) => {
  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="flex h-[420px] rounded-[32px] overflow-hidden">
          <Image
            src={ImageUrl}
            alt="image-map"
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default map