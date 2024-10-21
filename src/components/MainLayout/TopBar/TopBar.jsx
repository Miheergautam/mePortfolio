import useCurrentTime from "../../../hooks/useCurrentTime";
import Menu from "./Menu";
import MenuBar from "./MenuBar";

import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-900 w-full">
      <div className="relative flex justify-between items-center py-4 px-4 md:py-6 md:px-8">
        <div className="text-cust-red font-bold text-2xl md:text-3xl">Portfolio</div>
        <div className="text-neutral-500 text-xl md:text-2xl flex gap-4 items-center">
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <span className="hidden md:inline-block">
            {useCurrentTime().currentTime}
          </span>
        </div>
      </div>
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}