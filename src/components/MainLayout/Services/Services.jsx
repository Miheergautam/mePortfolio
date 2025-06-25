import { useEffect, useRef } from "react";
import SelectionBar from "./SelectionBar";
import { gtagEvent } from "../../../utils/analytics";

export default function Services() {
  const aboutRef = useRef();

  // Track when 'About' section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gtagEvent("section_view", { section: "about_services" });
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleExploreClick = () => {
    gtagEvent("explore_click", { location: "about_section" });
  };

  return (
    <div
      ref={aboutRef}
      id="about"
      className="flex flex-col items-center mt-10 min-h-screen"
    >
      <div className="flex flex-col my-24 items-center justify-center text-cust-red w-full max-w-7xl font-bold text-lg md:text-xl px-3">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold px-3 py-2 text-center">
          <span className="text-cust-red font-bold">Who </span>
          Am I!
        </h1>
        <span
          onClick={handleExploreClick}
          className="border-2 border-neutral-400 px-3 md:px-4 py-1 rounded-2xl text-sm md:text-base cursor-pointer hover:bg-cust-red hover:text-black transition"
        >
          <span className="text-white">.</span> Explore
        </span>
      </div>
      <SelectionBar />
    </div>
  );
}
