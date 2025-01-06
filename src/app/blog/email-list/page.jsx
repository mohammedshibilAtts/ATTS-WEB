"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Banner from "@/assests/images/blogBanner.jpg";

const blogData = [
  {
    title: "1",
    subtitle: "Newest design to Try Better",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    author: "Random Resources",
    date: "27.11.2024",
    bannerImage: Banner,
    sections: [
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
    ],
    quote: "Lorem Ipsum is simply dummy text",
  },
  {
    title: "2",
    subtitle: "Newest design to Try Better",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    author: "Random Resources",
    date: "27.11.2024",
    bannerImage: Banner,
    sections: [
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
    ],
    quote: "Lorem Ipsum is simply dummy text",
  },
  {
    title: "3",
    subtitle: "Newest design to Try Better",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    author: "Random Resources",
    date: "27.11.2024",
    bannerImage: Banner,
    sections: [
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
      {
        title: "Lorem Ipsum is simply dummy text",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lacus...",
        image: Banner,
      },
    ],
    quote: "Lorem Ipsum is simply dummy text",
  },
];

const BlogLayout = () => {
  const { id } = useParams();
  const blog = blogData[id];

  // Check if the id is valid
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-6">Oops! Page Not Found</h1>
          <p className="text-lg text-gray-700 mb-4">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <p className="text-gray-500 mb-4">
            Please check the URL or return to the homepage.
          </p>
          <a href="/" className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition-colors">
            Go Back to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className=" ">

      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src={blog.bannerImage}
          alt={blog.title}
          className="w-full h-full object-cover"
          width={1000}
          height={500}
        />
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start text-white z-20">
          <span className="text-sm">By {blog.author}</span>
          <span className="text-sm">{blog.date}</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {blog.title}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {blog.subtitle}
          </h2>
          <p className="text-center max-w-2xl">
            {blog.description}
          </p>
        </div>
      </div>

      <div className="px-5 mb-9">
        {/* Article Section 1 */}
        {blog.sections.map((section, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 mb-16">
            {index % 2 === 0 ? (
              <>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[300px] object-cover"
                    width={1000}
                    height={300}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#003067] mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center md:order-1">
                  <h3 className="text-2xl font-bold text-[#003067] mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
                <div className="rounded-lg overflow-hidden md:order-2">
                  <Image
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[300px] object-cover"
                    width={1000}
                    height={300}
                  />
                </div>
              </>
            )}
          </div>
        ))}

        {/* Quote Section */}
        {blog.quote && (
          <div className="bg-gray-900 rounded-lg p-8 text-white">
            <blockquote className="text-2xl md:text-3xl font-bold text-center">
              {blog.quote}
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogLayout;