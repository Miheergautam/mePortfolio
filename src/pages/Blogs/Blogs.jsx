export default function Blogs() {
  const blogPosts = [
    {
      title: "How to Master MERN Stack",
      date: "October 20, 2024",
      description:
        "Learn how to become proficient in the MERN stack with these tips and best practices.",
      image: "assets/masterMERN.png",
    },
    {
      title: "The Future of Full-Stack Development",
      date: "September 10, 2024",
      description:
        "Exploring upcoming trends and technologies in full-stack development.",
      image: "assets/futureDev.jpeg",
    },
    {
      title: "Building Scalable Web Apps",
      date: "August 5, 2024",
      description:
        "A guide to building highly scalable and performant web applications.",
      image: "assets/webapp.jpeg",
    },
  ];

  return (
    <div className="text-white p-4 ">
      {/* Layout Wrapper with max-w-7xl */}
      <div className="max-w-7xl mx-auto ">
        {/* Enhanced Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cust-red tracking-wide leading-tight">
            Latest Blogs
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mt-4">
            Insights and tips from the world of development
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg border-2 border-neutral-800"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Details */}
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-cust-red">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-400">{post.date}</p>
                <p className="text-neutral-300 mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
