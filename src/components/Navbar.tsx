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
    { name: "Home", href: "#" },
    { name: "Nyheter & Innsikt", href: "#insights" },
    { name: "Om oss", href: "#about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      aria-label='Hovednavigasjon'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-shrink-0'>
            <a href='#' className='text-2xl font-bold text-white'>
              <img
                src='/img/logo-nobackground-5000.png'
                alt='Tvela AS'
                className='w-60 h-50'
              />
            </a>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-center gap-6 lg:gap-8'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-white transition-colors text-sm'>
                  {item.name}
                </a>
              ))}
              <a
                href='#contact'
                className='bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors'>
                Kontakt oss
              </a>
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white focus:outline-none p-2'
              aria-expanded={isOpen}
              aria-controls='mobile-menu'
              id='mobile-menu-button'>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id='mobile-menu'
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-navy-950/95 backdrop-blur-xl border-b border-white/10`}
        aria-labelledby='mobile-menu-button'>
        <div className='px-4 py-4 space-y-1'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors'
              onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          <a
            href='#contact'
            className='block px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors text-center font-medium'
            onClick={() => setIsOpen(false)}>
            Kontakt oss
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
