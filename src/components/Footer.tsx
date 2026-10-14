import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-parchment-200">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-serif text-xl text-parchment-50">Tvela AS</h3>
            <p className="mb-6 max-w-sm leading-relaxed text-parchment-400">
              Diskret IT-sikkerhet, digital gransking og privatetterforskning –
              fra Fagernes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Tvela-AS"
                className="text-parchment-400 hover:text-brass-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tvela AS på GitHub"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/tvela-as/"
                className="text-parchment-400 hover:text-brass-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tvela AS på LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-xl text-parchment-50">Tjenester</h3>
            <ul className="space-y-2">
              {[
                "IT-sikkerhet",
                "Ethical hacking",
                "Digital gransking",
                "Privatetterforskning",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-brass-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-xl text-parchment-50">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 text-brass-400" aria-hidden="true" />
                <a href="mailto:hei@tvela.no" className="hover:text-brass-300">
                  hei@tvela.no
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 text-brass-400" aria-hidden="true" />
                <a href="tel:+4795961415" className="hover:text-brass-300">
                  +47 959 61 415
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 text-brass-400" aria-hidden="true" />
                <span>
                  Valdresvegen 6
                  <br />
                  2900 Fagernes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-sm text-parchment-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Tvela AS. Alle rettigheter reservert.</p>
          <a href="#personvern" className="hover:text-brass-300">
            Personvern
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
