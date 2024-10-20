export default function MenuBar({ menuOpen }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex w-full justify-center mix-blend-normal">
      {menuOpen && (
        <div className="absolute flex flex-row justify-between text-cust-light border border-neutral-500 w-full max-w-7xl bg-cust-dark rounded-xl mx-2 py-4 px-4 md:py-6 md:px-6">
          <img
            src="public/assets/Profile.jpg"
            alt="Profile"
            className="w-32 md:w-60 object-cover rounded-lg"
          />
          <div className="flex flex-col items-start md:items-end px-4 md:px-8">
            <h1
              onClick={() => scrollToSection("home")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer"
            >
              HOME
            </h1>
            <h1
              onClick={() => scrollToSection("about")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer"
            >
              ABOUT
            </h1>
            <h1
              onClick={() => scrollToSection("projects")}
              className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer"
            >
              PROJECTS
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer">
              BLOGS
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2 cursor-pointer">
              MY TECH
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}