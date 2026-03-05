import React from "react";
import { Shield, FileCheck, Lock } from "lucide-react";

const About: React.FC = () => {
  const pillars = [
    {
      icon: <Shield size={24} />,
      title: "Erfaring innen sikkerhet og gransking",
      description:
        "Tvela AS har lang erfaring med IT-drift, sikkerhet og digital gransking. Vi jobber metodisk og strukturert, med fokus på at oppdrag gjennomføres på en forutsigbar og ansvarlig måte.",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Struktur, metodikk og ansvarlighet",
      description:
        "Vi setter tydelige rammer for hvordan vi kartlegger, sikrer, analyserer og rapporterer. Diskresjon og profesjonell håndtering av sensitive saker er en naturlig del av vår arbeidsmåte.",
    },
    {
      icon: <Lock size={24} />,
      title: "Rettet mot ledelse og fagfolk",
      description:
        "Vi retter oss mot bedrifter, ledere, styre og advokater som trenger en pålitelig partner når det gjelder IT, sikkerhet eller innsyn i digitale forhold.",
    },
  ];

  return (
    <section
      id="about"
      className="py-section lg:py-section-lg bg-navy-900/80 text-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-section-label font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Om oss
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Hvem vi er
          </h2>
          <p className="text-gray-300/90 text-lg leading-relaxed">
            Vi er et fagmiljø innen IT-drift, cybersikkerhet og digital
            gransking. Vi rådgir ledere, styrer og fagmiljøer som trenger en
            ærlig og strukturert partner når sikkerhet og teknologi blir
            forretningskritisk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-5xl mx-auto">
          {pillars.map((item, index) => (
            <article
              key={index}
              className="bg-white/[0.04] p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="p-3.5 bg-emerald-500/10 rounded-xl w-fit mb-6 text-emerald-400">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-300/90 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
