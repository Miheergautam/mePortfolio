import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function EducationModal({ selected, onClose }) {

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
          layoutId={`card-${selected.institute}`}
          className="relative bg-neutral-900 rounded-2xl overflow-hidden text-neutral-200 w-[90%] max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-cust-red transition z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-black hover:text-white" />
          </button>

          {/* banner image */}
          <div className="w-full h-48 md:h-64 overflow-hidden border-b border-white">
            <img
              src={selected.bannerImage || selected.image}
              alt={`${selected.institute} banner`}
              className="object-cover w-full h-full"
            />
          </div>

          {/* details grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* left column */}
            <div className="flex flex-col gap-3 border-r border-neutral-700 pr-4">
              <h1 className="text-xl md:text-2xl font-bold text-cust-red">
                {selected.institute}
              </h1>
              <p className="text-sm md:text-base italic text-neutral-400">
                {selected.location}
              </p>
              <div className="text-base text-neutral-300">
                <span className="text-cust-red font-semibold">{selected.title}</span>{" "}
                {selected.field && ` ${selected.field}`}
              </div>
              <p className="text-sm text-neutral-400">{selected.duration}</p>
              {selected.specialization && (
                <p className="text-sm italic text-neutral-300">
                  Specialization:{" "}
                  <span className="text-cust-red">{selected.specialization}</span>
                </p>
              )}
              {selected.gpa && (
                <p className="text-sm text-neutral-300">
                  GPA: <span className="text-cust-red">{selected.gpa}</span>
                </p>
              )}
            </div>

            {/* right column */}
            <div className="flex flex-col gap-6">
              {selected.coursework?.length > 0 && (
                <div className="space-y-2">
                  <h2 className="text-cust-red font-semibold border-b border-neutral-700 pb-1">
                    Key Coursework
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selected.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-neutral-800 hover:bg-cust-red hover:text-black px-3 py-1 rounded-full border border-cust-red transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {selected.achievements?.length > 0 && (
                <div className="space-y-2">
                  <h2 className="text-cust-red font-semibold border-b border-neutral-700 pb-1">
                    Achievements
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selected.achievements.map((ach, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-neutral-800 hover:bg-cust-red hover:text-black px-3 py-1 rounded-full border border-cust-red transition"
                      >
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
