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
import { brandServicesCard, SeoServicesCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";

const card = [
  {
    title: "Iconic Logo & Visual Identity Design",
    description:
      "As a leading branding company, we craft logos and visual identities that reflect your core values and leave a lasting impression. With our design expertise, we ensure your brand unforgettably speaks to your audience. ",
    img: TailoredStrategy,
  },
  {
    title: "Compelling Brand Messaging & Positioning:",
    description:
      "We craft brand messaging that grabs attention and speaks directly to your audience. With the perfect positioning, your brand will not only stand out but also make a lasting impression. Let’s get your message heard! ",
    img: ABTesting,
  },
  {
    title: "Strategic Brand Blueprinting",
    description:
      "Being the best branding company in Coimbatore, we design a killer brand blueprint that maps out your brand’s journey. From your core values to market positioning, we make sure your brand stands out and stays ahead. Let’s build a brand that’s got direction and purpose! ",
    img: SeoMarketing,
  },
  {
    title: "Creative Brand Voice & Content Creation",
    description:
      "We craft a unique brand voice that resonates with your audience. Our creative content authentically tells your story, engaging, and is impossible to forget. Let’s make your brand unforgettable! . ",
    img: AnalyticsMarketing,
  },
  {
    title: "Real-Time Brand Monitoring & Evolution ",
    description:
    "As a pioneer branding agency in Coimbatore, we keep an eye on your brand 24/7, tracking performance and audience reactions. With real-time insights, we adjust strategies to keep your brand on top and always relevant. ",
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
                <span className="text-[#003067]">
                  Turn Your Business into a Global Brand{" "}
                </span>
                with the Best Branding Agency in Coimbatore.
              </h1>
            </div>

            <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">
              <p className="text-start lg:text-left ps-6">
                We create strategies that make your brand pop! Every brand has a
                story, and we make sure yours is unforgettable. From bold
                designs to catchy messages, we craft a brand that stands out and
                sticks with your audience. From crafting striking logos to
                developing compelling messaging, we ensure your brand captures
                attention and builds a strong connection with your audience. 
                Whether you're starting from scratch as a start-up or a business
                looking to refresh your identity or promote to the global
                standard, we’ve got the tools to take your brand to the next
                level, making it memorable, impactful, and unforgettable.  Let’s
                build a brand that’s as cool as you are! 
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
              From Concept to Results – We Craft{" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-center text-[#003067] md:block">
                Brands That Work!
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
              A team of branding architects dedicated to elevating {" "}
                <span className="text-[#003067]">
                your brand to global reach. 
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
         {brandServicesCard.map((item, index) => (
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
               <div className="description pb-3 text-center mt-2">
                 <h2>{item.description}</h2>
               </div>
             </div>
           </div>
         ))}
       </div>
      </div>

      {/* Contact us */}

      <div className="  px-8  md:px-32  ">
        <Contactus />
      </div>
    </>
  );
}

export default Page;
