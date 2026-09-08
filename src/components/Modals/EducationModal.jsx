/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, CalendarDays, MapPin, X } from "lucide-react";
import { useEffect } from "react";

export default function EducationModal({ selected, onClose }) {
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
          className="education-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="education-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 42, rotate: -1.5, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 27 }}
          >
            <button className="education-modal__close" onClick={onClose} aria-label="Close education details">
              <X aria-hidden="true" />
            </button>

            <div className="education-modal__hero">
              <img src={selected.bannerImage || selected.image} alt={`${selected.institute} campus`} />
              <div className="education-modal__shade" />
              <div className="education-modal__heading">
                <span>{selected.duration}</span>
                <h2 id="education-modal-title">{selected.institute}</h2>
                <p><MapPin size={16} aria-hidden="true" /> {selected.location}</p>
              </div>
            </div>

            <div className="education-modal__body">
              <div className="education-modal__summary">
                <div className="education-modal__logo">
                  <img src={selected.image} alt={`${selected.institute} logo`} />
                </div>
                <div>
                  <span className="education-modal__label">Program</span>
                  <h3>{selected.title} {selected.field}</h3>
                  {selected.specialization && <p>Specialization in {selected.specialization}</p>}
                  {selected.gpa && <p className="education-modal__gpa">GPA · {selected.gpa}</p>}
                </div>
              </div>

              <div className="education-modal__details">
                {selected.coursework?.length > 0 && (
                  <section>
                    <h3><BookOpen size={18} aria-hidden="true" /> Key coursework</h3>
                    <div className="education-modal__tags">
                      {selected.coursework.map((course) => <span key={course}>{course}</span>)}
                    </div>
                  </section>
                )}

                {selected.achievements?.length > 0 && (
                  <section>
                    <h3><Award size={18} aria-hidden="true" /> Achievements</h3>
                    <div className="education-modal__tags">
                      {selected.achievements.map((achievement) => <span key={achievement}>{achievement}</span>)}
                    </div>
                  </section>
                )}

                <div className="education-modal__period">
                  <CalendarDays size={17} aria-hidden="true" />
                  <span>{selected.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
