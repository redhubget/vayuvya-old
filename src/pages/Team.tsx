import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {

  const leadership = [
    {
      name: "Dhanush D B",
      /*role: "Co-Founder & CEO", */
      image: "/lovable-uploads/39a2fdae-d96c-404c-91b3-c9d798d32f97.png",
      linkedin: "https://www.linkedin.com/in/dhanush-d-b-434485152/",
    },
    {
      name: "Raghavendra",
      /*role: "Co-Founder & CTO",*/
      image: "/lovable-uploads/3ad36d1d-996e-499e-9477-efd313c72130.png",
      linkedin: "https://www.linkedin.com/in/raghavendra-g-link/",
    },
  ];

  const advisors = [
     {
      name: "Pruthviraj",
      role: "Strategic Advisor",
      image: "/lovable-uploads/de66633b-c246-4a31-9c0d-273536ff816b.png",
      linkedin: "https://www.linkedin.com/in/dr-pruthviraj-u/",
    },
    {
      name: "Ramesh Kumar",
      role: "Technical Advisor",
      image: "/lovable-uploads/e6b9e2e2-fccc-4e27-81c9-1fbb67e33d1a.png",
    },
    {
      name: "Dr. Allamaprabhu",
      role: "Aerospace Advisor",
      image: "/lovable-uploads/Allamaprabhu.jpeg",
      linkedin: "https://www.linkedin.com/in/allamaprabhu-yaravintelimath/",
    },
    {
      name: "Nirmalya Dasgupta",
      role: "Aviation Advisor",
      image: "/lovable-uploads/nirmalya.jpeg",
      linkedin: "https://www.linkedin.com/in/group-captain-nirmalya-dasgupta-477a621b9/",
    },
  ];

  const engineers = [
        {
      name: "Vijay Vittal",
      role: "Embedded Engineer",
      image: "/lovable-uploads/vijay vittal.png",
    },
    {
      name: "Kalyan Kumar",
      role: "Propulsion Engineer",
      image: "/lovable-uploads/kalyank.png",
      linkedin: "https://www.linkedin.com/in/kalyan-kumar-bellala-08767525a/",
    },
    {
      name: "Irfan Ali",
      role: "Propulsion Engineer",
      image: "/lovable-uploads/irfan.jpeg",
      linkedin: "https://www.linkedin.com/in/irfan-ali-509823320/",
    },
    {
      name: "Shalini K V",
      role: "Embedded Engineer",
      image: "/lovable-uploads/sk.jpeg",
      linkedin: "https://www.linkedin.com/in/shalini-k-v/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
          Meet the Team
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Engineers, builders, and visionaries driving indigenous aerospace innovation.
        </p>
      </section>

      {/* SECTION FUNCTION */}
      {[
        { title: "Leadership", data: leadership, size: "large" },
        { title: "Advisory Board", data: advisors, size: "medium" },
        { title: "Engineering Team", data: engineers, size: "small" },
      ].map((section, idx) => (
        <section key={idx} className="py-20">
          <h2 className="text-3xl text-center mb-16 font-light tracking-wide text-blue-400">
            {section.title}
          </h2>

          <div className={`grid gap-10 max-w-6xl mx-auto px-6 
            ${section.size === "large" ? "md:grid-cols-2" :
              section.size === "medium" ? "md:grid-cols-2" :
              "md:grid-cols-3"}`}>

            {section.data.map((person, i) => (
              <Card
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-md 
                hover:border-blue-500/40 hover:shadow-blue-500/10 
                hover:shadow-lg transition-all duration-300 group text-center rounded-xl"
              >
                <CardContent className="p-8">

                  {/* Avatar */}
                  <Avatar className={`mx-auto mb-6 
                    ${section.size === "large" ? "w-40 h-40" :
                      section.size === "medium" ? "w-32 h-32" :
                      "w-24 h-24"}`}>
                    <AvatarImage src={person.image} />
                  </Avatar>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition">
                    {person.name}
                  </h3>

                  {/* Role */}
                  <p className="text-gray-400 text-sm mb-4">
                    {person.role}
                  </p>

                  {/* LinkedIn */}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}

                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

    </div>
  );
};

export default Team;
