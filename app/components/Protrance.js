'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import Nextarrow from '../../public/images/arrow-left-long.png';
import prevarrow from '../../public/images/arrow-right.png';

const Protrance = ({title,ImageArray}) => {
  let processedSlides = [...ImageArray];
  while (processedSlides.length < 4 && ImageArray.length > 0) {
    processedSlides = [...processedSlides, ...ImageArray];
  }
  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex  mb-8 md:mb-10 lg:mb-20  justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <div className="flex relative">
          <Swiper
            className="w-full   xl:!ms-[120px] xl:!me-[120px] !pb-0 sm:!pb-[80px] protrance-slider"
            modules={[Pagination, Navigation]}
            loop={false}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              1024: { slidePerView: 3 },
            }}
          >
            <div className="swiper-wrapper">
              {processedSlides.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="flex items-center flex-col  border border-black border-opacity-10 rounded-3xl p-6 xl:p-16 text-center gap-4">
                      <div className="border border-[#d8d8d8] rounded-full">
                        <Image
                          src={slide.serviceImage.url}
                          alt={slide.serviceImage.filename}
                          width={800}
                          height={800}
                          className="w-full object-cover"
                        />
                      </div>
                      <Link href="#" aria-label="blog-link" role="link">
                        <h3>{slide.title}</h3>
                      </Link>
                      {slide?.description?.root?.children?.[0]?.children?.[0]
                        ?.text ? (
                        <p>
                          {slide.description.root.children[0].children[0].text}
                        </p>
                      ) : (
                        <ul className="list-disc marker:text-primary ms-5 text-accent1 text-opacity-80 p">
                          {slide?.description?.root?.children?.[0]?.children.map(
                            (li, i) => {
                              return <li key={i}>{li.children[0].text}</li>;
                            }
                          )}
                        </ul>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>

            <div className="swiper-button-prev !hidden sm:!block absolute !left-[unset] !top-[unset] !bottom-[20px]  sm:!bottom-[50px] !right-0 after:!hidden">
              <Image src={Nextarrow} alt="next-arrow" />
            </div>
            <div className="swiper-button-next !hidden sm:!block absolute !left-[unset] !top-[unset] !bottom-[20px] sm:!bottom-[50px] !right-[50px] after:!hidden">
              <Image src={prevarrow} alt="Prevarrow" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Protrance