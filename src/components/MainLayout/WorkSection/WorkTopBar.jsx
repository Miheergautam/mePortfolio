import React, { useState } from "react";
import WebProjects from "./WebProjects";
import MLProjects from "./MLProjects";
import VideoEditing from "./VideoEditing";
import Photography from "./Photography";

export default function WorkTopBar() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="w-full flex flex-col text-white justify-center items-center gap-6">
      {/* Button Container */}
      <div className="font-semibold border-2 border-neutral-400 py-4 px-6 max-w-7xl flex flex-wrap justify-center md:justify-start md:gap-4 rounded-3xl">
        {/* Mobile Design: Stack buttons */}
        <div className="flex flex-col md:flex-row md:gap-4 gap-3 w-full">
          <button
            className={`bg-neutral-700 py-2 px-4 rounded-2xl transition duration-300 ${activeTab === "Web Development" ? "bg-cust-red" : ""}`}
            onClick={() => setActiveTab("Web Development")}
          >
            {"<"} Web Development {"/>"}
          </button>
          <button
            className={`bg-neutral-700 py-2 px-4 rounded-2xl transition duration-300 ${activeTab === "Machine Learning" ? "bg-cust-red" : ""}`}
            onClick={() => setActiveTab("Machine Learning")}
          >
            Machine Learning
          </button>
          <button
            className={`bg-neutral-700 py-2 px-4 rounded-2xl transition duration-300 ${activeTab === "Video Editing" ? "bg-cust-red" : ""}`}
            onClick={() => setActiveTab("Video Editing")}
          >
            Video Editing
          </button>
          <button
            className={`bg-neutral-700 py-2 px-4 rounded-2xl transition duration-300 ${activeTab === "Photography" ? "bg-cust-red" : ""}`}
            onClick={() => setActiveTab("Photography")}
          >
            Photography
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="h-full max-w-7xl w-full">
        {activeTab === "Web Development" ? (
          <WebProjects />
        ) : activeTab === "Machine Learning" ? (
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