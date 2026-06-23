import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  text-white">
            About <span className="gradient-text">Me</span>
          </h2>

          
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            

            <p className=" mb-4 leading-relaxed text-gray-300 ">
              I am a Software Engineering undergraduate specializing in UI/UX
              Design and Frontend Development. I focus on building clean,
              responsive, and user-centered web interfaces using modern web
              technologies.
            </p>

            <p className="mb-4 leading-relaxed text-gray-300">
              I enjoy turning ideas into functional and visually engaging
              digital experiences, with a strong focus on usability,
              performance, and design consistency.
            </p>

            <p className="mb-4 leading-relaxed text-gray-300">
              I am continuously improving my skills in frontend frameworks, UI
              design systems, and interactive prototyping while working on
              real-world projects.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">
            <div className="p-6 rounded-xl border border-gray-700 bg-gray-800 ">
              <h3 className="text-4xl font-bold text-indigo-400">6+</h3>
              <p className="text-gray-300 mt-2">UI/UX & Web Projects</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-700 bg-gray-800 ">
              <h3 className="text-4xl font-bold text-indigo-400">6</h3>
              <p className="text-gray-300 mt-2">MOnths of Experience</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-700 bg-gray-800 ">
              <h3 className="text-4xl font-bold text-indigo-400">2+</h3>
              <p className="text-gray-300 mt-2">Design Tools</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-700 bg-gray-800 ">
              <h3 className="text-4xl font-bold text-indigo-400">2026</h3>
              <p className="text-gray-300 mt-2">Career Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
