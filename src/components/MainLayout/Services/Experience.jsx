import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceModal from "../../Modals/ExperienceModal";
import { BsThreeDots } from "react-icons/bs";

export default function Experience() {
  const experienceData = [
    /*     {
      company: "TENDER BHARAT",
      location: "Delhi, India",
      role: "Software Developer Intern",
      duration: "June 2025 - Present",
      tech: "MongoDB, Python, fastAPI, AI Tools, ReactJS, Typescript, TailwindCSS, Javascript",
      responsibilities: [
        "Builing scalable REST APIs with FastAPI",
        "Integrated AI tools for text summarization",
        "Developed reusable React components"
      ],
      summary: "Worked on an AI-driven tender management platform with a modern stack."
    }, */
    {
      company: "HEALTHLETIC LIFESTYLE",
      location: "Bengaluru, India",
      role: "Backend Developer Intern",
      duration: "April 2025 - June 2025",
      tech: "MongoDB, Express, Node.js, JavaScript, TypeScript",
      responsibilities: [
        "Designed and implemented scalable REST APIs",
        "Developed and maintained key features for the mobile backend",
        "Conducted thorough code reviews and testing to ensure quality",
      ],
      summary:
        "Worked as the secondary team lead in the mobile backend group, contributing to a scalable and efficient backend architecture for the Healthletic mobile application.",
    },
    {
      company: "Reinforce Software Solution Pvt. Ltd.",
      location: "Indore, India",
      role: "Full Stack Developer Intern",
      duration: "May 2024 - August 2024",
      tech: "React.js, Tailwind CSS, Node.js, MongoDB",
      responsibilities: [
        "Redesigned the HR module for improved user experience.",
        "Integrated scalable APIs for key features.",
        "Implemented attendance tracking, profile management, and ticket systems.",
      ],
      summary:
        "Worked on an HR workflow management system, developing and maintaining a fully functional web application with a seamless user experience from frontend to backend.",
    },
    {
      company: "JK Lakshmipat University",
      location: "Jaipur, India",
      role: "Undergraduate Teaching Assistant ~ Probability and Statistics",
      duration: "August 2024 - December 2024",
      tech: "Python, NumPy, SciPy, Matplotlib, Sckit-learn",
      responsibilities: [
        "Assisted students with lab exercises and concepts.",
        "Helped grade assignments and clarify topics.",
        "Supported faculty in course-related tasks.",
      ],
      summary:
        "Assisted in delivering coursework on probability and statistics, supporting students with problem-solving, statistical computing in Python, and data visualization techniques.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="p-2 flex flex-col gap-4">
      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          layoutId={`card-${exp.company}`}
          onClick={() => setSelected(exp)}
          whileHover={!selected ? { scale: 1.02 } : {}}
          className="relative cursor-pointer px-4 py-6 flex flex-col gap-3 text-neutral-300 bg-neutral-800 hover:bg-neutral-800/60 rounded-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4">
            <h2 className="text-lg md:text-2xl font-semibold text-white">
              {exp.company}
            </h2>
            <span className="text-sm md:text-base">
              {exp.location}
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4">
            <span className="px-3 py-1 bg-neutral-700 text-md font-semibold text-cust-red rounded-2xl">
              {exp.role}
            </span>
            <span className="text-sm md:text-base">
              {exp.duration}
            </span>
          </div>
          <div className="text-sm ">
            Tech: <span className="text-cust-red italic">{exp.tech}</span>
          </div>
          {/* absolutely positioned symbol */}
          <div className="absolute bottom-5 right-5 text-cust-red text-xl md:text-xl">
            <BsThreeDots />
          </div>
        </motion.div>
      ))}
      <ExperienceModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
