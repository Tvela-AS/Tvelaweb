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
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Om Tvela AS
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Vi kombinerer IT-drift, sikkerhet og digital gransking under én
            strukturert og pålitelig partner – uten buzzwords, med tydelig
            metodikk og ansvar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((item, index) => (
            <article
              key={index}
              className="bg-navy-800/50 p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg w-fit mb-4 text-emerald-400">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
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
