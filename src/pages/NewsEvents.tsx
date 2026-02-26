import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        "Engaging discussions with industry professionals about our cutting-edge micro turbine engines and their applications in UAVs, loitering munitions, and tactical aerospace platforms.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/f3a1f760-246b-49e6-bc89-1be9744dcafb.png`,
      category: "Technology",
    },
    {
      id: 3,
      title: "Innovation Spotlight: Gonagoor Tech Partnership",
      date: "December 2024",
      location: "Tech Exhibition",
      description:
        "Highlighting our collaboration with Gonagoor Tech in developing next-generation AI-powered aerospace solutions and showcasing our comprehensive technology portfolio.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/5b01e4a1-3015-43f0-8159-082f39414c11.png`,
      category: "Partnership",
    },
    {
      id: 4,
      title: "Industry Recognition: Media Coverage of Our Breakthrough Technologies",
      date: "December 2024",
      location: "Mysuru Event",
      description:
        "Vayuvya Defence receives extensive media coverage for our innovative approach to indigenous defence technology development and our contribution to Atmanirbhar Bharat.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/1af7ec95-8e51-4d54-8ad0-e73af0686cc1.png`,
      category: "Media",
    },
    {
      id: 5,
      title: "Vayuvya Defence's MicroJet Engine",
      date: "December 2025",
      location: "South Park Commons India",
      description:
        "Vayuvya Defence's MicroJet Engine delivers 4 kN thrust with dual combustion chambers and Jet A1 / Jet-4 fuel. Designed for drones & micro-UAVs, it can be assembled in under 2 mins.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/Alpha.jpeg`,
      category: "Innovation",
      link: "https://x.com/alpha_defense/status/1999692285362208961",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Exhibition":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Technology":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600";
      case "Partnership":
        return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Media":
        return "bg-gradient-to-r from-orange-500 to-orange-600";
      case "Innovation":
        return "bg-gradient-to-r from-red-500 to-red-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="relative font-poppins overflow-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-[200] mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            News & <span className="text-blue-400">Events</span>
          </h1>
          <p className="font-[200] text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with Vayuvya Defence's latest achievements, exhibitions,
            and breakthrough innovations.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="group bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all duration-500 overflow-hidden rounded-3xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.src = `${import.meta.env.BASE_URL}lovable-uploads/lite.png`;
                      img.style.opacity = "0.4";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-t-3xl" />

                  {/* Category */}
                  <div className="absolute top-6 left-6">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium text-white ${getCategoryColor(
                        item.category
                      )} backdrop-blur-md`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="p-8">
                  <div className="flex flex-wrap items-center text-sm text-blue-300/80 mb-4 gap-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {item.location}
                    </div>
                  </div>

                  <CardTitle className="text-white text-[1.4rem] font-semibold leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.description}
                  </p>

                  {item.link && (
                    <div className="mt-6">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 font-medium group/btn relative"
                      >
                        <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all after:duration-300 group-hover/btn:after:w-full">
                          Read more
                        </span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
