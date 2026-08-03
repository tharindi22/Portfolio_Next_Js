import React from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 lg:columns-2 gap-10">
          
          {/* Project 1 */}
          <div className="break-inside-avoid mb-10 group rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <Link
              href="https://www.behance.net/gallery/253725277/Blyss-E-commerce-Clothing-Website-UIUX-Case-Study"
              target="_blank"
            >
              <div className="overflow-hidden">
                <Image
                  src={assets.Home}
                  alt="BLYSS E-commerce Clothing Website"
                  className="object-cover w-full"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-white font-bold">BLYSS</h2>

                  <h1 className="text-xs text-gray-400">2026</h1>
                </div>

                <p className="text-md text-white">
                  E-commerce Clothing Website
                </p>
              </div>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="break-inside-avoid mb-10 group rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <Link
              href="https://www.behance.net/gallery/253247871/Grabber-Mobile-Food-Ordering-App-UIUX-Case-Study"
              target="_blank"
            >
              <div className="overflow-hidden">
                <Image
                  src={assets.FoodOrder}
                  alt="Grabber Mobile Food Ordering App"
                  className="object-cover w-full"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-white font-bold">Grabber</h2>

                  <h1 className="text-xs text-gray-400">2025</h1>
                </div>

                <p className="text-md text-white">Mobile Food Ordering App</p>
              </div>
            </Link>
          </div>

          {/* Project 3 */}
          <div className="break-inside-avoid mb-10 group rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <Link
              href=""
              target="_blank"
            >
              <div className="overflow-hidden">
                <Image
                  src={assets.SamrtHome}
                  alt="NexHome Smart Home Dashboard"
                  className="object-cover w-full"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-white font-bold">NexHome</h2>

                  <h1 className="text-xs text-gray-400">2026</h1>
                </div>

                <p className="text-md text-white">Smart Home Web Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Project 4 */}
          <div className="break-inside-avoid mb-10 group rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <Link
              href="https://react-project-doctor-appoinment-fro.vercel.app/"
              target="_blank"
            >
              <div className="overflow-hidden">
                <Image
                  src={assets.DoctorAppointment}
                  alt="Doctor Appointment System"
                  className="object-cover w-full"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl text-white font-bold">MediCare</h2>

                  <h1 className="text-xs text-gray-400">2025</h1>
                </div>

                <p className="text-md text-white">Doctor Appointment System</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Button */}

        <div className="text-center mt-12">
          <Link
            href="https://www.linkedin.com/in/tharindi-aththanayaka/"
            className="px-6 py-4 border border-indigo-500 text-indigo-500 font-medium rounded-lg hover:bg-indigo-500 hover:text-white transition"
          >
            View All Projects in Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
