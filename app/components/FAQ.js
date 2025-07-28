"use client";
import React from 'react'
import  { useState } from "react";
import Chevronsvg from '../../public/images/arrowVector.svg'
import Image from 'next/image';
const FAQ = ({ SectionShow,title, ArrayData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    SectionShow && (
    <section className="py-5 md:py-10 2xl:py-[100px]" id="faq">
      <div className="container max-w-[1052px]">
        <div className="flex mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div className="flex w-full">
          <div className="accordian-inner flex flex-col w-full text-left gap-4 ">
            {ArrayData.map((item, index) => (
              <div
                key={index}
                className={`accordian  flex flex-col bg-background p-6  gap-4 transition-all duration-700 ease-in rounded-xl ${
                  (activeIndex === index ? "active" : "",
                  activeIndex === index ? "" : "")
                }`}
              >
                <div
                  className="accordian-header flex justify-between gap-2  cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <h3
                    className="text-lg  font-ubuntu"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h3>
                  <span
                    className={`arrow w-[28px] h-[28px] inline-block  flex-shrink-0 transition-transform  rounded-full ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <Image src={Chevronsvg} alt="Chevron-svg" />
                  </span>
                </div>
                <div
                  className={`accordian-content  text-left transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "block " : "hidden"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        item.description.root.children[0].children[0].text,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>)
  );
};

export default FAQ