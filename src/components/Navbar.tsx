import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { divisions, type DivisionId } from "../lib/divisions";

interface NavbarProps {
  variant?: DivisionId;
}

const ctaLabels: Record<DivisionId, string> = {
  utvikling: "Start Prosjekt",
  sikkerhet: "Fortrolig samtale",
  nettverk: "Ta kontakt",
  konsulent: "Book en prat",
};

const Navbar: React.FC<NavbarProps> = ({ variant = "utvikling" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = divisions[variant];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems =
    variant === "utvikling"
      ? [
          { name: "Hjem", href: "#top" },
          { name: "Tjenester", href: "#services" },
          { name: "Produkter", href: "#products" },
          { name: "Prosjekter", href: "#portfolio" },
          { name: "Om Oss", href: "#about" },
          { name: "Kontakt", href: "#contact" },
        ]
      : [
          { name: "Hjem", href: "#top" },
          { name: "Tjenester", href: "#services" },
          { name: "Om Oss", href: "#about" },
          { name: "Kontakt", href: "#contact" },
        ];

  return (
    <nav
      aria-label="Hovedmeny"
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center gap-4">
            <Link to="/" className="inline-block" aria-label="Tilbake til startsiden">
              <img
                src="/img/logo-nobackground-5000.png"
                alt={theme.title}
                width={240}
                height={80}
                className="h-auto w-52 sm:w-60"
                fetchPriority="high"
              />
            </Link>
            <span
              className={`hidden rounded-full border px-3 py-1 text-xs font-medium sm:inline-block ${theme.badgeBorder}`}
            >
              {theme.label}
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`${theme.ctaClass} rounded-full px-4 py-2 transition-colors`}
              >
                {ctaLabels[variant]}
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-b border-white/10 bg-navy-950/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Alle divisjoner
            </Link>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`block rounded-md px-3 py-2 transition-colors ${theme.ctaClass}`}
              onClick={() => setIsOpen(false)}
            >
              {ctaLabels[variant]}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
