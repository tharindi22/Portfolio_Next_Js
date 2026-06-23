import React from "react";
import Image from "next/image";

const Skills = () => {
  const uiuxSkills = [
    "User Research",
    "Wireframing",
    "Interactive Prototyping",
    "User Flows",
    "Usability Testing",
    "Responsive Design",
  ];

  const frontendSkills = [
    "React.js Development",
    "Next.js Development",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Component-Based Development",
  ];

  const tools = [
    { name: "Figma", icon: "/icons/figma-svgrepo-com - Copy.svg" },
    { name: "Framer", icon: "/icons/framer-2.svg" },
    { name: "Behance", icon: "/icons/behance-2.svg" },
    { name: "Photoshop", icon: "/icons/adobe-photoshop-2.svg" },
    { name: "Adobe XD", icon: "/icons/adobe-xd-2.svg" },
    { name: "Github", icon: "/icons/github-icon-1.svg" },
    { name: "VS Code", icon: "/icons/visual-studio-code-1.svg" },
    { name: "React", icon: "/icons/react-native-1.svg" },
    { name: "Next.js", icon: "/icons/next-js.svg" },
  ];

  return (
    <section id="skills" className="py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>

        {/* 3 GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* UI UX */}
          <div className="bg-gray-900 rounded-md p-6">
            <h3 className="text-xl font-semibold text-white mb-5">
              UI/UX Design
            </h3>

            <ul className="space-y-3">
              {uiuxSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* FRONTEND */}
          <div className="bg-gray-900 rounded-md p-6">
            <h3 className="text-xl font-semibold text-white mb-5">
              Frontend Development
            </h3>

            <ul className="space-y-3">
              {frontendSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Tools</h3>

            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="
                  flex items-center gap-4
                  px-4 py-3
                  bg-gray-800
                  border border-gray-900
                  rounded-xl
                  text-white
                
                  "
                >
                  {/* Icon Box */}
                  <div
                    className="
                    w-8 h-8
                    flex items-center justify-center
                    rounded-lg
                    bg-gray-800
                    shrink-0
                    "
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
