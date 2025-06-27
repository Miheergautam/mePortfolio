import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EducationModal from "../../Modals/EducationModal";

export default function Education() {
  const educationData = [
    {
      institute: "INDIAN INSTITUTE OF TECHNOLOGY KANPUR",
      location: "Kanpur, India",
      title: "Exchange Student",
      field: "Computer Science and Engineering",
      duration: "Spring 25'",
      specialization: null,
      image: "assets/IIT_Kanpur_Logo.svg",
      gpa: null,
      bannerImage: "https://i0.wp.com/archeyes.com/wp-content/uploads/2024/12/Exterior-View-2-Kanpur-Indian-Institute-of-Technology-by-Kanvinde-Rai-and-Chowdhury.jpg?ssl=1",  
      coursework: ["Big Data Visual Analytics", "Theory Of Multi Armed Bandits"],
      achievements: null,
    },
    {
      institute: "INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR",
      location: "Gandhinagar, India",
      title: "Exchange Student",
      field: "Computer Science and Engineering",
      duration: "Spring 24'",
      specialization: null,
      bannerImage: "https://labs.iitgn.ac.in/cglab/img/lab/FountainRe.png",  
      image: "assets/IIT_Gandhinagar_Logo.svg",
      gpa: null,
      coursework: ["Machine Learning","Human-Computer Interaction","Compiler Design"],
      achievements: [],
    },
    {
      institute: "JK LAKSHMIPAT UNIVERSITY",
      location: "Jaipur, India",
      title: "Bachelor of Technology in",
      field: "Computer Science",
      bannerImage: "https://www.newsvoir.com/images/article/image1/31775_JKL.jpg",
      duration: "Aug 2022 - Present",
      specialization: "AI & Machine Learning",
      image: "assets/JKLU.png",
      gpa: "8.91 / 10",
      coursework: ["Computatinal Data Analysis", "Computer Networks", "Design and Analysis of Algorithm", "Operating Systems", "Artificial Inteligence"],
      achievements: ["Dean's List 2022 - 2025"],
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="p-2 flex flex-col gap-4 relative">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          layoutId={`card-${edu.institute}`}
          onClick={() => setSelected(edu)}
          whileHover={!selected ? { scale: 1.02 } : {}}
          className="cursor-pointer px-4 py-6 flex flex-col md:flex-row gap-4 items-center justify-between bg-neutral-800 rounded-2xl hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
        >
          <div className="w-24 h-24 bg-white p-2 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src={edu.image}
              alt={`${edu.institute} logo`}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 text-neutral-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-4">
              <h1 className="text-lg md:text-2xl font-semibold text-white">
                {edu.institute}
              </h1>
              <h1 className="text-sm md:text-base">{edu.location}</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-1 md:gap-4">
              <h1 className="italic">
                {edu.title} ~{" "}
                <span className="text-cust-red font-semibold">{edu.field}</span>
              </h1>
              <h1 className="text-sm md:text-base">{edu.duration}</h1>
            </div>
            {edu.specialization && (
              <div className="text-sm">
                Specialization in{" "}
                <span className="text-cust-red italic">{edu.specialization}</span>
              </div>
            )}
          </div>
        </motion.div>
      ))}

      <EducationModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
