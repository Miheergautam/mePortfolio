import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import { projectGroups } from "./projectData";

const tabs = ["Personal Projects", "Freelancing Projects"];

export default function WorkTopBar() {
  const [activeTab, setActiveTab] = useState("Personal Projects");
  const activeProjects = projectGroups[activeTab];

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="w-full max-w-7xl flex flex-col items-center text-white py-4 gap-8">
      <nav
        className="work-tabs"
        role="tablist"
        aria-label="Project categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => handleTabChange(tab)}
            className="work-tabs__button"
          >
            {tab}
          </button>
        ))}
      </nav>

      <div
        className="w-full relative min-h-[480px] md:min-h-[560px]"
        role="tabpanel"
      >
        <ProjectCarousel projects={activeProjects} category={activeTab} />
      </div>
    </div>
  );
}
