"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import TailoredStrategy from "@/assests/images/Branding1.webp";
import ABTesting from "@/assests/images/Branding2.webp";
import SeoMarketing from "@/assests/images/Branding3.webp";
import AnalyticsMarketing from "@/assests/images/Branding4.webp";
import Real_Time from "@/assests/images/Branding5.webp";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import { brandServicesCard, SeoServicesCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";
import ScrollMotion from "@/components/animation/scrollMotion";
import {motion} from 'framer-motion'

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
    img: Real_Time,
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
        <div className="bg-white px-4  xl:px-32 mt-3">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 text-start  sm:text-left sm:h-auto sm:py-3 md:px-3 flex items-center">
              <h1 className="text-xl md:text-3xl font-bold font-unbounded text-black ">
                <span className="text-[#003067]">
                  Turn Your Business into a Global Brand{" "}
                </span>
                with the Best Branding Agency in Coimbatore.
              </h1>
            </div>

            <div className="flex-1 mt-8 lg:mt-0 sm:ml-4 xl:p-4 text-sm sm:text-base">
            <h3 className=" text-xl md:text-3xl font-bold text-[#003067]  font-unbounded xl:ps-6 lg:text-2xl ">
              At ATTS Technologies Pvt. Ltd.
            </h3>
              <p className="text-start lg:text-left mt-4 xl:ps-6">
                We create strategies that make your brand pop! Every brand has a
                story, and we make sure yours is unforgettable. From bold
                designs to catchy messages, we craft a brand that stands out and
                sticks with your audience. From crafting striking logos to
                developing compelling messaging, we ensure your brand captures
                attention and builds a strong connection with your audience. {' '} <br className="mt-3"/> 
        
              </p>
              <p className="text-start lg:text-left mt-2 xl:ps-6">
              Whether you're starting from scratch as a start-up or a business
                looking to refresh your identity or promote to the global
                standard, we’ve got the tools to take your brand to the next
                level, making it memorable, impactful, and unforgettable.  Let’s
                build a brand that’s as cool as you are! 
              </p>
            </div>
          </div>
        </div>
        </ScrollMotion>

      {/* Our Service */}
      <div className="bg-white w-full mt-5">
        <StaggeredSection>
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description px-4">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded text-start  md:text-center md:px-4  text-black">
              From Concept to Results – We Craft{" "}
                <span className="text-xl md:text-3xl font-bold  font-unbounded   text-center text-[#003067] md:block">
                Brands That Work!
                </span>
              </h1>
            </div>
          </div>
        </StaggeredSection>

        <AnimatedSection>
        <ScrollMotion>
          <div className="hidden md:block">
            <OpenCards cards={card} />
          </div>
          <div className="block md:hidden mt-5">
            <Carousel items={data} />
          </div>
          </ScrollMotion>
        </AnimatedSection>
      </div>

      {/* What we can help you with */}

      <div className="bg-white px-4 xl:px-32 mt-3">
        <div className="titleBox flex justify-center flex-row md:justify-start">
          <TitleBox title={"What we can help you with"} className={"w-72"} />
        </div>
        <ScrollMotion>
          <div className="title flex flex-col lg:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6 ">
            <div className=" sm:text-left  flex-1">
              <h1 className="text-xl md:text-3xl font-bold  font-unbounded md:px-5 sm:text-3xl text-black ">
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
        </ScrollMotion>

            <ScrollMotion>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
            {brandServicesCard.map((item, index) => (
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

      {/* Contact us */}
      <ScrollMotion>
      <div className="bg-white  flex justify-center  xl:px-32 mt-6  ">
        <Contactus />
      </div>
      </ScrollMotion>
    </>
  );
}

export default Page;
