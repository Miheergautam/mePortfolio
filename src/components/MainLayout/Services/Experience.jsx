import { lazy, Suspense, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, MoveUpRight } from "lucide-react";
import ExperienceModal from "../../Modals/ExperienceModal";

const ExperienceTerrain = lazy(() => import("./ExperienceTerrain"));

const experienceData = [
  {
    company: "Reinforce Software Solution Pvt. Ltd.",
    shortCompany: "Reinforce Software",
    location: "Indore, India",
    role: "Full Stack Developer Intern",
    duration: "May 2024 - July 2024",
    tech: "React.js, Tailwind CSS, Node.js, MongoDB",
    responsibilities: [
      "Redesigned the HR module for improved user experience.",
      "Integrated scalable APIs for key features.",
      "Implemented attendance tracking, profile management, and ticket systems.",
    ],
    summary:
      "Worked on an HR workflow management system, developing and maintaining a fully functional web application with a seamless user experience from frontend to backend.",
    position: { left: "13%", top: "72%" },
    align: "left",
  },
  {
    company: "JK Lakshmipat University",
    shortCompany: "JKLU",
    location: "Jaipur, India",
    role: "Undergraduate Teaching Assistant ~ { Probability and Statistics & Data Structures and Algorithm }",
    duration: "August 2024 - December 2025",
    tech: "Python, NumPy, SciPy, Matplotlib, Sckit-learn, C, Algorithms",
    responsibilities: [
      "Assisted students with lab exercises and concepts.",
      "Helped grade assignments and clarify topics.",
      "Supported faculty in course-related tasks.",
    ],
    summary:
      "Assisted in delivering coursework on probability & statistics and Data Structures and Algorithm, supporting students with problem-solving, statistical computing in Python, and data visualization techniques.",
    position: { left: "32%", top: "45%" },
    align: "center",
  },
  {
    company: "Healthletic Lifestyle",
    shortCompany: "Healthletic",
    location: "Bengaluru, India",
    role: "Backend Developer Intern",
    duration: "April 2025 - May 2025",
    tech: "MongoDB, Express, Node.js, JavaScript, TypeScript",
    responsibilities: [
      "Designed and implemented scalable REST APIs",
      "Developed and maintained key features for the mobile backend",
      "Conducted thorough code reviews and testing to ensure quality",
    ],
    summary:
      "Worked as the secondary team lead in the mobile backend group, contributing to a scalable and efficient backend architecture for the Healthletic mobile application.",
    position: { left: "50%", top: "62%" },
    align: "center",
  },
  {
    company: "Bidovate Technologies PVT. LTD.",
    shortCompany: "Bidovate Technologies",
    location: "Delhi, India",
    role: "Software Developer Intern",
    duration: "June 2025 - Nov 2025",
    tech: "MongoDB, Python, FastAPI, AI tools, ReactJS, TypeScript, Tailwind CSS",
    responsibilities: [
      "Building scalable REST APIs using FastAPI",
      "Integrating AI tools for advanced tender analysis",
      "Developing a user-friendly interface for Tender Bharat",
    ],
    summary:
      "Contributed to a modern, scalable tech stack to deliver a seamless and intuitive user experience for Tender Bharat.",
    position: { left: "68%", top: "31%" },
    align: "center",
    placement: "bottom",
  },
  {
    company: "Flexicurl",
    shortCompany: "Flexicurl",
    location: null,
    role: "Software Engineer",
    duration: "June 2026 - Present",
    tech: null,
    responsibilities: [
      "Building and improving product features for the Flexicurl platform.",
      "Developing dependable experiences across the application.",
      "Collaborating on the product as it grows.",
    ],
    summary:
      "Currently working as a Software Engineer on Flexicurl, a unified social platform for fitness enthusiasts.",
    position: { left: "91%", top: "18%" },
    align: "right",
    placement: "bottom",
  },
];

function vibrate(pattern = 10) {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const reduceMotion = useReducedMotion();

  const openExperience = (experience) => {
    setSelected(experience);
    vibrate([8, 22, 8]);
  };

  return (
    <section className="experience-timeline" aria-label="Professional experience timeline">
      <div className="experience-timeline__viewport">
        <div className="experience-timeline__canvas">
          <Suspense fallback={<div className="experience-terrain experience-terrain--loading" />}>
            <ExperienceTerrain reduceMotion={reduceMotion} />
          </Suspense>

          <span className="experience-timeline__base-label">2024 · Trailhead</span>
          <span className="experience-timeline__summit-label">2026 · Current summit</span>

          {experienceData.map((experience, index) => (
            <motion.button
              key={experience.company}
              type="button"
              className="experience-pin"
              data-align={experience.align}
              data-placement={experience.placement || "top"}
              data-experience-index={index}
              style={experience.position}
              onClick={() => openExperience(experience)}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.55, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.55 + index * 0.16 }}
              aria-label={`Open experience at ${experience.company}`}
            >
              <span className="experience-pin__pulse" />
              <span className="experience-pin__dot">{String(index + 1).padStart(2, "0")}</span>
              <span className="experience-pin__date">{experience.duration.split(" - ")[0]}</span>
              <span className="experience-pin__tooltip">
                <small>{experience.duration}</small>
                <strong>{experience.shortCompany}</strong>
                <span>{experience.role}</span>
                {experience.location && (
                  <span className="experience-pin__location">
                    <MapPin size={13} aria-hidden="true" /> {experience.location}
                  </span>
                )}
                <span className="experience-pin__open">View role <MoveUpRight size={14} aria-hidden="true" /></span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="experience-timeline__scroll-hint" aria-hidden="true">
        <span />
      </div>

      <ExperienceModal selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
