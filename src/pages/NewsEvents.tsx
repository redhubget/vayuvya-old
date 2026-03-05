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
      title: "Vayuvya Defence Showcases Revolutionary Micro Jet Engine Technology",
      date: "December 2024",
      location: "Mysuru Big Tech Show",
      description:
        "Our team demonstrated India's first indigenous micro jet engine at the prestigious Mysuru Big Tech Show, attracting significant attention from industry experts and potential partners.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/9e922077-ae7e-4703-aae7-13c51fb9d879.png`,
      category: "Exhibition",
    },
    {
      id: 2,
      title: "Technical Deep Dive: Advanced Propulsion Systems for Defence Applications",
      date: "December 2024",
      location: "Mysuru Big Tech Show",
      description:
        "Engaging discussions with industry professionals about our cutting-edge micro turbine engines and their applications in UAVs and tactical aerospace platforms.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
      category: "Technology",
    },
    {
      id: 3,
      title: "Innovation Spotlight: Gonagoor Tech Partnership",
      date: "December 2024",
      location: "Tech Exhibition",
      description:
        "Highlighting our collaboration with Gonagoor Tech in developing next-generation AI-powered aerospace solutions.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
      category: "Partnership",
    },
    {
      id: 4,
      title: "Industry Recognition: Media Coverage of Our Breakthrough Technologies",
      date: "December 2024",
      location: "Mysuru Event",
      description:
        "Vayuvya Defence receives media coverage for its innovative approach to indigenous defence technology development.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png`,
      category: "Media",
    },
    {
      id: 5,
      title: "Vayuvya Defence MicroJet Engine Announcement",
      date: "December 2025",
      location: "South Park Commons India",
      description:
        "Our MicroJet Engine delivers 4 kN thrust with dual combustion chambers and Jet-A1 fuel. Designed for drones and micro-UAVs.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/Alpha.jpeg`,
      category: "Innovation",
      link: "https://x.com/alpha_defense/status/1999692285362208961",
    },
  {
    id: 6,
    title: "500N Micro Turbojet Engine Unveiled",
    date: "March 2026",
    location: "Vayuvya Defence",
    description:
      "Vayuvya Defence unveiled the next variant in its propulsion roadmap — the 500N Micro Turbojet Engine. Designed for enhanced thrust performance and mission adaptability, the engine delivers 500 N thrust with a high thrust-to-weight ratio and optimized airflow architecture for next-generation UAV platforms.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/Alpha.jpeg`,
    category: "Product Launch",
    link: "https://www.linkedin.com/posts/vayuvya-defence_microturbojet-500n-aerospaceinnovation-activity-7433051595552018433-S_GW",
  },

  {
    id: 7,
    title: "Strategic R&D Collaboration Discussions",
    date: "March 2026",
    location: "Vayuvya Defence Facility",
    description:
      "The Vayuvya Defence team hosted Spacerolls Aerospace for detailed discussions on integrating R&D and design capabilities. The meeting focused on collaborative innovation, technology alignment, and long-term strategic development for future propulsion systems.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
    category: "Collaboration",
    link: "https://www.linkedin.com/posts/vayuvya-defence_innovation-collaboration-rnd-activity-7432380346618314753-tOgh",
  },

  {
    id: 8,
    title: "Indigenous Jet Engine Development Progress",
    date: "February 2026",
    location: "Vayuvya Defence",
    description:
      "As part of its long-term roadmap, Vayuvya Defence announced the progress of its indigenous micro jet engine program. The propulsion system has entered active testing, focusing on thrust stability, thermal behaviour, and system reliability.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png`,
    category: "Engineering",
    link: "https://www.linkedin.com/posts/vayuvya-defence_vayuvyadefence-indigenoustech-aerospaceengineering-activity-7426930018485932032-Jsf1",
  },

  {
    id: 9,
    title: "Strategic Aerospace Partnership Announcement",
    date: "February 2026",
    location: "Bengaluru",
    description:
      "Vayuvya Defence announced a strategic collaboration with Spacerolls Aerospace to integrate their decade-long research in compressor and turbine blade technology into upcoming propulsion systems.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
    category: "Partnership",
    link: "https://www.linkedin.com/posts/vayuvya-defence_vayuvyadefence-aerospace-engineering-activity-7429514197119442945-RqkL",
  },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Exhibition":
        return "bg-blue-600";
      case "Technology":
        return "bg-emerald-600";
      case "Partnership":
        return "bg-purple-600";
      case "Media":
        return "bg-orange-600";
      case "Innovation":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-black text-white font-poppins">

      {/* Hero */}
      <section className="py-24 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-light mb-6">
            News & <span className="text-blue-400">Events</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Updates from Vayuvya Defence including technology showcases,
            exhibitions, partnerships and product milestones.
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

                {/* Link */}
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
