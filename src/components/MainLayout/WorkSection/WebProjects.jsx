import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: ".meBlogs",
    description: "Online Publishing Application",
    image: "assets/meblogs.png",
    liveLink: "https://meblogs-demo.com",
  },
  {
    title: "FooDio",
    description: "Food Ordering Application",
    image: "assets/Web3.jpg",
    liveLink: "https://foodio-demo.com",
  },
  {
    title: ".meConnect",
    description: "Chat Application",
    image: "assets/meconnect.png",
    liveLink: "https://workwave-demo.com",
  },
  {
    title: "WorkWave",
    description: "HR Workflow System",
    image: "assets/Web1.jpg",
    liveLink: "https://workwave-demo.com",
  },
  {
    title: "BUNKERS",
    description: "Hostel Accommodation Application",
    image: "assets/Web2.jpg",
    liveLink: "https://bunkers-demo.com",
  },
  {
    title: "OLYMPIQ",
    description: "Visual Data Analytics - Olympics",
    image: "assets/olympq.avif",
    liveLink: "https://bunkers-demo.com",
  },
];

export default function WebProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPageDesktop = 2;
  const itemsPerPageMobile = 1;

  const isMobile = window.innerWidth < 768;
  const itemsPerPage = isMobile ? itemsPerPageMobile : itemsPerPageDesktop;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return projects.slice(start, end);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-6 w-full">
      {/* Shared Layout for Mobile & Desktop */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl items-center justify-center">
        {getVisibleProjects().map((project, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/2 bg-neutral-900 rounded-xl overflow-hidden shadow-lg group border border-neutral-800"
          >
            {/* Live Icon */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 p-1 hover:scale-110 transition z-20 bg-neutral-300 hover:bg-neutral-400 rounded-full"
              title="View Live"
            >
              <img src="assets/live-icon.png" alt="Live Demo" className="w-6 h-6 drop-shadow-md" />
            </a>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 md:h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <h2 className="text-xl md:text-2xl font-bold text-cust-red">
                {project.title}
              </h2>
              <p className="text-white text-sm md:text-lg font-medium">
                {project.description}
              </p>
            </div>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Miheergautam"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-black/80"
            >
              <VscGithubInverted className="text-white size-5 md:size-6" />
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Now shown on all devices */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={handlePrev}
          className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 p-3 rounded-full transition shadow-lg"
        >
          <FaArrowLeft className="text-white size-5" />
        </button>
        <button
          onClick={handleNext}
          className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 p-3 rounded-full transition shadow-lg"
        >
          <FaArrowRight className="text-white size-5" />
        </button>
      </div>
    </div>
  );
}
