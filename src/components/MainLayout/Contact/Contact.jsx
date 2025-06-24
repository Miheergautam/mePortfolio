import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("nWlAmb7-h-Hid8kpK");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmailFormat = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const verifyEmailDeliverability = async (email) => {
    const API_KEY = "242a406bac0a4f69b7835cabca5ca103";
    try {
      const res = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${encodeURIComponent(
          email
        )}`
      );
      const data = await res.json();
      return data.deliverability === "DELIVERABLE";
    } catch (err) {
      console.error("Email verification failed:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmailFormat(formData.email)) {
      alert("Please enter a valid email format.");
      return;
    }

    setIsSending(true);
    const isDeliverable = await verifyEmailDeliverability(formData.email);

    if (!isDeliverable) {
      setIsSending(false);
      alert("Email is not deliverable. Try a different one.");
      return;
    }

    emailjs
      .send("service_apkttho", "template_qsmera9", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send. Try again later.");
        setIsSending(false);
      });
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 pb-16 min-h-screen">
      {/* HEADER */}
      <div className="w-full max-w-7xl text-white flex justify-center my-20">
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

      {/* CONTACT FORM */}
      <div className="mt-6 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LEFT SIDE */}
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

          {/* FORM SECTION */}
          <section className="p-6 text-white">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-2">
                <div className="w-full md:w-1/2">
                  <label className="text-lg md:text-xl font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="text-lg md:text-xl font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="py-4">
                <label className="text-lg md:text-xl font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-transparent border-b border-neutral-400 text-white p-2"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`mt-4 w-full py-3 font-medium text-md rounded transition duration-200 ${
                  isSending
                    ? "bg-neutral-700/50 cursor-not-allowed"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
              >
                {isSending ? "Sending..." : "Let's Go!"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
