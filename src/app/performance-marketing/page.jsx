"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import TailoredStrategy from "@/assests/images/pm1.jpeg";
import ABTesting from "@/assests/images/pm2.jpg";
import SeoMarketing from "@/assests/images/pm3.jpeg";
import AnalyticsMarketing from "@/assests/images/pm1.jpeg";
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
      "As the leading marketing agency in Coimbatore, we specialize in crafting personalized strategies that resonate with your business goals deriving maximum ROI and growth. With a data-driven approach and a focus on performance, we ensure that every campaign contributes to the long-term success of your business.",
    img: ABTesting,
  },
  {
    title: "SEO & PPC Optimization",
    description:
      "As the leading marketing agency in Coimbatore, we specialize in crafting personalized strategies that resonate with your business goals deriving maximum ROI and growth. With a data-driven approach and a focus on performance, we ensure that every campaign contributes to the long-term success of your business.",
    img: SeoMarketing,
  },
  {
    title: "Analytics & Reporting",
    description:
      "As the leading marketing agency in Coimbatore, we specialize in crafting personalized strategies that resonate with your business goals deriving maximum ROI and growth. With a data-driven approach and a focus on performance, we ensure that every campaign contributes to the long-term success of your business.",
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
            <div className="flex-1 text-start  sm:text-left sm:h-auto sm:py-3 px-9">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-black ">
                <span className="text-[#003067]">Make Those Clicks Count </span>
                with Performance Marketing Services in Coimbatore!
              </h1>
            </div>

            <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">
              <p className="text-start lg:text-left ps-6">
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
      <div className="bg-white w-full mt-4">
        <ScrollMotion>
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
        </ScrollMotion>

        <ScrollMotion>
          <div className="hidden md:block">
            <OpenCards cards={card} />
          </div>
          <div className="block md:hidden mt-5">
            <Carousel items={data} />
          </div>
        </ScrollMotion>
      </div>

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
        

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
          {performanceMarketing.map((item, index) => (
            <div key={index} className="flex justify-center rounded-full">
              <div className="w-[170px] bg-[#0000000D] rounded-full p-4 ">
                <div className="flex justify-center items-center bg-[#003067] p-3 rounded-full w-[70px] h-[70px] mx-auto">
                  <Image
                    src={item.icon}
                    alt="Rocket Icon"
                    width={40}
                    height={40}
                    className="object-cover transition-transform"
                  />
                </div>
                <div className="title flex justify-center text-center mt-4 text-black">
                  <h1 className="text-[#003067] font-unbounded">{item.title}</h1>
                </div>
                <div className="description pb-4 text-center mt-2">
                  <h2>{item.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollMotion>
      {/* Contact us */}

      <ScrollMotion>
      <div className="  px-8  md:px-32  ">
        <Contactus />
      </div>
      </ScrollMotion>
    </>
  );
}

export default Page;
