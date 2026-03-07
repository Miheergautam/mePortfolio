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
      className="flex flex-col items-center min-h-screen"
    >
      <div className="flex flex-col my-24 items-center justify-center text-cust-red w-full max-w-7xl font-bold text-lg md:text-xl px-3">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold px-3 py-2 text-center">
          <span className="text-cust-red font-bold">Who </span>
          Am I!
        </h1>
        <span className="group border border-neutral-500 px-5 py-1.5 rounded-full text-cust-red text-lg md:text-xl font-semibold tracking-wide flex items-center overflow-hidden cursor-pointer">
          <span className="text-neutral-400">.</span>
          <span className="ml-1">Explore</span>
          <span
            className="
            flex items-center
            max-w-0 opacity-0 ml-0
            group-hover:max-w-[120px]
            group-hover:opacity-100
            group-hover:ml-2
            transition-all duration-700 ease-out
            overflow-hidden whitespace-nowrap
            "
          >
            <span className="text-neutral-500 mr-1">|</span>
            <span className="text-neutral-400">About Me</span>
          </span>
        </span>
      </div>
      <SelectionBar />
    </div>
  );
}
