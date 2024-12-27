"use client";
import FadeMotion from "@/components/animation/fadeMotion";
import TitleBox from "@/components/titleBox/titleBox";
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Contactus from "@/components/contactUs/contactus";
import Link from "next/link";

function page() {
  return (
    <>
      {/* Hero Section */}
      <FadeMotion>
        <div className="bg-white sm:px-8 md:px-16 lg:px-30 mt-8">
          <div className="max-w-6xl mx-auto px-4 py-16">
            {/* Innovation Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold max-w-xs text-center sm:text-left">
                READY TO
                <br />
                INNOVATE?
              </h2>
              <div className="bg-black w-32 h-48 rounded-lg flex items-center justify-center mt-8 sm:mt-0">
                <span className="text-white text-2xl font-bold">AOS</span>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center">
                <TitleBox title={"Contact Us"} />
              </div>
              <h3 className="text-2xl md:text-3xl font-unbounded mt-5">
                Ready to Bring Your Ideas to Life?{" "}
                <span className="text-[#003067] md:block">
                  Contact Us Today!
                </span>
              </h3>
            </div>

            {/* Contact Details Card */}
            <div className="bg-black text-white rounded-3xl p-4 sm:p-6 md:p-8">
              {/* Top Grid - Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Phone Numbers */}
                <div className="bg-[#FFFFFF33] rounded-2xl p-4 sm:p-5">
                  <h4 className="font-bold mb-3 sm:mb-4">Phone:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    <li className="text-sm sm:text-base">0422 4957575</li>
                    <li className="text-sm sm:text-base">+91 9952807431</li>
                    <li className="text-sm sm:text-base">+91 9952828633</li>
                  </ul>
                </div>

                {/* Address */}
                <div className="bg-[#FFFFFF33] rounded-2xl p-4 sm:p-5">
                  <h4 className="font-bold mb-3 sm:mb-4">Address:</h4>
                  <p className="text-sm sm:text-base text-wrap">
                    4th Floor, Sai Akshayam, 282/2, Marudhamalai RD, Mullai
                    Nagar, Coimbatore, Tamilnadu 641041
                  </p>
                </div>

                {/* Email */}
                <div className="bg-[#FFFFFF33] rounded-2xl p-4 sm:p-5">
                  <h4 className="font-bold mb-3 sm:mb-4">Email:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    <li className="text-sm sm:text-base">support@atts.in</li>
                    <li className="text-sm sm:text-base">careers@atts.in</li>
                  </ul>
                </div>
              </div>

              {/* Bottom Grid - Hours & Social */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
                {/* Working Hours */}
                <div className="bg-[#FFFFFF33] rounded-2xl p-4 sm:p-5">
                  <h4 className="font-bold mb-3 sm:mb-4">Working Hours:</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base">
                      Mon to Fri | 09:00am - 06:00pm
                    </p>
                    <p className="text-sm sm:text-base">
                      Sat | 09:00am - 06:00pm (Alternative Weeks Only)
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-[#FFFFFF33] rounded-2xl p-4 sm:p-5">
                  <h4 className="font-bold mb-3 sm:mb-4">Follow Us:</h4>
                  <div className="flex gap-4 sm:gap-6 items-center justify-center sm:justify-start">
                    <Link
                      href="https://in.linkedin.com/company/atts-technologies-private-limited"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/attstechnologies"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/atts__technologies/"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeMotion>

      <div className="map w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.22787957467!2d76.91146069678958!3d11.021522000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859db78f21715%3A0xbf8127d4d5e81ac2!2sATTS%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1734778390440!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: "0",
            maxWidth: "100%",
            maxHeight: "900px",
            height: "500px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact us */}

      <div className="bg-white  px-8  md:px-32  ">
        <Contactus />
      </div>
    </>
  );
}

export default page;
