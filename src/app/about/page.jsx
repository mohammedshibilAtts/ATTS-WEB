"use client";
import React from "react";
import BgAbout from "../../assests/images/bgAbout.jpeg";
import Image from "next/image";
import TitleBox from "@/components/titleBox/titleBox";
import Accordion from "@/components/accordion/accordion";
import FounderPng from "../../assests/images/founderPng.png";
import {
  aboutAccordionData,
  aboutCompany,
  aboutUsCardData,
  ClientBrandImages,
} from "@/constants/constant";
import Card from "@/components/card/card";
import FadeMotion from "@/components/animation/fadeMotion";
import { InfiniteMovingCards } from "@/components/inifinityScroll/inifinityScroll";
import ImageGallery from "@/components/gallery/gallery";
import ImageSlider from "@/components/gallery/imageSlider";
function page() {
  return (
    <>
      {/* Header About */}
      <FadeMotion>
        <div className="relative w-full">
          <div className="image ">
            <Image
              src={BgAbout}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-4 sm:top-16 left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-[#B5D3F5] text-xl md:text-3xl font-bold  font-unbounded">
            We craft software solutions for business challenges
            </h2>

            <div className="flex flex-row justify-center items-center gap-4 mt-6 text-white font-gilroy uppercase">
              <div className="flex items-center gap-2">
                <div className="ourBrand bg-[#BC5EFF] w-4 h-4 rounded-3xl" />
                <h1 className="text-xs sm:text-sm">DESIGN</h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="ourCustomer bg-[#F1A70B] w-4 h-4 rounded-3xl" />
                <h1 className="text-xs sm:text-sm">DEVELOP</h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="ourPresence bg-[#54BD95] w-4 h-4 rounded-3xl" />
                <h1 className="text-xs sm:text-sm">DOMINATE</h1>
              </div> 

              {/* font chnage  */}
            </div>
          </div>
        </div>
      </FadeMotion>
      {/* hero About */}

      <div className="bg-white px-8 pt-9 md:px-32">
        <TitleBox title={"About Us"} />
        <div className="mt-5 flex justify-center md:justify-start">
          <h1 className=" text-xl md:text-3xl font-bold  font-unbounded text-black">
          We Craft Software Excellence to{" "}
            <span className="font-unbounded text-2xl md:text-3xl md:block text-center md:text-start text-[#003067]">
            Thrive Your Business!
            </span>
          </h1>
        </div>

        <div className="main flex flex-col lg:flex-row mt-3">
          <div className="left flex-1">
            <div className="mt-4">
              <p className="font-sans text-lg text-[#0F1929]">
                We're a bright team perfectly blended with technically excellent
                and unlimitedly creative brains experienced in crafting
                solutions for businesses in healthcare, finance, fashion,
                jewellery, and start-ups. We come behind the pledge of writing
                clean code and developing a quick-responsive, captivating
                website. We aim to deliver cutting-edge tech that's easy to use
                and helps you grow. With us, you and your users experience
                powerful yet simple technology.
              </p>
            </div>
            <div className="mt-10 ">
              <h1 className=" text-xl md:text-3xl font-bold  font-unbounded text-black">
              Let’s work together & turn ideas {" "}
                <span className=" text-xl md:text-3xl font-bold  font-unbounded  md:text-start md:block  text-[#003067]">
                into something extraordinary!
                </span>
              </h1>
            </div>
          </div>

          <div className="right flex-1 lg:ms-9">
            <Accordion accordionData={aboutAccordionData} />
          </div>
        </div>

        <div className="founder  flex-col h-[900px] lg:h-[400px] lg:flex-row mt-20 mb-8 hidden">
          <div className="image flex-1 flex items-center justify-center">
            <FadeMotion duration={2}>
              <Image
                src={FounderPng}
                alt=""
                className="h-[400px] object-contain relative"
              />
            </FadeMotion>
            <div className="name border-2 rounded-3xl border-black  px-8 absolute  mt-96 font-unbounded me-20 py-3 mb-7">
              <h1 className="text-lg text-[#171719]">Jane Cooper</h1>
              <p className="text-sm text-[#8D8B8B]">CEO & Founder of ATTS</p>
            </div>
          </div>

          <div className="content-scroll flex-1  px-4 md:px-9 items-center justify-center mb-4">
            {aboutCompany.map((data) => (
              <div key={data.title} className="mt-5">
                <h1 className=" text-xl md:text-3xl font-bold  font-unbounded text-[#003067]">
                  {data.title}
                </h1>
                <p className="mt-5 text-lg break-words">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* brandCollaborations */}

      <div className="bg-[#010202] pt-16 relative rounded-3xl mt-12 w-full">
        <div className="text-center mb-8">
          <div className="bg-white text-[#0c192d] inline-block px-4 py-2 rounded-full font-unbounded text-sm mb-4">
            Brand Collaborations
          </div>
          <h2 className="text-white  text-xl md:text-3xl font-bold  font-unbounded">
            Brands that <span className="text-blue-900">trust us</span>
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <InfiniteMovingCards
            items={ClientBrandImages}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap justify-between items-start px-4 md:px-40 mb-16 relative mt-6">
          <div className="bg-white text-[#0c192d] flex px-4 py-2 text-center rounded-full font-unbounded text-md mb-4">
            We're Special. Here’s Why?
          </div>
          <div className="w-full text-center md:text-left mb-0 md:mb-0 mt-3">
            <h1 className=" text-xl md:text-3xl font-bold  font-unbounded text-white">
            Result-Driven Operations for{" "}
              <span className=" text-xl md:text-3xl font-bold  font-unbounded  text-start lg:block text-[#B5D3F5]">
              Rock-Steady Success! 
              </span>
            </h1>
          </div>
        </div>

        <div className="card flex flex-wrap px-4 gap-4 justify-center">
          {aboutUsCardData.map((data, index) => (
            <div
              key={index}
              className="item flex-shrink sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8"
            >
              <Card
                description={data.description}
                link={data.link}
                icon={data.icon}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>

       {/* Image Gallery    */}
      <div className="gallery pt-9">
        <div className="button flex justify-center">
          <TitleBox title={"Gallery"} />
          
        </div>
        <div className="text-center mt-4">
        <h1 className=" text-xl md:text-3xl font-bold  font-unbounded text-[#0c192d]">
          Snapshots of Our Agency!
        </h1>
      </div>
        <div className="lg:block hidden">
          <ImageGallery />
        </div>
      </div>
      <ImageSlider/>
    </>
  );
}

export default page;
