import Menu from "./Menu";
import MenuBar from "./MenuBar";
import CurrentTimeWithRegion from "./CurrentTimeWithRegion";

import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-3 bottom-4 z-[55] flex flex-col items-center md:bottom-6">
      <div className="relative w-full max-w-6xl">
        {/* Dropdown menu bar */}
        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* TopBar content */}
        <div className="relative flex min-h-16 items-center justify-between gap-3 rounded-full border border-white/10 bg-black/75 px-3 py-2 shadow-[0_22px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:min-h-20 md:px-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cust-red/14 via-transparent to-white/5" />

          {/* Logo / Identity */}
          <div className="relative flex min-w-0 items-center gap-2 md:gap-3">
            <div className="group hidden cursor-pointer text-base font-bold tracking-normal text-white sm:block md:text-xl">
              <span className="text-white/45 transition group-hover:text-white">.</span>
              <span className="text-cust-red">me</span>Portfolio
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cust-red/35 bg-cust-red text-sm font-black tracking-tight text-black shadow-[0_0_28px_rgba(235,96,97,0.22)] md:h-12 md:w-12 md:text-base">
              MG
            </div>
          </div>

          {/* Center lane for the floating music island */}
          <div className="pointer-events-none relative hidden h-12 flex-1 md:block" />
          <div className="pointer-events-none relative h-12 w-24 shrink-0 md:hidden" />

          {/* Right-side controls */}
          <div className="relative flex items-center gap-2 text-neutral-400 md:gap-3">
            {/* Clock: show only on medium+ screens */}
            <span className="hidden lg:block">
              <CurrentTimeWithRegion />
            </span>

            {/* Hamburger menu */}
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
