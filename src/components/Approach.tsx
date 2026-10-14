import React from "react";
import SectionFrame from "./ui/SectionFrame";

const steps = [
  {
    n: "01",
    title: "Fortrolig avklaring",
    body: "Vi lytter. Vi avklarer om vi er rett partner, og hva saken krever.",
  },
  {
    n: "02",
    title: "Rammer og fullmakt",
    body: "Omfang, roller og skriftlig fullmakt avtales før arbeidet starter.",
  },
  {
    n: "03",
    title: "Gjennomføring",
    body: "Oppdraget utføres diskret, innenfor avtalt ramme og norsk lov.",
  },
  {
    n: "04",
    title: "Fakta til beslutning",
    body: "Du får en tydelig rapport. Funnene er prioriterte. Anbefalingene er konkrete.",
  },
  {
    n: "05",
    title: "Oppfølging",
    body: "Vi blir med videre ved tiltak, ny vurdering eller behov for forklaring.",
  },
];

const Approach: React.FC = () => {
  return (
    <SectionFrame id="approach" labelledBy="approach-heading" className="bg-ink-900">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
            Metode
          </p>
          <h2
            id="approach-heading"
            className="mb-5 text-3xl font-semibold text-parchment-50 md:text-4xl"
          >
            Slik vi jobber
          </h2>
          <p className="max-w-prose text-lg leading-relaxed text-parchment-200/85">
            Få ledd. Tydelige rammer. Ingen unødig støy.
          </p>
        </div>

        <ol className="divide-y divide-white/10 border-y border-white/10">
          {steps.map((step) => (
            <li key={step.n} className="grid grid-cols-[auto_1fr] gap-6 py-6">
              <span className="font-serif text-xl text-brass-400">{step.n}</span>
              <div>
                <h3 className="mb-1 font-serif text-xl text-parchment-50">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-parchment-200/80">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
};

export default Approach;
