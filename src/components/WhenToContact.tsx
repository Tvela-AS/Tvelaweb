import React from "react";
import SectionFrame from "./ui/SectionFrame";

const situations = [
  "Styret eller ledelsen vil ha en uavhengig vurdering av IT-sikkerheten.",
  "Dere tar i bruk nye systemer, sky eller leverandører, og vil teste før det går live.",
  "Det er mistanke om intern uredelighet, datamisbruk eller lekkasje.",
  "Advokat eller internrevisjon trenger digital gransking i en pågående sak.",
  "HR står i en personalsak der digitale spor kan være avgjørende.",
  "Et avvik er avdekket, og dere trenger faglig bistand til neste steg.",
];

const WhenToContact: React.FC = () => {
  return (
    <SectionFrame id="when" labelledBy="when-heading" className="bg-ink-950">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
          Tidspunkt
        </p>
        <h2
          id="when-heading"
          className="mb-4 text-3xl font-semibold text-parchment-50 md:text-4xl"
        >
          Når du bør ta kontakt
        </h2>
        <p className="text-lg leading-relaxed text-parchment-200/85">
          Du trenger ikke ha hele bildet. En kort, fortrolig samtale er nok.
        </p>
      </div>

      <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        {situations.map((item, index) => (
          <li
            key={item}
            className="border border-white/10 bg-ink-900/40 p-6 text-[15px] leading-relaxed text-parchment-200/90"
          >
            <span className="mb-3 block font-serif text-sm text-brass-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
};

export default WhenToContact;
