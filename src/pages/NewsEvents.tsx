import { motion } from "framer-motion";

const newsItems = [
  {
    title: "Vayuvya Defence Engine Development Update",
    date: "March 2026",
    image: "/news/idr1.png",
  },
  {
    title: "Indigenous Micro Turbojet Testing Progress",
    date: "February 2026",
    image: "/news/idr2.png",
  },
  {
    title: "Advancing Indigenous Propulsion Systems",
    date: "January 2026",
    image: "/news/idr3.png",
  },
  {
    title: "R&D Breakthrough in Compact Jet Engines",
    date: "December 2025",
    image: "/news/idr4.png",
  },
  {
    title: "Vayuvya Defence Expands Development Program",
    date: "November 2025",
    image: "/news/idr5.png",
  },
  {
    title: "Indigenous Aerospace Innovation Milestone",
    date: "October 2025",
    image: "/news/idr6.png",
  },
];

export default function News() {
  return (
    <section className="bg-black py-24">

      <h1 className="text-5xl text-white text-center mb-20 font-light">
        News & Updates
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {newsItems.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={news.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <p className="text-gray-400 text-sm mb-2">
                {news.date}
              </p>

              <h3 className="text-white text-lg font-semibold group-hover:text-blue-400 transition">
                {news.title}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
