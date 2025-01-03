"use client";
import TitleBox from "@/components/titleBox/titleBox";
import { LayoutGrid } from "@/components/ui/layoutGrid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { photographyServiceCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import Image from "next/image";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import Banner1 from "@/assests/images/photoBanner1.jpg";
import Banner2 from "@/assests/images/photoBanner2.jpg";
import Banner3 from "@/assests/images/photoBanner3.jpg";
import Banner4 from "@/assests/images/photoBanner4.jpg";
import Photography1 from "@/assests/images/photography1.jpg";
import Photography2 from "@/assests/images/photography2.jpg";
import Photography3 from "@/assests/images/photography3.jpg";
import Photography4 from "@/assests/images/photography4.jpg";
import ScrollMotion from "@/components/animation/scrollMotion";
function page() {
  const Images = [
    { src: Banner1 },
    { src: Banner2 },
    { src: Banner3 },
    { src: Banner4 },
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
          <div className="relative lg:h-[60rem] h-[30rem] md:h-[40rem] overflow-hidden rounded-b-lg">
            {/* Images */}
            {Images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Image */}
                <Image
                  className="absolute block w-full h-full object-cover"
                  src={image.src}
                  alt={image.src}
                />
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 bg-black opacity-50" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 ">
                  <motion.h1
                    className="text-white md:text-3xl font-unbounded mb-2"
                    initial={{ opacity: 0, y: -50 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Final state
                    transition={{ duration: 1 }} // Duration of animation
                  >
                    Photography
                  </motion.h1>

                  {/* Subheading Animation */}
                  <motion.h2
                    className="text-2xl md:text-5xl font-bold font-unbounded md:w-2/3 text-[#B5D3F5]"
                    initial={{ opacity: 0, y: 50 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Final state
                    transition={{ duration: 1, delay: 0.2 }} // Duration with delay
                  >
                    Boost Demand and Drive Sales with Captivating Photography
                  </motion.h2>

                  {/* Paragraph Animation */}
                  <motion.p
                    className="text-white md:w-2/3 mt-12 font-sans md:text-xl"
                    initial={{ opacity: 0, y: 50 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Final state
                    transition={{ duration: 1, delay: 0.4 }} // Duration with delay
                  >
                    Photography services at ATTS Technologies play a key role in
                    building a strong brand presence. We capture your products
                    and services in visually striking, high-quality images that
                    engage your audience. Tailored photography connects with
                    your target market, enhancing visibility and driving sales
                    across platforms like social media and websites.
                  </motion.p>
                </div>
              </div>
            ))}

            {/* Side Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <button
                type="button"
                onClick={prevSlide}
                className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
                style={{ cursor: `url("${leftCursorSVG}") 10 10, pointer` }}
              />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <button
                type="button"
                onClick={nextSlide}
                className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
                style={{ cursor: `url("${rightCursorSVG}") 10 10, pointer` }}
              />
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
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black">
                Expert ,{" "}
                <span className="text-xl md:text-3xl font-bold  font-unbounded  text-start md:text-center text-[#003067] ">
                  Photography{" "}
                </span>
                Services
                <span className="md:block md:text-center">
                  Driven by Results.
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
          <div className="titleBox flex justify-center md:justify-start">
            <TitleBox title={"What we can help you with"} className={"w-72"} />
          </div>
          <StaggeredSection>
            <div className="title flex flex-col sm:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-start sm:text-left  flex-1">
                <h1 className=" text-black text-xl md:text-3xl font-bold  font-unbounded ">
                  A team of experts elevating your brand with{" "}
                  <span className="text-[#003067]">powerful photography </span>
                  and <span className="text-[#003067]">visual content.</span>
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

          <ScrollMotion>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-16">
              {photographyServiceCard.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-[#e2d4d41a] border hover:scale-105 p-6 text-center cursor-pointer  mt-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.3 },
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                >
                  <div className="mx-auto flex h-16 w-16 bg-[#003067] -translate-y-6 transform items-center justify-center rounded-full  transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt="Rocket Icon"
                      width={40}
                      height={40}
                      className="object-cover transition-transform"
                    />
                  </div>
                  <h1 className="text-darken font-unbounded  mb-3 text-xl  transition-colors duration-300 text-[#003067] ">
                    {item.title}
                  </h1>
                  <p className="px-4 text-gray-500 transition-colors duration-300 ">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollMotion>
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
      <p className="font-bold md:text-4xl text-xl text-white">Food</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        From gleaming textures to inviting tones, we capture the essence of
        culinary perfection, resonating with tradition, taste, and the art of
        fine cooking.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Interior Designs
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
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
      <p className="font-bold md:text-4xl text-xl text-white">Mattress</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        It’s all about the shine and sparkle. Our shots focus on the perfect
        angles, bringing out the elegance and charm of every piece, making them
        truly unforgettable.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Jewellery
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
      Comfort meets style in every frame. We capture the cozy vibes, sleek designs, and fine details that showcase the perfect rest your mattress delivers, effortlessly.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 ",
    thumbnail:
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphotography1.bfcdc065.jpg&w=3840&q=75",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphotography2.b520dbf5.jpg&w=3840&q=75",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:"http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphotography4.07564d57.jpg&w=3840&q=75"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:"http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphotography3.731abf4b.jpg&w=3840&q=75"
    },
];

export default page;
