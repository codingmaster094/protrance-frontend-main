"use client";
import React from 'react'
import { useState } from "react";
import { motion } from 'framer-motion';
const FAQ = ({ SectionShow, title, ArrayData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    SectionShow && (
      <section id="faq">
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="container max-w-[1052px]">
          <div className="flex justify-center text-center">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          </div>
          <div className='h-8 lg:h-[64px]'></div>
          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-4 ">
              {ArrayData.map((item, index) => (
                <div
                  key={index}
                  className={`accordian  flex flex-col bg-background p-6  gap-4 transition-all duration-700 ease-in rounded-xl ${(activeIndex === index ? "active" : "",
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
                    <svg className={`transition-all ${activeIndex === index ? "rotate-180" : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7.19938C11.3 7.19938 10.6 7.46937 10.07 7.99937L3.55002 14.5194C3.26002 14.8094 3.26002 15.2894 3.55002 15.5794C3.84002 15.8694 4.32002 15.8694 4.61002 15.5794L11.13 9.05938C11.61 8.57938 12.39 8.57938 12.87 9.05938L19.39 15.5794C19.68 15.8694 20.16 15.8694 20.45 15.5794C20.74 15.2894 20.74 14.8094 20.45 14.5194L13.93 7.99937C13.4 7.46937 12.7 7.19938 12 7.19938Z" fill="#292D32" />
                    </svg>
                  </div>
                  <div
                    className={`accordian-content  text-left transition-all duration-300 ease-in-out ${activeIndex === index ? "block " : "hidden"
                      }`}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.root.children[0].children[0].text,
                      }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>)
  );
};

export default FAQ