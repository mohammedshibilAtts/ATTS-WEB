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
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function page() {

  const videos = [
    {
      id: 1,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/CRI+i+Smart+Panel.mp4",
      type: 'video/mp4',
      title: 'Sample Video 1'
    },
    {
      id: 2,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/Emami.mp4",
      type: 'video/mp4',
      title: 'Sample Video 2'
    },
    {
      id: 3,
      src: "https://atts-img-video.s3.eu-north-1.amazonaws.com/EYE+Foundation.mp4",
      type: 'video/mp4',
      title: 'Sample Video 3'
    },
    // Add more videos here
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
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };
  const rightCursorSVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' fill='black'%3E%3Cpath d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z'/%3E%3C/svg%3E`;
  const leftCursorSVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' fill='black'%3E%3Cpath d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z'/%3E%3C/svg%3E`;
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
      <div className="h-screen  w-full z-10">
        <LayoutGrid cards={cards} img={false} />
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
              <Button title={"Get in Touch"} className="mt-4 sm:mt-0" link="/lets-talk"/>
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

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/Indrola+TMT.mp4"
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 ",
    thumbnail:
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/GBR.mp4",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/Kalamandir.mp4",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
    "https://atts-img-video.s3.eu-north-1.amazonaws.com/Metroflex.mp4",
  },
];

export default page;


