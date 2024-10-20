import SelectionBar from "./SelectionBar";

export default function Services() {
  return (
    <div id="about" className="flex flex-col items-center justify-around w-full h-full gap-8 p-4">
      <div className="flex flex-col items-center justify-center text-cust-red w-full max-w-7xl font-bold text-lg md:text-xl px-3 mb-6">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold px-3 py-2 text-center">
          <span className="text-cust-red font-bold">Who </span>
          Am I!
        </h1>
        <span className="border-2 border-neutral-400 px-3 md:px-4 py-1 rounded-2xl text-sm md:text-base">
          <span className="text-white">.</span> Explore
        </span>
      </div>
      <SelectionBar />
    </div>
  );
}