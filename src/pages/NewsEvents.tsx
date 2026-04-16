import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 🔥 CHANGE ONLY THIS NUMBER WHEN YOU ADD NEW IMAGES
const totalImages = 9;

const images = Array.from(
  { length: totalImages },
  (_, i) => `/news/${i + 1}.png`
);

export default function News() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="bg-black py-24 min-h-screen">

      <h1 className="text-5xl text-white text-center mb-20 font-light">
        News & Updates
      </h1>

      {/* Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 max-w-7xl mx-auto">

        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img}
              alt={`news-${index}`}
              className="w-full rounded-xl hover:scale-110 transition duration-700"
            />
          </motion.div>
        ))}

      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close overlay */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Image */}
            <motion.img
              key={images[selectedIndex]}
              src={images[selectedIndex]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl z-10 shadow-2xl"
            />

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-5xl z-20 hover:scale-125 transition"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-5xl z-20 hover:scale-125 transition"
            >
              ›
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl z-20 hover:scale-125 transition"
            >
              ✕
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
