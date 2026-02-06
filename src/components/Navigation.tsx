import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/logo.png"
            alt="Vayuvya Defence"
            className="h-8"
          />
          <span className="text-white font-bold tracking-wide">
            VAYUVYA <span className="text-blue-400">DEFENCE</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition">
              Products <ChevronDown className="w-4 h-4" />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm hover:bg-blue-600"
                >
                  Jet Engines
                </Link>
                <Link
                  to="/male-uav"
                  className="block px-4 py-2 text-sm hover:bg-blue-600"
                >
                  MALE UAV
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-400">
            About Us
          </Link>

          <Link to="/team" className="hover:text-blue-400">
            Team
          </Link>

          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white">

            <button
              className="flex items-center justify-between"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="pl-4 space-y-2 text-sm text-gray-300">
                <Link to="/products" onClick={() => setMobileOpen(false)}>
                  Jet Engines
                </Link>
                <Link to="/male-uav" onClick={() => setMobileOpen(false)}>
                  MALE UAV
                </Link>
              </div>
            )}

            <Link to="/about" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>

            <Link to="/team" onClick={() => setMobileOpen(false)}>
              Team
            </Link>

            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
