import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Banner = ({ container , Heading, Banner, BTN, BannerListdata }) => {

  return (
    <div
      className={
        container === "full"
          ? "overflow-hidden w-[calc(100%-32px)] rounded-2xl mx-auto mt-4 pt-[180px] sm:pt-[200px] pb-[100px] xl:py-[200px] 2xl:py-[342px] relative bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))]"
          : "overflow-hidden w-[calc(100%-32px)] rounded-2xl mx-auto mt-4 pt-[180px] sm:pt-[200px] pb-[100px]  2xl:py-[246px] relative bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))]"
      }
    >
      <div className="w-full h-full  top-0 left-0 absolute  -z-10">
        <Image
          src={Banner}
          alt="Banner-img"
          width={1600}
          height={980}
          className="object-cover w-full h-full "
        />
      </div>
      <div className="container">
        <div className="flex flex-col gap-4 text-white  sm:items-center w-full max-w-[1056px] mx-auto">
          <h1
            className="sm:text-center  whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: Heading || "" }}
          ></h1>
          <ul className="list-disc text-left ms-5 p text-white">
            {BannerListdata.map((item, index) => (
              <li key={index} className="mb-1">
                {item.children[0].text}
              </li>
            ))}
          </ul>
          {( BTN.url != "") && (
            <Link
              href={BTN.url || BTN.url}
              aria-label="link"
              role="link"
              className="btn btn-secondary text-center"
            >
              {BTN.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner

