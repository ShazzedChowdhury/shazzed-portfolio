"use client";

import { useState } from "react";


const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // you can integrate EmailJS or your backend here later
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#060608] text-gray-200 py-20 px-6 overflow-hidden"
    >
      {/* Background subtle waves */}
      {/* <div className="absolute top-24 right-0 z-10 opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#grad)"
            fillOpacity="1"
            d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,138.7C672,149,768,107,864,128C960,149,1056,235,1152,261.3C1248,288,1344,256,1392,240L1440,224V320H0Z"
          ></path>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Bringing your ideas to life.
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Let's turn your vision into reality.
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to chat? Let’s connect!
          </p>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f0f17]/70 border border-gray-700 backdrop-blur-md rounded-2xl p-6 space-y-5 shadow-lg"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="contact@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your message here..."
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
