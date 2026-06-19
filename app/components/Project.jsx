import React from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-16">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented unique
          challenges and opportunities for growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Project 1 */}
          <div className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-16">
            <Link href="/ProjectMore" target="BLYSS" className="">
              <Image
                src={assets.commerce}
                className=" object-cover h-60 relative"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4">
                <div>
                  <h2 className="text-2xl text-white font-bold">BLYSS</h2>
                </div>

                <div className="lg:text-right mt-2 lg:mt-0">
                  <h1 className="text-xs text-gray-400">2026</h1>
                </div>
                <p className="text-md text-white">
                  E-commerce Clothing Website
                </p>
              </div>
            </Link>

            {/* ================== start ==================

            <div className="flex items-center gap-4 p-4 pt-2">
              <Link
                href="https://www.figma.com/design/2GLFjGRx4rDWcaEsX8agO6/Smart-Home?node-id=70-143&t=W6RzWBWPOY209Yvq-1"
                target="NexHome"
                className="px-6 py-2 flex-1 flex items-center justify-center gap-3 border border-gray-400 text-gray-400 text-base rounded-lg transition cursor-pointer"
              >
                View Figma Project
                <i className="fas fa-external-link-alt text-xs"></i>
              </Link>
            </div> 

            ================== End  ================== */}
          </div>

          {/* Project 2 */}
          <div className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-16">
            <Link href="/ProjectMore/nexhome" className="">
              <Image
                src={assets.NexHome}
                alt="NexHome Smart Home Dashboard"
                className="object-cover h-60 relative"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4">
                <div>
                  <h2 className="text-2xl text-white font-bold">NexHome</h2>
                </div>

                <div className="lg:text-right mt-2 lg:mt-0">
                  <h1 className="text-xs text-gray-400">2026</h1>
                </div>

                <p className="text-md text-white">Smart Home Web Dashboard</p>
              </div>
            </Link>
          </div>
          {/* Project 3 */}
          <div className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-16">
            <Link href="/ProjectMore/grabber" className="">
              <Image
                src={assets.Food}
                alt="Grabber Mobile Food Ordering App"
                className="object-cover h-60 relative"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4">
                <div>
                  <h2 className="text-2xl text-white font-bold">Grabber</h2>
                </div>

                <div className="lg:text-right mt-2 lg:mt-0">
                  <h1 className="text-xs text-gray-400">2025</h1>
                </div>

                <p className="text-md text-white">Mobile Food Ordering App</p>
              </div>
            </Link>
          </div>

          <div className="project-card bg-gray-900 rounded-xl overflow-hidden shadow-lg mb-16">
            <Link href="/ProjectMore/doctor-appointment-system" className="">
              <Image
                src={assets.Doctor}
                alt="Doctor Appointment System"
                className="object-cover h-60 relative"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4">
                <div>
                  <h2 className="text-2xl text-white font-bold">MediCare</h2>
                </div>

                <div className="lg:text-right mt-2 lg:mt-0">
                  <h1 className="text-xs text-gray-400">2025</h1>
                </div>

                <p className="text-md text-white">Doctor Appointment System</p>
              </div>
            </Link>
          </div>

          {/* 
          Project 4
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.Doctor}
              alt="Doctor Appointment System"
              className="object-cover h-60 relative"
            />
            <h2 className="text-xl text-indigo-700 dark:text-indigo-400 font-semibold p-4">
              Doctor Appointment System
            </h2>
            <div className="flex items-center gap-3 p-4 pt-0">
              <Link
                href="https://react-project-doctor-appoinment-fro.vercel.app/"
                target="_blank"
                className="px-6 py-1 flex-1 flex items-center justify-center gap-3 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer"
              >
                View Project
                <i className="fas fa-external-link-alt text-xs"></i>
              </Link>

              <Link href="https://github.com/tharindi22/React_Project-Doctor-Appoinment--frontend">
                <button className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  <i className="fas fa-code"></i>
                </button>
              </Link>
            </div>
          </div>

          Project 5
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.LMS}
              alt="Learning Management System"
              className="object-cover h-60 relative"
            />
            <h2 className="text-xl text-indigo-700 dark:text-indigo-400 font-semibold p-4">
              Learning Management System
            </h2>
            <div className="flex items-center gap-3 p-4 pt-0">
              <Link
                href=""
                target="_blank"
                className="px-6 py-1 flex-1 flex items-center justify-center gap-3 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer"
              >
                View Project
                <i className="fas fa-external-link-alt text-xs"></i>
              </Link>

              <Link href="https://github.com/tharindi22/lms_mern_project">
                <button className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  <i className="fas fa-code"></i>
                </button>
              </Link>
            </div>
          </div>

          Project 6
          <div className="project-card bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src={assets.Cricket}
              alt="Cricket Booking System"
              className="object-cover h-60 relative"
            />
            <h2 className="text-xl text-indigo-700 dark:text-indigo-400 font-semibold p-4">
              Cricket Booking System
            </h2>
            <div className="flex items-center gap-3 p-4 pt-0">
              <Link
                href=""
                target="_blank"
                className="px-6 py-1 flex-1 flex items-center justify-center gap-3 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer"
              >
                View Project
                <i className="fas fa-external-link-alt text-xs"></i>
              </Link>

              <Link href="">
                <button className="px-3 py-1 border border-indigo-500 text-indigo-500 font-medium rounded-lg transition cursor-pointer">
                  <i className="fas fa-code"></i>
                </button>
              </Link>
            </div>
          </div>
        */}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://www.linkedin.com/in/tharindi-aththanayaka/"
            className="px-6 py-6 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            View All Projects in Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
