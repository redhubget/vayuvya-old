import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Achievements from "./Achievements";

const Home: React.FC = () => {
  const capabilities = [
    { title: "Indigenous Engine Design", description: "Fully conceptualized and engineered in India to meet global defence standards." },
    { title: "High-Performance Micro Engines", description: "Specialized in small turbine engines with high thrust-to-weight ratios." },
    { title: "Cutting-Edge R&D", description: "In-house research labs with simulation, testing, and rapid prototyping facilities." }
  ];

  const features = [
    { title: "100% Indigenous Technology", description: "Fully developed in India with no foreign dependencies" },
    { title: "Scalable Multi-Domain Solutions", description: "Aerospace, software, and AI technologies" },
    { title: "Designed for Strategic Platforms", description: "Optimized for UAVs, satellites, defence systems" },
    { title: "Lightweight & Efficient", description: "Maximum performance with minimal resource footprint" },
    { title: "Versatile Compatibility", description: "Works with standard systems and formats" },
    { title: "Reliable in Critical Conditions", description: "Built to withstand extreme environments" }
  ];

  return (
    <div className="relative">

      {/* HERO SECTION */}
      <section className="relative min-h-screen mt-[-64px] flex items-center justify-start overflow-hidden">

        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}/test.jpeg')`,
            filter: "brightness(0.35)"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        <div className="relative z-10 w-full px-6 lg:px-12 text-left font-poppins">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-4 tracking-tight">
            Empowering India's Defence with
            <span className="text-blue-400 block mt-2 text-xl sm:text-2xl lg:text-4xl font-light">
              Advanced Technology Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-xl mb-6">
            Made in India, Built for the Future
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/about"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <Achievements />

      {/* INTRO SECTION */}
      <section className="relative py-20 bg-black text-center">
        <h2 className="text-4xl font-light text-white mb-6">
          Advancing India's Technology Future
        </h2>

        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Vayuvya Defence designs and manufactures cutting-edge aerospace,
          software, and AI solutions. Our mission is to power India's future with
          reliable, innovative, and efficient systems.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-20 bg-black/90">
        <h2 className="text-4xl font-light text-center text-white mb-16">
          Our Capabilities
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-8 bg-black/70 border border-gray-700 rounded-xl hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold text-white mb-4">{cap.title}</h3>
              <p className="text-gray-400">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-20 bg-black/95">
        <h2 className="text-4xl font-light text-center text-white mb-16">
          Why Choose Vayuvya Defence?
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-black/70 border border-gray-700 rounded-xl hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
