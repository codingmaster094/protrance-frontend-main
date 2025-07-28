import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ FooterDatas }) => {
  if (!FooterDatas) return null; // optional fallback

  const { sprechzeiten, kontakt, navigationLinks, legalLinks, copyright } =
    FooterDatas;


  return (
    <footer className="border-t border-border">
      <div className="container">
        <div className="flex gap-10 flex-col 2xl:flex-row py-12">
          <div className="flex footer-menu flex-col gap-4 sm:w-[517px]">
            <Link href="/" aria-label="foot-logo">
              <Image src={FooterDatas.footerlogo.url} width={170} height={95} alt="footer-logo" />
            </Link>
            <div
              dangerouslySetInnerHTML={{ __html: FooterDatas.description }}
            ></div>
          </div>

          <div className="flex flex-wrap justify-between flex-1 gap-4 flex-col md:flex-row">
            <div className="flex flex-col footer-menu gap-4 ">
              <h5>Sprechzeiten</h5>
              <ul>
                {sprechzeiten?.map(({ id, day, time }) => (
                  <li key={id}>
                    {day} {time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 ">
              <h5>Kontakt</h5>
              <ul>
                <li>
                  <Link href={kontakt?.phone_url || "#"} aria-label="phone">
                    {kontakt?.phone}
                  </Link>
                </li>
                <li>
                  <Link href={kontakt?.email_url || "#"} aria-label="email">
                    {kontakt?.email}
                  </Link>
                </li>
                <li>
                  {kontakt?.address?.split("\n").map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </li>
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 ">
              <h5>Navigation</h5>
              <ul>
                {navigationLinks?.map(({ id, label, url }) => (
                  <li key={id}>
                    <Link href={url || "#"} aria-label="nav-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col footer-menu gap-4 ">
              <h5>Rechtliches</h5>
              <ul>
                {legalLinks?.map(({ id, label, url }) => (
                  <li key={id}>
                    <Link href={url || "#"} aria-label="legal-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-center py-[10px]">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
