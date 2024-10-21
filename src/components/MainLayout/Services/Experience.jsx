export default function Experience() {
  return (
    <div className="p-2 flex flex-col justify-between">
      {/* Second Experience Block */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2 px-2 text-neutral-300 gap-2">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            REINFORCE SOFTWARE SOLUTION PVT. LTD.
          </h1>
          <h1 className="text-sm md:text-base text-right">Indore, India</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 text-neutral-300 gap-2">
          <h1 className="italic">
            Full Stack Web Developer Intern - Tech Stack:{" "}
            <span className="text-cust-red font-semibold">MERN</span>
          </h1>
          <h1 className="text-sm md:text-base">May 2024 - July 2024</h1>
        </div>
      </div>
      {/* First Experience Block */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2 px-2 text-neutral-300 gap-2">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            JK LAKSHMIPAT UNIVERSITY
          </h1>
          <h1 className="text-sm md:text-base text-right">Jaipur, India</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 text-neutral-300 gap-2">
          <h1 className="italic">
            Teaching Assistant -{" "}
            <span className="text-cust-red font-semibold">
              Probability and Statistics
            </span>
          </h1>
          <h1 className="text-sm md:text-base">August 2024 - Present</h1>
        </div>
      </div>
    </div>
  );
}
