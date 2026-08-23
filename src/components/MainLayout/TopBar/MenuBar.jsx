import React from "react";
import { useNavigate } from "react-router-dom";

const menuItemClass =
  "group w-full rounded-lg px-4 py-2 text-center text-2xl font-bold tracking-normal text-neutral-200 transition-all duration-300 hover:bg-cust-red hover:text-black sm:text-right sm:text-3xl md:text-4xl";

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
    <div className="absolute inset-x-0 bottom-full mb-3 flex w-full justify-center">
      <div
        className={`z-[60] mx-2 flex w-[calc(100%-1rem)] max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-neutral-950/95 px-4 py-5 text-cust-light shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 ease-out sm:flex-row sm:items-start sm:gap-8 sm:px-6 sm:py-6
        ${menuOpen 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      > 
          {/* Profile image */}
          <div className="flex w-full max-w-xs flex-col items-center gap-3 sm:w-auto">
            <img
              src="assets/profilex.jpg"
              alt="Profile"
              className="aspect-[4/3] w-32 rounded-lg border border-white/10 object-cover shadow-[0_16px_44px_rgba(0,0,0,0.35)] sm:w-44 md:w-56"
            />
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-cust-red/50"></div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cust-red">
                Inspiration
              </p>
              <div className="h-px w-10 bg-cust-red/50"></div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex w-full flex-col items-stretch text-center sm:max-w-md sm:items-end sm:text-right">
            <button
              onClick={() => handleNavigate("/")}
              className={menuItemClass}
            >
              HOME
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={menuItemClass}
            >
              ABOUT
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className={menuItemClass}
            >
              PROJECTS
            </button>

            <a
              href="https://meblogs-4.vercel.app/"
              className={menuItemClass}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              .meBLOGS
            </a>

            <button
              onClick={() => handleNavigate("/mytech")}
              className={menuItemClass}
            >
              .meTECH
            </button>
          </nav>
        </div>
    </div>
  );
}
