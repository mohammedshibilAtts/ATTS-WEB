"use client";
import React, { useEffect, useRef, useState } from "react";
import HomePng from "../../assests/images/HomePng.png";
import HomeAbout from "../../assests/images/HomeAbout.png";
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  const { image, name, role, text } = reviews[currentIndex];

  return (
    <>
      {/* Hero */}
      <div className="w-full">
        <StaggeredSection>
          <div className="main xl:px-28 ">
            <div className="title flex flex-col lg:flex-row items-center px-1 sm:px-8 pt-3 pb-3 text-black">
              <div className="left w-full lg:w-2/3 text-center lg:text-left lg:mb-0">
                <h2 className="text-xl md:text-3xl font-bold  font-unbounded text-black">
                  Your Partner in Crafting Your Digital DNA {" - "}
                  <span className="text-[#003067] ms-1">ATTS Technologies</span>
                </h2>
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
              <div className="button group absolute  -top-1   bg-white pt-1 rounded-br-3xl md:rounded-b-3xl left-1 px-4 md:left-8  md:px-6  block z-10">
                <Button title={"More About Us"} link="/about" />
              </div>

              <div className="w-full relative rounded-xl overflow-hidden">
                {/* Aspect ratio container */}
                <div className="w-full relative">
                  {/* Responsive padding-bottom technique */}
                  <div className="relative h-0 pb-[56.25%] sm:pb-[75%] md:pb-[66.66%] lg:pb-[56.25%]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="video"
                        className="absolute inset-0 w-full h-full bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          style={{ opacity: 1 }}
                        >
                          <source
                            src="https://atts-img-video.s3.eu-north-1.amazonaws.com/ATTS+Website+Video+(2).mp4"
                            type="video/mp4"
                          />
                        </video>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggeredSection>

        {/* // About us */}

        <ScrollMotion
          children={
            <div className=" bg-white px-8 pt-9 xl:px-32">
              <div className="title-card flex justify-center md:justify-start">
                <TitleBox title={"About Us"} />
              </div>
              <div className="mt-5 ">
                <h2 className="text-xl md:text-3xl font-bold mb-2 font-unbounded  ">
                  Trusted by Brands Across Industries Since 2013 -{" "}
                  <span className="text-xl md:text-3xl  font-bold mb-4  text-[#003067] font-unbounded lg:block">
                    Transforming Healthcare, Jewellery, and Beyond.
                  </span>
                </h2>
              </div>
              <div className=" grid grid-cols-1 custom:grid-cols-2 ">
                <div className=" relative image flex items-center pe-9  ">
                  <div className=" w-full  aspect-[4/3] lg:aspect-[4/1] rounded-4xl overflow-hidden ms-9">
                    {/* Main large image */}
                    <div className="absolute left-0 right-1  top-0 bottom-0">
                      <Image
                        src={HomeAbout}
                        alt="Main content"
                        className="h-full object-contain rounded-4xl"
                        priority
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="details p-4 md:p-0 text-gray-800  mt-14">
                  <p className="font-sans">
                    ATTS Technologies is driven by the motive of evolving
                    companies into brands. We are equipped with a team of
                    thriving brains ready to partner and elevate your business
                    to the next level. As the leading software development
                    company, we offer our best to bring out the best and list
                    your business as the best. You can be a start-up or a
                    multi-million-dollar company, we offer you software scalable
                    to your business.With more than a decade of experience, we
                    serve as the best branding agency blessed with the ability
                    to create unique solutions tailored to each client and
                    enhance your business to new heights. We place the client
                    first, always!
                  </p>

                  <hr className="h-px my-5 bg-gray-200 border-0"></hr>
                  <div className="mt-2">
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
          children={
            <div className=" bg-white  px-8  xl:px-32 mt-8 xl:mt-16">
              <div className="title-card flex justify-center md:justify-start">
                <TitleBox title={"Our services"} />
              </div>
              <div className="mt-5">
                <h2 className="text-xl md:text-3xl font-bold  font-unbounded">
                  What we offer to craft{" "}
                  <span className="text-xl md:text-3xl font-bold mb-4  font-unbounded  text-[#003067]">
                    your brand!
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
            </div>
          }
        />

        {/* Brands Collaborations */}

        <div
          ref={sectionRef}
          className="bg-[#010202] pt-16 relative rounded-3xl mt-12 md:h-[765px]  h-[650px] mx-1"
        >
          <ScrollMotion
            children={
              <>
                <div className="text-center ">
                  <div className="bg-white text-[#0c192d] inline-block px-4 py-5 rounded-full font-semibold text-sm mb-6 ">
                    Brand Collaborations
                  </div>
                  <h2 className="text-white text-xl md:text-3xl font-bold  font-unbounded mb-6">
                    Brands that <span className="text-[#B5D3F5]">trust us</span>
                  </h2>
                </div>

                <div className="flex justify-center items-center">
                  <InfiniteMovingCards
                    items={ClientBrandImages}
                    direction="right"
                    speed="slow"
                  />
                </div>

                <div className="flex flex-wrap justify-between items-start px-4 md:px-2 mb-16 relative mt-5">
                  <div className="w-full md:w-1/1 lg:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-xl md:text-4xl font-bold tracking-wider font-unbounded text-white  text-center">
                      Designed in{" "}
                      <span className="text-xl md:text-4xl font-bold  tracking-wider  font-unbounded  text-center text-[#B5D3F5]">
                        India
                      </span>
                    </h1>
                    <h1 className="text-xl md:text-4xl font-bold  tracking-wider font-unbounded text-white text-center">
                      For Global{" "}
                      <span className="text-xl md:text-4xl font-bold tracking-wider  font-unbounded  text-center text-[#B5D3F5]">
                        Reach
                      </span>
                    </h1>
                    <div className="grid grid-cols-2 mt-6 xl:px-16 md:mt-20 1xl:ms-50">
                      {Homestatics.map((stat) => (
                        <div
                          key={stat.title}
                          className="w-full h-32 md:h-36 text-white shadow-lg animate-bounce-slow flex flex-col  items-center gap-4  justify-center "
                        >
                          <div className="flex items-start ">
                            {isInView && (
                              <CountUp
                                className="text-3xl md:text-5xl "
                                end={stat.count}
                                start={0}
                                duration={3}
                              />
                            )}
                            <span className="text-4xl md:text-5xl font-unbounded">
                              +
                            </span>
                          </div>
                          <hr className="w-40  text-sm " />

                          <p className="text-lg md:text-xl font-unbounded text-[#B5D3F5]">
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

        <ScrollMotion>
          <div className="main px-8 mt-9 xl:px-32">
            <TitleBox title={"Testimonials"} />
            <div className="mt-9 ">
              <h2 className="text-xl md:text-3xl font-bold  font-unbounded mb-2">
                Transformative Results,
              </h2>
              <h2 className="text-xl md:text-3xl font-bold  mb-4 text-[#003067] font-unbounded">
                Direct From Clients.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between min-h-[550px] p-4 lg:p-8 gap-4">
              {/* Image Section */}
              <div className="w-32 md:w-48 flex-shrink-0">
                <Image
                  src={image}
                  alt={name}
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-tl-full rounded-br-full rounded-bl-full object-cover border mx-auto"
                />
              </div>

              {/* Description Section */}
              <div className="flex-1 flex justify-center items-center h-full">
                <div className="relative p-4 md:p-8 w-full">
                  <span className="absolute top-0 left-0 text-4xl md:text-5xl lg:text-7xl text-gray-800">
                    "
                  </span>
                  <div className="overflow-y-auto px-2 pt-8 md:pt-10">
                    <p className="text-gray-600 text-base md:text-lg">{text}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 ms-2">
                      {name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="w-full md:w-16 flex-shrink-0 flex justify-center md:justify-start">
                {/* Mobile Navigation */}
                <div className="flex md:hidden gap-4">
                  <button
                    onClick={handlePrev}
                    className="text-[#17171966] hover:text-gray-800 transition-colors"
                  >
                    <CiCircleChevLeft size={32} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-[#17171966] hover:text-gray-800 transition-colors"
                  >
                    <CiCircleChevRight size={32} />
                  </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-col gap-4">
                  <button
                    onClick={handlePrev}
                    className="text-[#17171966] hover:text-gray-800 transition-colors"
                  >
                    <IoChevronUpCircleOutline size={40} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-[#17171966] hover:text-gray-800 transition-colors"
                  >
                    <IoChevronDownCircleOutline size={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollMotion>

        <div className="main relative hidden">
          <div className="image">
            <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
              <AnimatePresence>
                {!showVideo ? (
                  <motion.img
                    key="thumbnail"
                    // src="/video/thumb.png"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 1 }}
                    alt="Video thumbnail"
                  />
                ) : (
                  <motion.video
                    key="video"
                    // src="/video/test.mp4"
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
            <div className="title text-center mt-10 text-xl md:text-3xl font-bold  font-unbounded">
              <h1>The core values and </h1>
              <h1>principles that drive us</h1>
            </div>
          </div>
        </div>

        <div className="content px-4 md:px-16 pt-9 md:p-2 pb-3  hidden ">
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
            <div className="bg-white  px-2 pt-8 xl:px-28  md:px-5">
              <div className="title-card flex justify-center md:justify-start">
                <TitleBox title={"Blogs"} />
              </div>
              <div className="mt-5 ">
                <div className="title flex justify-between items-center">
                  <div className="start ">
                    <h2 className="text-xl md:text-3xl font-bold  font-unbounded">
                      Read our Latest{" "}
                      <span className="text-xl md:text-3xl font-bold  font-unbounded text-[#003067]">
                        Blogs & article
                      </span>
                    </h2>
                  </div>
                  <div className="end  group hidden">
                    <Button title={"View All Blogs"} link="/blog" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 px-4 md:px-6">
                  {blogData.map((data, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-lg  transition-shadow duration-300"
                    >
                      {/* Image Container with adjusted aspect ratio and full image display */}
                      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]">
                        <Image
                          src={data.img}
                          alt={data.content || "Blog post image"}
                          fill
                          sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 50vw,
                     33vw"
                          className="object-fill object-center transition-transform duration-300 g"
                          priority={index < 3}
                          quality={90}
                        />
                      </div>

                      {/* Improved Content Overlay with stronger background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent flex flex-col justify-end p-4 md:p-6">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-sm text-white/90 mb-2">
                          {/* Meta info components can go here */}
                        </div>

                        {/* Content Container with dark background */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 transition-all duration-300">
                          {/* Title */}
                          <h3 className="font-unbounded text-white  group-hover:underline">
                            {data.content}
                          </h3>

                          {/* Description */}
                          {data.description && (
                            <p className="text-white/90 text-sm mt-2 line-clamp-2 hidden md:block">
                              {data.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden group">
                <Button title={"View All Blogs"} link="/blog" />
              </div>
            </div>
          }
        />
        {/* Contact us */}

        <ScrollMotion>
          <div className=" px-8  xl:px-32  align-middle md:mt-9">
            <Contactus />
          </div>
        </ScrollMotion>
      </div>
    </>
  );
}

export default page;
