import { motion } from "framer-motion";

const news = [
  {
    title: "Indigenous Turbojet Engine Development Milestone",
    image: "/news/idr1.png",
    date: "March 2026",
  },
  {
    title: "Vayuvya Defence Advances UAV Propulsion Systems",
    image: "/news/idr2.png",
    date: "February 2026",
  },
  {
    title: "Compact Gas Turbine Engine Testing Update",
    image: "/news/idr3.png",
    date: "January 2026",
  },
  {
    title: "Advancing Indigenous Aerospace Propulsion",
    image: "/news/idr4.png",
    date: "December 2025",
  },
  {
    title: "Vayuvya Expands R&D Capabilities",
    image: "/news/idr5.png",
    date: "November 2025",
  },
  {
    title: "Micro Turbojet Engine Prototype Progress",
    image: "/news/idr6.png",
    date: "October 2025",
  },
];

export default function News() {
  return (
    <section className="bg-black text-white py-24">

      <h1 className="text-5xl font-light text-center mb-20">
        News & Updates
      </h1>

      <div className="max-w-7xl mx-auto px-6">

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 group cursor-pointer"
        >
          <div className="overflow-hidden rounded-xl">

            <img
              src={news[0].image}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />

          </div>

          <div className="mt-6">
            <p className="text-gray-400 text-sm mb-2">
              {news[0].date}
            </p>

            <h2 className="text-3xl font-semibold group-hover:text-blue-400 transition">
              {news[0].title}
            </h2>
          </div>
        </motion.div>


        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {news.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden rounded-xl">

                <img
                  src={item.image}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="mt-4">

                <p className="text-gray-400 text-sm mb-1">
                  {item.date}
                </p>

                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
