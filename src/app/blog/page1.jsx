"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import Blog1 from "@/assests/images/blogPage1.jpg";
import Blog2 from "@/assests/images/blogPage2.jpg";
import Blog3 from "@/assests/images/blogPage3.jpg";
import Blog4 from "@/assests/images/blogPage4.jpg";
import Contactus from "@/components/contactUs/contactus";
import Link from "next/link";

function Page() {
  const blogs = [
    {
      id: 1,
      category: "Life",
      date: "27-11-2024",
      title: "Exploring the Best Mountain Destinations Around the World",
      image: Blog1,
      alt: "Travel backpack and tools",
    },
    {
      id: 2,
      category: "Travel",
      date: "27-11-2024",
      title: "Exploring the Best Mountain Destinations Around the World",
      image: Blog2,
      alt: "Red rock formations",
    },
    {
      id: 3,
      category: "Travel",
      date: "27-11-2024",
      title: "Exploring the Best Mountain Destinations",
      image: Blog3,
      alt: "Mountain view",
    },
    {
      id: 4,
      category: "Travel",
      date: "27-11-2024",
      title: "Exploring the Best Mountain Destinations",
      image: Blog4,
      alt: "Hikers on mountain",
    },
  ];

  // State to track current banner index
  const [bannerIndex, setBannerIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true); // Start transition
      setTimeout(() => {
        setBannerIndex((prev) => (prev + 1) % blogs.length);
        setTransitioning(false); // End transition
      }, 500); // After 500ms delay, change banner
    }, 5000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <div className={`relative transition-all duration-500 ease-in-out ${transitioning ? 'transform translate-y-full' : ''}`}>
          {/* Banner Image */}
          <div className="image">
            <Image
              src={blogs[bannerIndex].image}
              alt="banner"
              className="w-full h-[600px] object-cover object-center"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        </div>

        {/* Text content */}
        <div className="absolute inset-0 flex justify-center items-center px-2 md:px-16 bg-opacity-40 bg-black">
          <div className="flex sm:flex-row flex-col sm:space-x-8 space-y-4 sm:space-y-0 w-full sm:w-auto items-center sm:items-start text-white">
            {/* Left side - Headings */}
            <div className="sm:w-1/2 text-center sm:text-left mt-0 md:mt-2 px-20">
              <h1 className="font-unbounded text-2xl lg:text-3xl mb-3">
                Read <span className="font-thin">More</span>
              </h1>
              <h1 className="font-unbounded text-2xl lg:text-3xl mb-3">
                Learn <span className="font-thin">More</span>
              </h1>
              <h1 className="font-unbounded text-2xl lg:text-3xl mb-3">
                Grow <span className="font-thin">More</span>
              </h1>
            </div>

            {/* Right side - Description */}
            <div className="sm:w-1/2 px-2 sm:text-left">
              <p>
                Stay up to date with the latest innovations, expert insights,
                and tech trends from ATTS Technologies. Whether you're looking
                for solutions, tips, or industry updates, our refreshed blog has
                it all. Dive in now and stay ahead of the curve!
              </p>

              <button className="bg-transparent border font-unbounded mt-5 text-white px-4 py-2 rounded-full w-fit text-sm">
               <Link href={`blog/${bannerIndex}`}> Read Here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[repeat(4,minmax(300px,1fr))] md:grid-rows-[repeat(3,minmax(300px,1fr))] lg:grid-rows-[repeat(2,minmax(400px,1fr))] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {/* Left column - large card */}
        <div className="row-span-1 md:row-span-3 md:col-span-1">
          <BlogCard {...blogs[0]} />
        </div>

        {/* Right top - wide card */}
        <div className="row-span-1 md:col-span-1 lg:col-span-2">
          <BlogCard {...blogs[1]} />
        </div>

        {/* Bottom right cards */}
        <div className="row-span-2 md:col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
          <BlogCard {...blogs[2]} />
          <BlogCard {...blogs[3]} />
        </div>
      </div>

      <div className="bg-white px-8 md:px-32">
        <Contactus />
      </div>
    </>
  );
}

const BlogCard = ({ category, date, title, image, alt }) => (
  <div className="relative w-full h-full overflow-hidden">
    <div className="absolute inset-x-0 top-0 flex justify-between items-center p-4 md:p-6 z-10 font-unbounded">
      <span className="text-sm text-white">{category}</span>
      <span className="text-sm text-white bg-black/20 px-3 py-1 rounded-full">
        {date}
      </span>
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white z-10">
      <h2 className="text-lg md:text-xl font-unbounded mb-4">{title}</h2>
      <button className="bg-transparent border font-unbounded text-white px-4 py-2 rounded-full w-fit text-sm">
        Read Here
      </button>
    </div>
    <Image src={image} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/30" />
  </div>
);

export default Page;
