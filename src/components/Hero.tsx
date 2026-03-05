import React from "react";
import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    tag: "Rådgivning",
    title: "Cybersikkerhet som forretningsrisiko",
    body: "Vi hjelper ledelsen å forstå og prioritere risiko – ikke bare teknologi.",
  },
  {
    tag: "Tjenester",
    title: "Drift, sikkerhet og hendelseshåndtering",
    body: "Operativ hjelp til å drifte, beskytte og reagere når noe skjer.",
  },
  {
    tag: "Lisenser",
    title: "Riktig plattform, riktige vilkår",
    body: "Lisensiering fra ledende leverandører, uten unødvendig kompleksitet.",
  },
];

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center"
          id="top"
        >
          <div className="max-w-xl">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-300 text-sm font-medium">
                  Cybersikkerhet · Drift · Skalering
                </span>
              </div>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Din sikkerhet,{" "}
              <span className="text-emerald-400">vår prioritet.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300/90 mb-4 leading-relaxed">
              Den smarte måten å drifte, sikre og skalere virksomheten din – med
              en partner som forstår både risiko, forretning og teknologi.
            </p>
            <p className="text-sm md:text-base text-emerald-300/90 mb-8 leading-relaxed">
              Ledende fagspesialister innen cybersikkerhet, governance og moderne
              IT-drift – for virksomheter som tar sikkerhet på alvor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Ta kontakt
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href="#services"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center border border-white/10 hover:border-white/20"
              >
                Våre tjenester
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            {heroCards.map((card) => (
              <article
                key={card.title}
                className="bg-navy-900/70 border border-white/10 rounded-2xl p-5 shadow-[0_18px_45px_rgba(15,23,42,0.7)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                  {card.tag}
                </p>
                <h2 className="text-base font-semibold text-white mb-1">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-300">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
