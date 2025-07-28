"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const Service = ({
  title,
  description,
  subTitle,
  subDescription,
  points,
  BTN,
  ImageArry,
}) => {
  let processedSlides = [...ImageArry];
  while (processedSlides.length < 4 && ImageArry.length > 0) {
    processedSlides = [...processedSlides, ...ImageArry];
  }
  return (
    <section className="relative py-5 md:py-10 2xl:py-[100px] ">
      <div className="container">
        <div className="flex flex-col  lg:flex-row gap-6 lg:gap-16">
          <div className="flex shrink-0 lg:w-1/3 flex-col gap-4">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <h3 dangerouslySetInnerHTML={{ __html: subTitle }}></h3>
            <div dangerouslySetInnerHTML={{ __html: subDescription }}></div>
            <ul className="list-disc list-inside marker:text-primary">
              {points.map((li, i) => {
                return <li key={i}>{li.children[0].text}</li>;
              })}
            </ul>
            {BTN && (
              <Link
                href={BTN.url}
                aria-label="btn-link"
                role="link"
                className="btn btn-primary-alt hidden lg:inline-flex mt-0  self-start"
              >
                {BTN.label}
              </Link>
            )}
          </div>
          <div className=" w-full lg:w-[62%]  h-full static lg:absolute right-0 top-0">
            <Swiper
              className="service-slider h-[500px] lg:h-[624px]"
              modules={[Autoplay]}
              loop={true}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                600: { slidesPerView: 2 },
                1600: { slidesPerView: 3 },
              }}
            >
              {processedSlides?.map((slide , i) => {
                return (
                  <SwiperSlide
                    key={i}
                    className="h-full  rounded-[20px] overflow-hidden group "
                  >
                    <div className="flex items-center justify-center rounded-[20px] overflow-hidden  relative  h-full">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                          src={slide.aboutsImage.url}
                          alt={slide.title}
                          width={500}
                          height={500}
                          className="w-full object-cover !h-full object-right"
                        />
                      </div>
                      <div className="flex  *:text-white w-full h-full items-end after:top-0 after:bottom-0 after:absolute after:w-full after:h-full after:bg-[linear-gradient(180deg,rgba(26,96,154,0)_56.21%,rgba(26,96,154,0.34644)_70.32%,rgba(26,96,154,0.64)_79.4%,#1A609A_93.94%)] transition-all duration-300">
                        <div className="block relative z-10 *:text-white h-[110px] transition-all ease duration-500 p-6  w-full group-hover:h-[25%]">
                          <h3
                            className="inline-block"
                            dangerouslySetInnerHTML={{ __html: slide.title }}
                          ></h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                slide.description.root.children[0].children[0]
                                  .text,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
