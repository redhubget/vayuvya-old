import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const NewsEvents = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "500N Micro Turbojet Engine Unveiled",
      date: "March 2026",
      location: "Vayuvya Defence",
      description:
        "Vayuvya Defence unveiled the next variant in its propulsion roadmap — the 500N Micro Turbojet Engine. Designed for high thrust-to-weight performance and optimized airflow architecture for next-generation UAV platforms.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/Alpha.jpeg`,
      category: "Product Launch",
      link: "https://www.linkedin.com/posts/vayuvya-defence_microturbojet-500n-aerospaceinnovation-activity-7433051595552018433-S_GW",
    },

    {
      id: 2,
      title: "Strategic R&D Collaboration Discussions",
      date: "March 2026",
      location: "Vayuvya Defence Facility",
      description:
        "The Vayuvya Defence team hosted Spacerolls Aerospace to discuss future collaboration in propulsion R&D, focusing on technology alignment and long-term aerospace innovation.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
      category: "Collaboration",
      link: "https://www.linkedin.com/posts/vayuvya-defence_innovation-collaboration-rnd-activity-7432380346618314753-tOgh",
    },

    {
      id: 3,
      title: "Indigenous Jet Engine Development Progress",
      date: "February 2026",
      location: "Vayuvya Defence",
      description:
        "Progress update on the indigenous micro turbojet engine development program. The engine platform focuses on modular architecture enabling scalable thrust classes for multiple aerospace applications.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png`,
      category: "Engineering",
      link: "https://www.linkedin.com/posts/vayuvya-defence_vayuvyadefence-indigenoustech-aerospaceengineering-activity-7426930018485932032-Jsf1",
    },

    {
      id: 4,
      title: "Strategic Aerospace Partnership Announcement",
      date: "February 2026",
      location: "Bengaluru",
      description:
        "Vayuvya Defence announced a strategic collaboration with Spacerolls Aerospace to integrate advanced compressor and turbine blade technology into next-generation propulsion platforms.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
      category: "Partnership",
      link: "https://www.linkedin.com/posts/vayuvya-defence_vayuvyadefence-aerospace-engineering-activity-7429514197119442945-RqkL",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Product Launch":
        return "bg-blue-600";
      case "Collaboration":
        return "bg-emerald-600";
      case "Engineering":
        return "bg-purple-600";
      case "Partnership":
        return "bg-orange-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-black text-white font-poppins">

      {/* Hero Section */}
      <section className="py-24 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-light mb-6">
            News & <span className="text-blue-400">Events</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Latest updates from Vayuvya Defence including technology
            developments, collaborations, exhibitions, and product milestones.
          </p>

        </div>
      </section>

      {/* News List */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4 space-y-8">

          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-6 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
            >

              {/* Image */}
              <div className="md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">

                {/* Category */}
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full mb-3 text-white ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3 leading-snug">
                  {item.title}
                </h2>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">

                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </span>

                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Read More */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm hover:underline"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default NewsEvents;
