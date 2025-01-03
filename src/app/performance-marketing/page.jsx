"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import TailoredStrategy from "@/assests/images/pm1.jpeg";
import ABTesting from "@/assests/images/abtesting.jpg";
import SeoMarketing from "@/assests/images/pm3.jpeg";
import AnalyticsMarketing from "@/assests/images/pm2.jpg";
import StaggeredSection from "@/components/animation/StaggeredSection";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import { performanceMarketing } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";
import ScrollMotion from "@/components/animation/scrollMotion";

const card = [
  {
    title: "Tailored Strategy",
    description:
    "As the leading marketing agency in Coimbatore, we specialize in crafting personalized strategies that resonate with your business goals deriving maximum ROI and growth. With a data-driven approach and a focus on performance, we ensure that every campaign contributes to the long-term success of your business.",
    img: TailoredStrategy,
  },
  {
    title: "A/B Testing",
    description:
    "We optimize your campaigns by testing different versions of ads, landing pages, and emails. This data-driven approach enhances conversions, boosts engagement, and drives business growth, maximizing your ROI.",
    img: ABTesting,
  },
  {
    title: "SEO & PPC Optimization",
    description:
    "As a leading SEO and paid marketing company in Coimbatore, we enhance your online presence through expert SEO strategies and targeted PPC campaigns. Our SEO strategies ensure your website ranks higher on search engines. Meanwhile, our PPC campaigns are designed for precision, delivering measurable results.",
    img: SeoMarketing,
  },
  {
    title: "Analytics & Reporting",
    description:
    "As a pioneer digital marketing company, we provide in-depth analytics and reporting to track the performance of your campaigns. By analyzing key metrics, we offer actionable insights that help optimize strategies, improve ROI, and drive continuous business growth.",
   img: AnalyticsMarketing,
  },
];

function Page() {
  const data = card.map((card, index) => (
    <Card key={card.img} card={card} index={index} />
  ));

  return (
    <>
      {/* Header */}
      <ScrollMotion>
        <div className="bg-white px-0  sm:px-8 md:px-16 lg:px-32 pt-9 mt-5">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 text-start  sm:text-left sm:h-auto sm:py-3 px-9 flex items-center">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black ">
                <span className="text-[#003067]">Make Those Clicks Count </span>
                with Performance Marketing Services in Coimbatore!
              </h1>
            </div>

            <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">
            <h3 className=" text-xl md:text-3xl font-bold text-[#003067]  font-unbounded ps-6 lg:text-2xl ">
              At ATTS Technologies Pvt. Ltd.
            </h3>
              <p className="text-start lg:text-left ps-6 mt-4">
                We offer you the best performance marketing services in
                Coimbatore which propels your business and maximizes your ROI.
                We specialize in delivering measurable results through targeted
                campaigns that deliver real results - driving conversions and
                speeding up your marketing success.   Our expert team combines
                advanced analytics, SEO, PPC, social media ads, and more to
                craft campaigns that truly represent your brands. Let’s work
                together to reach your audience and drive the growth your brand
                deserves.  
              </p>
            </div>
          </div>
        </div>
      </ScrollMotion>

      {/* Our Service */}
        <ScrollMotion>
      <div className="bg-white w-full mt-4">
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-start  md:text-center px-9  text-black">
                The Perfect Performance{" "}
                <span className="text-xl md:text-3xl font-bold  font-unbounded   text-center text-[#003067] md:block">
                  Marketing Strategy That Delivers Growth and ROI 
                </span>
              </h1>
            </div>
          </div>
       

          <div className="hidden md:block">
            <OpenCards cards={card} />
          </div>
          <div className="block md:hidden mt-5">
            <Carousel items={data} />
          </div>
      </div>
        </ScrollMotion>

      {/* What we can help you with */}

      <ScrollMotion>
        <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-5 ">
          <div className="titleBox flex justify-center flex-row md:justify-start">
            <TitleBox title={"What we can help you with"} className={"w-72"} />
          </div>
          <div className="title flex flex-col lg:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6 ">
            <div className=" sm:text-left  flex-1">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded px-5  text-black ">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-16">
            {performanceMarketing.map((item, index) => (
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
        </div>
      </ScrollMotion>
      {/* Contact us */}

      <ScrollMotion>
      <div className="bg-white  flex justify-center  md:px-32 mt-6  lg:mt16">
        <Contactus />
      </div>
      </ScrollMotion>
    </>
  );
}

export default Page;
