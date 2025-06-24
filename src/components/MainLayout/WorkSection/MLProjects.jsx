import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const mlProjects = [
  {
    title: "Pac-Man",
    description: "Automated Pac-Man",
    image: "assets/ML1.jpg",
    liveLink: "https://example.com/pacman",
  },
  {
    title: "Scholar Mind",
    description: "Research Assistent",
    image: "assets/ML2.webp",
    liveLink: "https://example.com/chatbot",
  },
];

export default function MLProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(mlProjects.length / itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));

  return (
    <div className="p-4 flex flex-col items-center gap-6">
      {/* Desktop View */}
      <div className="hidden md:flex gap-6 w-full max-w-6xl items-center justify-center">
        {mlProjects
          .slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)
          .map((project, index) => (
            <div
              key={index}
              className="relative w-1/2 bg-neutral-900 rounded-xl overflow-hidden shadow-lg group border border-neutral-800"
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

              {/* Image Zoom on Hover */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-cust-red">
                  {project.title}
                </h2>
                <p className="text-white text-lg font-medium">
                  {project.description}
                </p>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/Miheergautam"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                <VscGithubInverted className="text-white size-6" />
              </a>
            </div>
          ))}
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex gap-4 justify-center">
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
