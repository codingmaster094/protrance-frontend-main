import React from 'react'
import Image from 'next/image'
const Blogbanner = ({ Image_Position ,container, Heading, Banner, BannerListdata }) => {
  return (
    <section>
      <div className=" relative bg-accent overflow-hidden">
        <div
          className={
            container === "full"
              ? "overflow-hidden w-[calc(100%-32px)] rounded-2xl max-w-[1440px] mx-auto mt-4 pb-10 pt-[180px] sm:pt-[200px] md:pb-[100px] xl:py-[200px] 2xl:py-[342px] relative "
              : "overflow-hidden w-[calc(100%-32px)] rounded-2xl  max-w-[1440px] mx-auto mt-4 pt-[180px] pb-10 sm:pt-[200px] lg:pb-[180px]  2xl:pt-[246px]"
          }
        >
          <div className="flex flex-col lg:flex-row gap-8   lg:gap-16 items-center ">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 *:text-white lg:pe-8">
              <h1 dangerouslySetInnerHTML={{ __html: Heading || "" }}></h1>
              <ul className="list-disc text-left ms-5 p text-white">
                {BannerListdata.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item.children[0].text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:absolute top-0  right-0 w-full lg:w-1/2 h-full">
              <Image
                src={Banner}
                alt="banner"
                width={800}
                height={400}
                className={`object-cover ${
                  Image_Position === "top"
                    ? "object-top"
                    : Image_Position === "middle"
                    ? "object-center"
                    : Image_Position === "bottom"
                    ? "object-bottom"
                    : ""
                } w-full h-full`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container max-w-[1440px] mx-auto mt-4 pb-10">
        <div className="flex justify-between md:flex-row flex-col gap-6 pt-10">
          <p>14.07.2025 | ZULETZT AKTUALISIERT 17.07.2025</p>
          <form>
            <div className="flex border border-1 border-[#545454] border-opacity-20 bg-white  rounded-3xl gap-4 p-2 w-full  justify-between">
              <input
                type="search"
                className="flex bg-transparent rounded-md appearance-none  placeholder:text-accent indent-2 w-full outline-none"
                placeholder="Wonach suchen Sie?"
              />
              <button
                type="submit"
                className="px-8 py-2 bg-primary-alt rounded-full text-accent1"
                value="Suche"
                name="Suche"
                aria-label="button"
                role="button"
              >
                Suche
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-full  flex-col space-y-4 md:space-y-6 lg:space-y-8 py-10">
          <h2>PRÄSENZ Yoga Nidra</h2>
          <ul className="list-disc text-left ms-5 p marker:text-primary text-accent">
            {BannerListItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default Blogbanner