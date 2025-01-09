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
import banner from "../../../assests/images/email_List1.webp";
import BlogPng from "../../../assests/images/email_List1.webp";
import Image from "next/image";

const Section = ({ section }) => {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-responsive  text-gray-900 mb-4">{section.title}</h2>
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
  title: "Why is Email List Building Essential for Any Business?",
  author: "SEO Expert",
  date: "February 5, 2022",
  readTime: "10 min",
  featuredImage: "/api/placeholder/1200/600", // Update with the actual image URL if needed
  secondaryImage: "/api/placeholder/800/400", // Update with the actual image URL if needed
  content: {
    introduction: `Have you thought about email list building? Do you want to build an email list, but aren't sure why?

Email list building is an essential component of any business. It is the most cost-effective and efficient way of connecting with your customers. Email marketing has been proven to be the most effective digital marketing channel for businesses.

It is estimated that 80 percent of professionals believe that email marketing is effective in acquiring and retaining customers. The more customers you have coming to you for their needs, the more likely they will be to stay with you when their needs arise again in the future.

The key to successful email list building is segmentation. Every customer has different needs and interests, so it's important to know what they want from you before you email them a campaign or offer. You can do this by using tools like Google Analytics, Mixpanel, or Hotjar to track their behaviour on your website, social media channels, and blog posts respectively. You can also do this by using surveys or asking them directly about their preferences through live chat on your website or social media channels.

Having a website and hoping people find it isn't enough. You need to go out and actively market your business. Emails are a great way to do this, with the added bonus of being able to track the performance of each email you send.

In order for your emails to be successful, you will need an email list or database with contact information for your customers or potential customers. Building that database takes time, but it doesn't have to take much of your time because there are many ways you can build it up passively.

Most people view email as one of the most effective marketing methods in existence (although some may say that it is becoming less popular because spam filters make it more difficult). It has a number of benefits:

`,
    
    sections: [
      {
        id: "whats-the-point-of-building-an-email-list",
        title: "What's the point of building an email list?",
        content: `Building an email list is the best way to maximize your reach and your marketing campaign. Having an email list boosts your chances of converting with every new customer you get.

Email lists are a crucial part of an email marketing campaign for most businesses, but it’s important to remember that there are two kinds of lists; opt-in and opted-out. Opted-in lists are made up of people who have subscribed or signed up to receive the newsletter or emails from a company. Opted-out lists are compiled through various data mining techniques and usually include people who have been contacted in some other way by the company already, such as visiting their website, watching their video on YouTube, etc.`,
      },
      {
        id: "benefits-of-building-an-email-list",
        title: "Benefits of Building an Email List",
        content: `Email is an age-old tool, but it still has a lot of benefits. Besides the fact that even your grandmother can send an email, it can also improve return on investment (ROI), audience communication, and click-through rates.

If you want to discover why emails are so essential, continue reading the blog.`,
      },
      {
        id: "email-is-personal",
        title: "Email is Personal",
        content: `Personalize your online conversations, so your users feel more human.

Your business messages can be made more personal with email. If you want, you can address each user by name and write a message for them.

Emails are not only personal in their language, but also in the technology they use. Emails go straight into people's private inboxes.`,
      },
      {
        id: "emails-are-more-popular-than-other-media-for-businesses",
        title: "Emails are more popular than other media for businesses",
        content: `In spite of all the new messaging technologies, people still prefer emails for business.

People mainly communicate with friends and family via social media, but they use email to conduct business.

Thus, to do more business, focus on a mailing list.`,
      },
      {
        id: "build-intimate-relationships-with-users-with-emails",
        title: "Build Intimate Relationships with Users with Emails",
        content: `There is no better way to communicate one-to-one with your users than through emails. This allows your users to speak with you in person if they have any questions.

Email inboxes are private. In this way, you can discuss the issues your customers are facing and help them to resolve them.

It is through such conversations that you are able to build intimate relationships with your customers. Word-of-mouth can always be one of the most effective methods of growing your business when you have happy customers.`,
      },
      {
        id: "email-is-targeted",
        title: "Email is Targeted",
        content: `In addition to the fact that you can send targeted emails to the targeted groups, emails are highly effective. The best way to send the most relevant offers to your users is to group them according to their email responses and their activities on your website.

Segmentation is the process of grouping users into mailing lists.

Your email marketing software should have this feature.`,
      },
      {
        id: "your-email-list-belongs-to-you",
        title: "Your Email List Belongs to You",
        content: `It is common to compare the number of email subscribers with the number of followers on social media sites such as Facebook, Twitter, and Instagram. The two are, however, very different.

You don't own the social media followers; the companies do. Communication with your social media followers can change when their policies change.

Your email list, however, belongs to you and you alone. A mailing list guarantees access to thousands of users' inboxes, at least until they stop using it.`,
      },
      {
        id: "email-isnt-going-away",
        title: "E-mail Isn't Going Away",
        content: `With time, many social media platforms, blogging platforms, and advertising strategies that were once very popular vanished. However, emails are still around and will remain forever.

The majority of internet users today have at least one email account. To open a social media account, such as Facebook or Twitter, you also need an email address.

It implies that email marketing won't disappear and that building your subscriber list steadily will help you have a big impact.`,
      },
      {
        id: "how-to-build-an-email-list",
        title: "How to build an email list?",
        content: `Building an email list is possible via sign-up options on website pages, pop-up windows, sign-up forms, social media accounts, and physical sign-up sheets or QR codes at events. By using an email marketing tool, you will be able to capture all the details you require and then email your contacts as needed.

Building an email list takes patience and a strategy to funnel your potential customers to sign up.`,
      },
      {
        id: "best-email-marketing-tools",
        title: "What are the best email marketing tools?",
        content: `You can store and manage your database with lots of software. These are some of the most popular email marketing tools:`,
        bulletpoints: [
         {
          points:[
            "Mail Chimp",
            "Sendinblue",
            "Send Pulse",
            "Get Response",
            "Drip",
            "AWeber",
           ]
         }
        ],
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
          <h1 className="text-responsive  text-gray-900 mb-4">
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
              <p className=" text-gray-700 mb-8">
                {blogPost.content.introduction}
              </p>

              <p>— It's cost-effective and easy, so anyone can start using it right away </p>
              <p>— You can target specific audiences with personalized messages </p>
              <p>— It's measurable—each message you send can be tracked and analysed for success</p>
              <p className="mt-4 mb-5">Let’s get to know why you should be building an email list and what are the benefits.`,</p>

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
                      
                    </p>
                  </div>
                </div>
              </div>

              {/* Remaining Sections */}
              {blogPost.content.sections.slice(2).map((section) => (
                <Section key={section.id} section={section} />
              ))}
            </article>
            If you’re having trouble building an email list from scratch, Arion Media Corp can help. We can help you maximize your email signups, from pre-made conversion templates to tools for A/B testing.

Remember: The faster you start, the better, so stop postponing, and start building your email list today!

Happy email list building!!!
           
          </main>
        </div>
      </div>
      </div>
  );
};

export default Page;
