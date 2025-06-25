import Menu from "./Menu";
import MenuBar from "./MenuBar";
import CurrentTimeWithRegion from "./CurrentTimeWithRegion";

import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-neutral-900 shadow-sm z-50">
      <div className="w-full max-w-7xl">
        {/* TopBar content */}
        <div className="relative flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6">
          {/* Logo / Title */}
          <div className="text-cust-red font-bold text-lg sm:text-xl md:text-2xl tracking-wide">
            <span className="text-white">.</span>mePortfolio
          </div>

          {/* Right-side controls */}
          <div className="text-neutral-400 text-lg sm:text-xl flex gap-3 sm:gap-4 items-center">
            {/* Hamburger menu */}
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* Clock: show only on medium+ screens */}
            <span className="hidden sm:inline-block">
              <CurrentTimeWithRegion />
            </span>
          </div>
        </div>

        {/* Dropdown menu bar */}
        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}
