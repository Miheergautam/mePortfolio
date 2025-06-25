import { useState } from "react";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";
import Automation from "./Automation";
import VideoProjects from "./VideoProjects";

const tabs = ["Web Application", "Machine Learning", "Automation Tools", "Video Editing"];

const tabComponents = {
  "Web Application": <WebProjects />,
  "Machine Learning": <MLProjects />,
  "Automation Tools": <Automation />,
  "Video Editing": <VideoProjects />,
};

export default function WorkTopBar() {
  const [activeTab, setActiveTab] = useState("Web Application");

  return (
    <div className="w-full max-w-7xl flex flex-col items-center text-white py-4 gap-6 px-4 sm:px-6">
      {/* Tab Bar */}
      <nav className="flex justify-center flex-wrap gap-3 md:gap-6 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold text-base sm:text-lg md:text-xl px-4 py-2 text-center rounded-2xl transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? "text-black bg-cust-red"
                : "text-cust-red hover:bg-cust-red border-b border-cust-red hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Animated Content */}
      <div className="w-full relative min-h-[300px] md:min-h-[400px]">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
}
