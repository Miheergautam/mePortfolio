import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function MenuBar({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleNavigate = (route) => {
    navigate(route);
    setMenuOpen(false);
  };

  return (
    <div className="relative flex w-full justify-center max-w-7xl">
      <div
        className={`absolute flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4 text-cust-light w-full border border-neutral-700 bg-neutral-900 rounded-xl mx-2 py-6 px-4 sm:py-6 sm:px-6 shadow-lg shadow-cust-red z-40
        transition-all duration-300 ease-out max-w-6xl
        ${menuOpen 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      > 
          {/* Profile image */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="assets/profilex.jpg"
              alt="Profile"
              className="w-24 sm:w-32 md:w-64 object-cover rounded-lg"
            />
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-cust-red/40"></div>
              <p className="text-cust-red text-xs font-semibold tracking-[0.25em] uppercase">
                Inspiration
              </p>
              <div className="w-10 h-[1px] bg-cust-red/40"></div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right w-full sm:w-auto">
            <h1
              onClick={() => handleNavigate("/")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition cursor-pointer"
            >
              HOME
            </h1>

            <h1
              onClick={() => scrollToSection("about")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition cursor-pointer"
            >
              ABOUT
            </h1>

            <h1
              onClick={() => scrollToSection("projects")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition cursor-pointer"
            >
              PROJECTS
            </h1>

            <Link
              to="https://meblogs-4.vercel.app/"
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              .meBLOGS
            </Link>

            <h1
              onClick={() => handleNavigate("/mytech")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition cursor-pointer"
            >
              .meTECH
            </h1>
          </div>
        </div>
    </div>
  );
}
