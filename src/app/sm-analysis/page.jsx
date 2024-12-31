"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import TailoredStrategy from "@/assests/images/seo1.jpg";
import ABTesting from "@/assests/images/seo2.jpg";
import SeoMarketing from "@/assests/images/seo3.jpg";
import AnalyticsMarketing from "@/assests/images/seo4.jpg";
import StaggeredSection from "@/components/animation/StaggeredSection";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import { brandServicesCard, SeoServicesCard, socialMediaServiceCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";

const card = [
  {
    title: "Social Media Strategy Development:",
    description:
    "As a top branding company, we craft social media strategies that fuel brand growth, spark engagement, and deliver real results. Let’s turn your online presence into a magnet for loyal customers!  ",
    img: TailoredStrategy,
  },
  {
    title: "Content Creation & Management:",
    description:
    "We’re all about giving your brand a voice, sparking engagement, and getting your message to the right crowd. Partner with the best social media management company and watch your brand skyrocket! ",
    img: ABTesting,
  },
  {
    title: "Social Media Advertising:",
    description:
    "With killer social media ads, we get your brand noticed, drive traffic, and turn leads into loyal customers. Watch your reach grow and your conversions soar – it’s time to shine! ",
    img: SeoMarketing,
  },
  {
    title: "Community Management:",
    description:
    "Our community management fuels authentic connections, boosts trust, and increases long-term loyalty. Get ready for more interactions, deeper relationships, and a community that truly supports your brand!    ",
    img: AnalyticsMarketing,
  },
  {
    title: "Performance Analytics ",
    description:
    "As a leading branding company, we deliver performance analytics to sharpen your strategy, boost ROI, and drive real growth. Smarter decisions, stronger results! ",
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
      <StaggeredSection>
        <div className="bg-white px-0  sm:px-8 md:px-16 lg:px-32 pt-9 mt-5">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 text-start  sm:text-left sm:h-auto sm:py-3 px-9">
              <h1 className="font-unbounded text-2xl md:text-3xl text-black ">
                <span className="text-[#003067]">Make Your Brand Shine </span>
                Online with Social Media.
              </h1>
            </div>

            <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">
              <p className="text-start lg:text-left ps-6">
                We understand that every business is unique, and it’s audience
                too. Our approach to social media marketing is tailored to your
                specific needs and goals. We start from scratch by conducting a
                thorough analysis of your target audience, industry trends, and
                competitive landscape. This comprehensive understanding forms
                the foundation of our strategy.    We are committed to helping
                you unlock the full potential of your social media platforms.
                Experience measurable results with tailored social media
                solutions designed for your brand’s success. Ready to begin? So
                are we! 
              </p>
            </div>
          </div>
        </div>
      </StaggeredSection>

      {/* Our Service */}
      <div className="bg-white w-full mt-4">
        <StaggeredSection>
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description">
              <h1 className="font-unbounded text-2xl text-start  md:text-center px-9 md:text-3xl text-black">
              The Perfect Social Media Strategy{" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-center text-[#003067] md:block">
                to Dominate Your Market.
                </span>
              </h1>
            </div>
          </div>
        </StaggeredSection>

        <AnimatedSection>
          <div className="hidden md:block">
            <OpenCards cards={card} />
          </div>
          <div className="block md:hidden mt-5">
            <Carousel items={data} />
          </div>
        </AnimatedSection>
      </div>

      {/* What we can help you with */}

      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-5 ">
        <div className="titleBox flex justify-center flex-row md:justify-start">
          <TitleBox title={"What we can help you with"} className={"w-72"} />
        </div>
        <StaggeredSection>
          <div className="title flex flex-col lg:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6 ">
            <div className=" sm:text-left  flex-1">
              <h1 className="font-unbounded text-2xl px-5 sm:text-3xl md:text-4xl text-black ">
              A group of creative brains committed to boosting your{" "}
                <span className="text-[#003067]">
                brand’s online success.
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
        </StaggeredSection>

             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
         {socialMediaServiceCard.map((item, index) => (
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
               <div className="description  text-center mt-2">
                 <h2>{item.description}</h2>
               </div>
             </div>
           </div>
         ))}
       </div>
      </div>

      {/* Contact us */}

      <div className=" flex justify-center">
        <Contactus />
      </div>
    </>
  );
}

export default Page;
