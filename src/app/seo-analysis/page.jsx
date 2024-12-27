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
import { SeoServicesCard } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import OpenCards from "@/components/extendedCard/extendedCard";
import AnimatedSection from "@/components/animation/animationSection";
import { Card, Carousel } from "@/components/ui/imageSlider";

const card = [
  {
    title: "Keyword Research & Competitive Analysis",
    description:
    "As the best SEO company in Coimbatore, we dig deep to find the perfect keywords and analyze your competitors. We make sure you’re always one step ahead, driving more traffic and getting noticed online! ",
    img: TailoredStrategy,
  },
  {
    title: "Website Optimization & Technical SEO ",
    description:
      "We specialize in optimizing your website's technical side, from fast loading speeds to flawless mobile performance. Our on-page and off-page SEO strategies help your site rank higher while delivering a smooth, seamless experience for visitors. ",
    img: ABTesting,
  },
  {
    title: "Relevant Link Building",
    description:
    "As a leading SEO agency in Coimbatore, we’re all about getting you those high-quality backlinks that make Google take notice. With our smart link-building strategies, your site’s authority soars, driving more traffic and putting you ahead of the competition! ",
    img: SeoMarketing,
  },
  {
    title: "Content Marketing & Blogs ",
    description:
    "Being the pioneer SEO agency in Coimbatore, we craft killer content that not only boosts your rankings but also keeps your audience coming back for more! From engaging blog posts to share-worthy content, we help tell your brand’s story in a way that clicks. ",
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
                  Dominate search rankings{" "}
                </span>
                with the best SEO Agency in Coimbatore. 
              </h1>
            </div>

            <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">

              <p className="text-start lg:text-left ps-6">
                Do you want to see your business ranking top? SEO is your best
                buddy when you want to uplift your brand naturally. Boost your
                website’s performance with our detailed SEO analysis. We focus
                on key areas like website speed, keyword optimization, content
                strategies, and on-page SEO to enhance search visibility.   We
                use advanced analytics to track your search rankings for better
                results. Let us help you optimize your digital presence and
                attract valuable traffic through actionable insights and
                targeted SEO strategies.   We are delighted to say you’ve
                reached the correct place. We’ll make you experience resulting
                in the top position.
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
                Perfect SEO Strategies That Get {" "}
                <span className="font-unbounded text-2xl md:text-3xl  text-center text-[#003067] md:block">
                Results & Keep You Winning! 
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
              Your Trusted SEO Experts, {" "}
                <span className="text-[#003067]">
                Delivering Results That Last!
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-5 gap-4 mt-16">
          {SeoServicesCard.map((item, index) => (
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
              <h1 className="text-darken mb-3 text-xl font-medium text-center transition-colors duration-300 ">
                {item.title}
              </h1>
              <p className="px-4 text-gray-500 transition-colors duration-300 text-center">
                {item.description}
              </p>
            </motion.div>
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
