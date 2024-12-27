"use client";
import FadeMotion from "@/components/animation/fadeMotion";
import StaggeredSection from "@/components/animation/StaggeredSection";
import Button from "@/components/button/button";
import JobListings from "@/components/career/career";
import TitleBox from "@/components/titleBox/titleBox";
import Image from "next/image";
import React from "react";
import TeamWorkIcon from '@/assests/images/teamwork.svg'
import SecuredFuture from '@/assests/images/SecuredFuture.svg'
import LearningOpportunity from '@/assests/images/LearningOpportunity.svg'
import UpgradedSkills from '@/assests/images/UpgradedSkills.svg'
import Contactus from "@/components/contactUs/contactus";

function page() {
  return (
    <>
      {/* hero */}
      <FadeMotion>
        <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-30 mt-8">
          <div className="Static-Web mt-12 px-4 sm:px-8 md:px-16 lg:px-30">
            <div className="title mb-4">
              <h1 className="font-unbounded text-2xl md:text-3xl text-start md:text-center  ">
                Find Your Future with ATTS Technologies{" "}
                <span className="text-[#003067] md:block font-unbounded text-2xl md:text-3xl">
                  Where Work Meets Fun!
                </span>
              </h1>
            </div>

            <div className="desc flex justify-center mt-9">
              <div className="title mb-4 md:w-[700px] ">
                <p>
                  Are you looking for opportunities to grow and learn with fun?
                  We have future-proof opportunities for you! Accelerate your
                  career with a company that gives you the space to do amazing
                  things and unveil your creativity Join Us - Your Dream Job is
                  Just a Click Away!
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeMotion>

     <div className=" w-full">
     <FadeMotion>
        <div className="bg-white   px-8 pt-9 sm:px-8 md:px-16 mt-5 ">
          <div className="title mb-4 sm:px-8 md:px-16 lg:px-30 ">
            <h1 className="font-unbounded text-2xl md:text-3xl text-start  ">
              Explore Careers at {""}
              <span className="text-[#003067] font-unbounded text-2xl md:text-3xl">
                ATTS Technologies
              </span>
            </h1>
            <div className="career ">
              <JobListings />
            </div>
          </div>
        </div>
      </FadeMotion>
     </div>

      <div className="bg-white px-8 sm:px-8 md:px-16 lg:px-32 pt-9 mt-5 mb-6">
        <div className="titleBox flex justify-center md:justify-start">
          <TitleBox title={"What we can help you with"} className={"w-72"} />
        </div>
        <StaggeredSection>
          <div className="title flex flex-col sm:flex-row justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-start sm:text-left  flex-1">
              <h1 className="font-unbounded text-2xl sm:text-3xl md:text-4xl text-black">
                Because If You've Got The Talent, <span className="md:block"> We've Got The {" "}
                <span className="text-[#003067]">
                  Opportunity of a Lifetime.
                </span>
                </span>
              </h1>
            </div>
          </div>
        </StaggeredSection>
        <div className="content pt-16 flex flex-col lg:flex-row gap-8 px-4 lg:px-8">
      <div className="left lg:flex-1">
        <p className="text-lg leading-relaxed mb-8">
          At ATTS Technologies, we're all about growth and learning. We
          create an environment where talent thrives and helps shape the
          future of tech. You'll have the chance to learn, earn, and grow
          with us while working with a variety of industries. The best part?
          You'll walk away with the experience that makes you stand out!
        </p>
      </div>
      
      <div className="right lg:flex-1 space-y-4">
      {/* Top row cards */}
      <div className="card flex flex-col sm:flex-row gap-4">
        <div className="flex-1 p-4">
          <div className="icon bg-[#003067] rounded-md p-3 w-24 mb-3 flex items-center justify-center">
            <Image src={TeamWorkIcon} alt="Team work" width={40} height={20}/>
          </div>
          <h3 className="text-[#003067] text-xl font-bold mb-2">Team work</h3>
          <div className="content">
            <p className="text-[#003067] font-medium text-sm">
              For us, teamwork isn't just a word- it's how we roll. We collaborate, innovate, and grow together to achieve big things.
            </p>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="icon bg-[#003067] rounded-md  p-3 w-24 mb-3 flex items-center justify-center">
            <Image src={SecuredFuture} alt="SecuredFuture" width={40} height={20}/>
          </div>
          <h3 className="text-[#003067] text-xl font-bold mb-2">Secured Future</h3>
          <div className="content">
            <p className="text-[#003067] font-medium text-sm">
              We're all about building a solid future – both for the company and for you. With us, you can count on stability, growth, and endless opportunities ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row cards */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 p-4">
          <div className="icon bg-[#003067] rounded-md  p-3 w-24 mb-3 flex items-center justify-center">
            <Image src={LearningOpportunity} alt="LearningOpportunity" width={40} height={20}/>
          </div>
          <h3 className="text-[#003067] text-xl font-bold mb-2">Learning Opportunity</h3>
          <div className="content">
            <p className="text-[#003067] font-medium text-sm">
              Here, learning never stops. We provide real-world opportunities that let you grow your skills while staying ahead of the curve in tech.
            </p>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="icon bg-[#003067] rounded-md  p-3 w-24 mb-3 flex items-center justify-center">
            <Image src={UpgradedSkills} alt="UpgradedSkills" width={40} height={20}/>
          </div>
          <h3 className="text-[#003067] text-xl font-bold mb-2">Upgraded Skills</h3>
          <div className="content">
            <p className="text-[#003067] font-medium text-sm">
              Ready to level up? We help you upgrade your skills and stay on top of the latest trends, so you're always in demand in the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>

      <div className="bg-white  px-8  md:px-32  ">
        <Contactus/>
      </div>
    </>
  );
}

export default page;
