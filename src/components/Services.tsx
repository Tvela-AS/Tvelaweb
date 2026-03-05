import React from "react";
import {
  Server,
  Cloud,
  Headphones,
  Layout,
  Shield,
  FileSearch,
} from "lucide-react";

const Services: React.FC = () => {
  const areas = [
    {
      id: "it-drift",
      title: "IT-drift og konsulenttjenester",
      icon: <Server size={24} />,
      items: [
        { label: "Stabil drift", icon: <Server size={18} /> },
        { label: "Rådgivning", icon: <Layout size={18} /> },
        { label: "Infrastruktur", icon: <Layout size={18} /> },
        { label: "Sky", icon: <Cloud size={18} /> },
        { label: "Support", icon: <Headphones size={18} /> },
      ],
    },
    {
      id: "sikkerhet",
      title: "Sikkerhet og nettverk",
      icon: <Shield size={24} />,
      items: [
        { label: "Nettverksarkitektur" },
        { label: "Segmentering" },
        { label: "Brannmur og overvåkning" },
        { label: "Risikovurdering" },
        { label: "Sikkerhetsrevisjon" },
      ],
    },
    {
      id: "gransking",
      title: "Digital gransking og cyberetterforskning",
      icon: <FileSearch size={24} />,
      items: [
        { label: "Intern digital gransking" },
        { label: "Hendelseshåndtering" },
        { label: "Sikring av digitale bevis" },
        { label: "Analyse av mistenkelig aktivitet" },
        { label: "Rapportering og dokumentasjon" },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-section lg:py-section-lg bg-navy-900/80 text-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="text-center mb-20">
          <p className="text-section-label font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Tjenester
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Våre tjenesteområder
          </h2>
          <p className="text-gray-300/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Vi tilbyr strukturert og nøktern leveranse innen IT-drift,
            sikkerhet og digital gransking – uten overdrevne løfter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {areas.map((area) => (
            <article
              key={area.id}
              className="bg-white/[0.04] rounded-2xl border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 lg:p-10 border-b border-white/5">
                <div className="p-3.5 bg-emerald-500/10 rounded-xl w-fit mb-6 text-emerald-400">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                  {area.title}
                </h3>
              </div>
              <ul className="p-8 lg:p-10 space-y-4" role="list">
                {area.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 flex-shrink-0" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
