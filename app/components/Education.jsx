import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Education = () => {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <section
      id="education"
      className="scroll-mt-24 py-12 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center  text-slate-800 dark:text-white">
        My <span className="gradient-text">Education & Achievements</span>
      </h2>
      <p className="text-gray-700 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        This section highlights my education, certifications, and other accomplishments that shaped my professional path.
      </p>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["education", "certificates", "extra curricular activities"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-3 font-medium rounded-lg transition duration-200 text-sm sm:text-base capitalize
              ${
                activeSection === section
                  ? "bg-indigo-500 text-white border border-indigo-500"
                  : "bg-white dark:bg-gray-800 text-indigo-500 border border-indigo-700 hover:bg-indigo-400 hover:text-white"
              }`}
          >
            {section}
          </button>
        ))}   
      </div>

      {/* Education Content */}
      {activeSection === "education" && (
        <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-400 ">Education</h3>
          <ul className="flex flex-wrap gap-3 justify-center ">
            {[
              {
                icon: "fa-graduation-cap",
                title: "Higher Diploma In Software Engineering",
                place: "National Institute of Business Management",
              },
              {
                icon: "fa-user-graduate",
                title: "Diploma In Software Engineering",
                place: "National Institute of Business Management",
              },
              {
                icon: "fa-school",
                title: "Advance Level / Ordinary Level",
                place: "President Girls' College Kurunegala",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center justify-center  p-4 w-56 h-52 bg-gray-300 dark:bg-gray-900 border border-indigo-500 rounded-xl shadow-md"
              >
                <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mb-3 ">
                  <i className={`fa-solid ${item.icon} text-indigo-700 dark:text-indigo-400`}></i>
                </div>
                <p className="text-sm text-gray-600 dark:text-white  text-center leading-relaxed">
                  {item.title} <br />
                  <span className="text-indigo-500 font-medium  block mt-2">{item.place}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Certificates Section */}
      {activeSection === "certificates" && (
        <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-xl text-gray-700 dark:text-gray-400 mb-6">Certificates</h3>
          <ul className="flex flex-wrap gap-4 justify-center">
            {[
              { img: assets.UIUX, label: "Google UI UX" },
              { img: assets.Photoshop, label: "Udemy Photoshop" },
              { img: assets.Oracle, label: "Oracle Cloud" }
            ].map((cert, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center justify-center p-4 w-56 h-52 bg-gray-300 dark:bg-gray-900 border border-indigo-500 rounded-xl shadow-md"
              >
                <div className="mt-3 mb-4">
                  <Image src={cert.img} alt={cert.label} className="w-64 rounded-md" />
                </div>
                <p className="text-sm gradient-text text-center">{cert.label}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Extra Curricular Activities */}
      {activeSection === "extra curricular activities" && (
        <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-xl mb-4 text-gray-700 dark:text-gray-400">Extra Curricular Activities</h3>
          <ul className="flex flex-wrap gap-3 justify-center">
            <li className="flex flex-col items-center justify-center p-4 w-60 h-52 bg-gray-300 dark:bg-gray-900 border border-indigo-500 rounded-xl shadow-md">
              <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mb-5">
                <i className="fa-solid fa-user text-indigo-700 dark:text-indigo-400"></i>
              </div>
              <p className="text-sm text-gray-600 dark:text-white text-center leading-relaxed">
                Member of computing society <br />
                <span className="gradient-text block mt-1">National Institute of Business Management</span>
              </p>
            </li>

            <li className="flex flex-col items-center justify-center p-4 w-60 h-52 bg-gray-300 dark:bg-gray-900 border border-indigo-500 rounded-xl shadow-md">
              <div className="min-w-10 min-h-10 w-10 h-10 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mb-5">
                <i className="fa-solid fa-user text-indigo-700 dark:text-indigo-400"></i>
              </div>
              <p className="text-sm text-gray-600 dark:text-white  text-center leading-relaxed">
                Member of IEEE student branch <br />
                <span className="gradient-text block mt-1">National Institute of Business Management</span>
              </p>
            </li>
          </ul>
          
          
        </div>

        
      )}
      
      <div className="text-center mt-12">
          <Link
            href="https://www.linkedin.com/in/tharindi-aththanayaka/"
            className="px-6 py-6 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            View More Details
          </Link>
        </div>

      
    </section>
    
  );
  
};

export default Education;

