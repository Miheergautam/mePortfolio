import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import { gtagEvent } from "../../..//utils/analytics"; // Ensure this exists

const tabs = [
  { id: "AboutMe", label: "About Me" },
  { id: "Education", label: "Education" },
  { id: "Experience", label: "Experience" },
];

export default function SelectionBar() {
  const [selected, setSelected] = useState("AboutMe");

  const handleTabClick = (item) => {
    if (item === selected) return;
    setSelected(item);
    gtagEvent("tab_selected", { tab_name: item.toLowerCase() });
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="w-full max-w-7xl text-white h-full flex flex-col justify-center items-center py-4 px-4 sm:px-6">
      <nav className="about-tabs" role="tablist" aria-label="Who Am I details">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected === tab.id}
            aria-controls={`about-panel-${tab.id}`}
            className="about-tabs__button"
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div
        id={`about-panel-${selected}`}
        className="about-panel"
        role="tabpanel"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-full"
          >
            {selected === "AboutMe" && <AboutMe />}
            {selected === "Education" && <Education />}
            {selected === "Experience" && <Experience />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
