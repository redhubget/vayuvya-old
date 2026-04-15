import React from "react";
import { motion } from "framer-motion";

const specs = [
  { label: "Engine Type", value: "Micro Turbojet" },
  { label: "Max Thrust", value: "250 N" },
  { label: "Max RPM", value: "110,000 RPM" },
  { label: "TSFC", value: "0.160 kg/(N·hr)" },
  { label: "Engine Length", value: "35 cm" },
  { label: "Engine Weight", value: "2.5 kg" },
  { label: "Operating Mach No.", value: "Mach 0.6" },
  { label: "Operating Altitude", value: "Up to 8 km" },  
];

const Engine250N = () => {
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
          250N Micro Turbojet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          Compact, high-performance propulsion system designed for UAVs,
          tactical platforms, and aerospace research applications.
        </motion.p>
      </section>

        {/* ENGINE IMAGE */}
      <section className="py-20 flex justify-center px-6">
        <motion.img
          src="/lovable-uploads/250N.jpeg" // 👈 place in public folder
          alt="250N Engine"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl max-w-4xl w-full shadow-2xl"
        />
      </section>

     {/* TECHNICAL SPECIFICATIONS — 4kN STYLE */}
<section className="py-24 bg-black">
  <div className="max-w-5xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-3xl md:text-4xl text-white font-[200] mb-16 text-center tracking-wide">
      Technical Specifications
    </h2>

    {/* Clean Spec Rows */}
    <div className="space-y-6">

      {specs.map((spec, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex justify-between items-center border-b border-white/10 pb-4"
        >
          <span className="text-gray-400 text-sm">
            {spec.label}
          </span>

          <span className="text-white text-lg font-medium">
            {spec.value}
          </span>
        </motion.div>
      ))}

    </div>

  </div>
</section>

    

      {/* DESCRIPTION */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-300 text-lg leading-relaxed">
          The 250N Micro Turbojet is engineered for applications requiring
          maximum power density within a compact and lightweight architecture.
          Designed using a physics-driven approach, the engine ensures
          performance stability, manufacturability, and adaptability across
          multiple aerospace platforms.
        </p>
      </section>

      

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-[200] mb-6">
          Request Detailed Technical Datasheet
        </h2>

        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg">
          Contact Team
        </button>
      </section>

    </div>
  );
};

export default Engine250N;
