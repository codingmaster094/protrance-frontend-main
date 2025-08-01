"use client";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
const Contact = ({ title, description, ImageArray }) => {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: -110,
        duration: 0.5,
        easing: (t) => t,
      });
    } else {
      console.warn(`Target section ${targetId} not found or Lenis not ready`);
    }
  };

  return (
    <section className="py-5 md:py-10 2xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-6  mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ImageArray.map((item, index) => {
            const isAnchorLink = item?.link?.url?.startsWith("#");

            return (
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
                  {isAnchorLink ? (
                    <button
                      onClick={() => scrollToSection(item.link.url)}
                      className="text-block hover:text-primary h4"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      href={item.link.url}
                      target={item.link.target}
                      aria-label="link"
                      className="text-block hover:text-primary h4"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>

                {item.link &&
                  (isAnchorLink ? (
                    <button
                      onClick={() => scrollToSection(item.link.url)}
                      className="self-start btn btn-primary-alt"
                    >
                      {item.link.label}
                    </button>
                  ) : (
                    <Link
                      href={item.link.url}
                      target={item.link.target}
                      aria-label="link"
                      className="self-start btn btn-primary-alt"
                    >
                      {item.link.label}
                    </Link>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
