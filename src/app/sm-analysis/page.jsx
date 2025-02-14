"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import Sm1 from "@/assests/images/sm1.jpeg";
import Sm2 from "@/assests/images/sm2.jpeg";
import Sm3 from "@/assests/images/sm3.jpeg";
import Sm4 from "@/assests/images/sm4.jpeg";
import Sm5 from "@/assests/images/sm5.jpeg";
import StaggeredSection from "@/components/animation/StaggeredSection";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import {
  brandServicesCard,
  SeoServicesCard,
  socialMediaServiceCard,
} from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";
import ScrollMotion from "@/components/animation/scrollMotion";

const card = [
  {
    title: "Social Media Strategy Development:",
    description:
      "As a top branding company, we craft social media strategies that fuel brand growth, spark engagement, and deliver real results. Let’s turn your online presence into a magnet for loyal customers!  ",
    img: Sm1,
  },
  {
    title: "Content Creation & Management:",
    description:
      "We’re all about giving your brand a voice, sparking engagement, and getting your message to the right crowd. Partner with the best social media management company and watch your brand skyrocket! ",
    img: Sm2,
  },
  {
    title: "Social Media Advertising:",
    description:
      "With killer social media ads, we get your brand noticed, drive traffic, and turn leads into loyal customers. Watch your reach grow and your conversions soar – it’s time to shine! ",
    img: Sm3,
  },
  {
    title: "Community Management:",
    description:
      "Our community management fuels authentic connections, boosts trust, and increases long-term loyalty. Get ready for more interactions, deeper relationships, and a community that truly supports your brand!    ",
    img: Sm4,
  },
  {
    title: "Performance Analytics ",
    description:
      "As a leading branding company, we deliver performance analytics to sharpen your strategy, boost ROI, and drive real growth. Smarter decisions, stronger results! ",
    img: Sm5,
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
            <div className="flex-1 text-start  sm:text-left sm:h-auto sm:py-3 md:px-4 flex items-center">
              <h1 className=" text-responsive text-black ">
                <span className="text-[#003067]">Make Your Brand Shine </span>
                Online with Social Media.
              </h1>
            </div>

            <div className="flex-1 mt-8 lg:mt-0 sm:ml-4 xl:p-4 text-sm sm:text-base">
            <h3 className="  text-[#003067] lg:text-left xl:ps-6  " style={{"fontFamily":"Zoho-Sans","fontSize":"20px"}}>
              At ATTS Technologies Pvt. Ltd.
            </h3>
              <p className="text-start lg:text-left mt-4 xl:ps-6">
                We understand that every business is unique, and it’s audience
                too. Our approach to social media marketing is tailored to your
                specific needs and goals. We start from scratch by conducting a
                thorough analysis of your target audience, industry trends, and
                competitive landscape. This comprehensive understanding forms
                the foundation of our strategy. <br /> We are committed to helping
                you unlock the full potential of your social media platforms.
                Experience measurable results with tailored social media
                solutions designed for your brand’s success. Ready to begin? So
                are we! 
              </p>
            </div>
          </div>
        </div>
      </ScrollMotion>

      {/* Our Service */}
      <div className="bg-white w-full mt-4">
        <StaggeredSection>
          <div className="flex flex-col justify-center items-center">
            <div className="title-box mb-6 sm:mb-8">
              <TitleBox title={"Our Services"} />
            </div>

            <div className="description px-4">
              <h1 className=" text-responsive text-start  md:text-center md:px-9 text-black">
                The Perfect Social Media Strategy{" "}
                <span className=" text-responsive   text-center text-[#003067] md:block">
                  to Dominate Your Market.
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

      <div className="bg-white px-4  xl:px-32  mt-3 ">
        <ScrollMotion>
          <div className="titleBox flex justify-center flex-row md:justify-start">
            <TitleBox title={"What we can help you with"} className={"w-72"} />
          </div>
          <div className="title flex flex-col lg:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6 ">
            <div className=" sm:text-left  flex-1">
              <h1 className=" text-responsive md:px-5  text-black ">
                A group of creative brains committed to boosting your{" "}
                <span className="text-[#003067]">brand’s online success.</span>
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
            {socialMediaServiceCard.map((item, index) => (
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
                <h1 className="text-darkentext-responsive  mb-3 text-xl  transition-colors duration-300 text-[#003067] ">
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
        <div className=" flex justify-center">
          <Contactus />
        </div>
      </ScrollMotion>
    </>
  );
}

export default Page;
