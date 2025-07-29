import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Contactform = (
	{
		title,
description,
Form_title,
MapImage
	}
) => {
  return (
    <section className="py-5 md:py-10 2xl:py-[100px] contact">
      <div className="container">
        <div className="flex flex-col gap-6  mb-8 md:mb-10 lg:mb-20 justify-center text-center">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: description }}>
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-[40%] gap-6 shadow-[0px_4.8px_24.4px_-6px_#1310221A] p-6 rounded-3xl">
            <h3 className="p font-medium mb-6" dangerouslySetInnerHTML={{ __html: Form_title}}>
            </h3>
            <form className="w-full">
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="name">
                  Vorname<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="text"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="Maxima "
                ></input>
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="email">
                  E-mail<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="E-mail"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="muster@muster.de"
                ></input>
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="number">
                  Telefon<span className="text-[#CD1A1A]">*</span>
                </label>
                <input
                  type="number"
                  className="outline-none  bg-background p-4 rounded-lg"
                  placeholder="muster@muster.de"
                ></input>
              </div>
              <div className="inputbox flex flex-col gap-2 mb-4 md:mb-6">
                <label aria-label="number">Ihre Nachricht</label>
                <textarea
                  className="outline-none  bg-background p-4 rounded-lg resize-none"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>
              <p>
                Informationen zum Datenschutz bzgl. Ihrer Anfrage finden Sie
                hier :
                <Link
                  href="#"
                  aria-label="link"
                  className="text-secondary hover:text-primary transition-all"
                >
                  Datenschutzerklärung
                </Link>
              </p>
              <p>
                Bitte beweisen Sie, dass Sie ein Mensch sind und wählen Sie
                <Link
                  href="#"
                  arial-label="link"
                  className="text-secondary hover:text-primary transition-all"
                >
                  {" "}
                  das Auto.
                </Link>
              </p>
              <button
                type="submit"
                className="btn btn-primary-alt self-start"
                aria-label="link"
              >
                ABSENDEN
              </button>
            </form>
          </div>
          <div className="w-full md:w-[50%] flex rounded-[32px] overflow-hidden">
            <Image
              src={MapImage}
              alt="mapimage"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactform