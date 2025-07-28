'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

const Clients = ({ title, ImageArray }) => {
   let processedSlides = [...ImageArray];
   while (processedSlides.length < 6 && ImageArray.length > 0) {
     processedSlides = [...processedSlides, ...ImageArray];
   }
  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex mb-6 sm:mb-8  justify-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        </div>
        <Swiper
          className="w-full client-slider"
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {processedSlides.map((slide , i) => (
            <SwiperSlide key={i} className="py-4">
              <div className="flex items-center justify-center py-5 px-8  shadow-[0px_0px_10px_0px_#EDEDED]">
                {slide.link.url ? (
                  <Link href={slide.link.url} target={slide.link.target}>
                    <Image
                      src={slide.partnerImage.url}
                      alt={slide.partnerImage.filename}
                      width={300}
                      height={81}
                      className="w-full h-[80px] object-contain"
                    />
                  </Link>
                ) : (
                  <Image
                    src={slide.partnerImage.url}
                    alt={slide.partnerImage.filename}
                    width={300}
                    height={81}
                    className="w-full h-[80px] object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Clients