/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, Code2, MapPin, X } from "lucide-react";
import { useEffect } from "react";

export default function ExperienceModal({ selected, onClose }) {
  useEffect(() => {
    if (!selected) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, onClose]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="experience-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="experience-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 38, rotate: -1, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 27 }}
          >
            <button className="experience-modal__close" onClick={onClose} aria-label="Close experience details">
              <X aria-hidden="true" />
            </button>

            <header className="experience-modal__header">
              <span className="experience-modal__number">Professional experience</span>
              <h2 id="experience-modal-title">{selected.company}</h2>
              <div className="experience-modal__meta">
                {selected.location && <span><MapPin size={15} aria-hidden="true" /> {selected.location}</span>}
                <span><CalendarDays size={15} aria-hidden="true" /> {selected.duration}</span>
              </div>
            </header>

            <div className="experience-modal__body">
              <section className="experience-modal__overview">
                <span className="experience-modal__eyebrow"><BriefcaseBusiness size={16} aria-hidden="true" /> Role</span>
                <h3>{selected.role}</h3>
                {selected.summary && <p>{selected.summary}</p>}
              </section>

              <div className="experience-modal__details">
                {selected.tech && (
                  <section>
                    <h3><Code2 size={17} aria-hidden="true" /> Tech stack</h3>
                    <div className="experience-modal__tags">
                      {selected.tech.split(",").map((tech) => <span key={tech}>{tech.trim()}</span>)}
                    </div>
                  </section>
                )}

                {selected.responsibilities?.length > 0 && (
                  <section>
                    <h3><BriefcaseBusiness size={17} aria-hidden="true" /> Key responsibilities</h3>
                    <ul>
                      {selected.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
