"use client"
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ThumbsUp, Share2, Bookmark, ChevronUp } from 'lucide-react';

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const blogPost = {
    title: "How Many Backlinks Needed Per Month to Your Website?",
    author: "SEO Expert",
    date: "February 5, 2022",
    readTime: "10 min read",
    featuredImage: "/api/placeholder/1200/600",
    secondaryImage: "/api/placeholder/800/400",
    content: {
      introduction: `This is perhaps the most asked question; by now, almost every person in the SEO industry has given the most annoying answer. "It varies from time to time..." Well, today, we will try to answer this question!`,
      sections: [
        {
          id: "what-are-backlinks",
          title: "What Are Backlinks?",
          content: `As many of you know that backlinks play a significant role in SEO. Backlinks will help you rank your website to increase your organic traffic. You might have seen blogs with statistics, news, examples, etc. Have you noticed hyperlinks to other websites? Maybe everyone has it. These contextual links are called backlinks, also called inbound links. It is a hyperlink from one website to another website. Contextual links are referring to another topic to the reader by anchoring relevant words.`
        },
        {
          id: "dofollow-nofollow",
          title: "What are Dofollow and Nofollow backlinks?",
          content: `It's no top secret that backlinks are significant for SEO. They are among the most powerful ranking factors and can thrust your site to the top or pull it down. Generally, there are two types of backlinks: one is "Dofollow" and another one "Nofollow" backlinks.`
        },
        {
          id: "organic-backlinks",
          title: "Can you get backlinks organically for your website?",
          content: `There's no one-size-fits-all answer to this question, but you can build your best link-building strategy for the best way to get organic backlinks depends on the type of site you're targeting, the quality of your content, and the amount of effort you're willing to put in.`
        },
        {
          id: "backlinks-needed",
          title: "How many backlinks are needed to rank your website?",
          content: `Is it possible to tell how many bricks are required to build a good house? Or, how many grains of rice would you need to soothe your appetite? A few people can reside in a house with minimal bricks and a single room, and others require a stately home. Likewise, some people only need a little rice in their food, while others live only on rice.`
        }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={blogPost.featuredImage}
              alt="Featured image showing backlink strategy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-60">
              <nav className="space-y-1">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                {blogPost.content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <article className="prose lg:prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">{blogPost.content.introduction}</p>
              
              {/* First Two Sections */}
              {blogPost.content.sections.slice(0, 2).map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </section>
              ))}

              {/* Second Image */}
              <div className="my-12">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={blogPost.secondaryImage}
                    alt="Backlink types and strategies"
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-gray-50 px-4 py-3">
                    <p className="text-sm text-gray-600 italic">
                      Different types of backlinks and their impact on SEO
                    </p>
                  </div>
                </div>
              </div>

              {/* Remaining Sections */}
              {blogPost.content.sections.slice(2).map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </section>
              ))}
            </article>

            {/* Article Footer */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <ThumbsUp size={20} />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bookmark size={20} />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Page;