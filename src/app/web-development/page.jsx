"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import WebDevPng from "@/assests/images/webDevelopment.jpg";
import WebDevPng2 from "@/assests/images/webDevelopment2.jpg";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import { webDevelopmentService } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";
import ScrollMotion from "@/components/animation/scrollMotion";

function Page() {
  return (
    <>
      {/* Header */}

      <ScrollMotion>
      <div className="bg-white px-4  xl:px-30  mt-2">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 text-start md:text-start sm:text-left sm:h-auto sm:py-3 md:px-4 flex items-center ">
            <h1 className=" text-responsive text-black">
              We’re the website developers in Coimbatore,
              <span className="text-[#003067]">
                {" "}
                crafting the web presence your brand deserves!
              </span>
            </h1>
          </div>

          <div className="flex-1 mt-8 lg:mt-0 sm:ml-4  xl:mt-0 xl:p-4 text-sm sm:text-base">
            <h3 className=" text-[#003067]   ps-0 xl:ps-6  " style={{"fontFamily":"Zoho-Sans","fontSize":"20px"}}> 
              At ATTS Technologies Pvt. Ltd.
            </h3>
            <p className="text-start lg:text-left ps-0 xl:ps-6 mt-3">
              We offer you the best website, designed and crafted to your
              brand’s voice by a team backed by years of industry experience and
              a proven track record. From UI/UX design to wireframing, research,
              and development, we develop with a keen eye in every aspect of
              design. Whether you’re a start-up or an established business, we
              tailor solutions to meet your brand’s needs.   
              <br /> We work with you to craft a brand-reflecting website that
              engages your audience, ensures smooth functionality, and delivers
              results. Let’s elevate your online presence and make your website
              shine!
            </p>
          </div>
        </div>
      </div>
      </ScrollMotion>

      {/* Our Service */}
      
      <div className="bg-white  px-4  xl:px-32 pt-9 mt-4">
        <ScrollMotion>
        <div className="flex flex-col justify-center items-center">
          <div className="title-box mb-6 sm:mb-8">
            <TitleBox title={"Our Services"} />
          </div>

          <div className="description md:px-4  xl:px-32">
            <h1 className=" text-responsive text-black">
              A Website Designed to Match{" "}
              <span className=" text-responsive  text-start md:text-center text-[#003067] md:block">
                Your Perfect Vision.
              </span>
            </h1>
          </div>
        </div>
        </ScrollMotion>
        {/* Static Web Section */}
        <ScrollMotion>
          <div className="image flex justify-center items-center mt-12">
            <Image
              src={WebDevPng}
              className="rounded-3xl object-cover"
              alt="Web Development"
            />
          </div>
       

        <div className="Static-Web mt-12 px-4  xl:px-2">
          <div className="title mb-4">
            <h1 className=" text-responsive text-center  text-[#003067]">
              Static Website
            </h1>
          </div>

          <div className="description md:px-10">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed  text-center">
              Why Choose Static Websites? Imagine a user visits your website and
              loves it for the way it responds fast and provides an
              extraordinarily smooth user experience on all devices. That’s what
              a static website can do to your brand. With clean designs and
              on-the-spot navigation, they deliver both performance and
              reliability. Whether on desktop or mobile, a static site furnishes
              a seamless experience that enhances user engagement.   <br />Take your
              web presence to the next level with a custom static solution.
              Contact us today! 
            </p>
          </div>
        </div>
        </ScrollMotion>
        {/* dynamic web section */}

        <ScrollMotion>
            <div className="image flex justify-center items-center mt-12">
              <Image
                src={WebDevPng2}
                className="rounded-3xl object-cover"
                alt="Web Development"
              />
            </div>

        <div className="Static-Web mt-12 px-4  xl:px-2">
          <div className="title mb-4">
            <h1 className=" text-responsive text-center  text-[#003067]">
              Dynamic Website
            </h1>
          </div>
          <div className="description md:px-10">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
              Why Choose Dynamic Websites? Imagine if your website could provide
              a unique and interactive user experience for every visitor. Feels
              amazing, doesn’t it? With real-time content updates, personalized
              features, and seamless integration with databases, dynamic sites
              offer a rich, engaging experience for visitors. If you’re looking
              to craft a website for e-commerce, blogs, or customer portals,
              then a dynamic website would be your brand speaker. <br />
               Drive growth
              and engagement with a dynamic website tailored to your business
              objectives. Get in touch to see how our solutions can make a
              difference. 
            </p>
          </div>
        </div>
        </ScrollMotion>
      </div>

      {/* What we can help you with */}
      <ScrollMotion>
      <div className="bg-white px-4  xl:px-32 pt-9 mt-5">
        <div className="titleBox flex justify-center md:justify-start md:px-4">
          <TitleBox title={"What we can help you with"} className={"w-72"} />
        </div>
        <div className="title  flex flex-col sm:flex-row  justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6">
          <div className=" md:w-3/4 sm:py-3 md:px-4">
            <h1 className=" text-responsive text-black ">
              We’re a team of Webbies, ready to create a website{" "}
              <span className="text-[#003067]">
                you’ll be proud to show off.
              </span>
            </h1>
          </div>
          <div className="text-center sm:text-left  group   flex-1 flex justify-center md:justify-end h-full ">
            <Button
              title={"Get in Touch"}
              className="mt-4 sm:mt-0"
              link="/lets-talk"
            />
          </div>
     
        </div>
        <ScrollMotion>
        <div className="grid grid-cols-1 px-4  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {webDevelopmentService.map((item, index) => (
            <div
              className="bg-[#e2d4d41a] border hover:scale-105 p-6  transition-transform transform  rounded-lg cursor-pointer"
              key={index}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#003067] flex items-center justify-center mr-4 p-3 rounded-xl transition-all transform hover:scale-110">
                  <Image
                    src={item.icon}
                    alt="Rocket Icon"
                    width={40}
                    height={40}
                    className="object-cover transition-transform"
                  />
                </div>
                <h3 className="text-lg font-medium transition-colors ">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        </ScrollMotion>
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
