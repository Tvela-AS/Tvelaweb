import React from "react";
import SectionFrame from "./ui/SectionFrame";

const Privacy: React.FC = () => {
  return (
    <SectionFrame id="personvern" labelledBy="privacy-heading" className="bg-ink-900">
      <div className="mx-auto max-w-3xl">
        <h2
          id="privacy-heading"
          className="mb-6 text-2xl font-semibold text-parchment-50 md:text-3xl"
        >
          Personvern
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-parchment-200/80">
          <p>
            Tvela AS (Valdresvegen 6, 2900 Fagernes) er behandlingsansvarlig. Vi
            behandler personopplysninger for å svare på henvendelser og
            gjennomføre oppdrag innen IT-sikkerhet, sikkerhetstesting, digital
            gransking og privatetterforskning. Behandlingsansvarlig nås på{" "}
            <a href="mailto:hei@tvela.no" className="text-brass-300 hover:text-brass-200">
              hei@tvela.no
            </a>
            .
          </p>
          <p>
            Henvendelser via kontaktskjemaet sendes via EmailJS. Navn, e-post og
            melding brukes kun for å besvare deg. Oppdragsdata, også
            opplysninger som fremkommer i gransking og etterforskning, behandles
            fortrolig. Tilgangen er begrenset. Opplysningene brukes bare til det
            formålet oppdraget krever. Vi bruker Vercel Analytics for
            anonymisert trafikkmåling. Vi selger ikke personopplysninger. Vi
            bruker ikke oppdragsdata til markedsføring.
          </p>
          <p>
            Du kan be om innsyn, retting eller sletting. I visse saker kan
            retten til sletting være begrenset av lov, dokumentasjonsplikt eller
            pågående prosess. Ta kontakt, så avklarer vi det.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};

export default Privacy;
