import Image from 'next/image'
import React from 'react'
import Banner from '@/assests/images/blogBanner.jpg'
import Blog1 from '@/assests/images/blogPage1.jpg'
import Blog2 from '@/assests/images/blogPage2.jpg'
import Blog3 from '@/assests/images/blogPage3.jpg'
import Blog4 from '@/assests/images/blogPage4.jpg'
import Contactus from "@/components/contactUs/contactus";

function page() {
  return (
    <>
    <div className="relative w-full">
  <div className="relative">
    <div className="image">
      <Image
        src={Banner}
        alt="workenv"
        className="w-full h-[600px] object-cover  "
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  </div>
  

  {/* Text content */}
  <div className="absolute inset-0 flex justify-center items-center px-2 md:px-16 bg-opacity-40 bg-black">
    <div className="flex sm:flex-row flex-col sm:space-x-8 space-y-4 sm:space-y-0 w-full sm:w-auto items-center sm:items-start text-white">
      
      {/* Left side - Headings */}
      <div className="sm:w-1/2 text-center sm:text-left mt-0 md:mt-2">
        <h1 className="font-unbounded text-2xl lg:text-3xl mb-2">Innovating Ideas..!</h1>
        <h1 className="font-unbounded text-2xl lg:text-3xl mb-2">Crafting Designs..!</h1>
        <h1 className="font-unbounded text-2xl lg:text-3xl mb-2">Building Brands..!</h1>
      </div>

      {/* Right side - Description */}
      <div className="sm:w-1/2 px-2 sm:text-left ">
        <p className="">
          We as a team believe in the mantra “We Grow When We Share”. Our team is always eager to learn and share. We’ve created a lively environment where growth, innovation, and great work-life balance are all part of the package. We go beyond offering just a job; we provide opportunities to grow and thrive for career advancement. We empower you to unlock your full potential while driving the company’s success.
          <br />
          <br />
          Our team’s expertise and creativity are the secret recipe for our success. We’re all about tapping into their talents to drive innovation and keep growing!
        </p>
      </div>
    </div>
  </div>
</div>



<div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  h-[1200px]">
      {/* Left column - backpack image */}
      <div className="relative row-span-3 sm:col-span-2 lg:col-span-1 bg-gray-100">
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">Life</span>
            <span className="text-sm text-gray-300">27-11-2024</span>
          </div>
          <h2 className="text-xl font-bold mb-4">Exploring the Best Mountain Destinations Around the World</h2>
          <button className="bg-white text-black px-4 py-2 rounded-full w-fit">
            Read Here
          </button>
        </div>
        <Image 
          src={Blog1}
          alt="Travel backpack and tools"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Top right - red rocks image */}
      <div className="relative col-span-1 sm:col-span-1 lg:col-span-2 bg-gray-100">
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">Travel</span>
            <span className="text-sm text-gray-300">27-11-2024</span>
          </div>
          <h2 className="text-xl font-bold mb-4">Exploring the Best Mountain Destinations Around the World</h2>
          <button className="bg-white text-black px-4 py-2 rounded-full w-fit">
            Read Here
          </button>
        </div>
        <Image 
          src={Blog2}
          alt="Red rock formations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Bottom right split - two mountain images */}
      <div className="row-span-2 col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-2 ">
        {/* Left mountain image */}
        <div className="relative bg-gray-100">
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">Travel</span>
              <span className="text-sm text-gray-300">27-11-2024</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Exploring the Best Mountain Destinations</h2>
            <button className="bg-white text-black px-4 py-2 rounded-full w-fit">
              Read Here
            </button>
          </div>
          <Image 
            src={Blog3}
            alt="Mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right mountain image */}
        <div className="relative bg-gray-100">
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">Travel</span>
              <span className="text-sm text-gray-300">27-11-2024</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Exploring the Best Mountain Destinations</h2>
            <button className="bg-white text-black px-4 py-2 rounded-full w-fit">
              Read Here
            </button>
          </div>
          <Image 
            src={Blog4}
            alt="Hikers on mountain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
    </div>





<div className="bg-white  px-8  md:px-32  ">
        <Contactus />
      </div>
</>
  )
}

export default page