import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg",
  "/gallery/10.jpeg",
  "/gallery/12.jpeg",
  "/gallery/13.jpeg",
  "/gallery/14.jpeg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpeg",
  "/gallery/19.jpeg",
  "/gallery/20.jpeg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="bg-black py-24 min-h-screen">

      <h1 className="text-5xl text-white text-center mb-20 font-light">
        Gallery
      </h1>

      {/* Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 max-w-7xl mx-auto">

        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelectedIndex(index)}
          >

            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full rounded-xl hover:scale-110 transition duration-700"
            />

          </motion.div>
        ))}

      </div>

      {/* Image Popup */}
      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Click outside to close */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Image */}
            <motion.img
              key={galleryImages[selectedIndex]}
              src={galleryImages[selectedIndex]}
              className="max-h-[85vh] max-w-[90vw] rounded-xl z-10 shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            />

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-10 text-white text-4xl z-20"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-4xl z-20"
            >
              ›
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
