import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const photographyProjects = [
  {
    title: "Serene Sky",
    description: "Beautiful sky with a calming view",
    image: "https://i.pinimg.com/736x/9c/25/70/9c2570c0536584590f8e3fb35e4c5a61.jpg",
  },
  {
    title: "Nature's Beauty",
    description: "A peaceful capture of nature",
    image: "https://i.pinimg.com/736x/73/93/9d/73939d7861ece35fb7030ab1e54b6ca2.jpg",
  },
];


export default function Photography() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(photographyProjects.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {/* Large screens: Paginated layout */}
      <div className="hidden md:flex gap-6 relative items-center w-full max-w-5xl">
        <button onClick={handlePrev} className="absolute left-0 p-3 bg-neutral-700 rounded-full z-10">
          <FaArrowLeft className="text-white size-6" />
        </button>
        <div className="flex w-full justify-center gap-6">
          {photographyProjects.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage).map((project, index) => (
            <div key={index} className="flex flex-col w-full h-96 bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-2 w-full h-3/4 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-xl" />
              </div>
              <div className="flex p-4 justify-between items-center bg-neutral-900 rounded-b-xl">
                <div className="flex flex-col">
                  <h1 className="text-cust-red font-bold text-2xl">{project.title}</h1>
                  <p className="text-white text-lg font-semibold">({project.description})</p>
                </div>
                <VscGithubInverted className="size-10 text-white" />
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 p-3 bg-neutral-700 rounded-full z-10">
          <FaArrowRight className="text-white size-6" />
        </button>
      </div>

      {/* Mobile screens: Carousel */}
      <div className="md:hidden flex flex-col items-center w-full max-w-md">
        <div className="flex flex-col w-full h-96 bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-2 w-full h-3/4 overflow-hidden">
            <img src={photographyProjects[currentIndex].image} alt={photographyProjects[currentIndex].title} className="w-full h-full object-cover rounded-t-xl" />
          </div>
          <div className="flex p-4 justify-between items-center bg-neutral-900 rounded-b-xl">
            <div className="flex flex-col">
              <h1 className="text-cust-red font-bold text-2xl">{photographyProjects[currentIndex].title}</h1>
              <p className="text-white text-lg font-semibold">({photographyProjects[currentIndex].description})</p>
            </div>
            <VscGithubInverted className="size-10 text-white" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between w-full mt-4">
          <button onClick={handlePrev} className="p-3 bg-neutral-700 rounded-full">
            <FaArrowLeft className="text-white size-6" />
          </button>
          <button onClick={handleNext} className="p-3 bg-neutral-700 rounded-full">
            <FaArrowRight className="text-white size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}