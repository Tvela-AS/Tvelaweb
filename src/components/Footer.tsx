import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import {
  divisionList,
  divisions,
  serviceLinksByDivision,
  type DivisionId,
} from "../lib/divisions";

interface FooterProps {
  variant?: DivisionId;
}

const Footer: React.FC<FooterProps> = ({ variant = "utvikling" }) => {
  const theme = divisions[variant];
  const serviceLinks = serviceLinksByDivision[variant];
  const showFaq = variant === "utvikling";

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme.accentVia}`}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className={`mb-4 text-xl font-bold ${theme.accentText}`}>
              Tvela AS
            </h3>
            <p className="mb-4 text-gray-300">{theme.blurb}</p>
            <p className="mb-4 text-sm text-gray-400">Org.nr. 931 018 701</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tvela-AS"
                className={`text-gray-400 transition-colors ${theme.accentHover}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tvela AS på GitHub"
              >
                <Github size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/tvela-as/"
                className={`text-gray-400 transition-colors ${theme.accentHover}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tvela AS på LinkedIn"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085235652093"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors ${theme.accentHover}`}
                aria-label="Tvela AS på Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`mb-4 text-xl font-bold ${theme.accentText}`}>
              Tjenester
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-gray-300 transition-colors ${theme.accentHover}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`mb-4 text-xl font-bold ${theme.accentText}`}>
              Divisjoner
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`text-gray-300 transition-colors ${theme.accentHover}`}
                >
                  Startsiden
                </Link>
              </li>
              {divisionList.map((division) => (
                <li key={division.id}>
                  <Link
                    to={division.path}
                    className={`text-gray-300 transition-colors ${theme.accentHover}`}
                  >
                    {division.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`mb-4 text-xl font-bold ${theme.accentText}`}>
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail
                  className={`${theme.accentIcon} mt-1`}
                  size={20}
                  aria-hidden="true"
                />
                <a
                  href="mailto:hei@tvela.no"
                  className={`text-gray-300 transition-colors ${theme.accentHover}`}
                >
                  hei@tvela.no
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  className={`${theme.accentIcon} mt-1`}
                  size={20}
                  aria-hidden="true"
                />
                <a
                  href="tel:+4795961415"
                  className={`text-gray-300 transition-colors ${theme.accentHover}`}
                >
                  +47 959 61 415
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  className={`${theme.accentIcon} mt-1`}
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-gray-300">
                  Valdresvegen 6
                  <br />
                  2900 Fagernes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-400 md:mb-0">
              © {new Date().getFullYear()} Tvela AS. Alle rettigheter
              reservert. Org.nr. 931 018 701
            </p>
            <div className="flex space-x-6">
              {showFaq && (
                <a
                  href="#faq"
                  className={`text-sm text-gray-400 transition-colors ${theme.accentHover}`}
                >
                  FAQ
                </a>
              )}
              <a
                href="#personvern"
                className={`text-sm text-gray-400 transition-colors ${theme.accentHover}`}
              >
                Personvern
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
