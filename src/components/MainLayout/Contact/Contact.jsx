export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-6 p-4 pb-16">
      <div className="w-full max-w-7xl text-white flex justify-center">
        <div className="flex flex-col font-semibold text-5xl md:text-7xl">
          <div className="pl-2 md:pl-2">
            <span>
              W<span className="italic">a </span>nt to
            </span>
          </div>
          <div className="pl-4 md:pl-9">
            <span>
              st<span className="italic">a </span>rt
            </span>
          </div>
          <div>
            <span>
              <span className="italic">a </span> new
            </span>
          </div>
          <div className="pl-8 md:pl-14 text-cust-red">
            <span>
              PROJECT <span className="text-white">?</span>
            </span>
          </div>
          <div className="flex justify-end text-neutral-400 items-center text-lg md:text-2xl">
            <span className="font-medium">Or just say hello .</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-center items-center">
        {/* Adjust grid for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="p-6 flex flex-col">
            <div className="flex flex-col justify-center items-center text-white p-4 gap-1 text-4xl md:text-5xl my-4">
              <span>Trying to</span>
              <span>create</span>
              <span>together!</span>
            </div>
            <div className="flex justify-center">
              <span className="border-2 border-neutral-400 px-4 py-1 rounded-2xl text-cust-red text-lg md:text-xl font-semibold">
                <span className="text-neutral-400">.</span> Let's Connect{" "}
                <span className="text-neutral-400">!</span>
              </span>
            </div>
          </section>

          <section className="p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-2">
              <div className="w-full md:w-1/2">
                <label className="text-lg md:text-xl font-medium mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-lg md:text-xl font-medium mb-2" htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                />
              </div>
            </div>
            <div className="py-4">
              <label className="text-lg md:text-xl font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-neutral-700 font-medium text-md px-6 py-2 border border-neutral-500 rounded transition duration-200 hover:bg-neutral-600">
              Let's Go!
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}