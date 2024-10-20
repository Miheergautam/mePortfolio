export default function AboutMe() {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center pt-2 text-neutral-300">
        {/* Content displayed on all screen sizes */}
        <div className="text-lg md:text-xl mb-4 md:mb-0">
          I’m an aspiring software developer with a strong interest in full-stack development, specializing in the MERN stack. I enjoy building user-friendly applications and solving technical challenges, constantly seeking opportunities to grow and refine my skills. Outside of coding, I’m deeply involved in various extracurricular activities such as 
          <span className="text-cust-red font-semibold"> music</span>, 
          <span className="text-cust-red font-semibold"> sports</span>, and 
          <span className="text-cust-red font-semibold"> video editing</span>, which enhance my creativity and teamwork. Traveling expands my horizons, and my commitment to academics drives my passion for continuous learning. These diverse experiences help me stay balanced, adaptable, and ready for new challenges.
        </div>

        {/* Image displayed only on larger screens */}
        <div className="hidden md:block rounded-full overflow-hidden ml-4">
          <img
            src="public/assets/IMG_5579.jpeg"
            alt="About Me"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}