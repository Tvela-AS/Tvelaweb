import React from "react";

const Licenses: React.FC = () => {
  const partners = [
    {
      name: "Microsoft Security",
      description: "Lisensiering og skybaserte sikkerhetsplattformer.",
      logo: "/img/partners/microsoft.svg",
    },
    {
      name: "Endpoint & EDR",
      description: "Moderne beskyttelse av klienter og servere.",
      logo: "/img/partners/endpoint.svg",
    },
    {
      name: "Identity & Access",
      description: "Styring av identiteter og privilegerte kontoer.",
      logo: "/img/partners/identity.svg",
    },
    {
      name: "Cloud & SaaS",
      description: "Sikker drift av kritiske skyløsninger.",
      logo: "/img/partners/cloud.svg",
    },
  ];

  return (
    <section
      className="py-section lg:py-section-lg bg-navy-900/80 text-white relative overflow-hidden"
      aria-labelledby="licenses-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-section-label font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Lisenser
          </p>
          <h2
            id="licenses-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Våre samarbeids-partnere
          </h2>
          <p className="text-gray-300/90 text-lg leading-relaxed">
            Ekspertkompetanse og lisensiering fra ledende sikkerhetsleverandører
            – slik at mesteparten av budsjettet ditt går til faktisk beskyttelse
            og kompetanse, ikke overprising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white/[0.04] rounded-2xl border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center justify-start h-12">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-10 w-auto object-contain object-left"
                  />
                </div>
                <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-300/90 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Licenses;

