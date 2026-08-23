import { Icons } from "../../../../public/assets/Icons";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 md:h-12 md:w-12 ${
          menuOpen
            ? "border-cust-red bg-cust-red text-black shadow-[0_0_26px_rgba(235,96,97,0.26)]"
            : "border-white/10 bg-white/[0.03] text-neutral-200 hover:border-cust-red/60 hover:bg-cust-red/10"
        }`}
      >
        <span className="scale-[0.58] md:scale-[0.62]">
          {menuOpen ? Icons.crossedSwords : Icons.menu}
        </span>
      </button>
    </div>
  );
}
