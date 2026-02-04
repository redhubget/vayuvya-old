import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Specification {
  label: string;
  value: string;
}

interface Product {
  name: string;
  overview: string;
  image: string;
  specifications: Specification[];
  applications: string[];
}

const Products: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ⭐ ADDED — Hash Scroll Logic
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

  const products: Product[] = [
    {
      name: "TR-MK1",
      overview:
        "The TRJ-M1 is a compact turbojet engine delivering 4kN thrust. It is designed for tactical UAVs, target drones, and experimental air vehicles. The engine features a lightweight construction, electric start system, and Digital Electronic Engine Controller (DEEC) to ensure reliable performance across missions. With a design life exceeding 20 operational hours, it offers high efficiency, minimal maintenance, and adaptability for various aerospace applications.",
      image: "/lovable-uploads/jet.jpeg",
      specifications: [
        { label: "Thrust", value: "4 kN" },
        { label: "Dry Weight", value: "20 kg" },
        { label: "Fuel Type", value: "Jet-A1 / Aviation Kerosene" },
        { label: "Design Life", value: "4-6 operational hours" },
        { label: "Start Mechanism", value: "Electric start system" },
        { label: "Control System", value: "Digital Electronic Engine Controller (DEEC)" },
      ],
      applications: ["Tactical UAVs", "Cruise Missiles", "Target Drones", "Experimental Air Vehicles"],
    },
    {
      name: "TR-MK2",
      overview:
        "The TRJ-MK2 is an upgraded micro turbojet engine delivering 1.2kN thrust. It incorporates advanced DEEC with AI optimization to enhance performance and fuel efficiency. Designed for long-range missiles, tactical UAVs, and target drones, the engine ensures consistent thrust, durability, and precise control. With a design life exceeding 25 operational hours, the TRJ-M1P combines reliability, high thrust-to-weight ratio, and cutting-edge engine management for demanding aerospace applications.",
      image: "/lovable-uploads/1st.png",
      specifications: [
        { label: "Thrust", value: "1.2K N" },
        { label: "Dry Weight", value: "9 kg" },
        { label: "Fuel Type", value: "Jet-A1 / Aviation Kerosene" },
        { label: "Design Life", value: "3 operational hours" },
        { label: "Start Mechanism", value: "Electric start system" },
        { label: "Control System", value: "Advanced DEEC with AI Optimization" },
      ],
      applications: ["Tactical UAVs", "Long-Range Missiles", "Target Drones", "Experimental Air Vehicles"],
    },
    {
 name: "TRJ-MK3",
      overview:
        "The TRJ-MK3 is an upgraded micro turbojet engine delivering 500N thrust. It incorporates advanced DEEC with AI optimization to enhance performance and fuel efficiency. Designed for long-range missiles, tactical UAVs, and target drones, the engine ensures consistent thrust, durability, and precise control. With a design life exceeding 25 operational hours, the TRJ-M1P combines reliability, high thrust-to-weight ratio, and cutting-edge engine management for demanding aerospace applications.",
      image: "/lovable-uploads/2nd.png",
      specifications: [
        { label: "Thrust", value: "500 N" },
        { label: "Dry Weight", value: "4.5 kg" },
        { label: "Fuel Type", value: "Jet-A1 / Aviation Kerosene" },
        { label: "Design Life", value: "1-2 operational hours" },
        { label: "Start Mechanism", value: "Electric start system" },
        { label: "Control System", value: "Advanced DEEC with AI Optimization" },
      ],
      applications: ["Tactical UAVs", "Long-Range Missiles", "Target Drones", "Experimental Air Vehicles"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % products.length),
      10000 // 10 seconds
    );
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/engine-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-blue-400">Products</span>
          </h1>
          <p className="text-md md:text-xl text-gray-200">
            Advanced micro jet engines engineered for tactical aerospace applications
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="min-w-full px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                  {product.name}
                </h2>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">
                      Product Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {product.overview}
                    </p>
                  </div>
                  <div className="flex-1 text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* (Remaining code exactly same...) */}

      {/* Specifications & Applications */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
              Key Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products[currentIndex].specifications.map((spec, i) => (
                <div
                  key={i}
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600"
                >
                  <div className="text-blue-400 font-semibold">{spec.label}</div>
                  <div className="text-white font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
              Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products[currentIndex].applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-gray-700 p-4 rounded-lg text-center border border-gray-600 text-blue-400 font-semibold"
                >
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Datasheet & Demo */}
      <section className="py-20 bg-black px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-lg border border-gray-700 text-center bg-gradient-to-br from-blue-900/20 to-gray-900/20">
            <h3 className="text-xl font-semibold mb-4">Technical Datasheet</h3>
            <p className="text-gray-300 mb-6">
              Download detailed specifications and performance data
            </p>
            <Button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Request Datasheet
            </Button>
          </div>

          <div className="p-8 rounded-lg border border-gray-700 text-center bg-gradient-to-br from-gray-900/20 to-black/20">
            <h3 className="text-xl font-semibold mb-4">Schedule Demo</h3>
            <p className="text-gray-300 mb-6">
              Arrange a demonstration or technical discussion
            </p>
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg font-semibold"
            >
              Schedule Discussion
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
