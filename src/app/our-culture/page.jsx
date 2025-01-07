"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Contactus from "@/components/contactUs/contactus";
import About1 from "@/assests/images/Office1.jpg";
import About2 from "@/assests/images/about2.jpg";
import About3 from "@/assests/images/Office7.jpg";
import About4 from "@/assests/images/Office3.jpg";
import About5 from "@/assests/images/Office6.jpg";
import About6 from "@/assests/images/Office8.jpg";
import About7 from "@/assests/images/about7.jpg";
import About8 from "@/assests/images/Office4.jpg";
import About9 from "@/assests/images/Office5.jpg";
import OfficePng from "@/assests/images/Office10.jpg";
import ATTS from "@/assests/images/ATTS.jpg";
import TitleBox from "@/components/titleBox/titleBox";
import WorkEnvironment from "@/assests/images/workenv.jpg";
import { motion } from "framer-motion";

import Vinitha_Vijayaragavan from "@/assests/images/Vinitha_Vijayaragavan.webp";
import Sylesh_Shanmugam from "@/assests/images/Sylesh_Shanmugam.webp";
import Aravindraj_Mani from "@/assests/images/Aravindraj_Mani.webp";
import Prabhu_Manickam from "@/assests/images/Prabhu_Manickam.webp";
import Karthik_Sadhasivam from "@/assests/images/Karthik_Sadhasivam.webp";

function page() {
  // const tabData = [
  //   "Life at ATTS",
  //   "Our Culture",
  //   "Meet Our People",
  //   "Work Environment",
  // ];

  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);
  // const section4Ref = useRef(null);

  // const handleTabClick = (section) => {
  //   if (section === 0) {
  //     section1Ref.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (section === 1) {
  //     section2Ref.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (section === 2) {
  //     section3Ref.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (section == 3) {
  //     section4Ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aravindraj Mani",
      role: "Digital Marketing Team Lead",
      icon: Aravindraj_Mani,
      image: Aravindraj_Mani,
      quote:
        "Working at ATTS Technologies feels like being part of a creative powerhouse! Over a half-decade of working as a senior digital marketing executive, I’ve seen this place grow with innovative ideas and game-changing campaigns. The energy is unmatched – a team that’s always had my back, big ideas that happen, and challenges that push you to excel. Always upbeat and collaborative, ATTS is a fun, ever-evolving journey of creativity and excitement!",
    },
    {
      id: 2,
      name: "Sylesh Shanmugam",
      role: "Key Account Manager & Sr Digital Marketing Executive",
      icon: Sylesh_Shanmugam,
      image: Sylesh_Shanmugam,
      quote: "Arion Media Corp is more than just a workplace; it’s a family where creativity, growth, and dreams are nurtured. From day one, I’ve felt valued, supported, and inspired to bring my best. Every challenge is met together, every success is celebrated like our own. The leadership, teamwork, and shared passion make this journey deeply fulfilling. It’s a place where hard work turns into impact, and I’m incredibly proud to belong here.",
    },
    {
      id: 3,
      name: "Prabhu Manickam",
      role: "Lead Designer & Visualizer",
      icon: Prabhu_Manickam,
      image: Prabhu_Manickam,
      quote: "With 18 years of experience, the last four and a half at ATTS have been the best part of my career. Working closely with our MD, Mr. Manoj Chandran, has really pushed me to the next level. The vibe here is all about respect, teamwork, creativity, and constant learning. Feeling lucky and excited to see what’s next and do even more for the company!",
    },
    {
      id: 4,
      name: "Karthik Sadhasivam",
      role: "Senior Graphic Designer",
      icon: Karthik_Sadhasivam,
      image: Karthik_Sadhasivam,
      quote: "Hi, I'm Karthik. I started my journey as a video editor in 2019, and I've learned a lot along the way. Manoj sir trusted me a lot, which made me more responsible for my work. If the company is like CSK 💛, I’m the Jadeja.",
    },
    {
      id: 5,
      name: "Vinitha Vijayaragavan",
      role: "Talent Acquisition Specialist",
      icon: Vinitha_Vijayaragavan,
      image: Vinitha_Vijayaragavan,
      quote: "ATTS Technologies has been a remarkable place for my professional growth, where I’ve learned and evolved tremendously in my career. I feel consistently valued, empowered, and appreciated for my contributions. The energy and innovation of brilliant young minds make this workplace truly inclusive, inspiring, and welcoming workplace.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const [imageOrder, setImageOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingIndices, setAnimatingIndices] = useState(new Set());

  const getNextPosition = (current) => {
    return current === 8 ? 0 : current + 1;
  };

  const shuffleNextImage = () => {
    setAnimatingIndices(new Set([currentIndex]));

    setTimeout(() => {
      setImageOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const randomIndex = Math.floor(Math.random() * 9);
        const temp = newOrder[currentIndex];
        newOrder[currentIndex] = newOrder[randomIndex];
        newOrder[randomIndex] = temp;
        return newOrder;
      });

      setCurrentIndex((prev) => getNextPosition(prev));

      setTimeout(() => {
        setAnimatingIndices(new Set());
      }, 500);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(shuffleNextImage, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const positions = [
    "absolute top-10 left-[10%]",
    "absolute top-10 right-[10%]",
    "absolute -top-6 left-[30%]",
    "absolute -top-6 right-[30%]",
    "absolute top-[30%] left-8",
    "absolute top-[30%] right-8",
    "absolute bottom-36 left-[10%]",
    "absolute bottom-36 right-[10%]",
    "absolute bottom-12 right-[45%]",
  ];
  const images = [
    About1,
    About2,
    About3,
    About4,
    About5,
    About6,
    About7,
    About8,
    About9,
  ];

  return (
    <>
      <div className="bg-black w-full relative">
        <div className="relative">
          {/* Mobile View with Text Overlay */}
          <div className="xl:hidden relative">
            {/* Image Container */}
            <div className="w-full h-[500px] relative">
              <Image
                src={ATTS}
                alt="office space mobile"
                className="object-cover"
                layout="fill"
                priority
              />
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

              {/* Content Section for Mobile */}
              <div className="absolute inset-0 flex flex-col items-center justify-center  p-4 z-10">
                <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-unbounded mb-4">
                  Our Culture
                </div>
                <h1 className="text-white text-xl md:text-3xl font-bold  font-unbounded items-center text-center  leading-tight lg:text-start">
                  Just a bunch of creative humans, enjoying every moment of what
                  we do!
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Image Grid */}
          <div className="hidden xl:block">
            {/* Use motion.div for the parent container */}
            <motion.div
              className="images object-cover hidden lg:block"
              initial={{ opacity: 0 }} // Initial state before the animation
              animate={{ opacity: 1 }} // Final state after the animation
              transition={{ duration: 1, ease: "easeOut" }} // Animation properties (duration and easing)
            >
              {positions.map((position, index) => (
                <Image
                  key={index}
                  width={index === 8 ? 100 : 190}
                  height={128}
                  src={images[imageOrder[index]]}
                  alt={`office space ${index + 1}`}
                  className={`${position} rounded-lg w-48 h-32 object-cover transform transition-all duration-700 ease-in-out ${
                    animatingIndices.has(index)
                      ? "scale-110 brightness-125 shadow-lg"
                      : "scale-100"
                  } hover:scale-105 hover:shadow-xl hover:z-10`}
                />
              ))}
            </motion.div>

            {/* Desktop Content Section */}
            <div className="relative z-10 text-center py-8 px-4 md:py-16 lg:py-32">
              <div className="inline-block bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-unbounded">
                Our Culture
              </div>
              <h1 className="text-white text-xl md:text-3xl font-bold  font-unbounded max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto leading-tight mt-4 sm:mt-6">
                Just a bunch of creative humans, enjoying every moment of what
                we do!
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden xl:flex justify-center text-white mt-56 relative z-10 px-8 gap-10 md:gap-20 lg:gap-32">
            {[].map((item, index) => (
              <button
                key={index}
                // onClick={() => handleTabClick(index)}
                className="text-sm md:text-lg lg:text-xl hover:text-blue-500 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden  flex-col text-black p-5   hidden justify-center mx-auto z-10 px-8 gap-6 bg-white sticky top-20 w-full">
        {[].map((item, index) => (
          <span
            key={index}
            // onClick={() => handleTabClick(index)}
            className="cursor-pointer text-nowrap text-sm md:text-lg lg:text-xl hover:text-blue-500 text-center"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Life At atts  */}
      <div
        className="bg-white px-4 xl:px-30  mt-5"
        // ref={section1Ref}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 text-start md:text-start sm:text-left sm:h-auto sm:py-3 ">
            <div className="title-box flex justify-center md:justify-start">
              <TitleBox title={"Life at ATTS"} />
            </div>
            
            <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black mt-6">
              Learn, explore, and totally be yourself - it’s like home,
              <span className="text-[#003067]"> but way more exciting!</span>
            </h1>
          </div>

          <div className="flex-1 xl:p-4 text-sm sm:text-base">
            <p className="text-start lg:text-left ps-0 xl:ps-6">
              We make sure every team member feels right at home with their
              colleagues, the workspace, and our clients. We celebrate the
              skills of our team and encourage them to think outside the box. 
            </p>
            <p className="text-start lg:text-left ps-0 xl:ps-6 mt-3">
              We’re a crew of creative, skilled, dependable, and experienced
              pros offering straightforward advice to our clients and helpful
              feedback to each other. We’re always working to raise the bar and
              hit new milestones every year! If you’re a creative mortal seeking
              a place to unveil your crazily creative stuff - We’re here!
            </p>
          </div>
        </div>
      </div>

      {/* our Culture */}
      <div
        className="bg-white px-5  xl:px-32  mt-5"
        // ref={section2Ref}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="title-box mb-6 sm:mb-8">
            <TitleBox title={"Our Culture"} />
          </div>

          <div className="description ">
            <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black">
              Building a Work Environment That{" "}
              <span className="text-xl md:text-3xl font-bold  font-unbounded  text-start md:text-center text-[#003067] ">
                Inspires
              </span>
            </h1>
          </div>
        </div>

        <div className="description   mt-4">
          <p className="text-start lg:text-left ps-0 xl:ps-6 mt-3">
            Employees take the top spot in our world! We aim to create a vibe
            where you’ll be excited to work and have fun while doing it. We
            don’t just grind - we keep our team energized with things that bring
            joy. We respect everyone’s passion and give them space to thrive and
            do what they love.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 p-4">
          {/* Left column - Person with charts */}
          <div className="xl:col-span-3 h-[400px]">
            <div className="rounded-lg overflow-hidden shadow-md h-full">
              <Image
                src={OfficePng}
                alt="Business analytics presentation"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Center column - Team meeting */}
          <div className="xl:col-span-6 h-[250px]  md:h-[400px] ">
            <div className="rounded-lg overflow-hidden shadow-md  h-full">
              <div className="h-full">
                <video
                  className="w-full h-full object-fill "
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="https://atts-img-video.s3.eu-north-1.amazonaws.com/ATTS+Ofz+Video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Right column - Office spaces */}
          <div className="xl:col-span-3 grid grid-rows-2 gap-4 h-[800px] xl:h-[400px]">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={About8}
                alt="Modern office space"
                className="w-full h-full object-cover bg-blue-200"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={About5}
                alt="Conference room"
                className="w-full h-full object-cover object-right bg-blue-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white   sm:px-8  xl:px-32  mt-5"
        // ref={section3Ref}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="title-box mb-6 sm:mb-8">
            <TitleBox title={"Meet Our Team"} />
          </div>

          <div className="description px-4 sm:px-8  xl:px-32">
            <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black">
              Don’t just take our word for it
              <span className="text-xl md:text-3xl font-bold  font-unbounded  text-start md:text-center text-[#003067] md:block ">
                – hear it directly from them!
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-black rounded-2xl p-6 sm:p-8 md:p-12 w-[95%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto mt-5">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 text-white">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6">
              "
            </div>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              {testimonials[activeIndex].quote}
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {testimonials[activeIndex].role}
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleDotClick(index)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform ${
                activeIndex === index
                  ? "opacity-100 ring-2 ring-white"
                  : "opacity-50 hover:opacity-75"
              } hover:scale-125 transform-gpu ${
                activeIndex === index ? "scale-125" : "scale-90"
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Work Environment */}

      <div
        className="relative w-full"
        // ref={section4Ref}
      >
        <div className="relative pt-9">
          <div className="image">
            <Image
              src={WorkEnvironment}
              alt="workenv"
              className="w-full   h-[600px] object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-40 mt-9"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="absolute inset-0 flex justify-center items-center px-2  bg-opacity-40 bg-black mt-9">
          <div className="text-white  sm:text-left">
            {/* Title card */}
            <div className="titleCard mb-4 flex justify-center md:justify-start">
              <div className="inline-block bg-white text-black  px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-unbounded">
                Work Environment
              </div>
            </div>

            {/* Headings */}
            <div className="sm:px-4 sm:py-3">
              <h1 className="text-xl md:text-3xl font-bold text-center md:text-start font-unbounded mb-2">
                Innovating Ideas..!
              </h1>
              <h1 className="text-xl md:text-3xl font-bold text-center md:text-start font-unbounded mb-2">
                Crafting Designs..!
              </h1>
              <h1 className="text-xl md:text-3xl font-bold text-center md:text-start font-unbounded mb-2">
                Building Brands..!
              </h1>

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg w-full sm:w-3/4 lg:w-1/2 ">
                We as a team believe in the mantra “We Grow When We Share”. Our
                team is always eager to learn and share. We’ve created a lively
                environment where growth, innovation, and great work-life
                balance are all part of the package. We go beyond offering just
                a job; we provide opportunities to grow and thrive for career
                advancement. We empower you to unlock your full potential while
                driving the company’s success.
                <br />
                <br />
                Our team’s expertise and creativity are the secret recipe for
                our success. We’re all about tapping into their talents to drive
                innovation and keep growing!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  flex justify-center   mt-6  lg:mt16">
        <Contactus />
      </div>
    </>
  );
}

export default page;
