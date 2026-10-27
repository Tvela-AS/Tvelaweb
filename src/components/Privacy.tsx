import React from "react";

const Privacy: React.FC = () => {
  return (
    <section
      id="personvern"
      className="py-16 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="privacy-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
        <h2
          id="privacy-heading"
          className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400"
        >
          Personvern
        </h2>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            Tvela AS (Valdresvegen 6, 2900 Fagernes) behandler personopplysninger
            for å svare på henvendelser og levere tjenester. Behandlingsansvarlig
            nås på{" "}
            <a
              href="mailto:hei@tvela.no"
              className="text-emerald-400 hover:text-emerald-300"
            >
              hei@tvela.no
            </a>
            .
          </p>
          <p>
            Kontaktskjemaet sendes via EmailJS. Feltene navn, e-post og melding
            brukes bare til å besvare deg. Vi bruker Vercel Analytics for
            anonymisert trafikkmåling. Vi selger ikke personopplysninger.
          </p>
          <p>
            Du kan be om innsyn, retting eller sletting ved å kontakte oss.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
