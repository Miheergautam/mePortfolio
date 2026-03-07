import WorkTopBar from "../WorkSection/WorkTopBar";

export default function WorkSection() {
  return (
    <div id="projects" className="flex flex-col items-center gap-10 px-4 md:px-0 min-h-screen">
      <div className="flex flex-col items-center justify-center text-cust-red w-full max-w-7xl font-bold text-xl my-20">
        <h1 className="text-white text-5xl md:text-7xl font-semibold px-3 py-2 text-center">
          <span className="text-cust-red font-bold">What </span>I Do !
        </h1>
        <span className="group border border-neutral-500 px-5 py-1.5 rounded-full text-cust-red text-lg md:text-xl font-semibold tracking-wide flex items-center overflow-hidden cursor-pointer">
          <span className="text-neutral-400">.</span>
          <span className="ml-1">Let's see</span>
          <span
            className="
            flex items-center
            max-w-0 opacity-0 ml-0
            group-hover:max-w-[120px]
            group-hover:opacity-100
            group-hover:ml-2
            transition-all duration-700 ease-out
            overflow-hidden whitespace-nowrap
            "
          >
            <span className="text-neutral-500 mr-1">|</span>
            <span className="text-neutral-400">Projects</span>
          </span>
        </span>
      </div>
      <WorkTopBar />
    </div>
  );
}