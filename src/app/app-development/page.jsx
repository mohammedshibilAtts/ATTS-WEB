"use client";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import MobileImage1 from "@/assests/images/mobileDev1.webp";
import MobileImage2 from "@/assests/images/mobileDev2.webp";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import { AppDevelopmentService } from "@/constants/constant";
import Contactus from "@/components/contactUs/contactus";

function Page() {
  return (
    <>
      {/* Header */}

      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-30 pt-9 mt-5">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 text-start md:text-start sm:text-left sm:h-auto sm:py-3 px-4 ">
            <h1 className="font-unbounded text-2xl lg:text-3xl text-[#003067]">
              Craft the perfect app for your brand,
              <span className="text-black">
                {" "}
                with Coimbatore's  finest mobile app developers. 
              </span>
            </h1>
          </div>

          <div className="flex-1 sm:ml-4 p-4 text-sm sm:text-base">
            <h3 className="font-unbounded text-xl ps-0 md:ps-6 lg:text-2xl ">
              At ATTS Technologies Pvt. Ltd.
            </h3>
            <p className="text-start lg:text-left ps-0 md:ps-6">
              We have a team of techies who intend to craft solutions to develop
              your business. With intellectually equipped experience, our team
              develops applications - YOUR application! We ensure your mobile
              application reflects your brand and provides an extraordinary user
              experience.   Our tech team is here to collaborate and develop a
              mobile application. Whether it can be iOS or Android we deliver
              you the best to elevate your online presence and credibility in
              the industry. Connect with us, we develop solutions to develop
              your brand.
            </p>
          </div>
        </div>
      </div>

      {/* Our Service */}
      <div className="bg-white  px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-4">
        <div className="flex flex-col justify-center items-center">
          <div className="title-box mb-6 sm:mb-8">
            <TitleBox title={"Our Services"} />
          </div>

          <div className="description px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="font-unbounded text-2xl md:text-3xl text-black">
              The Perfect Mobile App, Designed with{" "}
              <span className="font-unbounded text-2xl md:text-3xl  text-start md:text-center text-[#003067] md:block">
                Your Vision in Mind.
              </span>
            </h1>
          </div>
        </div>

        {/* Static Web Section */}
        <StaggeredSection>
          <div className="image flex justify-center items-center">
            <Image
              src={MobileImage1}
              className="rounded-3xl object-contain h-[300px] md:h-[500px] lg:h-[650px]"
              alt="Web Development"
            />
          </div>
        </StaggeredSection>

        <div className="Static-Web mt-12 px-4 sm:px-8 md:px-16 lg:px-2">
          <div className="title mb-4">
            <h1 className="font-unbounded text-2xl md:text-3xl text-center  text-[#003067]">
              Crafting Excellence for Android & iOS Devices
            </h1>
          </div>

          <div className="description">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              As a preeminent app development company in Coimbatore, ATTS
              Technologies specializes in high-performance mobile apps for
              Android and iOS. Our expert team creates seamless, intuitive, and
              feature-rich applications that deliver exceptional user
              experiences across devices. Whether building for Android, iOS, or
              both, we ensure your app performs flawlessly & drives business
              success.
            </p>
          </div>
        </div>

        {/* dynamic web section */}

        <StaggeredSection
          staggerAmount={1.2}
          children={
            <div className="image flex justify-center items-center mt-12">
              <Image
                src={MobileImage2}
                className="rounded-3xl object-contain h-[300px] md:h-[500px] lg:h-[650px]"
                alt="Web Development"
              />
            </div>
          }
        ></StaggeredSection>

        <div className="Static-Web mt-12 px-4 sm:px-8 md:px-16 lg:px-2">
          <div className="title mb-4">
            <h1 className="font-unbounded  text-center text-2xl md:text-3xl  text-[#003067]">
              User experience design
            </h1>
          </div>
          <div className="description">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Being the finest app development company in Coimbatore, our core
              of mobile app development is a user-centric approach. We ensure
              every application is designed to deliver an exceptional user
              experience. Our priorities are seamless navigation, fast
              performance, and intuitive interfaces to develop apps that are
              easy to use and engage with. Whether on Android or iOS, our focus
              is on understanding user needs and designing applications that
              enhance user experience and drive results.
            </p>
          </div>
        </div>
      </div>

      {/* What we can help you with */}

      <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-32 pt-9 mt-5">
        <div className="titleBox flex justify-center md:justify-start">
          <TitleBox title={"What we can help you with"} className={"w-72"} />
        </div>
        <div className="title  flex flex-col sm:flex-row  justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6">
          <div className=" md:w-3/4 sm:py-3 px-4">
            <h1 className="font-unbounded text-2xl sm:text-3xl md:text-4xl text-black ">
            A dynamic team of mobile app experts committed to building an app that {" "}
              <span className="text-[#003067]">
              stands above the rest
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

        <div className="grid grid-cols-1 px-4  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
          {AppDevelopmentService.map((item, index) => (
            <div
              className="bg-[#0000000D] shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg cursor-pointer"
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
      </div>

      {/* Contact us */}

      <div className="bg-white  px-8  md:px-32 mt-6  lg:mt16">
        <Contactus />
      </div>
    </>
  );
}

export default Page;
