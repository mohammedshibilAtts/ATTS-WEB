"use client";
import TitleBox from "@/components/titleBox/titleBox";
import { LayoutGrid } from "@/components/ui/layoutGrid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { videoServiceCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import Image from "next/image";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
function page() {
  const [activCard1, setCard1] = useState(0);
  const [activCard2, setCard2] = useState(1);
  const videos = [
    {
      id: 1,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/CRI+i+Smart+Panel.mp4",
      type: "video/mp4",
      title: "Sample Video 1",
    },
    {
      id: 2,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/Emami.mp4",
      type: "video/mp4",
      title: "Sample Video 2",
    },
    {
      id: 3,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/EYE+Foundation.mp4",
      type: "video/mp4",
      title: "Sample Video 3",
    },
  ];

  const videoCard1 = [
    {
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/GBR.mp4",
      title: "Healthcare",
      content:
        "Crafting healthcare ad films that showcase care, innovation, and a touch of humanity. Every story we tell hits the heart!",
    },
    {
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/Indrola+TMT.mp4",
      title: "Construction",
      content:
        "Showcasing the strength and durability of TMT rods through ad films that highlight their essential role in building lasting structures.",
    },
  ];
  const videoCard2 = [
    {
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/Kalamandir.mp4",
      title: "Fashion",
      content:
        "Fashion meets storytelling in our ad films, where we combine style, innovation, and personality to craft memorable, impactful visuals.",
    },
    {
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/Metroflex.mp4",
      title: "Mattress",
      content:
        "Turning sleep into a story with ad films that highlight the comfort and quality of mattresses, making rest unforgettable.",
    },
  ];

  const carouselItems = videos.map((video) => (
    <div key={video.id} className="relative">
      <video
        src={video.src}
        type={video.type}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
        {video.title}
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full">
        <AliceCarousel
          items={carouselItems}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls
          disableButtonsControls
          mouseTracking
        />

        <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-4">
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description">
              <h1 className="font-unbounded text-2xl md:text-3xl text-black">
                A Website Designed to Match{" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-start md:text-center text-[#003067] md:block">
                  Your Perfect Vision.
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="  w-full z-10">
          <div className="px-8 hidden lg:block">
            {/* First Grid */}
            <div className=" h-[400px]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {videoCard1.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  className={`text-center rounded-xl ${
                    activCard1 === index ? "col-span-2" : "col-span-1"
                  }`}
                  onMouseEnter={() => setCard1(index)}
                  onMouseLeave={() => setCard1(0)}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-full">
                    <motion.video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover absolute inset w-full h-full transition duration-200 rounded-lg"
                      alt="thumbnail"
                    >
                      <source src={item.src} type="video/mp4" />
                      <source src="fallback-video.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </motion.video>

                    {/* Black shade overlay */}
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

                    {/* Show description when active */}
                    {activCard1 === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-6 transition-all duration-200 rounded-lg"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="text-white z-20 mt-9"
                        >
                          <h1 className="text-start font-unbounded mt-9">
                            {item.title}
                          </h1>
                          <hr className="w-1/5 font-bold mb-4 mt-3" />
                          <p className="text-start w-3/5 font-unbounded">
                            {item.content}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Grid */}
            <div className=" h-[400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2 rounded-lg">
              {videoCard2.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  className={`text-center rounded-lg ${
                    activCard2 === index ? "col-span-2" : "col-span-1"
                  }`}
                  onMouseEnter={() => setCard2(index)}
                  onMouseLeave={() => setCard2(1)}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-full">
                    <motion.video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover object-top absolute inset-0 w-full h-full transition duration-200 rounded-lg"
                      alt="thumbnail"
                    >
                      <source src={item.src} type="video/mp4" />
                      <source src="fallback-video.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </motion.video>

                    {/* Black shade overlay */}
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

                    {/* Show description when active */}
                    {activCard2 === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex flex-col justify-center items-start p-6 transition-all duration-200 rounded-lg"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="text-white z-20 mt-9"
                        >
                          <h1 className="text-start font-unbounded mt-9">
                            {item.title}
                          </h1>
                          <hr className="w-1/5 font-bold mb-4 mt-3" />
                          <p className="text-start w-3/5 font-unbounded">
                            {item.content}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="px-8 lg:hidden">
            <div className="grid grid-cols-1">
              <AliceCarousel
                items={carouselItems}
                autoPlay
                autoPlayInterval={3000}
                infinite
                disableDotsControls
                disableButtonsControls
                mouseTracking
              />
            </div>
          </div>
        </div>

        {/* What we can help you with */}

        <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-5">
          <div className="titleBox">
            <TitleBox title={"What we can help you with"} className={"w-72"} />
          </div>
          <StaggeredSection>
            <div className="title flex flex-col sm:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-start sm:text-left  flex-1">
                <h1 className="font-unbounded text-2xl sm:text-3xl md:text-4xl text-black">
                  Performance marketing pros committed{" "}
                  <span className="text-[#003067]">
                    to elevating your brand to a broader audience.
                  </span>
                </h1>
              </div>
              <div className="text-center sm:text-left  group flex-1 flex justify-center md:justify-end h-full  ">
                <Button
                  title={"Get in Touch"}
                  className="mt-4 sm:mt-0"
                  link="/lets-talk"
                />
              </div>
            </div>
          </StaggeredSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-16">
            {videoServiceCard.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-[#0000000D] p-6 text-center shadow-xl mt-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.3 },
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <div className="mx-auto flex h-16 w-16 bg-[#003067] -translate-y-12 transform items-center justify-center rounded-full shadow-lg transition-all duration-300">
                  <Image
                    src={item.icon}
                    alt="Rocket Icon"
                    width={40}
                    height={40}
                    className="object-cover transition-transform"
                  />
                </div>
                <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 transition-colors duration-300 ">
                  {item.title}
                </h1>
                <p className="px-4 text-gray-500 transition-colors duration-300 ">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="  px-8  md:px-32 ">
          <Contactus />
        </div>
      </div>
    </>
  );
}

export default page;
