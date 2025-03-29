import React, { useState } from "react";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";
import VideoEditing from "./VideoEditing";
import Photography from "./Photography";

export default function WorkTopBar() {
  const [activeTab, setActiveTab] = useState("Full Stack Development");

  return (
    <div className="w-full flex flex-col text-white justify-center items-center gap-6">
      {/* Button Container */}
      <div className="font-semibold border-2 border-neutral-400 py-4 px-6 max-w-7xl flex flex-wrap justify-center md:justify-start md:gap-4 rounded-3xl">
        {/* Mobile Design: Stack buttons */}
        <div className="flex flex-col md:flex-row md:gap-4 gap-3 w-full">
          <button
            className={`py-2 px-4 rounded-2xl transition duration-300 ${
              activeTab === "Full Stack Development"
                ? "bg-cust-red"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => setActiveTab("Full Stack Development")}
          >
            {"<"} Full Stack Development {"/>"}
          </button>
          <button
            className={`py-2 px-4 rounded-2xl transition duration-300 ${
              activeTab === "AI/Machine Learning"
                ? "bg-cust-red"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => setActiveTab("AI/Machine Learning")}
          >
            AI/Machine Learning
          </button>
          <button
            className={`py-2 px-4 rounded-2xl transition duration-300 ${
              activeTab === "Video Editing"
                ? "bg-cust-red"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => setActiveTab("Video Editing")}
          >
            Video Editing
          </button>
          <button
            className={`py-2 px-4 rounded-2xl transition duration-300 ${
              activeTab === "Photography"
                ? "bg-cust-red"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => setActiveTab("Photography")}
          >
            Photography
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-full max-w-7xl w-full">
        {activeTab === "Full Stack Development" ? (
          <WebProjects />
        ) : activeTab === "AI/Machine Learning" ? (
          <MLProjects />
        ) : activeTab === "Video Editing" ? (
          <VideoEditing />
        ) : activeTab === "Photography" ? (
          <Photography />
        ) : (
          <WebProjects />
        )}
      </div>
    </div>
  );
}
