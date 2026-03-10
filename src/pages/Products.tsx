/**
 * Products — listing page for all propulsion systems.
 */

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "4kN Turbojet Engine",
    thrust: "4kN",
    description:
      "High-performance turbojet for medium-range UAV platforms and cruise missile systems. Designed for sustained high-altitude operations.",
    image: "/lovable-uploads/1st.png",
    path: "/products/4kn",
  },
  {
    title: "1.2kN Turbojet Engine",
    thrust: "1.2kN",
    description:
      "Compact, reliable turbojet optimized for tactical drones and loitering munition platforms with extended endurance.",
    image: "/lovable-uploads/2nd.png",
    path: "/products/1-2kn",
  },
  {
    title: "500N Micro Turbojet Engine",
    thrust: "500N",
    description:
      "Ultra-compact micro turbojet for small UAV platforms, target drones, and experimental aerospace research.",
    image: "/lovable-uploads/500.jpeg",
    path: "/products/500n",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Propulsion Systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6"
          >
            Our Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mb-16"
          >
            A complete range of indigenous small gas turbine engines designed
            for unmanned aerial platforms across multiple thrust classes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <ProductCard key={p.path} {...p} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
