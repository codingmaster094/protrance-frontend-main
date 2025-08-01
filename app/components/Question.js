import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Question = ({ cta_image , title, description, BTN }) => {
  return (
    <section>
      <div className="container">
        <div className="relative flex flex-col p-8 md:p-16 z-10  bg-primary *:text-white rounded-2xl items-center text-center">
          <div className="absolute left-0 w-full h-full  -z-10 top-0">
            {(cta_image != undefined || cta_image != null)
               && (
                <Image
                  src={cta_image.url}
                  width={1600}
                  height={292}
                  alt="vector"
                  className="w-full h-full object-cover"
                ></Image>
              )}
          </div>
          <h2 className="mb-4">{title}</h2>
          <p>{description}</p>
          <div className="flex">
            {BTN && (
              <Link
                href={BTN.url}
                aria-label="btn-link"
                role="link"
                className="btn bg-white text-black"
              >
                {BTN.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Question