import { FaBlogger } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-600 my-2 bg-neutral-900 text-white">
      <div className="flex flex-col md:flex-row w-full justify-between items-center p-6 gap-4 max-w-6xl mx-auto">
        {/* Left Section: Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <p className="font-semibold text-lg md:text-base">&copy; 2024</p>
          <span className="text-xl md:text-lg text-cust-red font-bold">
            PORTFOLIO
          </span>
        </div>

        {/* Right Section: Blog Link */}
        <Link
          to="https://meblogs-4.vercel.app/"
          className="flex items-center gap-2 text-lg md:text-base font-semibold hover:text-neutral-300 transition duration-300"
        >
          <span className="text-cust-red text-xl">.</span> meBlogs
          <FaBlogger className="text-3xl md:text-2xl text-cust-red ml-1" />
        </Link>
      </div>
    </footer>
  );
}
