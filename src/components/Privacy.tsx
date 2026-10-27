import React from "react";
import { divisions, type DivisionId } from "../lib/divisions";

interface PrivacyProps {
  variant?: DivisionId;
}

const Privacy: React.FC<PrivacyProps> = ({ variant = "utvikling" }) => {
  const theme = divisions[variant];

  return (
    <section
      id="personvern"
      className="relative overflow-hidden bg-navy-950 py-16 text-white"
      aria-labelledby="privacy-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${theme.accentVia}`}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="privacy-heading"
          className={`mb-4 text-2xl font-bold md:text-3xl ${theme.accentText}`}
        >
          Personvern
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-300">
          <p>
            Tvela AS (Valdresvegen 6, 2900 Fagernes) behandler personopplysninger
            for å svare på henvendelser og levere tjenester. Behandlingsansvarlig
            nås på{" "}
            <a href="mailto:hei@tvela.no" className={theme.accentLink}>
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
