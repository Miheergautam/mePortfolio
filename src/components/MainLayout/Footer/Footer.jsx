import { FaBlogger } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="font-medium text-neutral-400 text-base">&copy; 2025</span>
          <span className="text-xl font-bold text-cust-red tracking-wide">
          <span className="text-white">. </span>  
          mePORTFOLIO</span>
        </div>

        {/* Right Section */}
        <Link
          to="https://meblogs-4.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 text-base md:text-lg font-medium text-neutral-300 hover:text-cust-red transition"
        >
          <span className="text-cust-red text-lg group-hover:scale-110 transition">•</span>
          <span>meBlogs</span>
          <FaBlogger className="text-2xl md:text-xl text-cust-red group-hover:rotate-12 transition" />
        </Link>
      </div>
    </footer>
  );
}
