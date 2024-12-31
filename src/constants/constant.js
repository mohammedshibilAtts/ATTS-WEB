//// navbar sevices data

export const digitalEngineering = [
  {
    title: "Web Design & Development",
    description: "Crafting websites that drive results.",
    link: "web-development",
  },
  {
    title: "Mobile App Development",
    description: "Bringing your ideas to life, one app at a time.",
    link: "app-development",
  },
  // {title:"Cloud Solution",description:"Revolutionizing businesses with cloud innovation.",link:"web-development"},
  // {
  //   title: "UI/UX Designing",
  //   description: "Designing with empathy, delivering with excellence.",
  //   link: "web-development",
  // },
];

export const digitalMarketing = [
  {
    title: "Search Engine Optimization",
    description: "SEO is the bridge between your brand and the world.",
    link: "seo-analysis",
  },
  {
    title: "Brand Analytics",
    description: "Tracking brand performance for continuous growth.",
    link: "brand-analytics",
  },
  {
    title: "Social Media Strategy",
    description: "Running targeted ads to boost reach and conversions.",
    link: "sm-analysis",
  },
  {
    title: "Performance Marketing",
    description: "Optimize, convert, and accelerate your ROI.",
    link: "performance-marketing",
  },
];

export const digitalMedia = [
  {
    title: "Video Creation & ads Promotion",
    description: "Bringing your story to life through video.",
    link: "product-video",
  },
  {
    title: "Photography",
    description: "Turning ordinary moments into extraordinary memories.",
    link: "product-photography",
  },
];

export const mobileNavItem = [
  {
    label: "Home",
    Link: "/",
    icon: null,
  },
  {
    label: "About",
    Link: "#",
    icon: null,
    subItems: [
      { label: "About Us", Link: "/about" },
      { label: "Our Culture", Link: "/our-culture" },
      { label: "Career", Link: "/career" },
    ],
  },
  {
    label: "Product",
    Link: "#", // This is the placeholder for the dropdown
    icon: null,
    subItems: [{ label: "Aurumm", Link: "https://aurumm.co/" }],
  },
  {
    label: "Services",
    Link: "#", // This is the placeholder for the dropdown
    icon: null,
    subItems: [
      {
        label: "Digital Engineering",
        Link: "#", // Placeholder for the Digital Engineering dropdown
        subItems: [
          { label: "Web Development", Link: "/web-development" },
          { label: "App Development", Link: "/app-development" },
        ],
      },
      {
        label: "Digital Marketing",
        Link: "#", // Placeholder for the Digital Marketing dropdown
        subItems: [
          { label: "Search Engine Optimization", Link: "/seo-analysis" },
          { label: "Brand Analytics", Link: "/brand-analytics" },
          { label: "Social Media Strategy", Link: "/sm-analytics" },
          { label: "Performance Marketing", Link: "/performance-marketing" },
        ],
      },
      {
        label: "Digital Media",
        Link: "#",
        subItems: [
          {
            label: "Video Creation & Ads Promotion",
            Link: "/product-video",
          },
          {
            label: "Photography",
            Link: "/product-photography",
          },
        ],
      },
      {
        label: "Blogs",
        Link: "/blog",
        icon: null,
      },
    ],
  },
];

//// serviceData on Home page                     //////////////Home section

const { AiFillNotification } = require("react-icons/ai");
const { CiGlobe } = require("react-icons/ci");
const { FaCode } = require("react-icons/fa");
const {
  MdSendToMobile,
  MdOutlineVideoLibrary,
  MdLaptopChromebook,
} = require("react-icons/md");
export const serviceData = [
  {
    title: "Web Design & Development",
    content:
      "Every brand has a story to tell, and we craft that story in your website to reach the global audience. With clean code, we craft a quick responsive website with a captivating user interface and satisfying user experience. You know the best part? Everyone will love your website.",
    linkText: "LEARN MORE",
    linkUrl: "/web-development",
    icon: <FaCode size={36} className="text-white  rounded-lg" />,
  },
  {
    title: "Mobile App Development",
    content:
      "With the curiosity of creating something new and the experience of pulling it out perfectly, we develop the perfect application reflecting your brand’s story. Whether you want it for Android or iOS we will give you more than you want.",
    linkText: "LEARN MORE",
    linkUrl: "/app-development",
    icon: <MdSendToMobile size={36} className="text-white  rounded-lg" />,
  },
  {
    title: "Video Creation & ads Promotion",
    content:
      "We specialize in the art of storytelling; we tell your brand’s story to the world through captivating videos and ads reflecting your brand’s vision. From showcasing product TV ads to engagement boost reels, and sales-increasing social media videos, we’ve got your back.",
    linkText: "LEARN MORE",
    linkUrl: "/videos-marketing",
    icon: (
      <MdOutlineVideoLibrary size={36} className="text-white  rounded-lg" />
    ),
  },
  {
    title: "Social Media Marketing",
    content:
      "Our strategic team at ATTS has the perfect strategy to uplift your brand on social media platforms. We use the power of social media to impact the audience positively to reach your brand and generate an enormous amount to your account.",
    linkText: "LEARN MORE",
    linkUrl: "/sm-analysis",
    icon: <AiFillNotification size={36} className="text-white  rounded-lg" />,
  },
  {
    title: "Brand Analytics",
    content:
      "We work as your brand’s GPS-tracking, tweaking, and guiding you toward something big with smart brand analytics and show what’s working and where to level up.",
    linkText: "LEARN MORE",
    linkUrl: "brand-analytics",
    icon: <MdLaptopChromebook size={36} className="text-white  rounded-lg " />,
  },
  {
    title: "Search Engine Optimization",
    content:
      "Want to rank first on Google? Our SEO services turn your website from 'meh' to 'must-see,' delivering results that matter. Let us make Google your biggest fan—your brand will never be skipped!",
    linkText: "LEARN MORE",
    linkUrl: "/seo-analysis",
    icon: <CiGlobe size={36} className="text-white  rounded-lg" />,
  },
];

//client Brand icons
const Client1 = require("../assests/images/client1.png");
const Client2 = require("../assests/images/client2.png");
const Client3 = require("../assests/images/client3.png");
const Client4 = require("../assests/images/client4.png");
const Client5 = require("../assests/images/client5.png");
const Client6 = require("../assests/images/client6.png");
const Client7 = require("../assests/images/client7.png");
const Client8 = require("../assests/images/client8.png");

export const ClientBrandImages = [
  { imageUrl: Client1 },
  { imageUrl: Client2 },
  { imageUrl: Client3 },
  { imageUrl: Client4 },
  { imageUrl: Client5 },
  { imageUrl: Client6 },
  { imageUrl: Client7 },
  { imageUrl: Client8 },
];

// Statics about the our company
export const Homestatics = [
  { title: "Clients", count: 150 },
  { title: "Projects", count: 150 },
  { title: "Experience", count: 20 },
  { title: "Awards", count: 15 },
];

//   TestimonialsInfo

const Person1 = require("../assests/images/person1.jpeg");
const Person2 = require("../assests/images/person2.webp");

export const reviews = [
  {
    id: 1,
    image: Person1,
    name: "Daniel Smith",
    role: "Software Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus.",
  },
  {
    id: 2,
    image: Person2,
    name: "Jane Doe",
    role: "Product Manager",
    text: "Vivamus egestas, orci eu lobortis pulvinar, metus magna venenatis justo, at fringilla orci neque non erat. Pellentesque habitant morbi tristique. luctus ut sem. Mauris pretium lacus eget ",
  },
];

const HandShake = require("../assests/images/handshake.png");
const Research = require("../assests/images/research.png");
const Customer = require("../assests/images/customer.png");

export const TestimonialsInfo = [
  {
    imgSrc: HandShake,
    title: "Ongoing commitment",
    description:
      "10+ years in the industry gave us a deep understanding of the challenges faced by growing businesses. We take pride in operating a sustainable business, driven by you-our valued customer, we are obliged.",
  },

  {
    imgSrc: Research,
    title: "Emphasis on research and innovation",
    description:
      "We’re a leading software development company in Coimbatore with experts and we never skip the part of R&D. We invest our predominant time here to drive perfection and excellence in what we create for you.",
  },

  {
    imgSrc: Customer,
    title: "Customer-centric approach",
    description:
      "Our strong market position is a result of the trust and goodwill we've earned from our customers. Regardless of your business's size, we’re committed to helping your business grow as a global brand.",
  },
];

//   blog data
const Blog1 = require("../assests/images/blog1.jpeg");
const Blog2 = require("../assests/images/blog2.jpeg");
const Blog3 = require("../assests/images/blog3.jpeg");

export const blogData = [
  {
    img: Blog1,
    date: " Feb 7, 2024",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lac",
  },
  {
    img: Blog2,
    date: " Feb 7, 2024",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lac",
  },
  {
    img: Blog3,
    date: " Feb 7, 2024",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lac",
  },
];

////////////////////About Page Data ///////////////////////////

//accordion data on about page
export const aboutAccordionData = [
  {
    title: "1. Our History",
    content: `We began our journey in 2013, driven by a passionate team dedicated to brand consulting and advertising. We were focused on helping businesses craft impactful stories and establish a strong presence.\n
      By 2016, we ventured into the digital realm, offering bespoke digital marketing services to help brands thrive in an ever-changing landscape.\n
      After successfully completing over 100 projects, we achieved a milestone that propelled our growth—expanding into a larger, fully-equipped office space to support our growing team and clients.
      Two years ago, we introduced AURUMM, our flagship software product. Since then, it has powered over 300 successful projects, further solidifying our commitment to providing innovative solutions that deliver results.
      Today, ATTS Technologies stands as a leader in digital innovation, combining creativity and technology to help businesses reach new heights.`,
  },
  {
    title: "2. Our Vision",
    content: `To be the driving force behind the future of software, marketing, media, and production, where innovation and creativity seamlessly come together. We aim to redefine the digital landscape by delivering game-changing solutions that captivate and inspire audiences worldwide. Through collaboration, continuous learning, and a commitment to excellence, we strive to set new benchmarks for quality and impact. 
       We are dedicated to helping businesses and individuals unlock their full potential, harnessing cutting-edge technology, strategic marketing, compelling media, and world-class production. Our goal is to create a future where technology and creativity unite to deliver meaningful progress and unforgettable experiences.`,
  },
  {
    title: "3. Our Mission",
    content: `We aim to unlock the full potential of our clients' brands by leveraging our expertise in digital marketing and advertising. Through powerful campaigns, we drive greater engagement with both existing and potential customers. By crafting cohesive and compelling brand narratives, we ensure strategies resonate deeply with audiences, amplifying brand recognition and fostering lasting connections. Our focus is on creating meaningful experiences that elevate brands and fuel their growth.`,
  },
];

/// about compony
export const aboutCompany = [
  {
    title: "Where Craftsmanship Meets Excellence",
    content:
      "At ATTS we are excited about the art of creating technology. For us, software is the fusion of hands-on expertise and thoughtful innovation. We’re humbly proud to deliver products that tackle business problems, foresee needs, and uncover opportunities to drive your growth.",
  },
  {
    title: "Privately Driven, Proudly Independent. ",
    content:
      "Our decision to remain privately owned provides us the freedom to innovate with a focus on the future, R&D, and long-term growth rather than short-term growth. This independence helps us challenge traditional approaches, learn from setbacks, and prioritize what matters most—our customers, employees, and future. ",
  },
  {
    title: "A People-First Philosophy ",
    content:
      "At ATTS we hire people whose work is driven by purpose and a desire to make a real difference. We value diverse experiences and believe that career paths shouldn’t be defined by credentials alone. This philosophy allows our employees to move across roles and grow within the company, fostering a culture of innovation, flexibility, and lifelong learning. ",
  },
  {
    title: "Building a Culture of Growth  ",
    content:
      "At ATTS, we hire individuals driven by purpose and a desire to create meaningful change. We value diverse experiences and redefine career paths beyond credentials, encouraging role mobility and nurturing innovation, flexibility, and continuous growth. ",
  },
];

// about us card data
const Seamless = require("../assests/images/Seamless.svg");
const CustomerSVG = require("../assests/images/Customer.svg");
const Rapid = require("../assests/images/Rapid.svg");
const Superior = require("../assests/images/Superior.svg");
const Accelerated = require("../assests/images/Accelerated.svg");
const Technical = require("../assests/images/Technical.svg");

export const aboutUsCardData = [
  {
    title: "Seamless Integration",
    description:
      "We develop products that fit your operations and easy to use as ABC. We ensure you get a cohesive and the best user experience. By eliminating the disruptions we promise to deliver error-free and easy-to-use products. Whether you’re a start-up or an MNC, our robust software is ready to adapt to your needs.",
    icon: Seamless,
  },
  {
    title: "Customer-Centric",
    description:
      "We drive on the motto “client comes first!” We design products standing in your shoes, keeping YOU in mind. We don’t just create an app, it will be YOUR app, designed to fit your brand like an extension, rather than an addition. ",
    icon: CustomerSVG,
  },
  {
    title: "Rapid and Reliable",
    description:
      "We deliver the best on time. We work on a tried-and-true approach that always results in the best solution at the right time. It’s not only on all the time, we say always! ",
    icon: Rapid,
  },
  {
    title: "Exceptional Performance",
    description:
      "Make sure you meet the deadlines and avoid delays with your weekly claims.",
    icon: Superior,
  },
  {
    title: "Accelerated Growth",
    description:
      "Proficient technological assistant acts as a game changer, driving faster progress and superior results through smooth operations.",
    icon: Accelerated,
  },
  {
    title: "Inveterate Technical Support",
    description:
      "We serve as your emergency support. So, if you need a hand, our team is always around! We’re here to help and guide you with any queries you have and any support you require from our end.",
    icon: Technical,
  },
];

///////////////////////////////// services Data

/// services Web Development

const responsiveIcon = require("../assests/images/ResponsiveDesign.svg");
const hostingIcon = require("../assests/images/hosting.svg");
const domainIcon = require("../assests/images/domain.svg");
const webDevIcon = require("../assests/images/webdev.svg");
const lightningIcon = require("../assests/images/LightningFast.svg");
const SecurityIcon = require("../assests/images/RobustSecurity.svg");

export const webDevelopmentService = [
  {
    title: "Responsive Design",
    description:
      "Custom web design tailored to elevate your brand and flawlessly adapt to any device ensuring a smooth user experience.",
    icon: responsiveIcon,
  },
  {
    title: "Web Hosting Service",
    description:
      "We offer fast, secure solutions with 99% uptime and 24/7 support to ensure seamless website performance.",
    icon: hostingIcon,
  },
  {
    title: "Domain Names",
    description:
      "Let’s make your online presence unforgettable with the perfect domain name—quick, easy, and tailored to your brand!",
    icon: domainIcon,
  },
  {
    title: "Web Development",
    description:
      "We specialize in creating tailored web development solutions to strengthen your brand and connect with your audience.",
    icon: webDevIcon,
  },
  {
    title: "Lightning Fast",
    description:
      "We deliver lightning-fast, responsive websites designed for speed, so you’ll never have to worry!",
    icon: lightningIcon,
  },
  {
    title: "Robust Security",
    description:
      "We’ve got your back with next-level security to keep everything safe and sound.",
    icon: SecurityIcon,
  },
];

const appServiceIcon1 = require("../assests/images/appIcon1.svg");
const appServiceIcon2 = require("../assests/images/appIcon2.svg");
const appServiceIcon3 = require("../assests/images/appIcon3.svg");
const appServiceIcon4 = require("../assests/images/appIcon4.svg");
const appServiceIcon5 = require("../assests/images/appIcon5.svg");
const appServiceIcon6 = require("../assests/images/appIcon6.svg");

export const AppDevelopmentService=[
  {
    title: "User-Centric Design",
    description:
    "An easy-to-use interface designed to offer a smooth and engaging user experience on any device or platform.",
    icon: appServiceIcon1,
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "Optimized for Android and iOS, the app ensures seamless, high-performance functionality.",
    icon: appServiceIcon2,
  },
  {
    title: "Push Notifications",
    description:
      "Real-time alerts to keep users engaged, informed, and updated with relevant app content and offers.",
    icon: appServiceIcon3,
  },
  {
    title: "Offline Access",
    description:
        "Allows users to access key features and content offline, ensuring convenience anytime, anywhere.",
    icon: appServiceIcon4,
  },
  {
    title: "Integration with APIs",
    description:
      "Integrates seamlessly with third-party APIs, enhancing functionality and expanding capabilities.",
    icon: appServiceIcon5,
  },
  {
    title: "Security & Privacy",
    description:
     "Strong security measures protect user data, ensuring privacy and compliance with encryption standards.",
    icon: appServiceIcon6,
  },
]

//services performance Marketing

const BrandAwareness = require("@/assests/images/brandAwareness.svg");
const MultiChannelExpertise = require("@/assests/images/Multi-Expertise.svg");
const AudienceBuilding = require("@/assests/images/AudienceBuilding.svg");
const DemoDownloads = require("@/assests/images/DemoDownloads.svg");
const ImprovedSalesFigures = require("@/assests/images/Improved-Figures.svg");

export const performanceMarketing = [
  {
    title: "Brand Awareness",
    icon: BrandAwareness,
    description:
      "Boost brand visibility, ensuring it stands out & connects with your customers.",
  },
  {
    title: "Multi-Channel Expertise",
    icon: MultiChannelExpertise,
    description:
      "Boost brand visibility, ensuring it stands out & connects with your customers.",
  },
  {
    title: "Audience Building",
    icon: AudienceBuilding,
    description:
      "Boost brand visibility, ensuring it stands out & connects with your customers.",
  },
  {
    title: "Demo Downloads",
    icon: DemoDownloads,
    description:
      "Boost brand visibility, ensuring it stands out & connects with your customers.",
  },
  {
    title: "Improved Sales Figures",
    icon: ImprovedSalesFigures,
    description:
      "Boost brand visibility, ensuring it stands out & connects with your customers.",
  },
];

export const SeoServicesCard=[
  {
    title: "Website Performance",
    icon: ImprovedSalesFigures,
    description:
      "Assessing speed, mobile responsiveness, and user experience to improve rankings.",
  },
  {
    title: "Keyword Effectiveness",
    icon: ImprovedSalesFigures,
    description:
      "Boosting your rankings by high-impact keywords and driving targeted traffic.",
  },
  {
    title: "Reputation Management ",
    icon: ImprovedSalesFigures,
    description:
      "Managing reviews, monitoring presence, and building trust.",
  },
  {
    title: "Backlink Analysis",
    icon: ImprovedSalesFigures,
    description:
      "Evaluating backlinks to boost domain authority and visibility.",
  },
  {
    title: "Local SEO Ranking ",
    icon: ImprovedSalesFigures,
    description:
      "Boosting your local SEO with location-specific keywords and improved visibility.",
  },
]

export const brandServicesCard=[
  {
    title: "Brand Visibility ",
    icon: ImprovedSalesFigures,
    description:
      "Building recognition and trust for your brand across audiences.",
  },
  {
    title: "Brand Presence",
    icon: ImprovedSalesFigures,
    description:
      "Creating lasting impressions and making your brand easily identifiable.",
  },
  {
    title: "Brand Affinity ",
    icon: ImprovedSalesFigures,
    description:
      "Building trust and keeping customers coming back for more.",
  },
  {
    title: "Higher Sales Growth ",
    icon: ImprovedSalesFigures,
    description:
      "Boosting sales by strengthening your brand and customer relationships. ",
  },
  {
    title: "Enhanced Credibility ",
    icon: ImprovedSalesFigures,
    description:
      "Building trust and authority with a strong, consistent brand presence.",
  },
]


export const socialMediaServiceCard=[
  {
    title: "Custom Strategies ",
    icon: ImprovedSalesFigures,
    description:
      "Tailored plans crafted to accelerate your brand’s growth and reach.",
  },
  {
    title: "Engaging Content ",
    icon: ImprovedSalesFigures,
    description:
      "Creative posts and visuals that grab attention and boost engagement.",
  },
  {
    title: "Targeted Ads",
    icon: ImprovedSalesFigures,
    description:
      "Ads designed to reach your ideal audience for maximum impact.",
  },
  {
    title: "Active Engagement",
    icon: ImprovedSalesFigures,
    description:
      "Building and nurturing a vibrant online community for lasting connections.",
  },
  {
    title: "Data-Driven Insights ",
    icon: ImprovedSalesFigures,
    description:
      "Track performance and refining strategies for progressive improvement and growth.",
  }
]


export const photographyServiceCard=[
  {
    title: "High-Quality Imagery",
    icon: ImprovedSalesFigures,
    description:
      "Crisp and clear photos that enhance your brand’s visual appeal.",
  },
  {
    title: "Creative Composition ",
    icon: ImprovedSalesFigures,
    description:
      "Expertly framed images that tell your brand’s story.",
  },
  {
    title: "Brand Consistency ",
    icon: ImprovedSalesFigures,
    description:
      "Maintaining a unified style across all photos to reflect your brand’s identity.",
  },
  {
    title: "Versatility ",
    icon: ImprovedSalesFigures,
    description:
      " Photos suitable for use across various platforms, from social media to print.",
  },
  {
    title: "Post-Processing Expertise ",
    icon: ImprovedSalesFigures,
    description:
      "Professional editing to ensure polished, high-quality images.",
  },
]


const Creative_Perspective = require("@/assests/images/CreativePerspective.svg");
const Compelling_Messaging = require("@/assests/images/CompellingMessaging.svg");
const catching_Visuals = require("@/assests/images/Eye-catchingVisuals.svg");
const driven_Content = require("@/assests/images/Purpose-drivenContent.svg");
const Multi_PlatformReach = require("@/assests/images/Multi-PlatformReach.svg");


export const videoServiceCard=[
  {
    title: "Creative Perspective",
    icon: Creative_Perspective,
    description:
      "Weaving your brand’s story into a visual masterpiece.",
  },
  {
    title: "Compelling Messaging",
    icon: Compelling_Messaging,
    description:
      "Reaching your audience and building lasting bonds.",
  },
  {
    title: "Eye-catching Visuals",
    icon: catching_Visuals,
    description:
      "Capturing attention & designing visuals that demand attention.",
  },
  {
    title: "Purpose-driven Content",
    icon: driven_Content,
    description:
      "Crafted to resonate, making your audience feel seen and heard.",
  },
  {
    title: "Multi-Platform Reach",
    icon: Multi_PlatformReach,
    description:
      "Everywhere your audience is—across all digital spaces.",
  },
]


//// career dummyData

export const carrerData = [
  {
    title: "MERN Full Stack Developer",
    location: "Chennai",
    date: Date.now(),
    vacancy: 5,
  },
  {
    title: "MEAN Full Stack Developer",
    location: "Coimbatore",
    date: Date.now(),
    vacancy: 4,
  },
  {
    title: "Flutter Developer",
    location: "Coimbatore",
    date: Date.now(),
    vacancy: 3,
  },
];
