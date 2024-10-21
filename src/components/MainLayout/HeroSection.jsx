import React from "react";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="flex justify-center items-center text-cust-light p-4"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-7xl">
        <span className="border-2 border-neutral-400 px-4 py-1 rounded-2xl text-cust-red text-lg md:text-xl font-semibold">
          <span className="text-neutral-400">.</span> Hola{" "}
          <span className="text-neutral-400">!</span>
        </span>
        <div className="my-8 md:my-10">
          {/* Name Heading */}
          <h1 className="flex flex-wrap gap-2 justify-center items-center text-3xl md:text-4xl font-semibold mb-2 tracking-wide text-center">
            I'm{" "}
            <span className="text-cust-red text-5xl md:text-7xl font-bold">
              Miheer Gautam
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-center font-semibold">
            Full-Stack Web Developer
          </h2>
        </div>

        {/* Biography, Skills, and Profile Picture Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-4">
          {/* Biography and Skills Section */}
          <div className="flex flex-col justify-start gap-8 px-4 py-2 md:col-span-1">
            {/* Biography */}
            <section className="space-y-2 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">Biography</h2>
              <p className="text-neutral-400 flex flex-col gap-2 text-sm md:text-base">
                I'm an aspiring software developer specializing in the MERN
                stack. I enjoy building user-friendly applications and solving
                technical challenges.
                <div className="flex flex-col">
                  <span className="text-white">Wanna know more about me? </span>
                  <span
                    className="text-cust-red cursor-pointer"
                    onClick={() => scrollToSection("about")}
                  >
                    Explore More
                  </span>
                </div>
              </p>
            </section>

            {/* Skills */}
            <section className="space-y-2 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
              <ul className="list-disc list-inside text-neutral-400 text-sm md:text-base">
                <li>Web Designer</li>
                <li>Backend Development</li>
                <li>Database Management</li>
              </ul>
            </section>

            {/* Connect Here */}
            <section className="space-y-2 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">Let's Talk!</h2>
              <ul className="flex gap-4 text-neutral-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/miheer-gautam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/linkedin.png"
                      alt="Linkedin icon"
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/users/miheer_4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/discord3.png"
                      alt="Discord icon"
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full"
                    />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-neutral-400 rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="assets/IMG_5342.jpeg"
                alt="Profile photo"
              />
            </div>
            <div className="flex gap-1 text-sm md:text-base">
              <span>{"<"}</span>
              <span className="font-semibold">
                <span className="text-cust-red">@</span>updating_me
              </span>
              <span>{"/>"}</span>
            </div>
          </div>

          {/* Projects Done Section (Hidden on smaller screens) */}
          <div className="hidden md:flex flex-col justify-center text-end gap-6 mr-0 md:mr-6">
            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                PROJECTS DONE
              </h2>
              <div className="text-4xl md:text-6xl text-neutral-400">7+</div>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                YEARS OF EXPERIENCE
              </h2>
              <div className="text-4xl md:text-6xl text-neutral-400">2+</div>
            </section>
          </div>
        </div>

        {/* Download CV Button */}
        <a
          href="assets/Resume_Miheer_Gautam.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-neutral-300 py-2 px-8 rounded-2xl text-lg md:text-xl font-semibold mt-4 cursor-pointer bg-neutral-900 hover:bg-cust-red transition duration-200"
        >
          <span>.</span> Download CV
        </a>
      </div>
    </section>
  );
}
