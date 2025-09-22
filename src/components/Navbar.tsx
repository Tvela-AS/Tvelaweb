import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Hjem", href: "#" },
    { name: "Sikkerhetstjenester", href: "#services" },
    { name: "Sikkerhetsprosjekter", href: "#portfolio" },
    { name: "Om Oss", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              <img src="/img/logo-nobackground-5000.png" alt="Tvela Logo" className="w-60 h-50" />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors"
              >
                Få Sikkerhetsvurdering
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Få Sikkerhetsvurdering
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
