import React from "react";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand user needs, project goals, and requirements through research and analysis.",
    },
    {
      num: "02",
      title: "PLAN",
      desc: "Define structure, user flow, and layout before starting design or development.",
    },
    {
      num: "03",
      title: "DESIGN & BUILD",
      desc: "Create UI designs in Figma and develop responsive interfaces using React and Tailwind CSS.",
    },
    {
      num: "04",
      title: "REFINE",
      desc: "Improve UI based on feedback, optimize performance, and ensure a smooth user experience.",
    },
  ];

  return (
    <section id="process" className="py-16 px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How I <span className="gradient-text">Work</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-900 rounded-xl overflow-hidden">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                bg-gray-800 p-6
                border-gray-950
                ${index !== steps.length - 1 ? "lg:border-r" : ""}
                ${index < 2 ? "md:border-b lg:border-b-0" : ""}
              `}
            >
              {/* Number */}
              <p className="text-indigo-400 font-bold mb-6">
                {step.num}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Process;