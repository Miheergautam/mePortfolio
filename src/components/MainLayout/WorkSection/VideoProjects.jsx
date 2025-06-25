import { useState, useEffect } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videoProjects = [
  {
    title: "Travel",
    description: "A collection of my travel experiences",
    image: "https://i.pinimg.com/474x/f8/53/2b/f8532b4ae50b1446f9fc5abead12d704.jpg",
    liveLink: "https://example.com/travel-video",
  },
  {
    title: "Short Trip",
    description: "Capturing the essence of short trips",
    image: "https://i.pinimg.com/474x/99/ff/2e/99ff2e1805d1b51b58a48dd435e62b17.jpg",
    liveLink: "https://example.com/short-trip",
  },
];

export default function VideoProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(videoProjects.length / itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return videoProjects.slice(start, end);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-6 w-full">
      {/* Project Cards - Responsive */}
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
              <img
                src="assets/live-icon.png"
                alt="Live Demo"
                className="w-6 h-6 drop-shadow-md"
              />
            </a>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 md:h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <h2 className="text-xl md:text-2xl font-bold text-cust-red">{project.title}</h2>
              <p className="text-sm md:text-lg text-white font-medium">{project.description}</p>
            </div>

            {/* GitHub */}
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

      {/* Navigation Buttons - Now visible on all devices */}
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
