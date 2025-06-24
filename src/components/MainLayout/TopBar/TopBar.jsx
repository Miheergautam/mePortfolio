import Menu from "./Menu";
import MenuBar from "./MenuBar";
import CurrentTimeWithRegion from "./CurrentTimeWithRegion";

import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-neutral-900">
      <div className=" w-full max-w-7xl">
        <div className="relative flex justify-between items-center py-4 px-4 md:py-3 md:px-6">
          <div className="text-cust-red font-bold text-xl md:text-2xl">
            <span className="text-white">. </span>mePortfolio
          </div>
          <div className="text-neutral-500 text-xl md:text-xl flex gap-4 items-center">
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <span className="hidden md:inline-block">
              <CurrentTimeWithRegion />
            </span>
          </div>
        </div>
        <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}
