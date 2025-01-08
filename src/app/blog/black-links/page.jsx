"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  User,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronUp,
} from "lucide-react";
import banner from "../../../assests/images/backlinks2.webp";
import BlogPng from "../../../assests/images/backlinks1.webp";
import Image from "next/image";

const Section = ({ section }) => {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-2xl font-unbounded text-gray-900 mb-4">{section.title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">
        {section.content && (
          <div className="whitespace-pre-line">{section.content}</div>
        )}
        {section.bulletpoints &&
          section.bulletpoints.map((bulletGroup, index) => (
            <div key={index} className="mt-6">
              {bulletGroup.title && (
                <h3 className="font-semibold text-gray-800 mb-3">
                  {bulletGroup.title}
                </h3>
              )}
              <ul className="list-none space-y-3">
                {bulletGroup.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-2 before:bg-black before:rounded-full"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

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
          content: `This is perhaps the most asked question; by now, almost every person in the SEO industry has given the most annoying answer.
"It varies from time to time..."
Well, today, we will try to answer this question!
Before we show you how many backlinks you need per month to your website, let's understand what backlinks are and why they are essential in the first place.`,
          bulletpoints: [
            {
              title:
                "What would make someone refer to your site? There are numerous reasons to cite a link; some of the most common ones are: ",
              points: [
                "Depending on your niche, you are a trusted source of information. Linking to your website allows others to reap the benefits and prove their content.",
                "Your content has a high-quality level, which makes others want to quote it. Also, in this instance, you can prove the integrity of the information with a link.",
                "You've posted some stunning content that might interest an audience because it's niche-related. Your insights or facts may be useful to another source wishing to increase website traffic.",
              ],
            },
          ],
        },
        {
          id: "dofollow-nofollow",
          title: "What are Dofollow and Nofollow backlinks?",
          content: `It's no top secret that backlinks are significant for SEO. They are among the most powerful ranking factors and can thrust your site to the top or pull it down. 

Generally, there are two types of backlinks: one is "Dofollow" and another one "Nofollow" backlinks.

Backlinks are considered a "vote of confidence" between sites. Both Dofollow and Nofollow links play a vital role in SEO. Usually, you want to link to a site because you have observed something of value in it. 

Dofollow links tell Google that you like what you see, and as a result, the site should appear in search results. In general, Dofollow backlinks indicate that the source site suggests the target site. Of course, several factors will affect the quality of the backlinks. 

Dofollow links pass along what the SEO professionals call "link juice." The number of links determines the quality of a website. Websites can rank highly in search results based on how often they are linked to other web pages. 

Among many ranking factors, links play a key role. Linking your website with a Dofollow link allows Google and other search engines to crawl and index your site. In addition to improving search engine optimization, Dofollow links pass the PageRank authority to the destination site (or web page). `,
          bulletpoints: [
            {
              title: "Dofollow Links",
              points: [
                "Guest post links",
                "Editorial links",
                "Press release links",
                "Testimonial links",
                "Review links",
                "Resource links",
              ],
            },
            {
              title: "Nofollow Links",
              points: [
                "Paid links: These Nofollow links should contain the rel = 'sponsored' attribute and be used for ads or paid placements.",
                "UGC links: These Nofollow links should contain the rel =' ugc' attribute and be included in user-generated content (UGC) links, such as comments and forum posts.",
                "Nofollow links: This is the default Nofollow value with the rel =' nofollow' attribute that must be used when other values don't apply, and you don't want Google to connect your site with the related page",
                "Multiple rel values: You may also indicate numerous rel values as a space- or comma-separated list, such as rel =' nofollow sponsored' or rel = 'ugc nofollow'.",
              ],
            },
          ],
        },
        {
          id: "organic-backlinks",
          title: "Can you get backlinks organically for your website?",
          content: `There's no one-size-fits-all answer to this question, but you can build your best link-building strategy for the best way to get organic backlinks depends on the type of site you're targeting, the quality of your content, and the amount of effort you're willing to put in. However, some tips on getting organic inbound links that can work for most sites include`,
          bulletpoints: [
            {
              points: [
                "1. Write high-quality content - One of the best techniques to get organic backlinks is by writing high-quality content that is interesting and relevant to your target audience. This will help you stand out from the competition and interest links from influential sites and bloggers.",
                "2. Get exposure–The second-best way to get organic backlinks is by exposing your site to popular media outlets and online blogs. This can be done through PR campaigns.",
                "3. Email outreach – Another way to get organic and relevant links is by outreach emails to your niche-related blogs asking for backlinks using an effective email marketing strategy.",
                "4. Write quality guest posts – By writing quality guest posts for other sites, you can build relationships and gain valuable insights that can be beneficial when building your site",
              ],
            },
          ],
        },
        {
          id: "backlinks-needed",
          title: "How many backlinks are needed to rank your website?",
          content: `Is it possible to tell how many bricks are required to build a good house? Or, how many grains of rice would you need to soothe your appetite? A few people can reside in a house with minimal bricks and a single room, and others require a stately home. Likewise, some people only need a little rice in their food, while others live only on rice.

In the same way, the number of backlinks cannot be counted when you are looking to rank a website. Other factors, such as the quality of the content and the competition on the keywords, are also essential to understand. Apart from quality content and keywords, you must check your website's page Domain authority and keyword difficulty. In case the keyword difficulty is high, it would be difficult for you to rank your website at the top in Google.

Some websites get ranked in just a few backlinks, and others may need a thousand for the process. So, the best way to rank your website is with quality backlinks from authoritative sites and keep building them unless you get ranks.

It takes more time and effort to build links than quickly. However, link building is essential to maintaining your position in search engine results. To do this, you should check how many backlinks your competitors add per month and try to do the same for your site.

The precise amount differs based on your niche and several variables, including your homepage brand trust and the type of pages you're trying to rank.`,
        },
      ],
    },
  };

  useEffect(() => {
    blogPost.content.sections.forEach((section) => {
      sectionRefs.current[section.id] = document.getElementById(section.id);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId in sectionRefs.current) {
        const section = sectionRefs.current[sectionId];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 260;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm xl:sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-unbounded text-gray-900 mb-4">
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
            <Image
              src={banner}
              alt="Featured image showing backlink strategy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-64">
              <nav className="space-y-1">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                {blogPost.content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(section.id, e)}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-800"
                        : "text-gray-600 hover:bg-gray-100"
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
              <p className="text-xl text-gray-700 mb-8">
                {blogPost.content.introduction}
              </p>

              {/* First Two Sections */}
              {blogPost.content.sections.slice(0, 2).map((section) => (
                <Section key={section.id} section={section} />
              ))}

              {/* Second Image */}
              <div className="my-12">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={BlogPng}
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
                <Section key={section.id} section={section} />
              ))}
            </article>

           
          </main>
        </div>
      </div>
      </div>
  );
};

export default Page;
