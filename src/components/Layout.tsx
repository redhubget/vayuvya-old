import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { X, Menu, ChevronDown } from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      dropdown: [
        { label: "Company Overview", href: "/about" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "Jet Engines", href: "/products" },
        { label: "M.A.L.E UAV", href: "/male-uav" },
      ],
    },
    { label: "News & Events", href: "/news-events" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/logo.png" className="h-8" />
            <span className="font-bold tracking-wide">
              VAYUVYA <span className="text-blue-400">DEFENCE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-1 hover:text-blue-400"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="flex flex-col px-6 py-4 space-y-4">

              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {!link.dropdown ? (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.label ? null : link.label
                          )
                        }
                        className="flex w-full justify-between py-2"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdown === link.label && (
                        <div className="pl-4 space-y-2 text-sm text-gray-300">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

