import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Tvela AS</h3>
            <p className="text-gray-300 mb-4">
              Vi er dedikert til å skape innovative digitale løsninger som driver forretningsutvikling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tvela-AS"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/tvela-as/"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085235652093"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Fullstack Utvikling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Systemutvikling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Webutvikling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Mobilapplikasjoner
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="text-emerald-400 mt-1" size={20} />
                <a
                  href="mailto:hei@tvela.no"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  hei@tvela.no
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-emerald-400 mt-1" size={20} />
                <a
                  href="tel:+47 959 61 415"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  +47 959 61 415
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1" size={20} />
                <span className="text-gray-300">
                  Jernbanevegen 6<br />
                  2900 Fagernes
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Nyhetsbrev</h3>
            <p className="text-gray-300 mb-4">
              Meld deg på vårt nyhetsbrev for å holde deg oppdatert på nyheter og trender innen systemutvikling.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Din e-post"
                className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Meld på
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tvela AS. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Personvern
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Vilkår
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
