import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/logo.png"
              alt="Vayuvya Logo"
              className="h-8 object-contain"
            />
            <span className="text-white font-bold text-xl tracking-wide">
              VAYUVYA <span className="text-blue-400">DEFENCE</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 text-white font-poppins">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
            <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white z-[110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <Link onClick={() => setMobileOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMobileOpen(false)} to="/about">About Us</Link>
          <Link onClick={() => setMobileOpen(false)} to="/products">Products</Link>
          <Link onClick={() => setMobileOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navigation;
