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
      {menuOpen && (
        <div className="absolute flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4 text-cust-light border border-neutral-500 w-full bg-cust-dark rounded-xl mx-2 py-6 px-4 sm:py-6 sm:px-6 shadow-lg z-40 transition-all duration-300">
          {/* Profile image */}
          <img
            src="assets/profilex.jpg"
            alt="Profile"
            className="w-24 sm:w-32 md:w-64 object-cover rounded-lg"
          />

          {/* Menu Items */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right w-full sm:w-auto">
            <h1
              onClick={() => handleNavigate("/")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition"
            >
              HOME
            </h1>

            <h1
              onClick={() => scrollToSection("about")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition"
            >
              ABOUT
            </h1>

            <h1
              onClick={() => scrollToSection("projects")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition"
            >
              PROJECTS
            </h1>

            <Link
              to="https://meblogs-4.vercel.app/"
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              .MeBLOGS
            </Link>

            <h1
              onClick={() => handleNavigate("/mytech")}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-3 py-1 rounded transition"
            >
              MY TECH
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
