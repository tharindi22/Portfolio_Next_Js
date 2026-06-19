import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 sm:px-10 md:px-12 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-800 dark:text-white">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I've worked with a variety of technologies and tools throughout my
          career. Here are some of my key skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-4 sm:gap-5">
          <div>
            {/* ================= UI/UX ================= */}
          <div className="my-8 bg-gray-300 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-start sm:items-center w-full sm:w-auto mb-7">
              <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                <i className="fas fa-object-group text-indigo-700 dark:text-indigo-400"></i>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-2xl font-bold mb-0">
                UI/UX Design
              </p>
            </div>

            <div className="max-w-md mx-auto text-slate-400">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  User Research
                </span>
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Wireframing
                </span>
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Prototyping
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Typography
                </span>
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Layout Design
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Visual Design
                </span>
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Responsive Design
                </span>
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  Usability Testing
                </span>
              </div>
            </div>
          </div>

          {/* ================= Frontend ================= */}
          <div className="my-8 bg-gray-300 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-start sm:items-center w-full sm:w-auto mb-7">
              <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
                <i className="fas fa-code text-indigo-700 dark:text-indigo-400"></i>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-2xl font-bold mb-0">
                Frontend
              </p>
            </div>

            <div className="max-w-md mx-auto text-slate-400">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  HTML5
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  CSS3
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  JavaScript
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  React.js
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  Next.js
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  Tailwind CSS
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  Responsive Design
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  Git & GitHub
                </span>

                <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg">
                  REST API
                </span>
              </div>
            </div>
          </div>
          </div>

           {/* ================= Tools ================= */}
        <div className="my-8 bg-gray-300 dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-start sm:items-center w-full sm:w-auto mb-7">
            <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3">
              <i className="fas fa-screwdriver-wrench text-indigo-700 dark:text-indigo-400"></i>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-2xl font-bold mb-0">
              Tools
            </p>
          </div>

          <div className="max-w-md mx-auto text-slate-400">
            {/* 
              <p className="text-slate-400 mb-4 leading-relaxed">
                I effectively use modern development and design tools to build,
                collaborate, and deliver high-quality digital projects.
              </p>
              */}

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                VS Code
              </span>
              <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                Git
              </span>
              <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                GitHub
              </span>
              <span className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                Postman
              </span>
            </div>
          </div>
        </div>
        
        </div>

       
      </div>
    </section>
  );
};

export default Skills;
