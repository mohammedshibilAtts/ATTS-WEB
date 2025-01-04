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
    title: "Branding",
    description: "Branding services for strategic identity and lasting recognition.",
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
    title: "Ad Films & Multimedia Advertising",
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
    Link: "#", 
    icon: null,
    subItems: [{ label: "Aurumm", Link: "https://aurumm.co/" }],
  },
  {
    label: "Services",
    Link: "#", 
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
          { label: "Branding", Link: "/brand-analytics" },
          { label: "Social Media Strategy", Link: "/sm-analytics" },
          { label: "Performance Marketing", Link: "/performance-marketing" },
        ],
      },
      {
        label: "Digital Media",
        Link: "#",
        subItems: [
          {
            label: "Ad Films & Multimedia Advertising",
            Link: "/product-video",
          },
          {
            label: "Photography",
            Link: "/product-photography",
          },
        ],
      },
    ],
  },
  // {
  //   label: "Blogs",
  //   Link: "/blog",
  //   icon: null,
  // },
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
    title: "Ad Films & Multimedia Advertising",
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
  { title: "Brands Created", count: 150 },
  { title: "Projects Handled", count: 300 },
  { title: "Experience", count: 10 },
  { title: "Awards", count: 15 },
];

//   TestimonialsInfo


const Tale_of_Two = require("../assests/images/TaleofTwo.webp");
const Swamy_Jewellery = require("../assests/images/SwamyJewellery.webp");
const Metroflex_Mattress = require("../assests/images/MetroflexMattress.webp");
const Kavitha_Jewellery = require("../assests/images/KavithaJewellery.webp");
const SVJ = require("../assests/images/ShreeVenkatachalapathy.webp");
const Sree_Daksha = require("../assests/images/KavithaJewellery.webp");
const SriRajeswari = require("../assests/images/SriRajeswari.webp");

export const reviews = [
  {
    id: 1,
    image: Tale_of_Two,
    name: "Tale of Two",
    role: "Client",
    text: "The team did an excellent job creating a beautiful and easy-to-navigate website for our wedding planning business. The website is elegant, user-friendly, and perfectly reflects the essence of our services. We're happy with the outcome, thanks to ATTS.",
  },
  {
    id: 2,
    image: Swamy_Jewellery,
    name: "Swamy Jewellery",
    role: "Client",
    text: "Since we started using AUPAY for our chit fund management, we've noticed a huge improvement in how our customers interact with us. The app is easy for them to use, and they appreciate being able to manage their subscriptions quickly and without any hassle. It has definitely made their experience more seamless and convenient.",
  },
  {
    id: 3,
    image: Metroflex_Mattress,
    name: "Metroflex Mattress",
    role: "Client",
    text: "ATTS is comfortable to work with and has truly transformed our online presence. The Shopify e-commerce website they developed is visually appealing and easy to navigate, improving the customer shopping experience. Their digital marketing services have expanded our reach and boosted sales. We’re extremely happy with the results!",
  },
  {
    id: 4,
    image: Kavitha_Jewellery,
    name: "Kavitha Jewellery",
    role: "Client",
    text: "AUPAY and AUSALES have really changed the way our customers interact with us. With AUPAY, they can easily manage their chit funds from their phones, whether it's on Android or iOS. They find the app very user-friendly, and it’s become a go-to tool for them. AUSALES has also made the billing process smoother, which means quicker transactions and happier customers.",
  },
  {
    id: 5,
    image: SVJ,
    name: "Shree Venkatachalapathy Jewellery",
    role: "Client",
    text: "With AUPAY and AUSALES, our customers have had a much better experience. AUPAY, as a mobile app for both Android and iOS, allows them to manage their chit funds quickly and easily. It’s made the whole process more convenient for them, and they love the simplicity of it. AUSALES has also improved our billing system, making the checkout faster, which our customers really appreciate.",
  },
  {
    id: 6,
    image: Sree_Daksha,
    name: "Sree Daksha Land Shapers",
    role: "Client",
    text: "The website developed by ATTS perfectly showcases our real estate services. It’s clean, professional, and easy for potential clients to navigate. We’ve received positive feedback from visitors, and the team delivered more than we expected.",
  },
  {
    id: 7,
    image: SriRajeswari,
    name: "Sri Rajeswari Jewels",
    role: "Client",
    text: "AUPAY has made a big difference for our customers. They can use the mobile app on both Android and iOS to manage their chit funds with ease. It’s user-friendly, and they no longer have to wait around or deal with complicated paperwork. The whole experience is faster and more efficient, which our customers love.",
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
const Blog1 = require("../assests/images/blog1.png");
const Blog2 = require("../assests/images/blog2.jpg");
const Blog3 = require("../assests/images/blog3.jpg");

export const blogData = [
  {
    img: Blog1,
    content:
      "How Many Backlinks Needed Per Month to Your Website?",
  },
  {
    img: Blog2,
    
    content:
      " How Many Backlinks Needed Per Month to Your Website?",
  },
  {
    img: Blog3,
    content:
      " Voice Search Optimization in Digital Marketing: Unlocking the Future ",
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
    title: "Seamless Scalable Integration ",
    description:
    "We craft products that fit your operations and are as easy to use as ABC. With a seamless, error-free experience, our software adapts to your needs, whether you're a start-up or an MNC.",
    icon: Seamless,
  },
  {
    title: "Customer-Centric Approach",
    description:
    "We drive on the motto “client comes first!” We design products with you in mind, creating apps that feel like an extension of your brand, not just an addition.",
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
    "We always make sure you receive the best and the rest stand behind. By prioritizing excellence in everything we do, we ensure your business growth with the best performance.",
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
    "We serve as your emergency support. So, if you need a hand, our team is always around! We’re here to help and guide you with any queries you have.",
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
      "Leverage SEO, PPC, social media, and more for greater reach. ",
  },
  {
    title: "Audience Building",
    icon: AudienceBuilding,
    description:
      "Reach the right audience with tailored campaigns, building trust & boosting engagement. ",
  },
  {
    title: "Demo Downloads",
    icon: DemoDownloads,
    description:
      "Drive high-quality leads to download your demos, increasing user interaction & conversions. ",
  },
  {
    title: "Improved Sales Figures",
    icon: ImprovedSalesFigures,
    description:
      "Optimize your sales pipeline with tailored strategies, driving growth & stronger results.",
  },
];

const Website_Performance = require("@/assests/images/Website_Performance.svg");
const Keyword_Effectiveness = require("@/assests/images/Keyword_Effectiveness.svg");
const Reputation_Management = require("@/assests/images/Reputation_Management.svg");
const Backlink_Analysis = require("@/assests/images/Backlink_Analysis.svg");
const Local_SEO = require("@/assests/images/Local_SEO.svg");

export const SeoServicesCard=[
  {
    title: "Website Performance",
    icon: Website_Performance,
    description:
      "Assessing speed, mobile responsiveness, and user experience to improve rankings.",
  },
  {
    title: "Keyword Effectiveness",
    icon: Keyword_Effectiveness,
    description:
      "Boosting your rankings by high-impact keywords and driving targeted traffic.",
  },
  {
    title: "Reputation Management ",
    icon: Reputation_Management,
    description:
      "Managing reviews, monitoring presence, and building trust.",
  },
  {
    title: "Backlink Analysis",
    icon: Backlink_Analysis,
    description:
      "Evaluating backlinks to boost domain authority and visibility.",
  },
  {
    title: "Local SEO Ranking ",
    icon: Local_SEO,
    description:
      "Boosting your local SEO with location-specific keywords and improved visibility.",
  },
]

const Branding1 = require("@/assests/images/Brand_Visibility.svg");
const Branding2 = require("@/assests/images/Brand_Presence.svg");
const Branding3 = require("@/assests/images/Brand_Affinity.svg");
const Branding4 = require("@/assests/images/Higher_Sales.svg");
const Branding5 = require("@/assests/images/Higher_Sales.svg");


export const brandServicesCard=[
  {
    title: "Brand Visibility ",
    icon: Branding1,
    description:
      "Building recognition and trust for your brand across audiences.",
  },
  {
    title: "Brand Presence ",
    icon: Branding2,
    description:
      "Creating lasting impressions and making your brand easily identifiable.",
  },
  {
    title: "Brand Affinity ",
    icon: Branding3,
    description:
      "Building trust and keeping customers coming back for more. ",
  },
  {
    title: "Higher Sales Growth ",
    icon: Branding4,
    description:
      "Boosting sales by strengthening your brand and customer relationships. ",
  },
  {
    title: "Enhanced Credibility ",
    icon: Branding5,
    description:
      "Building trust and authority with a strong, consistent brand presence.",
  },
]

const Custom_Strategies = require("@/assests/images/Custom_Strategies.svg");
const Engaging_Content = require("@/assests/images/Engaging_Content.svg");
const Targeted_Ads = require("@/assests/images/Targeted_Ads.svg");
const Active_Engagement = require("@/assests/images/Active_Engagement.svg");
const Driven_Insights = require("@/assests/images/Driven_Insights.svg");

export const socialMediaServiceCard=[
  {
    title: "Custom Strategies ",
    icon: Custom_Strategies,
    description:
      "Tailored plans crafted to accelerate your brand’s growth and reach.",
  },
  {
    title: "Engaging Content ",
    icon: Engaging_Content,
    description:
      "Creative posts and visuals that grab attention and boost engagement.",
  },
  {
    title: "Targeted Ads",
    icon: Targeted_Ads,
    description:
      "Ads designed to reach your ideal audience for maximum impact.",
  },
  {
    title: "Active Engagement",
    icon: Active_Engagement,
    description:
      "Building and nurturing a vibrant online community for lasting connections.",
  },
  {
    title: "Data-Driven Insights ",
    icon: Driven_Insights,
    description:
      "Track performance and refining strategies for progressive improvement and growth.",
  }
]

const High_Quality = require("@/assests/images/High-Quality.svg");
const Creative_Composition = require("@/assests/images/Creative-Composition.svg");
const Brand_Consistency = require("@/assests/images/Brand-Consistency.svg");
const Versatility = require("@/assests/images/Versatility.svg");
const Post_Processing = require("@/assests/images/Post-Processing.svg");

export const photographyServiceCard=[
  {
    title: "High-Quality Imagery",
    icon: High_Quality,
    description:
      "Crisp and clear photos that enhance your brand’s visual appeal.",
  },
  {
    title: "Creative Composition ",
    icon: Creative_Composition,
    description:
      "Expertly framed images that tell your brand’s story.",
  },
  {
    title: "Brand Consistency ",
    icon: Brand_Consistency,
    description:
      "Maintaining a unified style across all photos to reflect your brand’s identity.",
  },
  {
    title: "Versatility ",
    icon: Versatility,
    description:
      " Photos suitable for use across various platforms, from social media to print.",
  },
  {
    title: "Post-Processing Expertise ",
    icon: Post_Processing,
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
    title: "Sales and Marketing Specialist",
    location: "Chennai, Coimbatore",
    date: Date.now(),
    vacancy: 2,
    experience:2,
    jd:"ATTS Technologies Private Limited in Coimbatore is a dynamic team of technical and marketing professionals who bring a unique blend of energy, creativity, and fun to every project. We let the quality of our service speak for itself, bringing a touch of glam to the tech and marketing world. This is a full-time on-site role for a Sales and Marketing Specialist at ATTS Technologies Private Limited in Coimbatore. The Sales and Marketing Specialist will be responsible for communication, customer service, sales, training, and sales management on a day-to-day basis.",
    Requirements:[
      "Communication and Customer Service skills",
      "Sales and Sales Management skills",
      'Training expertise',
      'Strong interpersonal and relationship-building skills',
      'Experience in marketing and sales strategies',
      'Ability to work in a fast-paced environment',
      "Bachelor's degree in Marketing, Business, or related field"
    ],
    Key_Responsibilities:[]
  },
  {
    title: "SEO Analyst",
    location: "Coimbatore",
    date: Date.now(),
    vacancy: 2,
    experience:2,
    jd:"We are looking for a Dynamic SEO Analyst with 1-2 years of experience to help optimize website content and improve search engine rankings. The role involves keyword research, on-page and off-page SEO, technical SEO, and reporting on performance metrics.",
    Key_Responsibilities:[
      "Conduct keyword research and identify SEO opportunities.",
      "Optimize website content, meta tags, and URLs for better rankings.",
      "Assist with link-building and off-page SEO efforts.",
      "Perform technical SEO audits and resolve issues affecting performance.",
      "Track and report on SEO metrics using tools like Google Analytics and SEMrush.",
      "Collaborate with the content team to optimize all content for search engines."
    ],
    Requirements:[
      "1-2 years of SEO experience (on-page, off-page, technical).",
      "Proficiency with SEO tools (Google Analytics, SEMrush, Ahrefs).",
      "Basic knowledge of HTML, CSS, and CMS platforms (e.g., WordPress).",
      "Strong analytical skills and attention to detail.",
      "Excellent communication and teamwork abilities.",
      "Bachelor’s degree in Marketing, Business, Communications, or a related field."
    ]
  },
  {
    title: "Digital Marketing Trainee",
    location: "Coimbatore",
    date: Date.now(),
    vacancy: 2,
    experience:"Fresher",
    jd:"As a Digital Marketing Trainee, you’ll gain hands-on experience in digital marketing, including campaign execution, social media management, content creation, SEO, and performance tracking. Working closely with senior team members, you’ll contribute to real-world strategies and develop essential skills to grow in the field of digital marketing.",
    Key_Responsibilities:[
    "Content Creation: Assist in creating engaging content for social media and blogs.",
    "Campaign Support: Help execute email, social media, and ad campaigns.",
    "Social Media Management: Support social media activities.",
    "Research: Track industry trends, competitors, and audience preferences.",
    "SEO Support: Assist with keyword research and website content optimization.",
    "Performance Tracking: Monitor and report on campaign and social media performance.",
    "General Support: Help with day-to-day marketing tasks and maintain content calendars."
    ],
    Requirements:[
      "Basic understanding of digital marketing concepts.",
      "Familiar with social media platforms and Google Analytics.",
      "Strong communication and writing skills.",
      "Eagerness to learn and adapt.",
      "Any Bachelor's degree."
    ]
  },
  {
    title: "Graphic Designer & Video Editor",
    location: "Coimbatore",
    date: Date.now(),
    vacancy: 2,
    experience:1,
    jd:"ATTS is hiring for Graphic Designer Cum Video Editor with minimum 1 year of experience.Proficiency in graphic design software such as Adobe Photoshop, Illustrator, and InDesign, Adobe.Understanding of design principles like composition, typography, color theory, and visual hierarchy. Ability to create various types of designs including logos, posters, brochures, banners, and social media graphics. Knowledge of print production processes and specifications.",
    Key_Responsibilities:[
      "Collaborating with clients or stakeholders to understand their needs and objectives.",
      "Creating visual concepts, either from scratch or based on existing brand guidelines.",
      "Train the Students as per the Curriculum",
      "Developing and refining designs or video concepts based on feedback.",
      "Managing multiple projects simultaneously and meeting deadlines.",
      "Ensuring consistency in branding and messaging across all design and video assets.",
      "Keeping up-to-date with industry trends, software updates, and best practices.",
      "Occasionally, you might need to work closely with other team members such as copywriters, illustrators, or animators to complete projects.",
    ],
    Requirements:[]
  },
  {
    title: "Business Development Executive",
    location: "Madurai",
    date: Date.now(),
    vacancy: 2,
    experience:1,
    jd:"We're seeking a driven and empathetic Business Development Executive to drive software sales and support our company's growth. You'll create and execute bidding strategies, build strong client relationships, and help grow our software solutions in the market. If you're passionate about sales and long-term success, we'd love to hear from you!",
    Key_Responsibilities:[
      "Build relationships with prospective clients",
      "Maintain consistent contact with existing clients",
      "Manage sales pipeline",
      "Analyze market and establish competitive advantages",
      "Track metrics to ensure targets are hit Qualifications",
      "Bachelor's degree 3+ years in sales industry",
      "Experience in full sales cycle including deal closing Demonstrated sales success",
      "Strong negotiation skills",
      "Strong communication and presentation skills",
      "CRM experience is preferred.",
    ],
    Requirements:[
      "Mastery of video editing software like Adobe Premiere Pro, Final Cut Pro.",
      "Familiarity with video formats, codecs, and compression techniques.",
      "Ability to edit and manipulate video footage, including cutting, trimming, adding transitions, and applying effects.",
      "Understanding of audio editing, including mixing, syncing, and adding sound effects.",
      "Knowledge of motion graphics and animation tools like Adobe After Effect",
    ]
  },
];
