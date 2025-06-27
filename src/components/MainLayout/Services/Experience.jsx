export default function Experience() {
  const experienceData = [
    {
      company: "TENDER BHARAT",
      location: "Delhi, India",
      role: "Software Developer Intern",
      duration: "June 2025 - Present",
      tech: "MongoDB, Python, fastAPI, AI Tools, React, Typescript, TailwindCSS"
    },
    {
      company: "HEALTHLETIC LIFESTYLE",
      location: "Bengaluru, India",
      role: "Backend Developer Intern",
      duration: "April 2025 - June 2025",
      tech: "MongoDB, ExpressJS, NodeJS, Javascript, Typescript",
    },
    {
      company: "REINFORCE SOFTWARE SOLUTION PVT. LTD.",
      location: "Indore, India",
      role: "Full-Stack Developer Intern",
      duration: "May 2024 - July 2024",
      tech: "MongoDB, ExpressJS, ReactJS, NodeJS, TailwindCSS",
    },
    {
      company: "JK LAKSHMIPAT UNIVERSITY",
      location: "Jaipur, India",
      role: "Undergraduate Teaching Assistant ~ Probability and Statistics",
      duration: "August 2024 - December 2024",
      tech: "Pyhton Libraries, Pytorch, Matplotlib",
    },
  ];

  const renderExperienceBlock = (exp, index) => (
    <div key={index} className="px-4 py-6 flex flex-col gap-1 text-neutral-300 bg-neutral-800 rounded-2xl hover:scale-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
">
      {/* Company Name & Location */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4">
        <h2 className="text-lg md:text-2xl font-semibold text-white">{exp.company}</h2>
        <span className="text-sm md:text-base">{exp.location}</span>
      </div>
  
      {/* Role & Duration */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-1 md:gap-4">
        <span className="px-3 py-1/2 bg-neutral-700 text-md font-semibold text-cust-red rounded-2xl">{exp.role}</span>
        <span className="text-sm md:text-base">{exp.duration}</span>
      </div>
  
      {/* Tech Stack (if exists) */}
      {exp.tech && (
        <div className="text-sm italic leading-relaxed">
          Tech Stack ~ <span className="text-cust-red font-semibold">{`< ${exp.tech} >`}</span>
        </div>
      )}
    </div>
  );
  

  return <div className="p-2 flex flex-col gap-4">{experienceData.map(renderExperienceBlock)}</div>;
}
