import React from "react";
import { Link } from "react-router-dom";
import { divisions, type DivisionId } from "../lib/divisions";

const faqs = [
  {
    q: "Hva leverer Tvela AS?",
    a: "Tvela AS er et IT-selskap med fire divisjoner: Utvikling (system, web, apper, innhold og innholdshåndtering), Nettverk (bedriftsnett, Wi-Fi og infrastruktur), Sikkerhet (IT-sikkerhet, testing og gransking) og Konsulent (rådgivning og prosjektbistand). Kontor i Fagernes, kunder i hele Norge.",
  },
  {
    q: "Hva er systemutvikling?",
    a: "Systemutvikling er å designe og bygge programvare som støtter arbeidsflyt og forretning – for eksempel kundeportaler, interne verktøy, integrasjoner og databaser. Tvela AS leverer systemutvikling til bedrifter i hele Norge.",
  },
  {
    q: "Hva er webutvikling?",
    a: "Webutvikling er å lage nettsider og webapplikasjoner som fungerer i nettleseren. Vi bygger moderne, raske og søkemotorvennlige løsninger – fra bedriftsnettside til mer avanserte webapper.",
  },
  {
    q: "Leverer dere også innhold og innholdshåndtering?",
    a: "Ja. Under Tvela Utvikling leverer vi innholdsproduksjon (foto, video og design) og innholdshåndtering (annonsering og løpende oppfølging), slik at nettsider og systemer henger sammen med innholdet som publiseres.",
  },
  {
    q: "Leverer dere webutvikling og systemutvikling i hele Norge?",
    a: "Ja. Vi har kontor i Fagernes i Valdres, og jobber med kunder over hele landet. Utvikling, møter og oppfølging kan gjøres digitalt, slik at geografisk avstand ikke er et hinder.",
  },
  {
    q: "Hva koster webutvikling eller et system?",
    a: "Prisen avhenger av omfang, integrasjoner og om det er en nettside, en app eller et skreddersydd system. Vi gir et konkret tilbud etter en kort avklaring. Ta kontakt, så ser vi på behovet sammen.",
  },
  {
    q: "Lager dere også apper og fullstack-løsninger?",
    a: "Ja. Vi leverer fullstack utvikling: webutvikling, systemutvikling, mobilapplikasjoner, sky og database – og kan ta ansvar for både frontend, backend og innhold.",
  },
];

interface FaqProps {
  variant?: DivisionId;
}

const Faq: React.FC<FaqProps> = ({ variant = "utvikling" }) => {
  const theme = divisions[variant];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-navy-950 py-20 text-white"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme.accentVia}`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme.accentVia}`}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="faq-heading"
            className={`mb-4 text-3xl font-bold md:text-4xl ${theme.accentText}`}
          >
            Ofte stilte spørsmål
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Kort om Tvela AS, systemutvikling, webutvikling, innhold og hvordan
            vi jobber med kunder i Norge. Se også{" "}
            <Link to="/nettverk" className={theme.accentLink}>
              Nettverk
            </Link>
            ,{" "}
            <Link to="/sikkerhet" className={theme.accentLink}>
              Sikkerhet
            </Link>{" "}
            og{" "}
            <Link to="/konsulent" className={theme.accentLink}>
              Konsulent
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className={`group rounded-xl border border-white/10 bg-navy-800/50 p-6 ${theme.accentOpen}`}
            >
              <summary className="cursor-pointer list-none font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 leading-relaxed text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
