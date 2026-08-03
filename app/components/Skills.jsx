import React from "react";
import Image from "next/image";

const Skills = () => {
  const process = [
    {
      number: "01",
      title: "Research",
      text: "Understanding users through research, personas, and user journeys.",
    },
    {
      number: "02",
      title: "Design",
      text: "Creating wireframes, interfaces, and design systems focused on usability.",
    },
    {
      number: "03",
      title: "Prototype",
      text: "Building interactive prototypes and testing experiences before development.",
    },
    {
      number: "04",
      title: "Develop",
      text: "Transforming designs into responsive and scalable digital products.",
    },
  ];

  const tools = [
    {  name: "Figma", icon: "/icons/figma-svgrepo-com - Copy.svg" },
    { name: "Framer", icon: "/icons/framer-2.svg" },
    {  name: "Photoshop", icon: "/icons/adobe-photoshop-2.svg" },
    {  name: "React", icon: "/icons/react-native-1.svg" },
    {  name: "Next.js", icon: "/icons/next-js.svg" },
    {  name: "VS Code", icon: "/icons/visual-studio-code-1.svg" },
    {  name: "GitHub", icon: "/icons/github-icon-1.svg" },
    {  name: "HTML", icon: "/icons/html-1.svg" },
    {  name: "CSS", icon: "/icons/css-3.svg" },
    {  name: "JavaScript", icon: "/icons/javascript-1.svg" },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
         
        </div>

        

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item) => (
            <div
              key={item.number}
              className="
              border-t
              border-gray-900
              pt-5
              "
            >
              <span className="text-indigo-400 text-sm">{item.number}</span>

              <h3 className="text-2xl text-white font-semibold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          

          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="
                flex items-center 
                px-5 py-3
                rounded-md
                text-sm
                border border-gray-900
                bg-gray-800
                gap-2
                "
              >
                <Image src={tool.icon} alt={tool.name} width={25} height={25} />

                <span className="text-gray-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
