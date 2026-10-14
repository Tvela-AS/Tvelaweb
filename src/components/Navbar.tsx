import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Tjenester", href: "#services" },
    { name: "Slik vi jobber", href: "#approach" },
    { name: "Om oss", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      aria-label="Hovedmeny"
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="inline-flex items-center">
            <img
              src="/img/logo-nobackground-5000.png"
              alt="Tvela AS"
              width={240}
              height={80}
              className="h-auto w-44 sm:w-52"
              fetchPriority="high"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-parchment-200/80 hover:text-parchment-50"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-brass-400/40 bg-brass-500/10 px-4 py-2 text-sm font-medium text-brass-200 hover:bg-brass-500/20"
            >
              Fortrolig samtale
            </a>
          </div>

          <button
            type="button"
            className="text-parchment-200 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-b border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
        >
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-parchment-200 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block bg-brass-500 px-3 py-2 text-center font-medium text-ink-950"
              onClick={() => setIsOpen(false)}
            >
              Fortrolig samtale
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
