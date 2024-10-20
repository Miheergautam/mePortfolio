import { Icons } from "../../../assets/Icons";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className="flex flex-col items-start">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="cursor-pointer flex items-center p-2 md:p-3"
      >
        {menuOpen ? <div>{Icons.crossedSwords}</div> : Icons.menu}
      </button>
    </div>
  );
}