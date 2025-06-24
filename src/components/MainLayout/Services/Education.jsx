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
    },
    {
      institute: "INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR",
      location: "Gandhinagar, India",
      title: "Exchange Student",
      field: "Computer Science and Engineering",
      duration: "Spring 24'",
      specialization: null,
      image: "assets/IIT_Gandhinagar_Logo.svg",
    },
    {
      institute: "JK LAKSHMIPAT UNIVERSITY",
      location: "Jaipur, India",
      title: "Bachelor of Technology in",
      field: "Computer Science",
      duration: "August 2022 - Present",
      specialization: "Artificial Intelligence and Machine Learning",
      image: "assets/JKLU.png",
    },
  ];

  const renderEducationBlock = (edu, index) => (
    <div
      key={index}
      className="px-4 py-6 flex flex-col md:flex-row gap-4 items-center md:items-center justify-between bg-neutral-800 rounded-2xl"
    >
      <div className="w-24 h-24 md:w-30 md:h-30 bg-white p-2 flex items-center justify-center rounded-full overflow-hidden">
        <img
          src={edu.image}
          alt={edu.institute + " logo"}
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
            <span className="text-cust-red font-md  italic">
              {edu.specialization}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-2 flex flex-col gap-4">{educationData.map(renderEducationBlock)}</div>
  );
}
