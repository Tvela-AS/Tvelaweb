import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "./ui/Link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sikkerhetstjenester", href: "#services" },
    { name: "Sikkerhetsprosjekter", href: "#portfolio" },
    { name: "Om Oss", href: "#about" },
    { name: "Kundeerfaringer", href: "#testimonials" },
    { name: "Sikkerhetskontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <button onClick={scrollToTop}>
              <span className='text-2xl font-bold text-emerald-600'>Tvela</span>
              <span className='ml-1 text-2xl font-bold text-navy-900'>AS</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-navy-800 hover:text-emerald-600"
                    : "text-navy-700 hover:text-emerald-500"
                }`}>
                {link.name}
              </Link>
            ))}
            {/* <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200'>
              Start her !
            </button> */}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? "text-navy-800 hover:bg-gray-100"
                  : "text-navy-700 hover:bg-white/10"
              }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg'>
            <div className='flex flex-col space-y-2 px-4 py-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='block px-3 py-2 text-navy-800 font-medium hover:bg-gray-100 rounded-md'
                  onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <button
                className='mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200'
                onClick={() => setIsOpen(false)}>
                Start her !
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
