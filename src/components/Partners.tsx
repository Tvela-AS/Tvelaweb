import React from "react";

const Partners: React.FC = () => {
  const people = [
    {
      name: "Senior sikkerhetsrådgiver",
      title: "Partner",
      description:
        "Uavhengig rådgiver for ledelse og styrer i kritiske sikkerhetsvalg, med fokus på reell risiko, prioriteringer og gjennomførbare tiltak.",
    },
    {
      name: "Teknisk arkitekt",
      title: "Partner",
      description:
        "Bistår med å designe og implementere sikre og skalerbare plattformer for virksomheter med høye krav til tilgjengelighet og trygghet.",
    },
    {
      name: "GRC- og compliance-rådgiver",
      title: "Partner",
      description:
        "Hjelper virksomheter å omsette rammeverk og reguleringer til praksis – fra NIS2 til interne retningslinjer.",
    },
  ];

  return (
    <section
      className="py-section lg:py-section-lg bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2
            id="partners-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Partnere
          </h2>
          <p className="text-gray-300/90 text-lg leading-relaxed">
            Et lite, spesialisert miljø med tung erfaring fra sikkerhet,
            drift og risikostyring – tilgjengelig når du trenger ærlige råd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {people.map((person) => (
            <article
              key={person.name}
              className="bg-white/[0.04] rounded-2xl border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300 p-8 lg:p-10 flex flex-col"
            >
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/60 to-emerald-400/40 mb-5" />
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {person.name}
                </h3>
                <p className="text-sm text-emerald-300/90 mt-1">{person.title}</p>
              </div>
              <p className="text-sm text-gray-300/90 leading-relaxed flex-1">
                {person.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

