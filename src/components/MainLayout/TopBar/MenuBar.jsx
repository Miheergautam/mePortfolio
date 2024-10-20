export default function MenuBar({ menuOpen }) {
  return (
    <div className="relative flex w-full justify-center mix-blend-normal">
      {menuOpen && (
        <div className="absolute flex flex-row justify-between text-cust-light border border-neutral-500 w-full max-w-7xl bg-cust-dark rounded-xl mx-2 py-4 px-4 md:py-6 md:px-6">
          <img src="src/assets/Profile.jpg" alt="Profile" className="w-32 md:w-60 object-cover rounded-lg" />
          <div className="flex flex-col items-start md:items-end px-4 md:px-8">
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2">HOME</h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2">ABOUT</h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2">PROJECTS</h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2">BLOGS</h1>
            <h1 className="font-bold text-3xl md:text-5xl text-cust-red mb-2">MY TECH</h1>
          </div>
        </div>
      )}
    </div>
  );
}