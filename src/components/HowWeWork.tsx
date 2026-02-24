import React from "react";
import { Map, Lock, Search, FileText } from "lucide-react";

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Kartlegging",
      description:
        "Vi avklarer rammer, formål og tilgjengelige data sammen med deg.",
      icon: <Map size={24} />,
    },
    {
      number: "2",
      title: "Sikring",
      description:
        "Når det er relevant, sikres digitale bevis og systemtilstand på en kontrollert måte.",
      icon: <Lock size={24} />,
    },
    {
      number: "3",
      title: "Analyse",
      description:
        "Vi analyserer materialet etter en tydelig metodikk og dokumenterer funn.",
      icon: <Search size={24} />,
    },
    {
      number: "4",
      title: "Rapport og anbefaling",
      description:
        "Du mottar en skriftlig rapport med konklusjoner og anbefalinger, tilpasset mottaker – f.eks. daglig leder, styre, HR eller advokat.",
      icon: <FileText size={24} />,
    },
  ];

  return (
    <section
      id="hvordan-vi-jobber"
      className="py-20 bg-navy-900 text-white relative overflow-hidden"
      aria-labelledby="how-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Hvordan vi jobber
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            En tydelig fire-stegs modell som bygger tillit og gir forutsigbarhet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative bg-navy-800/50 p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-lg">
                  {step.number}
                </span>
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-emerald-500/30" aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
