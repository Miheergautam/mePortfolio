export default function MyTech() {
    const techItems = [
      {
        title: "Laptop",
        description: "MacBook Air M2 - My primary development machine.",
        image: "assets/tech1.jpeg",
      },
      {
        title: "Monitor",
        description: "Acer 27\" - For clear and crisp visuals.",
        image: "assets/tech3.jpeg",
      },
      {
        title: "Keyboard",
        description: "Keyboard - For comfortable and fast typing.",
        image: "assets/tech2.png",
      },
    ];
  
    return (
      <div className="text-white p-4">
        {/* Layout Wrapper with max-w-7xl */}
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-cust-red tracking-wide leading-tight">
              My Tech
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mt-4">
              Here's a list of the tools and gadgets that power my development journey.
            </p>
          </div>
  
          {/* Tech Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {techItems.map((item, index) => (
              <div
                key={index}
                className="flex bg-neutral-900 rounded-lg overflow-hidden shadow-lg border-2 border-neutral-800"
              >
                {/* Tech Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"

                />
                {/* Tech Details */}
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-semibold text-cust-red">
                    {item.title}
                  </h2>
                  <p className="text-neutral-300 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }