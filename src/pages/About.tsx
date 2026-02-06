import React from "react";

const About = () => {
  const values = [
    {
      title: "Innovation with Purpose",
      description:
        "Developing cutting-edge technology that serves our nation's strategic objectives.",
    },
    {
      title: "Excellence in Engineering",
      description:
        "Maintaining the highest standards in design, manufacturing, and testing.",
    },
    {
      title: "Strategic National Commitment",
      description:
        "Supporting India's vision of self-reliance in critical defence technologies.",
    },
    {
      title: "Integrity and Collaboration",
      description:
        "Building trusted partnerships with stakeholders across the aerospace ecosystem.",
    },
  ];

  return (
    <div className="relative font-poppins">

      {/* =====================
          HERO
      ===================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <img
              src="/lovable-uploads/round.png"
              alt="Rotating jet engine"
              className="w-[140%] max-w-none opacity-20 animate-[spin_40s_linear_infinite]"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-[200] mb-6 text-white">
            About <span className="text-blue-400">Vayuvya Defence</span>
          </h1>
          <p className="font-[200] text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering indigenous technologies across aerospace, software, and AI
            for India's defence ecosystem
          </p>
        </div>
      </section>

      {/* =====================
          WHO WE ARE
      ===================== */}
      <section className="relative py-20 min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: "url('/lovable-uploads/plane-bg.png.webp')" }}
        ></div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <h2 className="text-4xl font-semibold mb-16 text-white">
            Who We Are
          </h2>
          <div className="text-lg text-white leading-relaxed space-y-6">
            <p>
              Vayuvya Defence is a private defence technology company focused on
              the indigenous development of cutting-edge solutions across
              aerospace, software, and artificial intelligence.
            </p>
            <p>
              Our company was founded with the vision of making India
              self-reliant in critical defence technologies. We specialize in
              designing and manufacturing high-performance micro jet engines,
              satellite propulsion systems, autonomous aerial platforms,
              enterprise software solutions, and responsible AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* =====================
          VISIONARY FOUNDER
      ===================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-indigo-900/10"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="block text-blue-400 tracking-widest uppercase text-sm mb-4">
                Visionary Founder & Scientist
              </span>

              <h2 className="text-4xl font-semibold text-white mb-6">
                Prashanth Raghu
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Prashanth Raghu is the core technologist and foundational
                scientist behind Vayuvya Defence’s propulsion systems.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Between <span className="text-white font-medium">2013 and 2023</span>,
                he worked extensively on the mathematical foundation and
                first-principle models that underpin Vayuvya’s current jet engine
                platforms. His work ensured that the propulsion architecture
                remained fully indigenous, modular, and adaptable — enabling
                scalable deployment across multiple thrust classes.
              </p>

              <p className="text-gray-300 leading-relaxed">
                These foundational models form the backbone of Vayuvya Defence’s
                engine ecosystem today, allowing the engineering team to evolve
                designs rapidly while maintaining performance integrity,
                manufacturability, and strategic independence.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="relative bg-black/40 border border-gray-600/50 rounded-xl p-6 backdrop-blur-md">
                <img
                  src="/lovable-uploads/96b943e9-cb1f-4542-89e9-80f85ad9c037.png"
                  alt="Prashanth Raghu"
                  className="w-full max-w-sm mx-auto rounded-lg grayscale hover:grayscale-0 transition duration-700"
                />
                <div className="text-center mt-6">
                  <h3 className="text-xl font-semibold text-white">
                    Prashanth Raghu
                  </h3>
                  <p className="text-blue-400 font-medium mt-1">
                    Visionary Founder & Scientist
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================
          MISSION & VISION
      ===================== */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-8 rounded-lg border border-gray-600/50">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To provide reliable, innovative, and high-performance technology
              solutions across aerospace, software, and AI that support India's
              defence and space ecosystems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/30 to-black/50 p-8 rounded-lg border border-gray-600/50">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400">
              Our Vision
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be India's leading innovator in defence technologies spanning
              aerospace propulsion, intelligent software systems, and
              responsible AI.
            </p>
          </div>
        </div>
      </section>

      {/* =====================
          CORE VALUES
      ===================== */}
      <section
        className="relative py-20 min-h-screen"
        style={{
          backgroundImage: "url('/images/aero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-16 text-white">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-black/30 p-8 rounded-xl border border-gray-600/50 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          STRATEGIC ALIGNMENT
      ===================== */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-white">
            Strategic Alignment
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Our work aligns with key national defence objectives and institutions
            such as DRDO, ISRO, and GTRE.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["DRDO Partnership", "ISRO Collaboration", "GTRE Alignment"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-6 rounded-lg border border-gray-600/50"
                >
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
