import { FaBlogger } from "react-icons/fa";
import { BiJoystick } from "react-icons/bi"; // If you're not using this icon, consider removing it.

export default function Footer() {
  return (
    <footer className="flex border-t border-neutral-600 my-2">
      <div className="flex flex-col md:flex-row text-white w-full justify-between items-center p-4 gap-4">
        {/* Left Section: Copyright */}
        <div className="flex items-center gap-1 text-center md:text-left">
          <p className="font-semibold text-lg md:text-base">&copy; 2024</p>
          <span className="text-xl md:text-base text-cust-red font-bold">
            PORTFOLIO
          </span>
        </div>

        {/* Right Section: Blog Link */}
        <div className="flex items-center gap-2 text-center">
          <a href="https://miheergautam.github.io/zenith-Portfolio/blogs" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg md:text-base flex items-center">
            <span className="text-cust-red text-xl">.</span> meBlogs
            <FaBlogger className="text-3xl md:text-2xl text-cust-red ml-2" aria-label="Blog Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}