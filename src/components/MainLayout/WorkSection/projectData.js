const projects = [
  {
    title: ".meBlogs",
    tag: "Web Application",
    portfolio: "personal",
    description:
      "A full-stack publishing platform for writing, organizing, and sharing stories online.",
    image: "assets/meblogs.png",
    liveLink: "https://meblogs-4.vercel.app/",
    githubLink: "https://github.com/Miheergautam",
  },
  {
    title: "ScholarMind",
    tag: "Web Application",
    portfolio: "personal",
    description:
      "An AI-powered research assistant for discovering, understanding, and organizing academic work.",
    image: "assets/scholarmind.jpeg",
    liveLink: "https://github.com/Miheergautam/ScholarMind-2.0",
    githubLink: "https://github.com/Miheergautam/ScholarMind-2.0",
  },
  {
    title: "Flexicurl",
    tag: "Web Application",
    portfolio: "freelancing",
    description: "A unified social platform for fitness enthusiasts.",
    image: "assets/flexicurl.jpg",
    liveLink: "https://flexicurl.fit/",
  },
  {
    title: "Posh Palate",
    tag: "Web Application",
    portfolio: "freelancing",
    description:
      "Posh Palate blends tradition with luxury, offering refined flavours, elegant presentations, and seamless hospitality for celebrations that feel truly extraordinary.",
    image: "assets/posh-palate.jpg",
    liveLink: "https://www.poshpalate.co.in/",
  },
  {
    title: "Rouve Watches",
    tag: "E-commerce",
    portfolio: "freelancing",
    description:
      "A simple collection of premium watches designed for those who value precision, presence, and quiet refinement.",
    image: "assets/rouve-watches.jpg",
    liveLink: "https://rouvewatches.com/",
  },
  {
    title: "Bid India",
    tag: "Web Application",
    portfolio: "freelancing",
    description:
      "An AI-powered platform that makes discovering and reviewing relevant tenders faster.",
    image: "assets/bid.png",
    liveLink: "https://www.bidindia.co.in/",
  },
  {
    title: "FooDio",
    tag: "Web Application",
    portfolio: "personal",
    description:
      "A streamlined food ordering experience built around quick discovery and checkout.",
    image: "assets/Web3.jpg",
    liveLink: "https://foodio-demo.com",
  },
  {
    title: "WorkWave",
    tag: "Web Application",
    portfolio: "freelancing",
    description:
      "A centralized HR workflow system for teams, people operations, and routine processes.",
    image: "assets/Web1.jpg",
    liveLink: "https://workwave-demo.com",
  },
  {
    title: "BUNKERS",
    tag: "Web Application",
    portfolio: "personal",
    description:
      "A hostel accommodation platform designed to simplify discovery and booking.",
    image: "assets/Web2.jpg",
    liveLink: "https://bunkers-demo.com",
  },
  {
    title: "OLYMPIQ",
    tag: "Web Application",
    portfolio: "personal",
    description:
      "An interactive visual analytics project for exploring patterns across Olympic data.",
    image: "assets/olympq.avif",
    liveLink: "https://bunkers-demo.com",
  },
  {
    title: "Pac-Man",
    tag: "Machine Learning",
    portfolio: "personal",
    description:
      "An automated Pac-Man agent that applies machine learning to navigate and make decisions.",
    image: "assets/ML1.jpg",
    liveLink: "https://example.com/pacman",
  },
  {
    title: "GPT-X",
    tag: "Machine Learning",
    portfolio: "personal",
    description:
      "A language model trained on Hindi data to explore native-language generation.",
    image: "assets/Scholarmind.jpg",
    liveLink: "https://github.com/Miheergautam/GPT-X",
    githubLink: "https://github.com/Miheergautam/GPT-X",
  },
  {
    title: "Scrapper-Tool",
    tag: "Automation Tool",
    portfolio: "personal",
    description:
      "An automation tool that collects and organizes data from more than 30 sources.",
    image: "assets/scrapper.jpg",
    liveLink: "https://example.com/travel-video",
  },
  {
    title: "Travel",
    tag: "Video Editing",
    portfolio: "personal",
    description: "A collection of my travel experiences",
    image: "assets/video1.jpeg",
    liveLink: "https://example.com/travel-video",
  },
  {
    title: "Short Trip",
    tag: "Video Editing",
    portfolio: "personal",
    description: "Capturing the essence of short trips",
    image: "assets/video2.jpeg",
    liveLink: "https://example.com/short-trip",
  },
];

export const projectGroups = {
  "Personal Projects": projects.filter(
    (project) => project.portfolio === "personal"
  ),
  "Freelancing Projects": projects.filter(
    (project) => project.portfolio === "freelancing"
  ),
};

export default projects;
