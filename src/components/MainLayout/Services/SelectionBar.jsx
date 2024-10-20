import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

export default function SelectionBar() {
  const [selected, setSelected] = useState("AboutMe");

  return (
    <div className="w-full max-w-7xl text-white h-full">
      <div className="flex flex-col md:flex-row py-10 items-center md:items-start">
        {/* Sidebar Menu */}
        <nav className="flex flex-col w-full md:w-1/4 justify-center md:justify-start border-4 border-neutral-500 rounded-3xl overflow-hidden p-2 gap-2">
          {["AboutMe", "Education", "Experience"].map((item) => (
            <div
              key={item}
              className={`font-semibold text-lg md:text-xl p-5 text-center rounded-2xl transition-all duration-300 cursor-pointer ${
                selected === item
                  ? "bg-cust-red text-white shadow-lg"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-600 hover:text-white"
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </div>
          ))}
        </nav>

        {/* Content Section */}
        <div className="mt-4 md:mt-0 ml-0 md:ml-2 px-4 py-2 w-full md:w-3/4 bg-neutral-800 rounded-3xl h-full">
          {selected === "AboutMe" && <AboutMe />}
          {selected === "Education" && <Education />}
          {selected === "Experience" && <Experience />}
        </div>
      </div>
    </div>
  );
}