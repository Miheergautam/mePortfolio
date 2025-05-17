import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

export default function SelectionBar() {
  const [selected, setSelected] = useState("AboutMe");

  return (
    <div className="w-full max-w-7xl text-white h-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-10">
        {/* Sidebar Menu */}
        <nav className="col-span-1 flex flex-col justify-center md:justify-start rounded-2xl overflow-hidden">
          <div className="border-2 border-neutral-600 rounded-2xl p-2 flex flex-col gap-2 ">
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
          </div>
        </nav>

        {/* Content Section */}
        <div className="col-span-1 md:col-span-3 px-4 py-2 bg-neutral-800 rounded-3xl h-full">
          {selected === "AboutMe" && <AboutMe />}
          {selected === "Education" && <Education />}
          {selected === "Experience" && <Experience />}
        </div>
      </div>
    </div>
  );
}