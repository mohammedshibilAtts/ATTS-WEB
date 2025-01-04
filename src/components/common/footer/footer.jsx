import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Logo from "../../../assests/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B1320] text-[#c4cdd5] pb-2 pt-5 sm:pb-2 w-full ">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex flex-col ms-9 lg:flex-row gap-8 lg:gap-12">
          {/* Left Half - Company Description */}
          <div className="lg:w-1/2">
            <Image src={Logo} alt="ATTS Logo" className="mb-4 max-w-[200px] sm:max-w-none" />
            <p className=" leading-relaxed mb-6 pr-0 lg:pr-8 max-w-2xl">
              We make your brand speak for you! <br /> ATTS Technologies is a creatively driven company offering digital solutions for your business growth. As a trailblazing software company and a leading digital marketing agency, we deliver what your brand needs to thrive. From ideation to execution, we have your back. Relax and watch your brand grow as dollars flow into your account!
            </p>
          </div>

          {/* Right Half - Menu, Services, and Product */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 ">
              {/* Menu */}
              <div className="md:ms-9">
                <h3 className="text-[#B5D3F5] font-unbounded text-lg ">Menu</h3>
                <ul className="space-y-2 cursor-pointer text-sm sm:text-base ">
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={'/'}>Home </Link> </li>
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={'about'}>About </Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={'blog'}>Blogs </Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={'career'}> Careers</Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={'lets-talk'}> Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-[#B5D3F5] font-unbounded text-lg ">Services</h3>
                <ul className="space-y-2 cursor-pointer text-sm sm:text-base">
                  <li className="hover:text-white transition-colors xl:hover:underline"><Link href={'web-development'}>Web Design & Development </Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline"><Link href={"app-development"}>Mobile app Development </Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline"> <Link href={"seo-analysis"}>SEO</Link>  </li>
                  <li className="hover:text-white transition-colors xl:hover:underline">  <Link href={"sm-analysis"}>Social Media Marketing</Link></li>
                  <li className="hover:text-white transition-colors xl:hover:underline">  <Link href={"product-photography"}>Photography</Link> </li>
                  <li className="hover:text-white transition-colors xl:hover:underline">  <Link href={"performance-marketing"}>Performance Marketing</Link></li>
                </ul>
              </div>

              {/* Product - Hidden on smallest screens, shown in Services column */}
              <div className="hidden sm:block">
                <h3 className="text-[#B5D3F5] font-unbounded text-lg ">Product</h3>
                <ul className="space-y-2 cursor-pointer text-sm sm:text-base">
                  <li className="hover:text-white transition-colors xl:hover:underline"><Link href={'https://aurumm.co/products/aupay/'}>Aurumm</Link></li>
      
                </ul>
              </div>

              {/* Product - Shown only on smallest screens */}
              <div className="sm:hidden">
                <h3 className="text-[#B5D3F5] font-unbounded text-lg mb-3">Product</h3>
                <ul className="space-y-2 cursor-pointer text-sm">
                  <li className="hover:text-white transition-colors xl:hover:underline"><Link href={'https://aurumm.co/'}>Aurumm</Link></li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-3 bg-[#1c2a41] p-3 sm:p-4 rounded-lg hover:bg-[#243451] transition-colors xl:hover:underline">
            <MdOutlineMail className="text-xl sm:text-2xl flex-shrink-0" />
            <span className="text-sm sm:text-base"><a href="mailto:Support@atts.in">Support@atts.in</a></span>
          </div>
          <div className="flex items-center gap-3 bg-[#1c2a41] p-3 sm:p-4 rounded-lg hover:bg-[#243451] transition-colors xl:hover:underline">
            <FaPhone className="text-xl sm:text-2xl flex-shrink-0" />
            <span className="text-sm sm:text-base"><a href="tel:+919874563210">+91 9874563210</a></span>
          </div>
          <div className="flex items-center gap-3 bg-[#1c2a41] p-3 sm:p-4 rounded-lg hover:bg-[#243451] transition-colors xl:hover:underline col-span-1 sm:col-span-2 lg:col-span-1">
            <CiLocationOn className="text-xl sm:text-2xl flex-shrink-0" />
            <span className="text-sm sm:text-base"><a href="https://maps.app.goo.gl/UbxWGNKe5sXsCEbc8">Mullai Nagar, Coimbatore, Tamilnadu 641041</a></span>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-5 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-base">Follow us:</span>
            <div className="flex gap-4">
              <Link href={"https://in.linkedin.com/company/atts-technologies-private-limited"}><FaLinkedinIn className="text-lg sm:text-xl hover:text-white cursor-pointer transition-colors xl:hover:underline" /></Link>
             <Link href={'https://www.facebook.com/attstechnologies'}> <FaFacebookF className="text-lg sm:text-xl hover:text-white cursor-pointer transition-colors xl:hover:underline" /></Link>
              <Link href={"https://www.instagram.com/attstechnologies/"}>              <FaInstagram className="text-lg sm:text-xl hover:text-white cursor-pointer transition-colors xl:hover:underline" /></Link>
            </div>
          </div>
          <p className="text-center text-xs sm:text-sm mt-2">
            All Copyrights Reserved. © 2024 | Design & Developed by ATTS Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;