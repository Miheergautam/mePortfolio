import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import EducationModal from "../../Modals/EducationModal";

const educationData = [
  {
    institute: "Norwegian University of Science and Technology",
    shortName: "NTNU",
    location: "Trondheim, Norway",
    title: "Exchange Student",
    field: "Computer Science and Engineering",
    duration: "Spring 26'",
    specialization: null,
    image:
      "data:image/png;base64,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",
    gpa: null,
    bannerImage:
      "https://t3.ftcdn.net/jpg/08/63/07/96/360_F_863079636_zkQWumIkSHXiDtrsJDqtXkSbnpM42ztu.jpg",
    coursework: [
      "Digital Service Design",
      "Coperational Technology and Social Media",
      "Programming and Numerics",
      "Software Security and Data Privacy",
    ],
    achievements: ["Project Developer at COGITO"],
  },
  {
    institute: "INDIAN INSTITUTE OF TECHNOLOGY KANPUR",
    shortName: "IIT Kanpur",
    location: "Kanpur, India",
    title: "Exchange Student",
    field: "Computer Science and Engineering",
    duration: "Spring 25'",
    specialization: null,
    image: "assets/IIT_Kanpur_Logo.svg",
    gpa: null,
    bannerImage:
      "https://i0.wp.com/archeyes.com/wp-content/uploads/2024/12/Exterior-View-2-Kanpur-Indian-Institute-of-Technology-by-Kanvinde-Rai-and-Chowdhury.jpg?ssl=1",
    coursework: ["Big Data Visual Analytics", "Theory Of Multi Armed Bandits"],
    achievements: null,
  },
  {
    institute: "INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR",
    shortName: "IIT Gandhinagar",
    location: "Gandhinagar, India",
    title: "Exchange Student",
    field: "Computer Science and Engineering",
    duration: "Spring 24'",
    specialization: null,
    bannerImage: "https://labs.iitgn.ac.in/cglab/img/lab/FountainRe.png",
    image: "assets/IIT_Gandhinagar_Logo.svg",
    gpa: null,
    coursework: ["Machine Learning", "Human-Computer Interaction", "Compiler Design"],
    achievements: [],
  },
  {
    institute: "JK LAKSHMIPAT UNIVERSITY",
    shortName: "JKLU",
    location: "Jaipur, India",
    title: "Bachelor of Technology in",
    field: "Computer Science",
    bannerImage: "https://www.newsvoir.com/images/article/image1/31775_JKL.jpg",
    duration: "Aug 2022 - Present",
    specialization: "AI & Machine Learning",
    image: "assets/JKLU.png",
    gpa: "8.91 / 10",
    coursework: [
      "Computatinal Data Analysis",
      "Computer Networks",
      "Design and Analysis of Algorithm",
      "Operating Systems",
      "Artificial Inteligence",
    ],
    achievements: ["Dean's List 2022 - 2025"],
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 190 : -190,
    y: -18,
    rotate: direction > 0 ? 9 : -9,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -230 : 230,
    y: -34,
    rotate: direction > 0 ? -12 : 12,
    opacity: 0,
    scale: 0.94,
  }),
};

function vibrate(pattern = 10) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

export default function Education() {
  const [[activeIndex, direction], setActive] = useState([0, 1]);
  const [selected, setSelected] = useState(null);
  const didDrag = useRef(false);
  const reduceMotion = useReducedMotion();
  const activeEducation = educationData[activeIndex];

  const move = (nextDirection) => {
    setActive(([current]) => [
      (current + nextDirection + educationData.length) % educationData.length,
      nextDirection,
    ]);
    vibrate(8);
  };

  const openEducation = () => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    setSelected(activeEducation);
    vibrate([8, 24, 8]);
  };

  const handleDragEnd = (_, info) => {
    didDrag.current = true;
    if (Math.abs(info.offset.x) < 55 && Math.abs(info.velocity.x) < 350) return;
    move(info.offset.x < 0 ? 1 : -1);
  };

  return (
    <section className="education-stack" aria-label="Education journey">
      <div className="education-stack__stage">
        {[2, 1].map((depth) => {
          const item = educationData[(activeIndex + depth) % educationData.length];
          return (
            <div
              key={`${item.institute}-${depth}`}
              className="education-stack__back-card"
              data-depth={depth}
              aria-hidden="true"
            >
              <span className="education-stack__back-visual">
                <img src={item.bannerImage || item.image} alt="" />
                <span className="education-stack__back-logo">
                  <img src={item.image} alt="" />
                </span>
              </span>
              <span className="education-stack__back-content">
                <small>{item.duration}</small>
                <strong>{item.shortName}</strong>
                <span>{item.field}</span>
              </span>
            </div>
          );
        })}

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.button
            key={activeEducation.institute}
            type="button"
            className="education-card"
            custom={direction}
            variants={cardVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit={reduceMotion ? { opacity: 0 } : "exit"}
            transition={{ type: "spring", stiffness: 285, damping: 27, mass: 0.82 }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => {
              didDrag.current = true;
            }}
            onDragEnd={handleDragEnd}
            onClick={openEducation}
            aria-label={`Open details for ${activeEducation.institute}`}
          >
            <span className="education-card__visual">
              <img
                src={activeEducation.bannerImage || activeEducation.image}
                alt=""
                className="education-card__banner"
              />
              <span className="education-card__logo">
                <img src={activeEducation.image} alt={`${activeEducation.institute} logo`} />
              </span>
              <span className="education-card__count">
                {String(activeIndex + 1).padStart(2, "0")} / {String(educationData.length).padStart(2, "0")}
              </span>
            </span>

            <span className="education-card__content">
              <span className="education-card__duration">{activeEducation.duration}</span>
              <strong>{activeEducation.shortName}</strong>
              <span className="education-card__field">
                {activeEducation.title} · {activeEducation.field}
              </span>
              <span className="education-card__location">
                <MapPin size={15} aria-hidden="true" />
                {activeEducation.location}
              </span>
              <span className="education-card__open">
                View details <MoveUpRight size={17} aria-hidden="true" />
              </span>
            </span>
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="education-stack__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous education card">
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className="education-stack__progress" aria-hidden="true">
          {educationData.map((item, index) => (
            <span key={item.institute} className={index === activeIndex ? "is-active" : ""} />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next education card">
          <ArrowRight aria-hidden="true" />
        </button>
      </div>

      <EducationModal selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
