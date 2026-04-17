import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

const Team = () => {

  const leadership = [
    {
      name: "Dhanush D B",
      role: "Co-Founder & CEO",
      image: "/lovable-uploads/39a2fdae-d96c-404c-91b3-c9d798d32f97.png",
      linkedin: "https://www.linkedin.com/in/dhanush-d-b-434485152/",
    },
    {
      name: "Raghavendra",
      role: "Co-Founder & CTO",
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
    {
      name: "Vijay Vittal",
      role: "Embedded Engineer",
      image: "/lovable-uploads/vijay vittal.png",
      linkedin: "#", // add if available
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-[200] mb-6">
          Meet the Team
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Engineers, builders, and visionaries driving indigenous aerospace innovation.
        </p>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20">
        <h2 className="text-3xl text-center mb-16 font-[200]">
          Leadership
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-4xl mx-auto">
          {leadership.map((person, i) => (
            <Card key={i} className="bg-transparent border-none text-center">
              <CardContent>

                <Avatar className="w-40 h-40 mx-auto mb-6">
                  <AvatarImage src={person.image} />
                </Avatar>

                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{person.role}</p>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ADVISORY */}
      <section className="py-20">
        <h2 className="text-3xl text-center mb-16 font-[200]">
          Advisory Board
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {advisors.map((person, i) => (
            <Card key={i} className="bg-transparent border-none text-center">
              <CardContent>

                <Avatar className="w-28 h-28 mx-auto mb-4">
                  <AvatarImage src={person.image} />
                </Avatar>

                <h3 className="text-lg">{person.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{person.role}</p>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ENGINEERING TEAM */}
      <section className="py-20">
        <h2 className="text-3xl text-center mb-16 font-[200]">
          Engineering Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {engineers.map((person, i) => (
            <Card key={i} className="bg-transparent border-none text-center">
              <CardContent>

                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={person.image} />
                </Avatar>

                <h3 className="text-base">{person.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{person.role}</p>

                {person.linkedin !== "#" && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}

              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Team;
