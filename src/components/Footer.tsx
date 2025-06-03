import React from "react";
import { Link } from "./ui/Link";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='bg-navy-950 text-white pt-16 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12'>
          <div className='lg:col-span-2'>
            <div className='flex items-center mb-4'>
              <span className='text-2xl font-bold text-emerald-500'>Tvela</span>
              <span className='ml-1 text-2xl font-bold'>Security</span>
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>
              Beskytt din bedrift mot digitale trusler med vår ekspertise innen cybersikkerhet, 
              etisk hacking og penetrasjonstesting.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors'>
                <span className='sr-only'>LinkedIn</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
                </svg>
              </a>
              <a
                href='https://github.com/Tvela-AS'
                className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors'>
                <span className='sr-only'>GitHub</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-4'>Lenker</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#services'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Tjenester
                </Link>
              </li>
              <li>
                <Link
                  href='#portfolio'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Om Oss
                </Link>
              </li>
              <li>
                <Link
                  href='#testimonials'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Referanser
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-4'>Tjenester</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Penetrasjonstesting
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Sikkerhetsvurdering
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Nettverkssikkerhet
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Kodeanalyse
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-emerald-400 transition-colors'>
                  Sikkerhetsopplæring
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-bold mb-4'>Kontakt</h4>
            <ul className='space-y-2'>
              <li className='text-gray-400'>
                Jernbanevegen 6<br />
                2900, Fagernes
              </li>
              <li className='text-gray-400'>+47 959 61 415</li>
              <li className='text-gray-400'>hei@tvela.no</li>
              <li className='text-gray-400'>24/7 Sikkerhetshotline</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm mb-4 md:mb-0'>
            &copy; 2025 Tvela AS. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className='mt-4 md:mt-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors'
            aria-label='Scroll to top'>
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
