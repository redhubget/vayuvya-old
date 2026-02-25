import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Space-like background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated stars */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-32 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-24 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-32 left-48 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-40 left-28 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-48 left-44 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
          <div className="absolute top-56 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-2500"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              VAYUVYA <span className="text-blue-400 ml-2">DEFENCE</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Advancing aerospace, software, and AI technologies for India's defence ecosystem.
              Empowering the future of tactical aerospace platforms.
            </p>
            <div className="text-gray-400 space-y-1">
              <p>Bangalore, India</p>
              <p>+91-7019561885</p>
              <p>info@vayuvya.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" onClick={scrollToTop} className="block text-gray-400 hover:text-white">
                About Us
              </Link>
              <Link to="/team" onClick={scrollToTop} className="block text-gray-400 hover:text-white">
                Team
              </Link>
              <Link to="/products" onClick={scrollToTop} className="block text-gray-400 hover:text-white">
                Products
              </Link>
              <Link to="/careers" onClick={scrollToTop} className="block text-gray-400 hover:text-white">
                Careers
              </Link>
              <Link to="/contact" onClick={scrollToTop} className="block text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <div className="space-y-2 text-gray-400">

              {/* Micro Jet Engines */}
              <Link
                to="/products#engine"
                onClick={scrollToTop}
                className="block hover:text-blue-400 transition"
              >
                Micro Jet Engines
              </Link>

              {/* UAV Systems */}
              <Link
  to="/male-uav" // route path
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // scroll to top
  className="block hover:text-blue-400 transition"
>
  UAV Systems
</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Vayuvya Raksha Systems Pvt. Ltd. All rights reserved. | Supporting Atmanirbhar Bharat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
