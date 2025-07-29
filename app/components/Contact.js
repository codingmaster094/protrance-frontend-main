import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Contact = ({
	title,
description,
ImageArray
}) => {
  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-6  mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p
            dangerouslySetInnerHTML={{__html: description}}
          ></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ImageArray.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[24px] shadow-[0px_4.8px_24.4px_-6px_#1310221A] py-8 px-6"
            >
              <div className="flex mb-4">
                <Image
                  src={item.nestedaboutsImage.url}
                  alt={item.nestedaboutsImage.filename}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex">
                <Link
                  href="#"
                  aria-label="link"
                  className="text-block hover:text-primary h4"
                >
                  {item.title}
                </Link>
              </div>
              {item.link && (
                <Link
                  href={item.link.url}
                  aria-label="link"
                  className="self-start btn btn-primary-alt"
                >
                  {item.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact