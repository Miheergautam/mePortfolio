import WorkTopBar from "../WorkSection/WorkTopBar";

export default function WorkSection() {
  return (
    <div id="projects" className="flex flex-col min-h-screen items-center w-full h-full gap-10 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-cust-red w-full max-w-7xl font-bold text-xl mb-4">
        <h1 className="text-white text-5xl md:text-7xl font-semibold px-3 py-2 text-center">
          <span className="text-cust-red font-bold">What </span>I Do !
        </h1>
        <span className="border-2 border-neutral-400 px-4 py-1 rounded-2xl text-center">
          <span className="text-white">.</span> Let's See
        </span>
      </div>
      <WorkTopBar />
    </div>
  );
}