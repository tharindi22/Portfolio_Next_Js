import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <section id="about" className="py-16 px-20 ">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-20 xl:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">

  {/* ================= LEFT SIDE - WHO I AM ================= */}
  <div className="md:w-1/2">
    <h3 className="text-2xl font-semibold mb-4">
      Who I Am
    </h3>

    <p className=" mb-4 leading-relaxed text-gray-300 ">
      I am a Software Engineering undergraduate specializing in Frontend Development and UI/UX Design. I focus on building clean, responsive, and user-centered web interfaces using modern web technologies.
    </p>

    <p className="mb-4 leading-relaxed text-gray-300">
      I enjoy turning ideas into functional and visually engaging digital experiences, with a strong focus on usability, performance, and design consistency.
    </p>

    <p className="mb-4 leading-relaxed text-gray-300">
      I am continuously improving my skills in frontend frameworks, UI design systems, and interactive prototyping while working on real-world projects.
    </p>
  </div>

  {/* ================= RIGHT SIDE - WHAT I DO ================= */}
  <div className="md:w-1/2">
    <h3 className="text-2xl font-semibold mb-4">
      What I Do
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {/* Box 1 */}
      <div className="p-5 rounded-xl   dark:bg-gray-800 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <i className="fa-solid fa-graduation-cap text-indigo-400"></i>
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Student
          </h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Undergraduate Software Engineering Student
        </p>
      </div>

      {/* Box 2 */}
      <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <i className="fa-solid fa-laptop-code text-indigo-400"></i>
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Developer
          </h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Focused on UI/UX and Frontend Development
        </p>
      </div>

      {/* Box 3 */}
      <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <i className="fa-solid fa-pencil-ruler text-indigo-400"></i>
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            UI Designer
          </h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Skilled in Responsive UI & Web Design
        </p>
      </div>

      {/* Box 4 */}
      <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <i className="fa-solid fa-users text-indigo-400"></i>
          </div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Team Player
          </h4>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Strong Team Collaboration & Communication
        </p>
      </div>

    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default About;
