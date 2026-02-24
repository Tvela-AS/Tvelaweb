import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Modal from "./ui/Modal";
import { personvernTekst, vilkarTekst } from "../content/legal";

const Footer: React.FC = () => {
  const [openModal, setOpenModal] = useState<"personvern" | "vilkar" | null>(null);

  return (
    <footer
      className="bg-navy-950 text-white relative overflow-hidden"
      role="contentinfo"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">
              Tvela AS
            </h3>
            <p className="text-gray-300 mb-4">
              IT-drift, sikkerhet og digital gransking for små og mellomstore
              bedrifter. Strukturert, diskret og pålitelig partner for drift,
              beskyttelse og håndtering av kritiske digitale hendelser.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/tvela-as/"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tvela på LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">
              Tjenester
            </h3>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  IT-drift og konsulenttjenester
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Sikkerhet og nettverk
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Digital gransking og cyberetterforskning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">
              Kontakt
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start space-x-3">
                <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="mailto:hei@tvela.no"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  hei@tvela.no
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <a
                  href="tel:+4795961415"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  +47 959 61 415
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">
                  Jernbanevegen 6<br />
                  2900 Fagernes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tvela AS. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-6">
              <button
                type="button"
                onClick={() => setOpenModal("personvern")}
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm cursor-pointer bg-transparent border-none"
              >
                Personvern
              </button>
              <button
                type="button"
                onClick={() => setOpenModal("vilkar")}
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm cursor-pointer bg-transparent border-none"
              >
                Vilkår
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openModal === "personvern"}
        onClose={() => setOpenModal(null)}
        title="Personvernerklæring"
      >
        {personvernTekst}
      </Modal>
      <Modal
        isOpen={openModal === "vilkar"}
        onClose={() => setOpenModal(null)}
        title="Vilkår for bruk"
      >
        {vilkarTekst}
      </Modal>
    </footer>
  );
};

export default Footer;
