"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileToggle from "../../public/images/mobile-toggle.svg";
import CloseBtn from "../../public/images/close.svg";
import Lenis from "@studio-freight/lenis";

const Header = ({ Menus, HeaderData }) => {
  const pathname = usePathname();

  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const isActive = (url) => {
    return pathname === url;
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <header
      className={`transition-all duration-300 p-4 z-[999] ${isFixed
          ? "top-0 bg-primary shadow left-0 w-full fixed"
          : "bg-transparent fixed w-full"
        }`}
    >
      <div className="container">
        <nav className="flex w-full py-4 justify-between items-center">
          <div className="logo">
            <Link href="/" aria-label="logo" role="logo">
              <Image
                src={HeaderData.Header_Logo.url}
                width={145}
                height={63}
                alt="Logo.png"
              />
            </Link>
          </div>

          {/* Menu Container */}
          <div
            className={`side-menu fixed opacity-0 z-[999] px-4 w-72 -left-full top-0 bg-primary h-full pt-16 border-r-4 border-gray-light lg:bg-transparent  lg:border-none  lg:opacity-100 lg:w-auto lg:static  lg:flex lg:items-center transition-all duration-[0.4s] ease-in lg:transition-none lg:pt-0  lg:justify-center ${menuOpen ? "left-0 opacity-100" : ""
              }`}
          >
            <span
              className="close block absolute top-4 right-4 w-8 h-8 lg:hidden cursor-pointer"
              aria-label="close"
            >
              <Image
                src={CloseBtn}
                alt="close-btn"
                onClick={handleMenuToggle}
              />
            </span>

            {/* Menu Items */}
            <ul className="flex text-white font-medium transition-all duration-700 ease-in-out flex-col lg:flex-row lg:bg-white/15 lg:rounded-[20px] px-5 py-[11px] gap-8
             lg:hover:bg-secondary backdrop-blur-[40px]">
              {Menus.map((item) => {
                const hasSubmenu = item.submenus?.length > 0;
                return (
                  <li
                    key={item.id}
                    className={`relative ${isActive(item.link?.url) && !hasSubmenu
                        ? ""
                        : ""
                      }`}
                  >
                    {hasSubmenu ? (
                      <div
                        className="inline-block"
                        onMouseOver={() => {
                          if (!isMobile) {
                            clearTimeout(window.dropdownTimeout);
                            setOpenDropdown(true);
                          }
                        }}
                        onMouseOut={() => {
                          if (!isMobile) {
                            window.dropdownTimeout = setTimeout(() => {
                              setOpenDropdown(false);
                            }, 200);
                          }
                        }}
                      >
                        <button
                          onClick={() =>
                            isMobile && setOpenDropdown(!openDropdown)
                          }
                          className="flex items-center gap-1"
                          aria-label="menu-link"
                        >
                          {item.link?.label?.trim()}
                          <span
                            className={`transition-transform duration-300 ${openDropdown ? "rotate-180" : "rotate-0"
                              }`}
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10L12 15L17 10"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>

                        {openDropdown && (
                          <ul className="staic lg:absolute left-0 mt-4 bg-white text-black shadow-lg rounded min-w-40 z-[999] overflow-hidden">
                            {item.submenus[0]?.links?.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  href={submenu.link?.url || "#"}
                                  className={`block px-4 py-2 hover:bg-gray-200 ${isActive(submenu.link?.url)
                                      ? "bg-gray-100"
                                      : ""
                                    }`}
                                >
                                  {submenu.link?.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.link?.url || "#"}
                        className={`block ${isActive(item.link?.url) ? "" : ""
                          }`}
                        arial-label="menu-link"
                        role="link"
                      >
                        {item.link?.label?.trim()}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile only button */}
            <Link
              href={HeaderData.link.url}
              className="btn btn-primary lg:hidden hover:bg-black mt-4"
            >
              {HeaderData.link.Kontakt_label}
            </Link>
          </div>

          {/* Desktop only button */}
          <Link
            href={HeaderData.link.url}
            className="btn btn-primary hidden lg:inline-flex mt-0 hover:bg-black"
          >
            {HeaderData.link.Kontakt_label}
          </Link>

          {/* Mobile Toggle */}
          <span
            className="mobile-toggle w-8 flex lg:hidden cursor-pointer"
            aria-label="mobile-menu"
          >
            <Image
              src={MobileToggle}
              alt="mobile-btn"
              onClick={handleMenuToggle}
            />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
