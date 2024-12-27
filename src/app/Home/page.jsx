"use client";
import React, { useEffect, useRef, useState } from "react";
import HomePng from "../../assests/images/HomePng.png";
import Image from "next/image";
import Button from "@/components/button/button";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  blogData,
  ClientBrandImages,
  Homestatics,
  reviews,
  serviceData,
  TestimonialsInfo,
} from "@/constants/constant";
import collabImage from "../../assests/images/brandcollab.png";
import CountUp from "react-countup";
import Contactus from "@/components/contactUs/contactus";
import AnimatedSection from "@/components/animation/animationSection";
import StaggeredSection from "@/components/animation/StaggeredSection";
import FadeMotion from "@/components/animation/fadeMotion";
import TitleBox from "@/components/titleBox/titleBox";
import { InfiniteMovingCards } from "@/components/inifinityScroll/inifinityScroll";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {
  IoChevronUpCircleOutline,
  IoChevronDownCircleOutline,
} from "react-icons/io5";
import Link from "next/link";
import ScrollMotion from "@/components/animation/scrollMotion";
function page() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(handleNext, 10000);

    return () => clearInterval(interval);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const { image, name, role, text } = reviews[currentIndex];

  return (
    <>
      {/* Hero */}
      <div className="w-full">
        <StaggeredSection>
          <div className="main lg:px-28 ">
          <div className="title flex flex-col lg:flex-row items-center px-1 sm:px-8 pt-16 pb-3 text-black">
            <div className="left w-full lg:w-2/3 text-center lg:text-left lg:mb-0">
              <h1 className="font-unbounded text-2xl md:text-4xl text-black">
                Your Partner in Crafting Your Digital DNA {" - "}
                <span className="text-[#003067] ms-1">ATTS Technologies</span>
              </h1>
            </div>

            <div className="w-full lg:w-1/3 text-center lg:text-left ps-0 sm:ps-6 mt-3 md:mt-0">
              <h1 className=" text-black">
                We empower your brand with the right strategy to thrive as a
                pioneer in the industry. We develop the perfect to develop
                your business.
              </h1>
            </div>
          </div>

          <div className="image relative mt-3 px-2">
            <div className="button group absolute   bg-white pt-1 rounded-br-3xl md:rounded-b-3xl left-1 px-4 md:left-8  md:px-6  block z-10">
              <Button title={"More About Us"} link="/about" />
            </div>

            <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {!showVideo && (
                  <motion.div
                    key="thumbnail"
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src="/video/thumb.png"
                      className="w-full h-full object-cover cursor-pointer"
                      alt="Video thumbnail"
                      onClick={() => setShowVideo(true)}
                    />
                  </motion.div>
                )}

                <motion.div
                  key="video"
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: videoLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoLoaded(true)}
                    style={{ opacity: videoLoaded ? 1 : 0 }}
                  >
                    <source src="/video/test.mp4" type="video/mp4" />
                  </video>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        </StaggeredSection>
       

        {/* // About us */}

          <ScrollMotion
           children={
            <div className=" bg-white px-8 pt-9 md:px-32">
            <div className="title-card flex justify-center md:justify-start">
              <TitleBox title={"About Us"} />
            </div>
            <div className="mt-5 ">
              <h2 className="text-xl md:text-3xl font-bold mb-2 font-unbounded  ">
                Most Trusted Service we Provide{" "}
                <span className="text-xl md:text-3xl  font-bold mb-4  text-blue-900 font-unbounded md:block">
                  Since 2010 establishment.
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 custom:grid-cols-2 mt-10">
              <div className=" image flex items-center pe-9">
                <Image
                  src={HomePng}
                  alt="About"
                  className=" h-full object-contain rounded-4xl "
                />
              </div>
              <div className="details p-4 md:p-0 text-gray-800  mt-14">
                <p className="font-sans">
                  ATTS Technologies is driven by the motive of evolving
                  companies into brands. We are equipped with a team of thriving
                  brains ready to partner and elevate your business to the next
                  level. As the leading software development company, we offer
                  our best to bring out the best and list your business as the
                  best. You can be a start-up or a multi-million-dollar company,
                  we offer you software scalable to your business.With more than
                  a decade of experience, we serve as the best branding agency
                  blessed with the ability to create unique solutions tailored
                  to each client and enhance your business to new heights. We
                  place the client first, always!
                </p>
                <div className="mt-10">
                  <p>
                  With more than
                  a decade of experience, we serve as the best branding agency
                  blessed with the ability to create unique solutions tailored
                  to each client and enhance your business to new heights. We
                  place the client first, always!
                  </p>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0"></hr>
                <div className="mt-6">
                  <p>1. Expertise and Technical Proficiency</p>
                  <p>2. Client-Centric Approach</p>
                  <p>3. Creativity and Reliability.</p>
                </div>
                <div className=" flex justify-center pb-3 mt-6">
                  <div className="group">
                    <Button title={"View More"} link="/about" />
                  </div>
                </div>
              </div>
            </div>
          </div>
           }
          />

        {/* services */}

        <ScrollMotion 
        children={<div className=" bg-white  px-8  md:px-32">
          <div className="title-card flex justify-center md:justify-start">
            <TitleBox title={"Our services"} />
          </div>
          <div className="mt-5">
            <h2 className="text-xl md:text-3xl font-bold mb-2  font-unbounded">
              What we are{" "}
              <span className="text-xl md:text-3xl  font-bold mb-4  text-blue-900">
                offering?
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
            {serviceData.map((data, index) => (
              <div
                className="bg-[#010202] rounded-2xl p-6 text-white"
                key={index}
              >
                {data.icon && <div className="mr-3">{data.icon}</div>}
                <div className="flex items-center justify-between mb-2 mt-3">
                  <div className="flex items-center">
                    <div className="text-2xl text-white font-bold">
                      {data.title}
                    </div>
                  </div>
                </div>
                <p>{data.content}</p>
                <Link
                  href={data.linkUrl}
                  className="inline-flex items-center pt-5 text-white transform transition-all duration-300 group"
                >
                  <span className="group-hover:text-lg transition-all duration-300 group-hover:underline">
                    {data.linkText}
                  </span>
                  <BsArrowUpRightCircle
                    size={24}
                    className="ml-2 group-hover:rotate-45 transition-transform duration-500 ease-in-out"
                  />
                </Link>
              </div>
            ))}
          </div>
          <div></div>
        </div>}/>

        {/* Brands Collaborations */}

        <div
          ref={sectionRef}
          className="bg-[#010202] pt-16 relative rounded-3xl mt-12"
        >
         <ScrollMotion 
         children={
          <>
           <div className="text-center mb-8">
            <div className="bg-white text-[#0c192d] inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4">
              Brand Collaborations
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Brands that <span className="text-blue-400">trust us</span>
            </h2>
          </div>

          <div className="flex justify-center items-center">
            <InfiniteMovingCards
              items={ClientBrandImages}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex flex-wrap justify-between items-start px-4 md:px-28 mb-16 relative mt-5">
            <div className="w-full md:w-1/1 lg:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="font-unbounded text-2xl  md:text-3xl text-white">
                Designed in{" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-center text-[#B5D3F5]">
                  India
                </span>
              </h1>
              <h1 className="font-unbounded text-2xl  md:text-3xl text-white">
                For Global{" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-center text-[#B5D3F5]">
                  Reach
                </span>
              </h1>
              <div className="grid grid-cols-2 mt-6">
                {Homestatics.map((stat) => (
                  <div
                    key={stat.title}
                    className="w-full h-32 md:h-36 text-white shadow-lg animate-bounce-slow flex flex-col items-center gap-4 justify-center"
                  >
                    <div className="flex items-center">
                      {isInView && (
                        <CountUp
                          className="text-3xl md:text-5xl font-"
                          end={stat.count}
                          start={0}
                          duration={3}
                        />
                      )}
                      <span className="text-4xl md:text-5xl font-unbounded">
                        +
                      </span>
                    </div>
                    <p className="text-lg md:text-xl font-unbounded">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0">
              <Image
                src={collabImage}
                alt="Brand Collaborations"
                className="w-[500px] md:w-[900px] h-auto mt-9"
              />
            </div>
          </div>          
         </>
         } 
         />
        </div>

        {/* Testimonials */}

        <div className="main px-8  md:px-32">
          <TitleBox title={"Testimonials"} />
          <div className="mt-9 ">
            <h2 className="text-xl md:text-4xl font-bold mb-2 font-unbounded">
              Transformative Results,
            </h2>
            <h2 className="text-xl md:text-4xl font-bold mb-4 text-blue-900 font-unbounded">
              Direct From Clients.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8">
            <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
              <Image
                src={image}
                alt={name}
                className="rounded-x-full mx-auto md:rounded-tl-full md:rounded-br-full md:rounded-bl-full w-40 h-40 md:w-48 md:h-48 object-cover"
              />
            </div>

            <div className="w-full md:w-2/4">
              <div className="text-5xl md:text-7xl text-gray-800 mb-4  text-center md:text-left">
                “
              </div>
              <p className="text-gray-600 text-lg mb-6  text-center md:text-left">
                {text}
              </p>
              <h3 className="text-xl font-semibold text-gray-800  text-center md:text-left">
                {name}
              </h3>
              <p className="text-gray-800 text-center md:text-left">{role}</p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 items-center">
              <div className="md:hidden flex flex-row gap-4">
                <button onClick={handlePrev} className="text-[#17171966]">
                  <CiCircleChevLeft size={40} />
                </button>
                <button onClick={handleNext} className="text-[#17171966]">
                  <CiCircleChevRight size={40} />
                </button>
              </div>

              <div className="hidden md:flex flex-col gap-4 items-center">
                <button onClick={handlePrev} className="p-2">
                  <IoChevronUpCircleOutline
                    size={40}
                    className="text-[#17171966]"
                  />
                </button>
                <button onClick={handleNext} className="p-2">
                  <IoChevronDownCircleOutline
                    size={40}
                    className="text-[#17171966]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="main relative">
          <div className="image">
            <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
              <AnimatePresence>
                {!showVideo ? (
                  <motion.img
                    key="thumbnail"
                    src="/video/thumb.png"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 1 }}
                    alt="Video thumbnail"
                  />
                ) : (
                  <motion.video
                    key="video"
                    src="/video/test.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className=" h-12 md:h-36  bg-white w-11/12 mx-auto absolute bottom-0 left-0 right-0 rounded-t-2xl">
            <div className="title text-center mt-10 font-unbounded text-2xl">
              <h1>The core values and </h1>
              <h1>principles that drive us</h1>
            </div>
          </div>
        </div>

        <div className="content px-4 md:px-16 pt-9 md:p-2 pb-3  ">
          <div className="flex flex-wrap justify-between md:divide-x-2 ">
            {TestimonialsInfo.map((data, index) => (
              <div
                className={`w-full md:w-1/3 h-auto px-3  rounded-lg p-6 justify-center`}
                key={index}
              >
                <div className="icon flex justify-center mb-4  h-20">
                  <Image
                    src={data.imgSrc}
                    alt={data.title}
                    className="w-16 md:w-32 object-contain"
                  />
                </div>

                <h3 className="text-lg text-center font-semibold">
                  {data.title}
                </h3>
                <p className="text-center">{data.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* blogs */}

        <ScrollMotion 
         children={
          <div className="bg-white  px-2 pt-8 md:px-32  ">
            <div className="title-card flex justify-center md:justify-start">
              <TitleBox title={"Blogs"} />
            </div>
            <div className="mt-5 ">
              <div className="title flex justify-between items-center">
                <div className="start">
                  <h2 className="text-xl md:text-3xl font-unbounded ">
                    Read our Latest{" "}
                    <span className="text-xl md:text-3xl font-unbounded text-blue-900">
                      Blogs & article
                    </span>
                  </h2>
                </div>
                <div className="end hidden lg:block group">
                  <Button title={"View All Blogs"} link="/blog" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-3">
                {blogData.map((data, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={data.img}
                      alt="Card Image"
                      className="w-full h-56 sm:h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                      <div className="flex items-center text-sm text-white space-x-4 mb-2">
                        <div className="flex items-center">
                          <p className="bg-[rgba(0,0,0,0.5)] px-3 rounded-md border border-white">
                            {data.date}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="bg-[rgba(0,0,0,0.5)] px-3 rounded-md border border-white">
                            Blogs
                          </p>
                        </div>
                      </div>
                      <h3 className="font-unbounded text-white text-sm">
                        {data.content}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:hidden group">
              <Button title={"View All Blogs"} link="/blog" />
            </div>
          </div>
         }
         />
        {/* Contact us */}

        <div className="bg-white  px-8  md:px-32  ">
          <Contactus />
        </div>
      </div>
    </>
  );
}

export default page;
