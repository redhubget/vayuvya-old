import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Concept Phase",
    title: "The Origin",
    desc: "The vision to build an indigenous propulsion system began with first-principle analysis and system-level architecture design focused on scalability and independence.",
  },
  {
    year: "Early Design",
    title: "Physics-Driven Engineering",
    desc: "Initial compressor, combustor, and turbine models were developed from scratch, focusing on aerodynamic loading, pressure ratios, and manufacturable geometries.",
  },
  {
    year: "Simulation & Validation",
    title: "Digital Prototyping",
    desc: "Extensive CFD and thermodynamic simulations were carried out to validate flow behavior, combustion stability, and structural integrity.",
  },
  {
    year: "Prototype Development",
    title: "Hardware Realization",
    desc: "Transition from digital to physical systems with precision manufacturing, subsystem integration, and iterative testing.",
  },
  {
    year: "Assembly Milestone",
    title: "First Engine Assembly",
    desc: "Successful assembly of the complete 4kN-class turbojet prototype, marking a critical milestone in indigenous propulsion development.",
  },
  {
    year: "Ongoing",
    title: "Testing & Evolution",
    desc: "Continuous testing, optimization, and scaling of the platform for multiple defence and aerospace applications.",
  },
];

const Engine4kNStory = () => {
  return (
    <div className="bg-black text-white font-poppins">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-[200] mb-6"
        >
          4kN Turbojet Prototype
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          A journey of engineering, persistence, and indigenous innovation —
          building India's next-generation propulsion system from the ground up.
        </motion.p>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-24 flex justify-center px-6">
        <motion.img
          src="/lovable-uploads/jet.jpg" // 👈 your single image
          alt="4kN Engine"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl max-w-5xl w-full shadow-2xl"
        />
      </section>

      {/* TIMELINE */}
      <section className="py-32 max-w-5xl mx-auto px-6">

        <h2 className="text-4xl text-center mb-20 font-[200]">
          Development Journey
        </h2>

        <div className="relative border-l border-gray-700">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 ml-6"
            >
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2" />

              <p className="text-blue-400 text-sm mb-1">{item.year}</p>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-[200] max-w-3xl mx-auto"
        >
          This is not just an engine.
          <br />
          <span className="text-blue-400">
            It is the foundation of an indigenous propulsion ecosystem.
          </span>
        </motion.h2>
      </section>

    </div>
  );
};

export default Engine4kNStory;
