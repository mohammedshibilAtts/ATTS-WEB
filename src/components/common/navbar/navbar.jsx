"use client";
import { usePathname } from "next/navigation";
import Logo from "../../../assests/images/logo.svg";
import About from "../../../assests/images/Menu_About.jpg";
import culture from "../../../assests/images/Menu_culture.jpg";
import Carrer from "../../../assests/images/careerAtts.jpg";
import Aurumm from "../../../assests/images/Aurumm.png";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import StaggeredSection from "@/components/animation/StaggeredSection";
import AnimatedSection from "@/components/animation/animationSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  digitalEngineering,
  digitalMarketing,
  digitalMedia,
  mobileNavItem,
} from "@/constants/constant";

const navItems = [
  { label: "About us", Link: "/about", icon: <IoIosArrowDown size={15} /> },
  {
    label: "Our Products",
    Link: "/product-photography",
    icon: <IoIosArrowDown size={15} />,
  },
  { label: "Services", Link: "", icon: <IoIosArrowDown size={15} /> },
  // { label: "Blogs", Link: "/blog" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const lastScrollY = useRef(0);
  const currentPath = usePathname();

  const navbarRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menu) => {
    if (menu === "Services") {
      setActiveMenu("Services");
    } else if (menu === "Our Products") {
      setActiveMenu("Our Products");
    } else if (menu === "About us") {
      setActiveMenu("About us");
    } else {
      setActiveMenu(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      servicesRef.current &&
      !servicesRef.current.contains(event.target)
    ) {
      setActiveMenu(false);
      setIsMobileMenuOpen(false);
    }
  };
  useEffect(() => {
    // Disable scrolling on the body when active menu is "Services"
    if (
      activeMenu === "Services" ||
      activeMenu === "Our Products" ||
      activeMenu === "About us"
    ) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Enable body scroll when not active
    }

    // Cleanup function to reset when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenu]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleToggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      {/* Blur Overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setActiveMenu(false)}
          aria-hidden="true"
        />
      )}
      {isMobileMenuOpen && (
        <div
          className="fixed lg:hidden inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        onMouseLeave={() => handleClickOutside("")}
        ref={navbarRef}
        className={`bg-[#010202] py-4 md:py-2 shadow-2xl backdrop-blur-sm sticky top-0 z-40 transition-all duration-300 ease-in-out
    ${
      scrolling & (isMobileMenuOpen == false)
        ? "mx-4 md:mx-5 xl:mx-32 rounded-full top-2 "
        : ""
    }
    `}
      >
        <div className="main flex items-center px-4 sm:px-6 justify-between">
          <div className="mx-3 image w-20 sm:w-24 md:w-32 lg:w-40 transform transition-transform">
            <Link href={"/"}>
              <Image src={Logo} alt="ATTS" className="w-full" />
            </Link>
          </div>

          <div className="lg:hidden justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none group"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center ms-16">
            <ul className="flex text-white gap-4 sm:gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-base whitespace-nowrap overflow-x-auto">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative group cursor-pointer px-2 py-2 rounded-2xl hover:text-black`}
                  onClick={() => activeMenu && handleClickOutside(item.label)}
                  onMouseEnter={() => handleMenuClick(item.label)}
                >
                  <div
                    className={`flex items-center rounded-full group-hover:bg-[#B5D3F5] group-hover:rounded-5xl transition-all duration-200 py-3 px-6 md:px-3 flex-grow
                      //  ${
                        //    currentPath == item.Link
                        //      ? "bg-[#B5D3F5] text-black transition-all duration-500 ease-in"
                        //      : ""
                        //  }
                        //  ${
                        //    activeMenu == item.label && item.label
                        //      ? "bg-[#B5D3F5] text-black"
                        //      : ""
                        ``
                      }
                       `}
                  >
                    {item.label !== "Services" &&
                    item.label !== "About us" &&
                    item.label !== "Our Products" ? (
                      <Link href={item.Link}>{item.label}</Link>
                    ) : (
                      <p>{item.label}</p>
                    )}
                    {item.icon && (
                      <span
                        className={`mr-2 ms-2 transform transition-all duration-700 ${
                          activeMenu == item.label ? "rotate-180" : ""
                        }`}
                      >
                        {item.icon}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex ml-auto cursor-pointer group">
            <p
              className={`font-unbounded text-1xl sm:text-lg text-white hover:underline hover:decoration-[#B5D3F5] hover:underline-offset-8 hover:rounded-3xl transition-all duration-200 py-2 sm:py-3 px-4 sm:px-1 ${
                currentPath == "/lets-talk"
                  ? "underline decoration-[#9bc5f5] underline-offset-8"
                  : ""
              }`}
            >
              <Link href={"lets-talk"}>Let's Talk</Link>
            </p>
          </div>
        </div>

        {/* Mobile Navbar */}
        {isMobileMenuOpen && (
          <motion.div
            ref={navbarRef}
            id="drawer-navigation"
            className="fixed top-0 right-0 z-40 w-80 h-screen p-4 overflow-y-auto bg-white  block lg:hidden"
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: 0 }} // Slide in to its normal position
            exit={{ x: "100%" }} // Slide out to the right when closed
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                {mobileNavItem.map((item, index) => (
                  <motion.li key={index}>
                    {item.subItems ? (
                      <div className="relative">
                        <button
                          onClick={() => handleToggleDropdown(index)} // Toggle dropdown
                          className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`w-4 h-4 ml-2 transition-transform ${
                              openDropdowns[index] ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openDropdowns[index] && ( // Show the dropdown only if it's open
                          <motion.ul className="space-y-2 pl-4 mt-2 transition-all duration-300 ease-in-out max-h-[500px] overflow-hidden">
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.li key={subIndex}>
                                {subItem.subItems ? (
                                  <div className="relative">
                                    <button
                                      onClick={() =>
                                        handleToggleDropdown(
                                          `${index}-${subIndex}`
                                        )
                                      } // Toggle sub-dropdown
                                      className="flex items-center p-2 text-gray-900 rounded-lg group"
                                    >
                                      <span>{subItem.label}</span>
                                      <svg
                                        className={`w-4 h-4 ml-2 transition-transform ${
                                          openDropdowns[`${index}-${subIndex}`]
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 9l-7 7-7-7"
                                        />
                                      </svg>
                                    </button>
                                    {openDropdowns[`${index}-${subIndex}`] && (
                                      <motion.ul className="space-y-2 pl-4 mt-2 transition-all duration-300 ease-in-out max-h-[300px] overflow-hidden">
                                        {subItem.subItems.map(
                                          (subSubItem, subSubIndex) => (
                                            <motion.li key={subSubIndex}>
                                              <Link
                                                href={subSubItem.Link}
                                                className="flex items-center p-2 text-gray-900 rounded-lg group"
                                                onClick={() =>
                                                  setIsMobileMenuOpen(false)
                                                }
                                              >
                                                <span>{subSubItem.label}</span>
                                              </Link>
                                            </motion.li>
                                          )
                                        )}
                                      </motion.ul>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.Link}
                                    className="flex items-center p-2 text-gray-900 rounded-lg group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <span>{subItem.label}</span>
                                  </Link>
                                )}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.Link}
                        className="flex items-center p-2 text-gray-900 rounded-lg group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        {item.icon && <span className="ms-2">{item.icon}</span>}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Services Dropdown */}
        {activeMenu == "Services" && (
          <div
            ref={servicesRef}
            className="absolute z-40 left-0 overflow-visible hidden md:block"
            onClick={() => setActiveMenu(false)}
          >
            <StaggeredSection>
              <div
                className="bg-[#2E2E30] text-white px-4 sm:px-6 lg:px-8 mx-20 mt-8 rounded-xl"
                style={{ maxHeight: "80vh", overflowY: "auto" }} // Add scrolling inside the component
              >
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:grid-cols-2 xl:grid-cols-3 custom:grid-cols-2">
                    {/* Digital Engineering Section */}
                    <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between">
                      <h2 className="text-2xl font-semibold mb-4">
                        Digital Engineering
                      </h2>
                      <p className="mb-4 text-gray-400">
                        Where creativity meets technology in digital
                        engineering.
                      </p>
                      <hr className="my-4 border-gray-600" />
                      <div className="items mt-2 space-y-4 flex-grow">
                        {digitalEngineering.map((item, index) => (
                          <div key={index} className="text-left">
                            <Link href={item.link} onClick={handleClickOutside}>
                              <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Digital Marketing Section */}
                    <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between">
                      <h2 className="text-2xl font-semibold mb-4">
                        Digital Marketing
                      </h2>
                      <p className="mb-4 text-gray-400">
                        Where creativity meets technology in digital marketing.
                      </p>
                      <hr className="my-4 border-gray-600" />
                      <div className="items mt-2 space-y-4 flex-grow">
                        {digitalMarketing.map((item, index) => (
                          <div key={index} className="text-left">
                            <Link href={item.link} onClick={handleClickOutside}>
                              <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Digital Media Section */}
                    <div className="main text-center p-6 rounded-lg h-full flex flex-col justify-between">
                      <h2 className="text-2xl font-semibold mb-4">
                        Digital Media
                      </h2>
                      <p className="mb-4 text-gray-400">
                        Where creativity meets technology in digital media.
                      </p>
                      <hr className="my-4 border-gray-600" />
                      <div className="items mt-2 space-y-4 flex-grow">
                        {digitalMedia.map((item, index) => (
                          <div key={index} className="text-left">
                            <Link href={item.link} onClick={handleClickOutside}>
                              <h3 className="text-xl font-medium hover:cursor-pointer hover:text-[#B5D3F5] transition-colors duration-300">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggeredSection>
          </div>
        )}

        {activeMenu === "About us" && (
          <div
            ref={servicesRef}
            className="absolute z-40  left-0 overflow-visible hidden md:block"
            onClick={() => setActiveMenu(false)}
          >
            <StaggeredSection>
              <div className="bg-[#2E2E30] px-4 sm:px-6 lg:px-8 mx-20 mt-8 rounded-xl">
                <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto py-7">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Left Card */}
                    <div className="flex flex-col">
                      <div className="relative h-68 rounded-lg overflow-hidden bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
                        <Image
                          src={About}
                          alt="Business reflection"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 space-y-2 text-white">
                        <h3 className="text-xl font-medium">About ATTS</h3>
                        <p>
                          A team where innovation and collaboration shape the
                          future.
                        </p>
                        <Link href={"/about"}>
                          <button className="inline-flex items-center px-4 mt-3 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                            Know More
                            <span className="ml-2">→</span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Center Card */}
                    <div className="flex flex-col">
                      <div className="relative h-68rounded-lg overflow-hidden bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
                        <Image
                          src={culture}
                          alt="Our Culture"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 space-y-2 text-white">
                        <h3 className="text-xl font-medium">Our Culture</h3>
                        <p>
                          Where creativity and collaboration drive our
                          innovative spirit.
                        </p>
                        <Link href={"our-culture"}>
                          <button className="inline-flex items-center mt-3 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                            Know More
                            <span className="ml-2">→</span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Card */}
                    <div className="flex flex-col">
                      <div className="relative h-68 rounded-lg overflow-hidden bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
                        <Image
                          src={Carrer}
                          alt="Team success"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-4 space-y-2 text-white">
                        <h3 className="text-xl font-medium">Careers</h3>
                        <p>
                          Where your career thrives through innovation,
                          teamwork, and continuous learning.
                        </p>
                        <Link href={"career"}>
                          <button className="inline-flex items-center px-4 mt-3 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                            Know More
                            <span className="ml-2">→</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggeredSection>
          </div>
        )}

        {activeMenu == "Our Products" && (
          <div
            ref={servicesRef}
            className="absolute z-40 left-40 overflow-visible hidden md:block"
            onClick={() => setActiveMenu(false)}
          >
            <div className="px-7 py-7">
              {" "}
              {/* Reduced vertical padding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#2E2E30] rounded-3xl overflow-hidden max-w-2xl p-3" // Reduced max-width
              >
                <div className="flex flex-col md:flex-row items-center justify-between p-7">
                  {" "}
                  {/* Reduced overall padding */}
                  {/* Left Content */}
                  <div className="w-full md:w-3/5 space-y-2">
                    {" "}
                    {/* Reduced spacing between elements */}
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl font-unbounded text-white"
                    >
                      <span className="text-[#A1BBD9]">
                        360° Software Solutions
                      </span>{" "}
                      for
                      <br />
                      Your JEWELLERY Store
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-300 pt-4 "
                    >
                      Take Your Jewellery Store to the Next Level with
                      <br />
                      <span className="font-semibold text-white">AURUMM</span> -
                      The Ultimate Software Suite
                    </motion.p>
                    <Link href={"https://aurumm.co/products/"}>
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 mt-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors text-sm"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </Link>
                  </div>
                  {/* Right Content - Logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full md:w-2/6 mt-4 md:mt-0 " // Added left padding for spacing from text
                  >
                    <div className="p-2">
                      {" "}
                      {/* Reduced padding */}
                      <Image
                        src={Aurumm}
                        alt="Aurumm Logo"
                        className="h-auto object-fit w-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
