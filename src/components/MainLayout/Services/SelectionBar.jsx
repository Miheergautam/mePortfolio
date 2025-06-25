import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import { gtagEvent } from "../../..//utils/analytics"; // Ensure this exists

export default function SelectionBar() {
  const [selected, setSelected] = useState("AboutMe");

  const handleTabClick = (item) => {
    setSelected(item);
    gtagEvent("tab_selected", { tab_name: item.toLowerCase() });
  };

  return (
    <div className="w-full max-w-7xl text-white h-full flex flex-col justify-center items-center py-4 px-4 sm:px-6">
      {/* Tab Menu */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-5 w-full max-w-xl p-2 rounded-2xl">
        {["AboutMe", "Education", "Experience"].map((item) => (
          <div
            key={item}
            className={`font-semibold text-base sm:text-lg md:text-xl px-4 py-2 text-center rounded-2xl transition-all duration-300 cursor-pointer ${
              selected === item
                ? "text-black bg-cust-red"
                : "text-cust-red hover:bg-cust-red border-b border-cust-red hover:text-black"
            }`}
            onClick={() => handleTabClick(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-10 max-w-6xl w-full">
        <div className="col-span-1 md:col-span-3 px-4 py-2 rounded-3xl">
          {selected === "AboutMe" && <AboutMe />}
          {selected === "Education" && <Education />}
          {selected === "Experience" && <Experience />}
        </div>
      </div>
    </div>
  );
}
