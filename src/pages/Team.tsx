import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  /* =====================
     LEADERSHIP
  ===================== */
  const leadership = [
    {
      name: "Dhanush D B",
      role: "Co-Founder & CEO",
      bio: "Aerospace engineer with expertise in propulsion systems and advanced manufacturing. Leading the vision for indigenous defence technology development.",
      image: "/lovable-uploads/39a2fdae-d96c-404c-91b3-c9d798d32f97.png",
      initials: "DD",
    },
    {
      name: "Raghavendra",
      role: "Co-Founder & CTO",
      bio: "Leads technology strategy, driving innovative and secure aerospace and defense solutions. Focused on turning advanced concepts into practical, high-performance systems.",
      image: "/lovable-uploads/3ad36d1d-996e-499e-9477-efd313c72130.png",
      initials: "RG",
    },
  ];

  /* =====================
     ADVISORY BOARD
  ===================== */
  const advisors = [
    {
      name: "Pruthviraj",
      role: "Strategic Advisor",
      bio: "Industry veteran with extensive experience in defence technology and strategic partnerships. Provides guidance on business development and market expansion.",
      image: "/lovable-uploads/de66633b-c246-4a31-9c0d-273536ff816b.png",
      initials: "PV",
    },
    {
      name: "Ramesh Kumar",
      role: "Technical Advisor",
      bio: "Seasoned expert in aerospace engineering and technology development. Provides valuable insights on technical strategy and innovation.",
      image: "/lovable-uploads/e6b9e2e2-fccc-4e27-81c9-1fbb67e33d1a.png",
      initials: "RM",
    },
    {
      name: "Dr. Allamaprabhu C Yaravintelimath",
      role: "Aerospace Research Advisor",
      bio: "Aerospace educator and researcher specializing in propulsion and CFD applications. Provides expert guidance on aerospace systems and research collaborations.",
      image: "/lovable-uploads/Allamaprabhu.jpeg",
      initials: "AY",
    },
    {
      name: "Nirmalya Dasgupta",
      role: "Aviation Advisor",
      bio: "Veteran aviator and test pilot with 28 years of military experience across 32 aircraft types. Provides expert guidance on aviation safety, aircraft performance, and aerospace innovation.",
      image: "/lovable-uploads/nirmalya.jpeg",
      initials: "ND",
    },
  ];

  /* =====================
     INTERNS
  ===================== */
  const interns = [
    {
      name: "Vijay Vittal",
      role: "Embedded Intern",
      bio: "Embedded systems intern focusing on firmware, RTOS applications, hardware bring-up, and sensor integration for aerospace and defence platforms.",
      image: "/lovable-uploads/vijay vittal.png",
      initials: "VV",
    },
    {
      name: "Irfan Ali",
      role: "Propulsion Intern",
      bio: "Propulsion intern gaining hands-on experience in propulsion testing, analysis, and design support.",
      image: "/lovable-uploads/irfan.jpeg",
      initials: "IA",
    },
    {
      name: "Kalyan Kumar",
      role: "Propulsion Intern",
      bio: "Focused on hands-on learning in aerospace propulsion, contributing to testing and performance assessment.",
      image: "/lovable-uploads/kalyank.png",
      initials: "KK",
    },
    {
      name: "Shalini K V",
      role: "Embedded Intern",
      bio: "Embedded systems intern working on microcontroller-based development, sensor interfacing, and hardware-software integration for defence platforms.",
      image: "/lovable-uploads/sk.jpeg",
      initials: "SK",
    },
  ];

  return (
    <div className="relative">

      {/* =====================
          LEADERSHIP
      ===================== */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, idx) => (
              <Card key={idx} className="bg-black/50 border-gray-700 hover:border-blue-400 transition">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-blue-600 text-2xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          ADVISORY BOARD
      ===================== */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Advisory Board</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, idx) => (
              <Card key={idx} className="bg-black/50 border-gray-700 hover:border-blue-400 transition">
                <CardContent className="p-8 flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={advisor.image} />
                    <AvatarFallback className="bg-blue-600 text-xl">
                      {advisor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">
                      {advisor.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-2">
                      {advisor.role}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {advisor.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          INTERN TEAM
      ===================== */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Intern Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interns.map((intern, idx) => (
              <Card key={idx} className="bg-black/50 border-gray-700 hover:border-blue-400 transition">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-28 h-28 mx-auto mb-6">
                    <AvatarImage src={intern.image} />
                    <AvatarFallback className="bg-blue-600 text-xl">
                      {intern.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {intern.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3">
                    {intern.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {intern.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
