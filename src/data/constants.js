// Constants for the Grownex website

// Media Assets
export const MEDIA = {
  images: {
    sowjanyaBrand: "https://ik.imagekit.io/2miis5uuw/sowjanya%20brand%20guideline-04.jpg.jpeg?updatedAt=1776354292262",
    sowjanyaBrand2 : "https://ik.imagekit.io/2miis5uuw/sowjanya%20brand%20guideline-01.jpg.jpeg?updatedAt=1776354289048",
    sowjanyaBrand3 : "https://ik.imagekit.io/2miis5uuw/sowjanya%20brand%20guideline-01.jpg.jpeg?updatedAt=1776354289048",
    sowjanyaBrand4 : "https://ik.imagekit.io/2miis5uuw/sowjanya%20brand%20guideline-02.jpg.jpeg?updatedAt=1776354286287",
    sowjanyaBrand5 : "https://ik.imagekit.io/2miis5uuw/sowjanya%20brand%20guideline-03.jpg.jpeg?updatedAt=1776354286184",
    c2a: "https://ik.imagekit.io/2miis5uuw/C2A%20INSTA%20POST%20(1)-01.jpg.jpeg?updatedAt=1776177819358",
    mastersAbroad: "https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-05.jpg.jpeg?updatedAt=1776177828626",
    mastersAbroad2: "https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-03.jpg.jpeg?updatedAt=1776177822740",
    mastersAbroad3:"https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-04.jpg.jpeg?updatedAt=1776177819553",
    mastersAbroad4: "https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-01.jpg.jpeg?updatedAt=1776177814656",
    mastersAbroad5: "https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-08.jpg.jpeg?updatedAt=1776177806516",
    mastersAbroad6: "https://ik.imagekit.io/2miis5uuw/masters%20abroard%20insta%20ad-02.jpg.jpeg?updatedAt=1776177806160",
    teamPhoto: "https://ik.imagekit.io/2miis5uuw/IMG_3081%20(1)%20(1).jpg%20(1).jpeg?updatedAt=1776177817224",
  },
  videos: {
    sampleVideo: "https://ik.imagekit.io/2miis5uuw/sample-video.mp4?updatedAt=1776093938641",
  },
};

export const CARASOUL_IMAGES = [
  MEDIA.images.mastersAbroad,
  MEDIA.images.mastersAbroad3,
  MEDIA.images.mastersAbroad4,
  MEDIA.images.mastersAbroad5,
  MEDIA.images.mastersAbroad6,
  MEDIA.images.c2a,
  MEDIA.images.sowjanyaBrand,
  MEDIA.images.sowjanyaBrand2,
  MEDIA.images.sowjanyaBrand4,
  MEDIA.images.sowjanyaBrand5,
]

export const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Work", href: "#" },
  { name: "Services", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Contact", href: "#" },
];

export const MARQUEE_ITEMS = [
  "Branding",
  "Marketing",
  "Design",
  "Strategy",
];

export const WORK_ITEMS = [
  {
    id: 1,
    name: "Sowjanya Studios",
    sub: "Brand Identity, Outdoor Marketing",
    year: "2024",
    colorClass: "branding-1",
    imgClass: "work-img-1",
    logo: "👗",
    page: "CaseStudy-Branding",
    image: MEDIA.images.sowjanyaBrand,
  },
  {
    id: 2,
    name: "C2A",
    sub: "Brand Identity, Outdoor Marketing",
    year: "2025",
    colorClass: "branding-2",
    imgClass: "work-img-2",
    logo: "🏠",
    image: MEDIA.images.c2a,
  },
  {
    id: 3,
    name: "MASTERSABROAD",
    sub: "Brand Identity",
    year: "2025",
    colorClass: "branding-3",
    imgClass: "work-img-3",
    logo: "🏠",
    image: MEDIA.images.mastersAbroad,
  },
  {
    id: 4,
    name: "MAYU INFRA",
    sub: "Brand Identity, Outdoor Marketing",
    year: "2025",
    colorClass: "branding-4",
    imgClass: "work-img-4",
    logo: "🏠",
    image: "",
  },
];

export const MARKETING_ITEMS = [
  {
    id: 1,
    name: "Aruh Koncepts",
    sub: "Digital Marketing",
    page: "CaseStudy-DM",
  },
];

export const SERVICES_HOME = [
  {
    num: "01",
    title: "Branding & Creative Services",
    desc: "From brand naming to complete visual systems, we craft identities that mean something.",
    tags: ["Brand Strategy", "Visual Identity", "Logo Design"],
  },
  {
    num: "02",
    title: "Digital Marketing",
    desc: "Strategic digital marketing campaigns designed to elevate your brand presence.",
    tags: ["Social Media", "Paid Ads", "SEO"],
  },
  {
    num: "03",
    title: "Web Development",
    desc: "Building beautiful, fast websites that convert.",
    tags: ["Web Design", "Development", "UX/UI"],
  },
];

export const VIDEO_THUMBS = [
  MEDIA.videos.sampleVideo,
];

export const VIDEO_POSTERS = [
  "",
];

export const TEAM_PHOTO = MEDIA.images.teamPhoto;

export const CAPABILITIES = [
  {
    num: "001",
    name: "Brand Strategy & Identity",
    desc: "Comprehensive brand development from strategic foundation through visual and verbal identity systems. We define positioning, articulate differentiation, establish messaging architecture, and create identity systems built for consistency and scale across all market touchpoints.",
    image: "",
  },
  {
    num: "002",
    name: "Logo & Visual Identity",
    desc: "Creating distinctive visual identities that capture your brand essence and stand out in the market with memorable and versatile logo systems.",
    image: "",
  },
  {
    num: "003",
    name: "Brand Guidelines",
    desc: "Establishing clear, comprehensive brand guidelines to ensure consistency across all touchpoints and maintain brand integrity.",
    image: "",
  },
  {
    num: "004",
    name: "Packaging Design",
    desc: "Designing packaging that not only looks great but also communicates your brand story effectively and stands out on shelves.",
    image: "",
  },
  {
    num: "005",
    name: "Digital Marketing",
    desc: "Strategic digital marketing campaigns designed to reach your audience and drive measurable results across multiple channels.",
    image: "",
  },
  {
    num: "006",
    name: "Social Media Management",
    desc: "Building and managing your social media presence to engage your audience and grow your community with authentic content.",
    image: "",
  },
  {
    num: "007",
    name: "Content Creation",
    desc: "Creating compelling content that tells your story and connects with your audience on a deeper level across all platforms.",
    image: "",
  },
  {
    num: "008",
    name: "SEO Optimization",
    desc: "Optimizing your digital presence to improve visibility and drive organic traffic to your platforms and websites.",
    image: "",
  },
];

export const INSIGHT_POSTS = [
  {
    id: 1,
    title: "The Power of Bold Branding",
    content: "How strategic branding can transform your business.",
    date: "April 2024",
  },
  {
    id: 2,
    title: "Digital Marketing Trends 2024",
    content: "What's working in the digital landscape right now.",
    date: "March 2024",
  },
];

export const DELIVER_ITEMS = [
  { num: "01", name: "Social Media Strategy", desc: "Data-driven strategies across Instagram, Facebook, LinkedIn, and TikTok." },
  { num: "02", name: "Paid Advertising", desc: "Meta Ads and Google Ads campaigns optimized for conversions and ROI." },
  { num: "03", name: "Content Marketing", desc: "Engaging content that drives engagement and builds brand authority." },
  { num: "04", name: "Analytics & Optimization", desc: "Continuous monitoring and optimization for peak performance." },
];