import React from "react";

const faqs = [
  {
    q: "Hva er systemutvikling?",
    a: "Systemutvikling er å designe og bygge programvare som støtter arbeidsflyt og forretning – for eksempel kundeportaler, interne verktøy, integrasjoner og databaser. Tvela AS leverer systemutvikling til bedrifter i hele Norge.",
  },
  {
    q: "Hva er webutvikling?",
    a: "Webutvikling er å lage nettsider og webapplikasjoner som fungerer i nettleseren. Vi bygger moderne, raske og søkemotorvennlige løsninger – fra bedriftsnettside til mer avanserte webapper.",
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

const Faq: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Ofte stilte spørsmål
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kort om systemutvikling, webutvikling og hvordan vi jobber med
            kunder i Norge.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/10 bg-navy-800/50 p-6 open:border-emerald-500/40"
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
