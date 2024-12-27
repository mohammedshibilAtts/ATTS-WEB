"use client";
import TitleBox from "@/components/titleBox/titleBox";
import { LayoutGrid } from "@/components/ui/layoutGrid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { performanceMarketing } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import Image from "next/image";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import Banner1 from "@/assests/images/photographyBanner1.webp"
function page() {
  const Images = [
    { src:Banner1 , },
    { src: Banner1, },
    { src:Banner1 , },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Images.length) % Images.length);
  };
  const rightCursorSVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' fill='black'%3E%3Cpath d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z'/%3E%3C/svg%3E`;
  const leftCursorSVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' fill='black'%3E%3Cpath d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z'/%3E%3C/svg%3E`;
  return (
    <>
    <div className="w-full">
    <div id="custom-controls-gallery" className="relative w-full">
      <div className="relative h-[32rem] overflow-hidden rounded-b-lg md:h-[40rem]">
        {/* Images */}
        {Images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              className="absolute block w-full h-full object-cover"
              src={image.src} 
              alt= {image.src}  
            />
            
          </div>
        ))}

        {/* Side Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex  items-center  z-10">
          <button
            type="button"
            onClick={prevSlide}
            className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
            style={{"cursor":`url("${leftCursorSVG}") 10 10, pointer`}}
          >
            
          </button>
          
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center  z-10">
          <button
            type="button"
            onClick={nextSlide}
            className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
            style={{"cursor":`url("${rightCursorSVG}") 10 10, pointer`}}
          >
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4">
        {Images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>


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
        <LayoutGrid cards={cards} img={true} />
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
          {performanceMarketing.map((item, index) => (
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
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default page;
