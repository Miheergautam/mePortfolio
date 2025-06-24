export default function AboutMe() {
  return (
    <section className="p-4 md:p-8 bg-neutral-800 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-300">
        {/* Text Content */}
        <div className="text-base md:text-lg leading-relaxed max-w-2xl">
          <p>
            I’m an aspiring{" "}
            <span className="text-cust-red font-semibold">software developer</span>{" "}
            with a strong interest in Web technologies. I enjoy building
            user-friendly, end-to-end applications and solving technical
            challenges, constantly seeking opportunities to grow and refine my
            skills.
          </p>
          <p className="mt-4">
            Beyond coding, I’m passionate about{" "}
            <span className="text-blue-400 font-semibold">music</span>,{" "}
            <span className="text-blue-400 font-semibold">sports</span>, and{" "}
            <span className="text-blue-400 font-semibold">video & photo editing</span>, 
            which fuel my creativity and teamwork. Traveling expands my
            horizons, while my commitment to academics drives my passion for
            continuous learning.
          </p>
          <p className="mt-4">
            These diverse experiences help me stay balanced, adaptable, and
            ready to embrace new challenges.
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:block rounded-full overflow-hidden w-48 h-48 shadow-lg border-2 border-neutral-700">
          <img
            src="assets/profilex.jpg"
            alt="About Me"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
