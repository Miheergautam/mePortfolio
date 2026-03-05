import React from "react";
import { FaLinkedin, FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";
import { gtagEvent } from "../../utils/analytics";
import Modal from "../Modal";
import { useState } from "react";
import TerminalQuiz from "../game/UpdatingMeQuiz";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const scrollToSection = (sectionId, label) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      gtagEvent("scroll_to_section", { section: label });
    }
  };

  const handleCVDownload = () => {
    gtagEvent("cv_download", { file: "MiheerResume.pdf" });
  };

  const handleSocialClick = (platform) => {
    gtagEvent("social_link_click", { platform });
  };

  return (
    <section
      id="home"
      className="flex justify-center w-full text-cust-light "
    >
      <div className="flex flex-col justify-center items-center w-full max-w-7xl">
        {/* Greeting */}
        <span className="group border border-neutral-500 px-5 py-1.5 rounded-full text-cust-red text-lg md:text-xl font-semibold tracking-wide flex items-center overflow-hidden cursor-pointer">
          <span className="text-neutral-400">.</span>
          <span className="ml-1">Hola</span>
          <span
            className="
            flex items-center
            max-w-0 opacity-0 ml-0
            group-hover:max-w-[120px]
            group-hover:opacity-100
            group-hover:ml-2
            transition-all duration-700 ease-out
            overflow-hidden whitespace-nowrap
            "
          >
            <span className="text-neutral-500 mr-1">|</span>
            <span className="text-neutral-400">human</span>
          </span>
        </span>

        {/* Name */}
        <div className="mt-2 mb-5 text-center">
          <h1 className="flex flex-wrap justify-center items-center gap-3 text-2xl md:text-3xl font-medium tracking-wide text-neutral-300">
            I'm
            <span className="text-cust-red text-5xl md:text-7xl font-bold tracking-tight">
              Miheer Gautam
            </span>
          </h1>
        
          <h2 className="mt-3 text-xl md:text-3xl font-semibold tracking-wider text-neutral-400">
            ~ The Builder
          </h2>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-4">
          {/* Left Column */}
          <div className="flex flex-col justify-start gap-8 px-4 py-2 md:col-span-1">
            {/* Biography */}
            <section className="space-y-3 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">
                A little about me
              </h2>
          
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                I'm a curious builder who enjoys turning ideas into meaningful
                digital experiences. I love exploring different technologies,
                solving complex problems, and creating applications that are
                both intuitive and scalable.
              </p>
          
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-neutral-300 text-sm">
                  Want to know more?
                </span>
          
                <span
                  className="text-cust-red cursor-pointer text-sm font-medium hover:underline"
                  onClick={() => scrollToSection("about", "About")}
                >
                  Explore more →
                </span>
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-2 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
              <ul className="list-disc list-inside text-neutral-400 text-sm md:text-base">
                <li>Full Stack Development</li>
                <li>AI Integration & Tools</li>
                <li>Generative AI</li>
                <li>Colaboration</li>
              </ul>
              <span>
                <span
                  onClick={() => scrollToSection("projects", "Projects")}
                  className="text-cust-red cursor-pointer hover:underline"
                  role="button"
                  tabIndex={0}
                >
                  More
                </span>
              </span>
            </section>

            {/* Social Links */}
            <section className="space-y-2 md:block hidden">
              <h2 className="text-xl md:text-2xl font-semibold">Let's Talk!</h2>
              <ul className="flex gap-4 text-neutral-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/miheer-gautam/"
                    onClick={() => handleSocialClick("LinkedIn")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-2xl md:text-3xl text-cust-white hover:text-cust-red transition-transform ease-out duration-300 hover:scale-125"
                  >
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Miheergautam"
                    onClick={() => handleSocialClick("GitHub")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-2xl md:text-3xl text-cust-white hover:text-cust-red transition-transform ease-out duration-300 hover:scale-125"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/users/miheer_4"
                    onClick={() => handleSocialClick("Discord")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-2xl md:text-3xl text-cust-white hover:text-cust-red transition-transform ease-out duration-300 hover:scale-125"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/miheer_gautam4"
                    onClick={() => handleSocialClick("Instagram")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-2xl md:text-3xl text-cust-white hover:text-cust-red transition-transform ease-out duration-300 hover:scale-125"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col justify-center items-center gap-2">
          
            {/* Flip Container */}
            <div
              onClick={() => setFlipped(!flipped)}
              className="w-32 h-32 md:w-48 md:h-48 cursor-pointer perspective"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
          
                {/* Front Image */}
                <div className="absolute w-full h-full backface-hidden border-4 border-neutral-400 hover:border-4 hover:border-cust-red rounded-full overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="assets/IMG_5342.jpeg"
                    alt="Profile"
                  />
                </div>
          
                {/* Back Image */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden border-4 border-neutral-400 rounded-full overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src="assets/my.png"
                    alt="Profile 2"
                  />
                </div>
          
              </div>
            </div>
          
            <button
              onClick={() => setShowModal(true)}
              className="group relative flex items-center gap-2 text-sm md:text-base 
              px-4 py-1.5 rounded-lg border border-neutral-700 
              bg-neutral-900 overflow-hidden"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 
              transition duration-500 bg-gradient-to-r 
              from-red-500/10 via-transparent to-red-500/10" />
            
              <span className="relative text-neutral-400 group-hover:text-neutral-200">
                {"<"}
              </span>
            
              <span className="relative font-semibold tracking-wide">
                <span className="text-cust-red">@</span> updating_me
              </span>
            
              <span className="relative text-neutral-400 group-hover:text-neutral-200">
                {"/>"}
              </span>
            </button>
          
          </div>

          {/* Modal component */}
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Updating Me Quiz"
          >
            <TerminalQuiz
              onComplete={(answers) => {
                console.log("Collected answers: ", answers);
                // store to DB if needed, with user permission
              }}
            />
          </Modal>

          {/* Stats Right */}
          <div className="hidden md:flex flex-col justify-center text-end gap-8 mr-6">
          
            <section className="space-y-1">
              <h2 className="text-xl tracking-widest text-neutral-500 uppercase">
                Projects Completed
              </h2>
          
              <div className="text-5xl md:text-6xl font-semibold text-neutral-300">
                <span className="text-cust-red">7</span>+
              </div>
            </section>
          
            <section className="space-y-1">
              <h2 className="text-xl tracking-widest text-neutral-500 uppercase">
                Years of Experience
              </h2>
          
              <div className="text-5xl md:text-6xl font-semibold text-neutral-300">
                <span className="text-cust-red">1</span>+
              </div>
            </section>
          
          </div>
        </div>

        <a
          href="assets/MiheerResume.pdf"
          onClick={handleCVDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 
          border border-neutral-700 
          px-6 py-2.5 
          rounded-xl 
          text-base md:text-lg font-semibold 
          bg-neutral-900 
          text-neutral-200 
          hover:bg-cust-red hover:text-black 
          transition-all duration-300
          cursor-pointer"
        >
          <span>Resume/CV</span>
        </a>
      </div>
    </section>
  );
}
