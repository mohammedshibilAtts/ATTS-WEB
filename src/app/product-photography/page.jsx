"use client";
import TitleBox from "@/components/titleBox/titleBox";
import { LayoutGrid } from "@/components/ui/layoutGrid";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { photographyServiceCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import Image from "next/image";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import Banner1 from "@/assests/images/photoBanner1.webp";
import Banner2 from "@/assests/images/photoBanner2.webp";
import Banner3 from "@/assests/images/photoBanner3.webp";
import Banner4 from "@/assests/images/photoBanner4.webp";

// import Photography1 from "@/assests/images/photography1.jpg";
// import Photography2 from "@/assests/images/photography2.jpg";
// import Photography3 from "@/assests/images/photography3.jpg";
// import Photography4 from "@/assests/images/photography4.jpg";
import ScrollMotion from "@/components/animation/scrollMotion";
function page() {
  const Images = [
    { src: Banner1 },
    { src: Banner2 },
    { src: Banner3 },
    { src: Banner4 },
  ];
  const [isLoaded, setIsLoaded] = useState(false); // Tracks when image is loaded
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null)
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 11000);
    return () => clearInterval(interval);
  }, [Images.length, activeIndex]);


let png4=''
  useEffect(() => {
    png4="https://atts-img-video.s3.eu-north-1.amazonaws.com/photography4+1.webp"
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          // If the image comes into view
          if (entry.isIntersecting) {
            // Trigger image load
            setIsLoaded(true);
          }
        });
      },
      {
        rootMargin: "200px", // Trigger loading before image enters the viewport
      }
    );
  
    // Observe the image element
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
  
    // Cleanup observer when component is unmounted or when imageRef changes
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);


  return (
    <>
      <div className="w-full">
        <div className="w-full relative">
          <div className="relative lg:h-[60rem] h-[30rem] md:h-[40rem] overflow-hidden rounded-b-lg">
            {Images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100 z-20" : "opacity-0 -z-10"
                }`}
              >
                {/* Image */}
                <Image
                  className="absolute w-full h-full object-cover"
                  src={image.src}
                  alt="png"
                  fill
                  priority={index === 0}
                />

                {/* Black Shade Overlay */}
                <div className="absolute inset-0 bg-black/75 z-10" />

                {/* Centered Content with Animations */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-responsive">
                  {/* Small Header Text */}
                  <motion.div
                    className="text-white ppercase tracking-wider mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {image.topText || "AD FILMS & MULTIMEDIA ADVERTISING"}
                  </motion.div>

                  {/* Main Title - Large and Bold */}
                  <motion.h1
                    className="text-center max-w-5xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <span className="text-[#B5D3F5] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold block mb-2">
                      {image.mainTitle ||
                        "Capture your brand’s essence in every frame"}
                    </span>
                  </motion.h1>

                  {/* Description Text */}
                  <motion.p
                    className="text-white text-xs sm:text-sm md:text-base text-center max-w-3xl mt-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {image.description ||
                      "High-quality images that tell your story and connect with your audience—let’s make magic!"}
                  </motion.p>
                </div>
              </div>
            ))}

            {/* Side Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center z-30">
              <button
                type="button"
                onClick={prevSlide}
                className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
              />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center z-30">
              <button
                type="button"
                onClick={nextSlide}
                className="flex justify-center items-center px-4 h-full cursor-pointer group focus:outline-none w-96"
              />
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-4 left-1/2">
            {Images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#B5D3F5]" : "bg-white"
                }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>

          {/* Page Counter */}
          <div className="absolute z-30 bottom-4 right-4 text-white text-lg font-bold">
            <span className="text-[#B5D3F5]">0{activeIndex + 1}</span>
            <span className="text-white/70">/0{Images.length}</span>
          </div>
        </div>

        <div className="bg-white px-4xl:px-32 pt-5 mt-4">
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description px-4">
              <h1 className="  text-responsive text-black">
                Expert{" "}
                <span className="  text-responsive  text-start md:text-center text-[#003067] ">
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
        <LayoutGrid cards={cards}/>
        </div>

        {/* What we can help you with */}

          <div className="bg-white px-4 xl:px-32  mt-3 ">
            <div className="titleBox flex justify-center flex-row md:justify-start">
              <TitleBox
                title={"What we can help you with"}
                className={"w-72"}
              />
            </div>
            <div className="title flex flex-col lg:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6 ">
              <div className=" sm:text-left  flex-1">
                <h1 className="  text-responsive md:px-5  text-black ">
                  Performance marketing pros committed{" "}
                  <span className="text-[#003067]">
                    to elevating your brand to a broader audience.
                  </span>
                </h1>
              </div>
              <div className="text-center sm:text-left   group flex-1 flex justify-center md:justify-end h-full  pt-4">
                <Button
                  title={"Get in Touch"}
                  className="mt-4 sm:mt-0"
                  link="/lets-talk"
                />
              </div>
            </div>
          </div>
       
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-16 px-4">
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
                <h1 className="text-darken   mb-3   transition-colors duration-300 text-[#003067] ">
                  {item.title}
                </h1>
                <p className="px-4 text-gray-500 transition-colors duration-300 ">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="   xl:px-32 mt-9">
        <Contactus />
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
      <p className="font-bold md:text-4xl text-xl text-white">Education</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
      Celebrate the power of knowledge in every frame, captured to inspire and ignite aspirations.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Jewellery</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-2 max-w-lg text-neutral-200">
        Comfort meets style in every frame. We capture the cozy vibes, sleek
        designs, and fine details that showcase the perfect rest your mattress
        delivers, effortlessly.
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
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/photography1.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/photography2.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "https://atts-img-video.s3.eu-north-1.amazonaws.com/314A3607.jpg"
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://atts-img-video.s3.eu-north-1.amazonaws.com/photography3.webp",
  },
];

export default page;
