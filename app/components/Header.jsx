import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Adjust based on your path

const Header = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-40 md:pb-24 px-24 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center">
        {/* Left: Text Section */}
        <div className="md:w-3/4 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-4 text-gray-300">
            Tharindi Aththanayaka
           
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-500 mb-6">
            UI/UX Designer & Frontend Developer
          </h2>
          <p className="text-gray-400 mb-8 text-md max-w-lg mx-auto md:mx-0">
            I create beautiful, functional websites and applications with a focus on user experience and clean code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="/Tharindi_Aththanayaka-CV.pdf" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition shadow-lg"
            >
              My Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Right: Profile Image or SVG Avatar */}
        <div className=" flex justify-center">
          {/* Circle Gradient Border Frame */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <Image
                src={assets.tharindi}
                alt="Profile"
                width={172}
                height={172}
                className="rounded-full object-cover w-36 h-36 md:w-44 md:h-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
