import React from 'react';
import { Button } from "@/components/ui/button";

const Careers: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyClick = () => {
    scrollToTop();
    window.location.href = 'mailto:propulsion@vayuvya.com';
  };

  const engineeringRoles: string[] = [
    'Propulsion Design Engineer',
    'Combustor & Turbine Aerothermal Analyst',
    'Embedded Control System Developer',
    'CFD/FEA Simulation Specialist'
  ];

  const supportRoles: string[] = [
    'Technical Documentation Engineer',
    'Supply Chain & Manufacturing Manager',
    'Program Management Interns'
  ];

  const benefits: string[] = [
    'Work on indigenous defence technology',
    'Contribute to national innovation goals',
    'Start-up culture with big impact',
    'Fast-paced, collaborative, hands-on R&D'
  ];

  return (
    <div className="relative font-poppins">
      {/* Hero Section */}
      <section
  className="relative min-h-screen"
  style={{
    backgroundImage: "url('/lovable-uploads/aer.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Hero Content: top-left */}
  <div className="absolute top-16 left-8 sm:top-20 sm:left-12 lg:top-24 lg:left-16 max-w-4xl font-poppins">
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[200] mb-2 sm:mb-4 leading-tight tracking-tight text-white">
      Join the Defence Tech <span className="text-blue-400">Revolution</span>
    </h1>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[200] leading-relaxed tracking-tight text-white">
      At Vayuvya Defence, we're not just building engines — we're building the future of Indian aerospace technology
    </p>
  </div>
</section>

      {/* Work With Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Work With Us</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join us in creating cutting-edge propulsion systems that serve our nation and push the 
            boundaries of what's possible. Be part of a team that's making India self-reliant in 
            critical defence technologies.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/20 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Engineering Roles</h3>
              <div className="space-y-4">
                {engineeringRoles.map((role, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-400">•</div>
                    <span className="text-gray-300">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/20 to-black/20 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Support Roles</h3>
              <div className="space-y-4">
                {supportRoles.map((role, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-400">•</div>
                    <span className="text-gray-300">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Internship Program</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We offer 6-month internships for final-year students in mechanical, aerospace, and 
            electronics engineering streams. Gain real-world experience on a product that flies.
          </p>

          <div className="bg-black/50 p-8 rounded-lg border border-gray-700 mt-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Propulsion Engineering</h4>
                <p className="text-sm text-gray-400">Hands-on experience with jet engine design and testing</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Advanced Manufacturing</h4>
                <p className="text-sm text-gray-400">Modern production techniques for aerospace components</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Systems Integration</h4>
                <p className="text-sm text-gray-400">Complete product development lifecycle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Apply Now</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to join the future of Indian aerospace technology?
          </p>

          <div className="bg-black/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
            <p className="text-gray-300 mb-6">
              Send your CV and cover letter to: 
              <span className="text-blue-400 font-semibold"> propulsion@vayuvya.com</span>
            </p>
            <Button 
              onClick={handleApplyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Send Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
