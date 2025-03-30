export default function MyTech() {
  const techItems = [
    {
      title: "MacBook Air M2",
      description: "My primary development machine.",
      image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
      link: "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3C9ZHJZ/ref=sr_1_4?crid=25G54M5JGEFWU&dib=eyJ2IjoiMSJ9.1Pg5sTfVWQyxFmJO72YGPJwlRCn2B_1vrkwzgyokRr7fbKGb21QeChMY3a5pO1DvBEXf-mmnKgzB1-T5GiJ5RfgY8uqqmy7oevX0tJ_0WeJ_g8lYFFBqFrDLswwqffkxLMwwPwTRxOEWUs0AqhREL5dOR4uwhFQJAX6BpW6KvEvDY_DsQhpRneCPM73CGEkufDTg5y_8K7RiG_rlSYMhfkTrZRJ-aeyTmL7ZB3OTu8c.zxo1Fx3-tQzVnhQhPpLN5F2awBr0lOXFrlQR5s1OUB0&dib_tag=se&keywords=macbook+air&qid=1743336909&sprefix=mackbook+ai%2Caps%2C257&sr=8-4"
    },
    {
      title: "Acer ED270R S3 27 Inch",
      description: "For clear and crisp visuals.",
      image: "https://m.media-amazon.com/images/I/71+6UG0Ce6L._SX679_.jpg",
      link: "https://www.amazon.in/Acer-Monitor-Refresh-Freesync-Premium/dp/B0CKLR51ZP/ref=sr_1_14?crid=3LPUF9JSCSI5M&dib=eyJ2IjoiMSJ9.8J4p2bTmi22bJyy0MFa1arPBzOma4UnEHNXRW1REuClRQYv0Rckb_-FxmDG7tETqn4cdy1ZPr8wcw_JqdfKI38NIbfgfM6ZtLR71uqP-y53qQ9BFCDVFSWsBGdBxMAY0xtXEjxdf4IRAwBKwdoMro48d-4HPR0fK83LrLxKKyFIKrqa_gimowgzmecKc9x9HdjagOymR2qotNiEIuRsHlITJEh8CRbXK0QgRp0G0YIE.muwv0AZKhEx-hp1RAhWFLcamaAOHd_LFNZCxU0pj0n4&dib_tag=se&keywords=Acer%2B27&nsdOptOutParam=true&qid=1743336955&sprefix=acer%2B27%2Caps%2C282&sr=8-14&th=1"
    },
    {
      title: "Mechanical Keyboard",
      description: "For comfortable and fast typing.",
      image: "assets/tech2.png",
      link: "https://www.amazon.com/dp/B07W6HYG4G"
    },
  ];

  return (
    <div className=" text-white p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-cust-red tracking-wide">My Tech</h1>
          <p className="text-lg text-gray-300 mt-3">Here's a list of the tools and gadgets that power my development journey.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-cust-red">{item.title}</h2>
                <p className="text-neutral-300 mt-2">{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-3 bg-cust-red text-white px-4 py-2 rounded-lg hover:bg-red-500"
                >
                  Shop for yourself
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
