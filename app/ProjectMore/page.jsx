import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const projectData = [
  {
    category: "UI / UX Projects",
    projects: [
      {
        title: "Modern E-commerce website",
        description:
          "User friendly e-commerce website with a clean design for easy browsing and shopping.",
        tech: ["Figma"],
        img: assets.commerce,
        codeLink: "#",
        viewLink:
          "https://www.figma.com/design/sa2d0RDcIc8MhvEWvXSadR/e-commerce?node-id=0-1&t=CW8I9rU1U5eoR4Cc-1",
      },
      {
        title: "Food Ordering Mobile Application",
        description:
          "A mobile application for food ordering, featuring a user friendly interface and seamless navigation.",
        tech: ["Figma"],
        img: assets.Food,
        codeLink: "#",
        viewLink:
          "https://www.figma.com/design/E19KER8NP1uQqIhQg8rzhG/Mobile-Food-Ordering-APP?node-id=0-1&t=frEZuX0Ao3jVQDtK-1",
      },
      {
        title: "Simple Website Design",
        description:
          "A clean and minimalistic website design that focuses on user experience and easy navigation.",
        tech: ["Figma"],
        img: assets.Veloura,
        codeLink: "#",
        viewLink:
          "https://www.figma.com/design/hU8NIPYuYUbznpv1xI1bjq/Untitled?node-id=0-1&t=Lh2BCyyPLZ0ioB8J-1",
      },
      {
        title: "3D Animation Design",
        description:
          "A stunning 3D animation project showcasing advanced animation techniques and visual effects.",
        tech: ["Figma"],
        img: assets.animation,
        codeLink: "#",
        viewLink:
          "https://www.figma.com/design/0Q6DwOYUVzdZqlVzizwurG/Untitled?node-id=0-1&t=fgCDT2OdooGVQpGj-1",
      },
    ],
  },
  {
    category: "Individual Projects",
    projects: [
      {
        title: "Doctor Booking System UI",
        description:
          "A fully responsive doctor appointment booking system with user-friendly interface.",
        tech: ["Html", "CSS", "React"],
        img: assets.Doctor,
        codeLink:
          "https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend",
        viewLink: "#",
      },
      {
        title: "Landing Page",
        description:
          "A modern and responsive landing page designed to capture user attention and drive conversions.",
        tech: ["Html", "CSS", "Tailwind CSS"],
        img: assets.landing,
        codeLink: "https://github.com/tharindi22/Landing_Page--TailwindCSS",
        viewLink: "#",
      },
      {
        title: "Amazon Clone",
        description:
          "A clone of a popular e commerce site with product display, and cart features.",
        tech: ["Html", "CSS", "JavaScript"],
        img: assets.Amazone,
        codeLink:
          "https://github.com/tharindi22/JavaScript_Project---Amazone_Clone",
        viewLink: "#",
      },
      {
        title: "YouTube Clone",
        description:
          "A clone of a popular video streaming platform with video display and browsing features.",
        tech: ["Html", "CSS"],
        img: assets.Amazone,
        codeLink:
          "https://github.com/tharindi22/JavaScript_Project---Amazone_Clone",
        viewLink: "#",
      },
      {
        title: "To Do List App",
        description:
          "A simple and intuitive To Do List application to help users manage their tasks efficiently.",
        tech: ["Html", "CSS", "React"],
        img: assets.ToDo,
        codeLink: "https://github.com/tharindi22/To-Do-List",
        viewLink: "/ProjectMore",
      },
    ],
  },
  {
    category: "Group Projects",
    projects: [
      {
        title: "Learning Management System",
        description:
          "Comprehensive LMS with user registration, course management, and progress tracking.",
        tech: ["Html", "CSS", "React"],
        img: assets.LMS,
        codeLink: "https://github.com/tharindi22/lms_mern_project",
        viewLink: "#",
      },
      {
        title: "Creacket Booking System",
        description:
          "Comprehensive booking system for Creacket with user registration, event management, and booking tracking.",
        tech: ["Html", "CSS", "React"],
        img: assets.LMS,
        codeLink: "https://github.com/tharindi22/lms_mern_project",
        viewLink: "#",
      },
      {
        title: "Vehical Spare Parts  Website",
        description:
          "Comprehensive website for vehicle spare parts with product display and shopping cart features.",
        tech: ["Html", "CSS", "React"],
        img: assets.LMS,
        codeLink: "https://github.com/tharindi22/lms_mern_project",
        viewLink: "#",
      },
    ],
  },
];

const ProjectMore = () => {
  return (
    <div className="grid gap-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-36 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        My <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Here are all my projects along with their details.
      </p>

      {projectData.map((section, index) => (
        <div key={index}>
          <p className="text-slate-600 dark:text-slate-300 text-left mb-6">
            {section.category}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.projects.map((proj, idx) => (
              <div
                key={idx}
                className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-6"
              >
                <div className="h-36 bg-purple-900 relative">
                  <Image
                    src={proj.img}
                    alt="Project Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-indigo-500 dark:text-indigo-400 font-semibold mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-950 dark:bg-indigo-900 bg-opacity-40 text-white dark:text-indigo-300 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={proj.viewLink}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-blue-500 dark:hover:text-indigo-300 transition flex items-center"
                    >
                      View Project
                    </a>
                    <a
                      href={proj.codeLink}
                      className="text-indigo-600 dark:text-indigo-400 hover:text-blue-500 dark:hover:text-blue-300 transition flex items-center gap-2"
                    >
                      <Image src={assets.github} alt="github" className="w-6" />

                      <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
                      />
                      <p>Code</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMore;
