"use client";

import React, { useState } from "react";

const Information = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("subject", "New Portfolio Contact Message");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "❌ Something went wrong!");
      }
    } catch (error) {
      setResult("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section id="Information" className="py-16 px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        {/* Layout */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <input
            type="hidden"
            name="access_key"
            value="9654d61f-1c42-4d30-a5be-5fd59dc34138"
          />

          {/* LEFT - FORM */}
          <div className="lg:col-span-2">
            <div className="space-y-6">

              <div>
                <label className="block text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full px-4 py-3 text-sm bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:border-indigo-500 outline-none"
                  placeholder="Sara"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-sm bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:border-indigo-500 outline-none"
                  placeholder="sara@gmail.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 text-sm bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:border-indigo-500 outline-none"
                  placeholder="Your message here..."
                />

                <button
                  type="submit"
                  className="w-full mt-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:opacity-90 transition"
                >
                  Send Message
                </button>

                {result && (
                  <p className="mt-3 text-center text-green-400">
                    {result}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT - CONTACT */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-gray-800 rounded-xl p-6 space-y-6">

              <h3 className="text-2xl font-semibold text-white">
                Contact Information
              </h3>

              {/* Email */}
          
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-indigo-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <a
                      href="mailto:ttharindiattanayaka@gmail.com"
                      className="text-indigo-400 text-sm"
                    >
                      ttharindiattanayaka@gmail.com
                    </a>
                  </div>
                </div>


              {/* Phone */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                  <i className="fas fa-phone text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Phone</h4>
                  <a
                    href="tel:+94710328089"
                    className="text-indigo-400 text-sm"
                  >
                    +94 71 032 8089
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                  <i className="fas fa-map-marker-alt text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Location</h4>
                  <p className="text-indigo-400 text-sm">
                    Kurunegala, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Social Media (ALL KEPT) */}
              <div>
                <p className="text-gray-300 mb-3 text-md">Social Media</p>

                <div className="flex space-x-4">
                  <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">
                    <i className="fa-brands fa-linkedin-in text-white"></i>
                  </a>

                  <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">
                    <i className="fa-brands fa-github text-white"></i>
                  </a>

                  <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">
                    <i className="fa-brands fa-facebook text-white"></i>
                  </a>

                  <a className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Information; 