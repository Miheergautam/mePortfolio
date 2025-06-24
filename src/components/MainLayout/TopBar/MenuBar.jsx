import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="relative flex w-full justify-center mix-blend-normal  max-w-7xl">
      {menuOpen && (
        <div className="absolute flex flex-row justify-between text-cust-light border border-neutral-500 w-full bg-cust-dark rounded-xl mx-2 py-4 px-2 md:py-4 md:px-6">
          <img
            src="public/assets/profilex.jpg"
            alt="Profile"
            className="w-32 md:w-60 object-cover rounded-lg"
          />
          <div className="flex flex-col items-start md:items-end px-4 md:px-8">
            <h1
              onClick={() => handleNavigate("/")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-2 py-1 rounded"
            >
              HOME
            </h1>
            <h1
              onClick={() => scrollToSection("about")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-2 py-1 rounded"
            >
              ABOUT
            </h1>
            <h1
              onClick={() => scrollToSection("projects")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-2 py-1 rounded"
            >
              PROJECTS
            </h1>
            <Link to={"https://meblogs-4.vercel.app/"}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-2 py-1 rounded"
            >
              .MeBLOGS
            </Link>
            <h1
              onClick={() => handleNavigate("/mytech")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer hover:bg-cust-red hover:text-black px-2 py-1 rounded"
            >
              MY TECH
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
