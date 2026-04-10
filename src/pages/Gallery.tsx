import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// AUTO-GENERATE 1 → 35
const images = import.meta.glob("/public/gallery/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
});

const galleryImages = Object.values(images);

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

  // Keyboard navigation + lock scroll
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);

    // disable scroll when modal open
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

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
            transition={{ duration: 0.6, delay: index * 0.03 }}
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Image */}
            <motion.img
              key={galleryImages[selectedIndex]}
              src={galleryImages[selectedIndex]}
              className="relative z-10 max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl z-20 hover:scale-125 transition"
            >
              ✕
            </button>

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

          </motion.div>

        )}
      </AnimatePresence>

    </section>
  );
}
