import React from "react";
import { FileCheck, Lock, Shield } from "lucide-react";
import SectionFrame from "./ui/SectionFrame";

const pillars = [
  {
    icon: <Lock size={22} />,
    title: "Diskresjon",
    body: "Henvendelser og funn stanser hos oss. Fortrolighet er en forutsetning, ikke et tillegg.",
  },
  {
    icon: <Shield size={22} />,
    title: "Kompetanse",
    body: "Vi kombinerer IT-sikkerhet, gransking og etterforskning. Du får ett kontaktpunkt og et klart svar.",
  },
  {
    icon: <FileCheck size={22} />,
    title: "Etterrettelighet",
    body: "Vi bruker kun lovlige metoder og avtalt fullmakt. Det vi leverer, skal tåle dagslys.",
  },
];

const About: React.FC = () => {
  return (
    <SectionFrame id="about" labelledBy="about-heading" className="bg-ink-900">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
            Firma
          </p>
          <h2
            id="about-heading"
            className="mb-6 text-3xl font-semibold text-parchment-50 md:text-4xl"
          >
            Om Tvela AS
          </h2>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-parchment-200/85">
            <p>
              Tvela AS ble etablert i 2021 og har kontor i Valdresvegen 6 i
              Fagernes. Vi bistår virksomheter i Valdres og resten av landet
              med IT-sikkerhet, autorisert sikkerhetstesting, digital gransking
              og privatetterforskning.
            </p>
            <p>
              Vi jobber med ledere, styrer, HR-ansvarlige og advokater.
              Oppdragene er fortrolige. Vi leverer fakta og anbefalinger som
              tåler etterprøving. Målet er kontroll og avklaring.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border border-white/10 bg-ink-950/50 p-6"
            >
              <div className="mb-3 inline-flex text-brass-300" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3 className="mb-2 font-serif text-xl text-parchment-50">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-parchment-200/80">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
};

export default About;
