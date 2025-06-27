import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExperienceModal({ selected, onClose }) {
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <motion.div
          layoutId={`card-${selected.company}`}
          className="relative bg-neutral-900 rounded-3xl overflow-hidden text-neutral-200 w-[90%] max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-cust-red transition z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-neutral-300 hover:text-white" />
          </button>

          {/* modern gradient header */}
          <div className="w-full h-40 md:h-56 bg-gradient-to-r from-cust-red to-neutral-800 flex flex-col justify-center px-6 py-4 rounded-b-3xl shadow-inner">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
              {selected.company}
            </h1>
            <p className="text-sm md:text-base italic text-neutral-200 mt-1">
              {selected.location}
            </p>
          </div>

          {/* details */}
          <div className="p-6 flex flex-col gap-6 bg-neutral-950">
            {/* role and duration */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 border-b border-neutral-800 pb-4">
              <span className="text-cust-red font-semibold text-base md:text-lg bg-neutral-800 px-3 py-1 rounded-full shadow hover:bg-cust-red hover:text-black transition">
                {selected.role}
              </span>
              <span className="text-sm md:text-base text-neutral-400">{selected.duration}</span>
            </div>

            {/* summary */}
            {selected.summary && (
              <p className="text-sm md:text-base italic text-neutral-300 leading-relaxed border-b border-neutral-800 pb-4">
                {selected.summary}
              </p>
            )}

            {/* tech stack */}
            {selected.tech && (
              <div className="space-y-2 border-b border-neutral-800 pb-4">
                <h2 className="text-cust-red font-semibold text-lg">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selected.tech.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-neutral-800 hover:bg-cust-red hover:text-black px-3 py-1 rounded-full border border-cust-red transition"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* responsibilities */}
            {selected.responsibilities?.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-cust-red font-semibold text-lg">Key Responsibilities</h2>
                <ul className="space-y-2 pl-4 list-disc marker:text-cust-red text-sm md:text-base text-neutral-300">
                  {selected.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
