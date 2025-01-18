export default function Education() {
  return (
    <div className="p-2 flex flex-col justify-between">
      {/* First Education Block */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2 px-2 text-neutral-300 gap-2">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            INDIAN INSTITUTE OF TECHNOLOGY KANPUR
          </h1>
          <h1 className="text-sm md:text-base text-right">Kanpur, India</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 text-neutral-300 gap-2">
          <h1 className="italic">
            Exchange Student in{" "}
            <span className="text-cust-red font-semibold">
              Computer Science and Engineering
            </span>
          </h1>
          <h1 className="text-sm md:text-base">January 2025 - Present</h1>
        </div>
      </div>
      
      {/* Second Education Block */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2 px-2 text-neutral-300 gap-2">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR
          </h1>
          <h1 className="text-sm md:text-base text-right">Gandhinagar, India</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 text-neutral-300 gap-2">
          <h1 className="italic">
            Visiting Student in{" "}
            <span className="text-cust-red font-semibold">
              Computer Science and Engineering
            </span>
          </h1>
          <h1 className="text-sm md:text-base">January 2024 - April 2024</h1>
        </div>
      </div>
      
      {/* First Education Block */}
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2 px-2 text-neutral-300 gap-2">
          <h1 className="text-lg md:text-2xl font-semibold text-white">
            JK LAKSHMIPAT UNIVERSITY
          </h1>
          <h1 className="text-sm md:text-base text-right">Jaipur, India</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 text-neutral-300 gap-2">
          <h1 className="italic">
            Bachelor of Engineering - Major in{" "}
            <span className="text-cust-red font-semibold">
              Computer Science
            </span>
          </h1>
          <h1 className="text-sm md:text-base">August 2022 - Present</h1>
        </div>
      </div>
    </div>
  );
}