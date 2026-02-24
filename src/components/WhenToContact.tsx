import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";

const WhenToContact: React.FC = () => {
  const situations = [
    "Det foreligger mistanke om intern datalekkasje eller misbruk",
    "Det er registrert uvanlig aktivitet i systemer eller nettverk",
    "Det har skjedd brudd på intern IT-policy eller retningslinjer",
    "Bedriften har opplevd en sikkerhetshendelse og trenger kartlegging eller oppfølging",
    "Styret, ledelsen eller HR har behov for ekstern og uavhengig vurdering av IT- eller sikkerhetsforhold",
  ];

  return (
    <section
      id="nar-kontakte"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="when-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
              <AlertCircle size={24} />
            </div>
            <h2
              id="when-heading"
              className="text-3xl md:text-4xl font-bold text-emerald-400"
            >
              Når bør du kontakte oss?
            </h2>
          </div>
          <div className="w-20 h-1 bg-emerald-500 mb-8" />

          <p className="text-gray-300 mb-8 leading-relaxed">
            Det kan være aktuelt å ta kontakt når:
          </p>

          <ul className="space-y-4 mb-10" role="list">
            {situations.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-400 text-sm italic border-l-2 border-emerald-500/50 pl-4">
            Vi tilbyr ikke løsninger på forhånd – vi kartlegger, vurderer og
            anbefaler ut fra situasjonen.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Kontakt oss for en uforpliktende dialog
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhenToContact;
