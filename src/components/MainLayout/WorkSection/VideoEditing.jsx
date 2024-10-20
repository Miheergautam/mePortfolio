import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videoProjects = [
  {
    title: "Travel",
    description: "A video of my travels",
    image: "public/assets/video1.jpeg" 
  },
  {
    title: "Editing",
    description: "Video editing",
    image: "public/assets/video2.jpeg", 
  },
];

export default function VideoEditing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4">
      {/* Large screens: Two-column layout */}
      <div className="hidden md:flex gap-4">
        {videoProjects.map((project, index) => (
          <div key={index} className="flex flex-col w-1/2 h-96">
            <div className="p-2 w-full h-3/4 overflow-hidden">
              <img
                src={project.image}
                alt={`Video Project ${index + 1}`}
                className="w-full h-full rounded-2xl border-2 border-neutral-600"
              />
            </div>
            <div className="flex py-2 px-4 justify-between items-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-cust-red font-bold text-2xl">{project.title}</h1>
                <p className="text-white text-lg font-semibold">
                  {"("} {project.description} {")"}
                </p>
              </div>
              <VscGithubInverted className="size-12" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile screens: Carousel */}
      <div className="md:hidden flex flex-col items-center">
        <div className="flex flex-col w-full h-96">
          <div className="p-2 w-full h-3/4 overflow-hidden">
            <img
              src={videoProjects[currentIndex].image}
              alt={`Video Project ${currentIndex + 1}`}
              className="w-full h-full rounded-2xl border-2 border-neutral-600"
            />
          </div>
          <div className="flex py-2 px-4 justify-between items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-cust-red font-bold text-2xl">{videoProjects[currentIndex].title}</h1>
              <p className="text-white text-lg font-semibold">
                {"("} {videoProjects[currentIndex].description} {")"}
              </p>
            </div>
            <VscGithubInverted className="size-12" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between w-full mt-4">
          <button onClick={handlePrev} className="p-2 bg-neutral-700 rounded-full">
            <FaArrowLeft className="text-white" />
          </button>
          <button onClick={handleNext} className="p-2 bg-neutral-700 rounded-full">
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}